import Head from 'next/head';
import { motion } from 'framer-motion';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import Badge from '../../components/Badge';

const strengths = [
  'Designing event-driven backend services and microservices',
  'Building scalable APIs and asynchronous processing workflows',
  'Automating deployments with Docker, Kubernetes, Terraform, and CI/CD pipelines',
];

const tools = ['Python', 'Django', 'FastAPI', 'Kafka', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Terraform', 'Jenkins', 'GitHub Actions'];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Head>
          <title>About — Shivam Omer</title>
          <meta name="description" content="About Shivam Omer — a backend engineer and DevOps professional focused on scalable systems, automation, and cloud-native development." />
        </Head>

        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <section className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-teal-50 to-white p-8 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">About Me</p>
            <h1 className="text-4xl font-bold sm:text-5xl">I build backend systems that are reliable, scalable, and production-ready.</h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              I’m Shivam Omer, a Software Engineer with 2+ years of experience creating backend services, distributed workflows, and cloud infrastructure for fast-moving teams. My work sits at the intersection of software engineering, automation, and DevOps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/ShivamOmer.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700">
                View Resume
              </a>
              <a href="https://github.com/shane-Coder" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-teal-500 hover:text-teal-600 dark:border-zinc-700 dark:text-zinc-200">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/programmer-shivam/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:border-teal-500 hover:text-teal-600 dark:border-zinc-700 dark:text-zinc-200">
                LinkedIn
              </a>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h2 className="text-2xl font-semibold">Why this portfolio shows more than the resume</h2>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                A resume captures the highlights, but a portfolio shows the depth of execution. I prefer to showcase a wider range of backend, automation, and product-building work so visitors can see how I think, build, and solve problems across different contexts.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h2 className="text-2xl font-semibold">Professional Summary</h2>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                I have worked on backend platforms handling thousands of asynchronous events, built resilient APIs, and automated deployment workflows across AWS, Azure, and Linux environments. My current focus is on designing durable systems with strong observability and clean architecture.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                {strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 md:col-span-2">
              <h2 className="text-2xl font-semibold">Current Focus</h2>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                At Move37AI, I work on event-driven backend services and data-intensive workflows that support real-time operations and intelligent automation.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold">Experience Snapshot</h2>
            <div className="mt-4 space-y-4 text-zinc-700 dark:text-zinc-300">
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">Software Development Engineer — Move37AI</p>
                <p className="text-sm text-zinc-500">Jan 2026 – Present</p>
                <p className="mt-2">Built event-driven backend services using Python, Django, Kafka, and MongoDB and contributed to high-volume asynchronous workflows and real-time notifications.</p>
              </div>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">Backend Developer — Solytics Partners</p>
                <p className="text-sm text-zinc-500">Mar 2024 – Dec 2025</p>
                <p className="mt-2">Engineered WarpDrive, reduced execution latency by nearly 80%, automated CI/CD pipelines, and helped build scalable execution platforms using Django, Golang, Docker, Kubernetes, and Terraform.</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold">Achievements</h2>
            <ul className="mt-4 space-y-3 text-zinc-700 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <SiLeetcode className="shrink-0 text-teal-600 dark:text-teal-400" />
                <a
                  href="https://leetcode.com/u/shane-Coder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-600 hover:underline dark:text-teal-400"
                >
                  LeetCode
                </a>
                <span>— solved 700+ problems across easy, medium, and hard levels.</span>
              </li>
              <li className="flex items-center gap-2">
                <SiGeeksforgeeks className="shrink-0 text-teal-600 dark:text-teal-400" />
                <a
                  href="https://www.geeksforgeeks.org/profile/shane1707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-600 hover:underline dark:text-teal-400"
                >
                  GeeksforGeeks
                </a>
                <span>— solved 350+ DSA problems.</span>
              </li>
              <li className="list-disc pl-1 marker:text-zinc-400">Built systems that improved execution efficiency and operational reliability across startup environments.</li>
            </ul>
          </section>
        </div>
      </main>
    </motion.div>
  );
}
