import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 shadow-sm px-6 py-4 fixed w-full z-20 top-0"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3" legacyBehavior>
          <a className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
            Shivam Omer
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {navItems.map(({ label, href }) => (
            <Link href={href} legacyBehavior key={label}>
              <a
                className={`${
                  isActive(href)
                    ? 'font-semibold text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-700 dark:text-zinc-300'
                } transition duration-300 hover:text-teal-600 dark:hover:text-teal-400`}
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
            className="hidden md:inline-flex items-center rounded-full bg-teal-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-teal-700"
          >
            Resume
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              aria-label={resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="rounded-full border border-zinc-300 px-2.5 py-1.5 text-sm text-zinc-700 transition-colors duration-300 dark:border-zinc-700 dark:text-zinc-200"
            >
              {resolvedTheme === 'dark' ? '☀️' : '🌙'}
            </button>
          )}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="text-zinc-900 dark:text-zinc-100"
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
                  isActive(href)
                    ? 'font-semibold text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-700 dark:text-zinc-300'
                } transition duration-300 hover:text-teal-600 dark:hover:text-teal-400`}
              >
                {label}
              </a>
            </Link>
          ))}
          <a
            href="/ShivamOmer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-teal-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-teal-700"
          >
            View Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
}
