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
    <main className="min-h-screen bg-white px-6 py-16 text-black dark:bg-black dark:text-white">
      <Head>
        <title>Blog | Shivam Omer</title>
        <meta
          name="description"
          content="Notes on backend engineering, DevOps, and building production systems — starting with PulseCheck, a cron job monitoring service."
        />
      </Head>

      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">Blog</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Writing</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
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
                className="block rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-slate-900/60"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {post.date} · {post.readTime}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-gradient">{post.title}</h2>
                <p className="mt-3 text-gray-700 dark:text-gray-400">{post.excerpt}</p>
                <p className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">Read more →</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
