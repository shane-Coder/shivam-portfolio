import Head from 'next/head';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

const links = [
  { label: 'Email', href: 'mailto:shivamrajomar@gmail.com', icon: FaEnvelope, value: 'shivamrajomar@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/programmer-shivam/', icon: FaLinkedin, value: 'linkedin.com/in/programmer-shivam' },
  { label: 'GitHub', href: 'https://github.com/shane-Coder', icon: FaGithub, value: 'github.com/shane-Coder' },
  { label: 'Phone', href: 'tel:+918303669396', icon: FaPhone, value: '+91-8303669396' },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black dark:bg-black dark:text-white">
      <Head>
        <title>Contact | Shivam Omer</title>
      </Head>

      <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center shadow-sm dark:border-gray-800 dark:bg-slate-900/60">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">Contact</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Let’s build something meaningful.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          I’m open to backend engineering, DevOps, and product-focused engineering opportunities. Feel free to reach out for collaborations, freelance work, or full-time roles.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {links.map(({ label, href, icon: Icon, value }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center justify-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-500 dark:border-gray-700 dark:bg-gray-950">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <Icon />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{label}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 break-all">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
