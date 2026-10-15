import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '../../components/Badge';

const stack = ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'Neon', 'GitHub Actions', 'Docker', 'Fly.io'];

export default function CronbellPost() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Head>
          <title>Building Cronbell (formerly PulseCheck) | Shivam Omer</title>
          <meta
            name="description"
            content="How and why I built Cronbell (formerly PulseCheck), a dead-man's-switch monitoring service for cron jobs — the architecture, why GitHub's scheduler wasn't reliable enough on its own, and what shipped since: webhook alerts, status pages, and a 52-test suite."
          />
          <link rel="canonical" href="https://shivam-portfolio-gold-omega.vercel.app/blog/cronbell" />
        </Head>

        <article className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-400">
            ← Back to Blog
          </Link>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
            Case Study
          </p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
            Building Cronbell: a dead-man’s-switch monitor for cron jobs
          </h1>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            August 2026 · updated October 2026 · 8 min read
          </p>

          <div className="prose-content mt-10 space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              Most monitoring answers “is this thing throwing errors?” That’s the wrong question for a huge class of
              backend work — cron jobs, scheduled ETL runs, nightly backups, batch report generators. Those jobs don’t
              usually crash loudly. They just quietly stop running: a server reboots and the cron entry never comes
              back, a dependency changes and the script silently no-ops, a deploy overwrites the schedule. Nothing
              throws an exception anywhere, because nothing runs at all — and that’s exactly the kind of failure that
              goes unnoticed until someone asks where last week’s report is.
            </p>

            <p>
              I built <strong>Cronbell</strong> — called PulseCheck until I renamed it in October — to catch that class
              of failure specifically. It’s live as a free demo, not a toy project, and the code is at{' '}
              <a
                href="https://github.com/shane-Coder/cronbell"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                github.com/shane-Coder/cronbell
              </a>
              .
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">The idea: a dead man’s switch</h2>
            <p>
              The model borrows directly from dead-man’s-switch design in safety-critical systems: instead of waiting
              for a failure signal, you wait for the absence of a success signal. Every monitor in Cronbell gets a
              unique ping URL. You add one line to the end of your cron job —{' '}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-base dark:bg-zinc-800">
                curl https://pulsecheck-shivam.fly.dev/ping/&lt;id&gt;
              </code>{' '}
              — and Cronbell expects that ping on a schedule you define. If the ping doesn’t arrive within the
              expected window, Cronbell assumes the job didn’t run and sends an alert. No ping ever needs to report
              success explicitly; showing up on time <em>is</em> the success signal.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Architecture</h2>
            <p>
              The whole point of a monitoring tool is that it has to be more reliable than the thing it’s watching, so
              I deliberately kept the first design boring and split into separately deployable pieces rather than one
              monolith:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Web service</strong> (FastAPI) — auth, the dashboard, and the ping-ingest endpoint.</li>
              <li><strong>Worker</strong> (Celery) — sends the actual alert emails asynchronously, off the request path.</li>
              <li><strong>Scheduler</strong> (Celery Beat) — periodically scans for monitors whose expected ping window has elapsed.</li>
              <li><strong>PostgreSQL</strong> — monitors, users, and ping history via SQLAlchemy models.</li>
              <li><strong>Redis</strong> — the broker between the web service, worker, and scheduler.</li>
            </ul>
            <p>
              Five containers, each independently scalable. That was the v1 design, meant to move cleanly from Docker
              Compose on a single box up to Kubernetes without a rewrite. It didn’t stay five containers for long.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              The pivot: dropping the always-on worker
            </h2>
            <p>
              The Celery worker and Celery Beat scheduler were two processes that had to stay running 24/7 just to
              fire a check every couple of minutes. On Fly.io, that always-on compute turned out to be the single
              biggest line item on the bill, for something that mostly sits idle between checks.
            </p>
            <p>
              v3 replaced both with a plain function behind an internal, token-guarded endpoint (
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-base dark:bg-zinc-800">POST /internal/run-overdue-check</code>
              ) that something external calls on a schedule. Redis stuck around, but only for request rate-limiting,
              not as a message broker. The web machine now auto-stops when idle and Postgres moved to Neon (Singapore,
              next to the Fly machine), so the whole stack can sleep between checks.
            </p>
            <p>
              What a dead man’s switch needs from that trigger is boring reliability, and that’s where my first
              replacement was wrong. I started with a GitHub Actions cron in the repo. GitHub’s scheduler turned out to
              be too unreliable for the job — on a quiet repo it ran every few hours, which is a long time for a
              monitoring tool to sit on a missed ping. So a free external scheduler (cron-job.org) is now the primary
              trigger, and the GitHub workflow stays as a backup.
            </p>
            <p>
              The check runs every 15 minutes rather than every 5, deliberately: it lets the web machine and the
              database both sleep between runs, which is what keeps the monthly bill aimed under Fly’s minimum-charge
              threshold. The trade-off is that an overdue job is noticed within roughly 15–30 minutes instead of
              within seconds. That’s fine for a cron-job monitor, and the README says so plainly instead of hiding it.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">What’s shipped since</h2>
            <p>
              Past the core ping-and-alert loop, most of what’s gone in since is what turns a working script into
              something someone else could actually depend on. Slack, Discord, and generic webhook alerts alongside
              email, so a missed job doesn’t depend on someone checking their inbox. Opt-in public status pages, one
              per account, so a monitor’s uptime can be shared without sharing the dashboard. A per-account Prometheus{' '}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-base dark:bg-zinc-800">/metrics</code> endpoint,
              scoped by token, for pinning a monitor onto a Grafana board that already exists instead of asking anyone
              to visit yet another URL. Rate limiting on every state-changing endpoint and CSRF protection on every
              authenticated form — hardening that’s invisible right up until it isn’t. And a 52-test pytest suite that
              runs against an in-memory SQLite database in CI, so all of it is covered without needing Docker or a real
              Postgres instance just to run <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-base dark:bg-zinc-800">pytest</code>.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">A few decisions worth explaining</h2>
            <p>
              <strong>Server-rendered Jinja2 over a JS framework.</strong> For v1, a SPA would have bought me nothing
              — the dashboard is mostly forms and tables — and would have doubled the deploy surface. Server-rendered
              HTML keeps the whole thing deployable on the cheapest possible infrastructure, which mattered a lot for
              a side project.
            </p>
            <p>
              <strong>JWT in HttpOnly cookies, not localStorage.</strong> Storing the auth token in an HttpOnly cookie
              means client-side JS never has access to it, which closes off a whole category of XSS-based token theft
              — a small decision, but one that’s easy to get wrong on a solo project with no code review.
            </p>
            <p>
              <strong>Pointing it at this portfolio.</strong> This portfolio is fully static, so it can’t ping anything
              on its own. There’s a small GitHub Actions workflow in this repo that checks the live site and pings
              Cronbell only if it returns 200, which would make Cronbell the thing watching the site you’re reading
              this on. It’s switched off for now, and after the scheduler lesson above I’d drive it from the external
              trigger rather than GitHub’s own cron.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Where it stands right now</h2>
            <p>
              Cronbell is live as a free demo. It runs on a small Fly.io machine and a free Neon Postgres, so the first
              request after a quiet spell can take a few seconds. The hostname still says <em>pulsecheck</em> because it
              predates the rename; a custom domain is next, along with an authenticated sending domain so verification
              and alert emails stop depending on a personal Gmail sender. After that comes v5: “start” and “fail” ping
              variants, pricing, and team accounts. The source, README, and full commit history are on GitHub — or{' '}
              <Link href="/contact" className="text-teal-600 hover:underline dark:text-teal-400">
                reach out
              </Link>{' '}
              and I’ll walk you through it live.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 border-t border-zinc-200 pt-6 text-sm dark:border-zinc-800">
              <a
                href="https://github.com/shane-Coder/cronbell"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-600 transition hover:text-teal-500"
              >
                GitHub
              </a>
              <a
                href="https://pulsecheck-shivam.fly.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-green-600 transition hover:text-green-500"
              >
                Live Demo
              </a>
              <a
                href="https://medium.com/@shivamrajomar/i-got-tired-of-silent-cron-failures-so-i-built-a-dead-mans-switch-80162b047213"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                Also on Medium →
              </a>
              <Link href="/projects" className="font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                See all Projects
              </Link>
            </div>
          </div>
        </article>
      </main>
    </motion.div>
  );
}
