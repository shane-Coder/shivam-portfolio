import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const posts = [
  {
    slug: 'pulsecheck',
    title: 'Building PulseCheck: a dead-man’s-switch monitor for cron jobs',
    date: 'September 2026',
    readTime: '6 min read',
    excerpt:
      'Why "did the job actually run?" is a harder question than it sounds, and how I built a monitoring service around the answer — FastAPI, Celery Beat, Redis, and a multi-service deploy on Fly.io.',
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Head>
        <title>Blog | Shivam Omer</title>
        <meta
          name="description"
          content="Notes on backend engineering, DevOps, and building production systems — starting with PulseCheck, a cron job monitoring service."
        />
      </Head>

      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">Blog</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Writing</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
            Notes on things I build — the decisions, trade-offs, and the parts that didn’t work the first time.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  {post.date} · {post.readTime}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-gradient">{post.title}</h2>
                <p className="mt-3 text-zinc-700 dark:text-zinc-400">{post.excerpt}</p>
                <p className="mt-4 text-sm font-medium text-teal-600 dark:text-teal-400">Read more →</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
