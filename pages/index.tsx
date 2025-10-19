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
    <main className="relative flex flex-col items-center justify-center min-h-screen pt-28 sm:pt-32 md:pt-36 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white transition-colors duration-300 px-4 overflow-hidden">
      <Head>
        <title>Shivam Omer | Backend Developer & DevOps Engineer</title>
        <meta
          name="description"
          content="Shivam Omer – Python & Go Backend Developer with DevOps expertise in Docker, Kubernetes, AWS, and CI/CD automation."
        />
        <meta property="og:title" content="Shivam Omer Portfolio" />
        <meta
          property="og:description"
          content="Backend Developer & DevOps Engineer specializing in cloud automation and scalable APIs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:20px_20px] z-0" />

      {mounted && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left z-10"
        >
          {/* Profile Photo */}
          <Image
            src="/profile.jpg"
            alt="Shivam Omer"
            width={160}
            height={160}
            className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
          />

          {/* Text Section */}
          <div className="space-y-6 max-w-xl">
            <motion.h1
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 1.2 }}
              className="text-5xl font-bold"
            >
              Hi, I'm Shivam 👋
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="text-xl text-gray-700 dark:text-gray-400 leading-relaxed"
            >
              Python & Go Backend Developer • DevOps Engineer • Cloud Infrastructure Specialist
            </motion.p>

            <p className="text-md text-gray-700 dark:text-gray-400 max-w-lg">
              With 2 years of experience in backend and cloud engineering, I build
              high-performance APIs, automate CI/CD pipelines, and optimize deployments
              that scale across AWS and Kubernetes.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm">
              {[
                'Python',
                'Go',
                'Django',
                'FastAPI',
                'Docker',
                'Kubernetes',
                'GitHub Actions',
              ].map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-800 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Resume Button */}
            <Link href="/ShivamOmer.pdf" legacyBehavior>
              <a
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-medium transition shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 View My Resume
              </a>
            </Link>

            {/* Call to Action */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
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
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Available for freelance projects and full-time opportunities.
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </main>
  );
}
