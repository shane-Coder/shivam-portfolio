import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '../../components/Badge';

const stack = ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Tailwind 4', 'Neon', 'Vercel'];

export default function NyotaNowPost() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Head>
          <title>Building NyotaNow | Shivam Omer</title>
          <meta
            name="description"
            content="How I built NyotaNow, a WhatsApp-shareable invitation product for Indian families — the PNG export bug that scrambled Hindi titles, migrations on serverless, and shipping it to production on Vercel and Neon."
          />
          <link rel="canonical" href="https://shivam-portfolio-gold-omega.vercel.app/blog/nyotanow" />
        </Head>

        <article className="mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-400">
            ← Back to Blog
          </Link>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
            Case Study
          </p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
            NyotaNow: what broke while building invitations for Indian families
          </h1>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">September 2026 · 7 min read</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              href="https://nyotanow.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-green-600 transition hover:text-green-500"
            >
              Live site →
            </a>
            <a
              href="https://github.com/shane-Coder/nyotanow"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-600 transition hover:text-teal-500"
            >
              Source on GitHub →
            </a>
            <a
              href="https://medium.com/@shivamrajomar/i-built-a-whatsapp-invite-app-for-indian-families-heres-what-broke-ac5b04eec575"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-600 transition hover:text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-300"
            >
              Also on Medium →
            </a>
          </div>

          <div className="prose-content mt-10 space-y-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              Every birthday invite I get is a JPG forwarded on WhatsApp, and every one of them is followed by the same
              three messages: <em>“aa rahe ho?”</em>, <em>“location bhejo”</em>, <em>“kitne log aaoge?”</em> The host
              ends up keeping a headcount in their head, and the image can’t answer any of those questions. It can’t
              open a map, it can’t collect a reply, it can’t tell you who’s coming.
            </p>

            <p>
              <strong>NyotaNow</strong> is built on one idea: an invitation should be a link, not a picture. The host
              fills in a few details, picks a design, and shares one link. Guests get a live countdown, a Google Maps
              button, add-to-calendar, and a one-tap RSVP. The host gets a private page with the guest list. Hindi and
              English are both first-class, with real Devanagari typography rather than a translation bolted on at the
              end.
            </p>

            <p>
              It went from idea to production in four evenings, and it’s live now. What follows is the parts that
              didn’t work the first time, because those are the parts worth writing down.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              One card, three places it has to look identical
            </h2>
            <p>
              The invitation card is rendered in three different contexts: the live preview while the host types, the
              public invite page, and a 1080×1350 PNG that guests can download for WhatsApp status. Keeping three
              copies of that layout in sync would have been a maintenance trap, so the card is a single component sized
              entirely in container-query units (<code className="rounded bg-zinc-100 px-1.5 py-0.5 text-base dark:bg-zinc-800">cqw</code>).
              Every font size, padding and border is a percentage of the card’s own width, so the same markup scales
              from a 320px thumbnail to a 1080px export with no duplicated styles.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              The bug: a rounding rule that scrambled Hindi titles
            </h2>
            <p>
              Downloading the card worked perfectly in English and broke in Hindi: the title collapsed onto one line
              and the text below overlapped it. My first assumption was fonts, so I checked whether the Devanagari font
              was embedded (it was), then whether the export picked a different fallback font (it didn’t — I changed
              the font stack to rule it out and the bug survived).
            </p>
            <p>
              The actual cause was in the export library’s style-copying code: it rounds every font size down to{' '}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-base dark:bg-zinc-800">floor(px) - 0.1</code>. On
              a 340px card, a 34.4px title becomes 33.9px. That’s invisible, but my title sat right at a line break, so
              a fraction smaller made it fit on one line — while the copied element height stayed two lines tall, which
              pushed everything below out of place.
            </p>
            <p>
              The fix was structural rather than cosmetic. Every text line now stretches to the card’s full width and
              centres its text, instead of shrink-wrapping its own content, so line breaks depend on the card’s width
              rather than on exact glyph widths. The export also renders from an off-screen copy at the full 1080px, so
              text is rasterised at native size instead of being scaled up. The lesson I keep relearning: when it looks
              like a font problem, check the numbers first.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Designing for Devanagari, not translating into it
            </h2>
            <p>
              A few details that a string-translation approach would have missed. English headings use wide
              letter-spacing, which looks elegant; applying the same to Hindi breaks the <em>shirorekha</em>, the
              horizontal line that joins letters into words, so Hindi text gets none. Hindi cards close with{' '}
              <span lang="hi">स्नेहाकांक्षी</span> or <span lang="hi">निवेदक</span>, the words actually printed on
              Indian invitation cards, instead of a literal “With love”. And the link preview image that WhatsApp
              generates can’t shape Devanagari at all — the renderer behind it does no complex text shaping — so for
              Hindi invites the preview falls back to English wording while the invite page and the downloaded image
              stay fully Hindi. Not perfect, but an honest trade-off rather than broken glyphs in every chat.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              No accounts, without being insecure
            </h2>
            <p>
              Nobody signs up to invite people to a birthday, so there are no accounts at all. Each invite issues a
              random 24-character key that lives in the host’s private link. Only a SHA-256 hash of it is stored, and
              it’s compared in constant time, so response timing leaks nothing. A wrong key returns exactly the same
              404 as an invite that doesn’t exist, which means links can’t be probed for valid ones.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Migrations that survive serverless cold starts
            </h2>
            <p>
              Schema migrations run automatically on the first database connection, which is convenient until a deploy
              cold-starts several instances in the same second and they all try to create the same tables. A Postgres
              advisory lock makes them take turns: the first instance takes it, the rest wait and then find nothing
              left to do. The transaction-scoped variant releases itself even if a process dies, so the lock can never
              get stuck.
            </p>
            <p>
              The same Drizzle queries run against two different databases: an in-process PGlite instance locally, so
              the project needs no Docker and no setup, and Neon Postgres in production. Nothing above the data layer
              knows which one is live.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Shipping it, and one deploy trap</h2>
            <p>
              Vercel’s database integration pre-fills the environment variable prefix as{' '}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-base dark:bg-zinc-800">STORAGE</code>, which would
              have created <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-base dark:bg-zinc-800">STORAGE_URL</code>.
              My code reads <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-base dark:bg-zinc-800">DATABASE_URL</code>.
              The build would have passed, the homepage would have loaded, and the site would have failed on the very
              first invite. Defaults are worth reading.
            </p>
            <p>
              The first deploy also ran in Washington, D.C. by default, with the database beside it — for a product
              whose users are all in India. Since a Neon database’s region is fixed at creation, the fix was to
              recreate it in Singapore while it was still empty and move the functions there too. Requests now enter
              Vercel’s network in Mumbai and run in Singapore next to the database; a warm invite page responds in
              about 0.3s from India.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Measuring the thing that matters</h2>
            <p>
              Every invite footer says “Made with NyotaNow, create your own”. One birthday invite is opened by 30 to 80
              guests, and some of them have an event coming up — that loop is the entire growth plan, so it needs a
              number. Invites record whether the host arrived through another invite’s footer, and a private stats page
              shows that share alongside invites created, RSVPs and replies per invite. If the share climbs, the
              product spreads on its own; if it doesn’t, no amount of posting will save it.
            </p>

            <h2 className="pt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">What’s next</h2>
            <p>
              Rate limiting, a test suite and CI, error monitoring, and eventually a small paid tier to remove the
              branding. But first: real invites, from real hosts, to real guests. Everything else is guesswork until
              then.
            </p>

            <p>
              Try it at{' '}
              <a
                href="https://nyotanow.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                nyotanow.vercel.app
              </a>{' '}
              — it’s free and needs no sign-up. The code is at{' '}
              <a
                href="https://github.com/shane-Coder/nyotanow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline dark:text-teal-400"
              >
                github.com/shane-Coder/nyotanow
              </a>
              .
            </p>
          </div>
        </article>
      </main>
    </motion.div>
  );
}
