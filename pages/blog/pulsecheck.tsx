import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '../../components/Badge';

const stack = ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Celery', 'Redis', 'JWT Auth', 'Docker', 'Fly.io'];

export default function PulseCheckPost() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Head>
          <title>Building PulseCheck | Shivam Omer</title>
          <meta
            name="description"
            content="How and why I built PulseCheck, a dead-man's-switch monitoring service for cron jobs and scheduled tasks — architecture, trade-offs, and lessons from running it in production."
          />
          <link rel="canonical" href="https://shivam-portfolio-gold-omega.vercel.app/blog/pulsecheck" />
        </Head>

        <article className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-400">
            ← Back to Blog
          </Link>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
            Case Study
          </p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
            Building PulseCheck: a dead-man’s-switch monitor for cron jobs
          </h1>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">September 2026 · 6 min read</p>

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
              I built <strong>PulseCheck</strong> to catch that class of failure specifically. It’s a live production
              service — not a toy project — currently at{' '}
              <a
                href="https://github.com/shane-Coder/PulseCheck"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                github.com/shane-Coder/PulseCheck
              </a>
              .
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">The idea: a dead man’s switch</h2>
            <p>
              The model borrows directly from dead-man’s-switch design in safety-critical systems: instead of waiting
              for a failure signal, you wait for the absence of a success signal. Every monitor in PulseCheck gets a
              unique ping URL. You add one line to the end of your cron job —{' '}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-base dark:bg-zinc-800">
                curl https://pulsecheck-shivam.fly.dev/ping/&lt;id&gt;
              </code>{' '}
              — and PulseCheck expects that ping on a schedule you define. If the ping doesn’t arrive within the
              expected window, PulseCheck assumes the job didn’t run and fires an email alert. No ping ever needs to
              report success explicitly; showing up on time <em>is</em> the success signal.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Architecture</h2>
            <p>
              The whole point of a monitoring tool is that it has to be more reliable than the thing it’s watching, so
              I deliberately kept the design boring and split into separately deployable pieces rather than one
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
              Five containers, each independently scalable — the design is meant to move cleanly from Docker Compose
              on a single box up to Kubernetes without a rewrite, even though right now it runs happily as containers
              on Fly.io.
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
              <strong>The portfolio site monitors itself, sort of.</strong> This portfolio is fully static — it can’t
              ping anything on its own. So there’s a small GitHub Actions workflow in this repo that checks the live
              site on a schedule and only pings PulseCheck if the check actually returns 200. In effect, PulseCheck
              ends up watching the uptime of the very site you’re reading this on — using itself as its own first
              real user.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Where it stands right now</h2>
            <p>
              Being honest about the current state: the live demo is temporarily paused while I finish a UI rebuild
              and an infrastructure change, so the link below currently lands on a small maintenance page rather than
              the dashboard. The source, README, and full commit history are always up on GitHub if you want to look
              at the actual implementation in the meantime — or{' '}
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
                href="https://github.com/shane-Coder/PulseCheck"
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
