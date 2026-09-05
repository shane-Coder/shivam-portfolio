import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const stack = ['Python', 'Django', 'FastAPI', 'Kafka', 'Docker', 'Kubernetes', 'AWS', 'Azure'];
const highlights = ['2+ years building backend systems', 'Event-driven microservices', 'Cloud-native automation'];

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-50 via-zinc-100 to-teal-50 px-4 py-24 text-zinc-900 transition-colors duration-300 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800 dark:text-zinc-100 sm:px-6 lg:px-8">
      <Head>
        <title>Shivam Omer | Backend Developer & DevOps Engineer</title>
        <meta
          name="description"
          content="Shivam Omer builds scalable backend services, event-driven systems, and cloud-native infrastructure with Python, Django, Kafka, Docker, and Kubernetes."
        />
        <link rel="canonical" href="https://shivam-portfolio-gold-omega.vercel.app/" />
      </Head>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,rgba(20,184,166,0.15)_1px,transparent_0)] [background-size:20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.14 } },
        }}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center md:flex-row md:text-left"
      >
        <motion.div variants={{ hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } }} className="shrink-0">
          <Image
            src="/profile.jpg"
            alt="Shivam Omer"
            width={180}
            height={180}
            priority
            className="aspect-square h-[180px] w-[180px] rounded-full border-4 border-white object-cover shadow-2xl dark:border-zinc-900"
          />
        </motion.div>

        <div className="max-w-2xl space-y-6">
          <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Software Engineer • Backend • DevOps
          </motion.p>

          <motion.h1 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            I cut release cycles from days to under an hour.
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            I’m Shivam Omer, a backend engineer who builds event-driven services and automates the deployment
            pipelines around them. 2+ years shipping production systems in Python, Django, Kafka, Docker,
            Kubernetes, and AWS/Azure — currently open to full-time backend &amp; DevOps roles.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex flex-wrap justify-center gap-2 md:justify-start">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-zinc-300 bg-white/80 px-3 py-1 text-sm text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex flex-wrap justify-center gap-2 md:justify-start">
            {stack.map((tech) => (
              <span key={tech} className="rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900">
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <Link
              href="/blog/pulsecheck"
              className="flex items-center gap-3 rounded-2xl border border-zinc-300 bg-white/70 px-4 py-3 text-left shadow-sm transition hover:border-teal-500 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900/60"
            >
              <span className="shrink-0 rounded-full bg-teal-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 dark:bg-teal-950 dark:text-teal-400">
                Featured
              </span>
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                <strong className="text-zinc-900 dark:text-zinc-100">PulseCheck</strong> — a dead-man’s-switch monitor for cron jobs, live on Fly.io. Read the case study →
              </span>
            </Link>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start">
            <a href="/ShivamOmer.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700">
              View Resume
            </a>
            <Link href="/contact" legacyBehavior>
              <a className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-teal-500 hover:text-teal-600 dark:border-zinc-700 dark:text-zinc-200">
                Let’s Connect
              </a>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
