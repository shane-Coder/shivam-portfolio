import Head from 'next/head';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const secondaryLinks = [
  { label: 'Email', href: 'mailto:shivamrajomar@gmail.com', icon: FaEnvelope, value: 'shivamrajomar@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/shane-Coder', icon: FaGithub, value: 'github.com/shane-Coder' },
  { label: 'Phone', href: 'tel:+918303669396', icon: FaPhone, value: '+91-8303669396' },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Head>
        <title>Contact | Shivam Omer</title>
        <meta
          name="description"
          content="Get in touch with Shivam Omer for full-time backend and DevOps roles, or freelance engagements in Docker, CI/CD, Terraform, and Kubernetes."
        />
        <link rel="canonical" href="https://shivam-portfolio-gold-omega.vercel.app/contact" />
      </Head>

      <div className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-white p-8 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">Contact</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Let’s build something meaningful.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
          I’m actively looking for full-time backend engineering and DevOps roles — remote or on-site. I also take on
          a limited number of freelance/contract engagements: Docker + CI/CD setup, Terraform infrastructure, and
          Kubernetes migration audits.
        </p>

        <a
          href="https://www.linkedin.com/in/programmer-shivam/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-xl"
        >
          <FaLinkedin size={22} />
          DM me on LinkedIn
        </a>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Fastest way to reach me — usually reply within a day.</p>

        <div className="mt-10 grid gap-3 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:grid-cols-3">
          {secondaryLinks.map(({ label, href, icon: Icon, value }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-left text-sm shadow-sm transition hover:border-teal-500 dark:border-zinc-700 dark:bg-zinc-950"
            >
              <Icon className="shrink-0 text-zinc-500 dark:text-zinc-400" />
              <span className="min-w-0">
                <span className="block font-medium text-zinc-900 dark:text-zinc-100">{label}</span>
                <span title={value} className="block truncate text-zinc-500 dark:text-zinc-400">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
