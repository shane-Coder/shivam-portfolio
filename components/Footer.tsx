import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 px-6 py-10 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p>© {new Date().getFullYear()} Shivam Omer. Built with Next.js &amp; Tailwind CSS.</p>

        <div className="flex items-center gap-5 text-base">
          <a
            href="https://github.com/shane-Coder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-teal-600 dark:hover:text-teal-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/programmer-shivam/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-teal-600 dark:hover:text-teal-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shivamrajomar@gmail.com"
            aria-label="Email"
            className="transition hover:text-teal-600 dark:hover:text-teal-400"
          >
            <FaEnvelope />
          </a>
        </div>

        <a
          href="https://github.com/shane-Coder/PulseCheck"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-teal-500 hover:text-teal-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-teal-400"
        >
          Built with PulseCheck — my cron monitoring project ↗
        </a>
      </div>
    </footer>
  );
}
