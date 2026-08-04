import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-white/90 dark:bg-black/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm px-6 py-4 fixed w-full z-20 top-0"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3" legacyBehavior>
          <a className="font-semibold text-lg text-gray-900 dark:text-white">
            Shivam Omer
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {navItems.map(({ label, href }) => (
            <Link href={href} legacyBehavior key={label}>
              <a
                className={`${
                  router.pathname === href
                    ? 'font-semibold text-black dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                } transition duration-300 hover:text-blue-600 dark:hover:text-blue-400`}
              >
                {label}
              </a>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/ShivamOmer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-full bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Resume
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="rounded-full border border-gray-300 px-2.5 py-1.5 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-200"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          )}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="text-gray-900 dark:text-white"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center">
          {navItems.map(({ label, href }) => (
            <Link href={href} legacyBehavior key={label}>
              <a
                className={`block ${
                  router.pathname === href
                    ? 'font-semibold text-black dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                } transition duration-300 hover:text-blue-600 dark:hover:text-blue-400`}
              >
                {label}
              </a>
            </Link>
          ))}
          <a
            href="/ShivamOmer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            View Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
}
