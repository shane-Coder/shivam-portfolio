import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const stack = ['Python', 'Django', 'FastAPI', 'Kafka', 'Docker', 'Kubernetes', 'AWS', 'Azure'];
const highlights = ['2+ years building backend systems', 'Event-driven microservices', 'Cloud-native automation'];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 px-4 py-24 text-black transition-colors duration-300 dark:from-black dark:via-slate-950 dark:to-slate-900 dark:text-white sm:px-6 lg:px-8">
      <Head>
        <title>Shivam Omer | Backend Developer & DevOps Engineer</title>
        <meta
          name="description"
          content="Shivam Omer builds scalable backend services, event-driven systems, and cloud-native infrastructure with Python, Django, Kafka, Docker, and Kubernetes."
        />
        <meta property="og:title" content="Shivam Omer Portfolio" />
        <meta property="og:description" content="Backend Developer & DevOps Engineer specializing in scalable APIs, distributed systems, and automation." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] [background-size:20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)]" />

      {mounted && (
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
            <Image src="/profile.jpg" alt="Shivam Omer" width={180} height={180} className="rounded-full border-4 border-white shadow-2xl dark:border-slate-900" />
          </motion.div>

          <div className="max-w-2xl space-y-6">
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
              Software Engineer • Backend • DevOps
            </motion.p>

            <motion.h1 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Building reliable systems that scale.
            </motion.h1>

            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I’m Shivam Omer, a backend engineer with 2+ years of experience crafting event-driven services, microservices, and cloud-native automation across Python, Django, Kafka, Docker, Kubernetes, and AWS/Azure.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex flex-wrap justify-center gap-2 md:justify-start">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-gray-300 bg-white/80 px-3 py-1 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-slate-900/70 dark:text-gray-200">
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex flex-wrap justify-center gap-2 md:justify-start">
              {stack.map((tech) => (
                <span key={tech} className="rounded-full bg-gray-900 px-3 py-1 text-sm font-medium text-white dark:bg-gray-100 dark:text-gray-900">
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start">
              <a href="/ShivamOmer.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                View Resume
              </a>
              <Link href="/contact" legacyBehavior>
                <a className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-200">
                  Let’s Connect
                </a>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </main>
  );
}
