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
      className="bg-black border-b border-gray-800 px-6 py-4 fixed w-full z-10 top-0"
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-4 text-gray-300">
          {navItems.map(({ label, href }) => (
            <Link href={href} legacyBehavior key={label}>
              <a
                className={`${
                  router.pathname === href ? 'underline font-semibold text-white' : 'text-blue-400'
                } transition duration-300 hover:text-white`}
              >
                {label}
              </a>
            </Link>
          ))}
        </div>

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-white border px-2 py-1 rounded hover:bg-gray-700 ml-4 hidden md:inline"
          >
            {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
          </button>
        )}

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-center text-gray-300">
          {navItems.map(({ label, href }) => (
            <Link href={href} legacyBehavior key={label}>
              <a
                className={`block ${
                  router.pathname === href ? 'underline font-semibold text-white' : 'text-blue-400'
                } transition duration-300 hover:text-white`}
              >
                {label}
              </a>
            </Link>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-white border px-2 py-1 rounded hover:bg-gray-700"
            >
              {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
            </button>
          )}
        </div>
      )}
    </motion.nav>
  );
}
