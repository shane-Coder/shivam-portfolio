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
    <main className="relative min-h-screen pt-20 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 text-black dark:text-white transition-colors duration-300 px-6 md:px-12 overflow-hidden flex items-center">
      {/* Subtle Animated Background Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:20px_20px] z-0" />

      {mounted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto w-full"
        >
          {/* Left: Text Section */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="text-4xl md:text-6xl font-extrabold"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Shivam</span> 👋
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-300"
            >
              Backend Developer | DevOps Enthusiast
            </motion.p>

            <p className="max-w-xl text-md text-gray-600 dark:text-gray-400 mx-auto md:mx-0">
              I specialize in building scalable APIs, containerized deployments, and seamless DevOps workflows. With hands-on experience in Python, Go, Docker, and Kubernetes, I help teams ship reliable software faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <Link href="/ShivamOmer.pdf" legacyBehavior>
                <a
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📄 View My Resume
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium transition shadow">
                  🤝 Let’s Connect
                </a>
              </Link>
            </div>
          </div>

          {/* Right: Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <Image
              src="/profile.jpg"
              alt="Shivam Omer"
              width={240}
              height={240}
              className="rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
