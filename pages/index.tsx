// pages/index.tsx

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white transition-colors duration-300 px-4 overflow-hidden">
      <Head>
        <title>Shivam Omer | Backend Developer & DevOps Engineer</title>
        <meta name="description" content="Portfolio of Shivam Omer – Backend Developer with DevOps expertise. Skilled in Python, Django, FastAPI, Docker, Kubernetes, and more." />
        <meta property="og:title" content="Shivam Omer Portfolio" />
        <meta property="og:description" content="Backend Developer and DevOps Enthusiast." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Subtle Animated Background Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:20px_20px] z-0" />

      {mounted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center space-y-6 z-10"
        >
          <Image
            src="/profile.jpg"
            alt="Shivam Omer"
            width={120}
            height={120}
            className="rounded-full mx-auto border-4 border-white dark:border-gray-800"
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-5xl font-bold"
          >
            Hi, I'm Shivam 👋
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Backend Developer | DevOps Enthusiast
          </motion.p>
          <p className="max-w-xl mx-auto text-md text-gray-600 dark:text-gray-400">
            With over a year of experience in backend development and cloud infrastructure, I specialize in building scalable APIs, containerized deployments, and seamless DevOps workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {["Python", "Django", "FastAPI", "Docker", "Kubernetes", "Terraform", "GitHub Actions"].map((tech, i) => (
              <span key={i} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-800 dark:text-white">
                {tech}
              </span>
            ))}
          </div>
          <Link href="/ShivamOmer.pdf" legacyBehavior>
            <a
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 View My Resume
            </a>
          </Link>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="pt-10"
          >
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
              Interested in working together?
            </p>
            <Link href="/contact" legacyBehavior>
              <a className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition">
                🤝 Let’s Connect
              </a>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
