import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-10 text-sm text-gray-600 dark:border-gray-800 dark:bg-black dark:text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p>© {new Date().getFullYear()} Shivam Omer. Built with Next.js &amp; Tailwind CSS.</p>

        <div className="flex items-center gap-5 text-base">
          <a
            href="https://github.com/shane-Coder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/programmer-shivam/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shivamrajomar@gmail.com"
            aria-label="Email"
            className="transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
        </div>

        <a
          href="https://github.com/shane-Coder/PulseCheck"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:text-blue-400"
        >
          Built with PulseCheck — my cron monitoring project ↗
        </a>
      </div>
    </footer>
  );
}
