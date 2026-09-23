import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '../../components/Badge';

const featuredProjects = [
  {
    title: 'PulseCheck — Cron Job & Scheduled Task Monitoring',
    description:
      "A dead-man's-switch monitoring service for cron jobs and scheduled tasks: each job pings a unique URL when it finishes, and PulseCheck emails, Slacks, or webhooks you the moment a ping goes missing. Started as a single-service demo; has since grown into a hardened, self-service product with its own CI and a 41-test suite.",
    tech: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'GitHub Actions', 'Docker', 'Fly.io'],
    github: 'https://github.com/shane-Coder/PulseCheck',
    live: 'https://pulsecheck-shivam.fly.dev/',
    caseStudy: '/blog/pulsecheck',
    highlights: [
      'Replaced an always-on Celery worker with a GitHub Actions cron hitting an internal, token-guarded endpoint — cut the single biggest line item off the Fly.io bill without losing the check cadence',
      'Slack, Discord, and generic webhook alerts alongside email, plus opt-in public status pages and a per-account Prometheus /metrics endpoint for pinning onto an existing Grafana dashboard',
      'Rate limiting on every state-changing endpoint, CSRF protection on every authenticated form, and self-service account flows (password reset, email verification, admin panel)',
      '41-test pytest suite running against in-memory SQLite in its own CI, independent of Docker or a real Postgres instance',
    ],
  },
  {
    title: 'NyotaNow — Invitations as a link, with RSVPs',
    description:
      'A consumer product for Indian families: instead of forwarding an invitation JPG on WhatsApp, the host shares one link with a live countdown, Maps directions, and one-tap RSVP. Hindi and English are both first-class, with real Devanagari typography. Live in production on Vercel, Postgres in Singapore.',
    tech: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Tailwind 4', 'Vercel', 'Neon'],
    github: 'https://github.com/shane-Coder/nyotanow',
    live: 'https://nyotanow.vercel.app/?utm_source=portfolio',
    caseStudy: '/blog/nyotanow',
    highlights: [
      'One card component renders the live preview, the invite page, and a 1080×1350 PNG export, sized entirely in container-query units so all three stay identical',
      'No accounts: each invite is guarded by a random key stored only as a SHA-256 hash, compared in constant time, with identical 404s for wrong and missing keys',
      'Schema migrations run behind a Postgres advisory lock so concurrent serverless cold starts cannot race each other',
      'Server and database co-located in Singapore; a warm invite page responds in ~0.3s from India',
    ],
  },
  {
    title: 'Azure Databricks Delta Lake Pipeline',
    description:
      'Built a cloud-native data pipeline on Azure using Databricks, Delta Lake, and PySpark to ingest and transform large-scale log data with transactional and historical querying support.',
    tech: ['Azure', 'Databricks', 'Delta Lake', 'PySpark', 'SQL'],
    github: 'https://github.com/shane-Coder/azure-databricks-delta-lake-pipeline',
    highlights: [
      'Implemented micro-batch processing for analytical workloads',
      'Designed a production-style log analytics workflow',
      'Used Delta Lake for versioned and reliable data processing',
    ],
  },
  {
    title: 'Log Management Microservice',
    description:
      'Designed a distributed log ingestion platform capable of processing thousands of asynchronous events with Kafka-driven streaming, real-time alerting, and analytics-ready storage.',
    tech: ['Django', 'Kafka', 'MongoDB', 'Docker', 'Microservices'],
    github: 'https://github.com/shane-Coder/log-management-microservice',
    highlights: [
      'Built asynchronous pipelines for high-throughput ingestion',
      'Enabled decoupled producer-consumer architecture',
      'Created a scalable foundation for operational monitoring',
    ],
  },
  {
    title: 'Event-Driven Notification System',
    description:
      'Built an async notification engine supporting email and SMS workflows through decoupled microservices and resilient message queue orchestration.',
    tech: ['Django', 'Kafka', 'MongoDB', 'Docker', 'Async Processing'],
    github: 'https://github.com/shane-Coder/event-driven-notification-system',
    highlights: [
      'Designed resilient message processing flows',
      'Improved reliability through decoupled services',
      'Focused on scalable workflow orchestration',
    ],
  },
  {
    title: 'Capstone Todo API',
    description:
      'A production-ready REST API for task management built with Go and PostgreSQL, containerized with Docker, and deployed on Render.',
    tech: ['Go', 'Docker', 'PostgreSQL', 'Render', 'REST API'],
    github: 'https://github.com/shane-Coder/capstone-todo-api',
    highlights: ['Secure CRUD operations', 'Cloud deployment readiness', 'Clean architecture and API structure'],
  },
];

const otherProjects = [
  {
    title: 'Go File Organizer CLI',
    description: 'A CLI tool built in Go to organize files by extension with safe directory handling and cross-platform support.',
    tech: ['Go', 'CLI', 'Automation'],
    github: 'https://github.com/shane-Coder/file-organizer-cli',
  },
  {
    title: 'Learning Go',
    description: 'A personal repository documenting my journey learning Golang through practical examples and mini-projects.',
    tech: ['Go', 'Algorithms'],
    github: 'https://github.com/shane-Coder/learning-go',
  },
  {
    title: 'RideShare (Group Project)',
    description: 'A blockchain-based carpool platform I contributed to as part of a team — peer-to-peer transactions and smart contracts.',
    tech: ['Node.js', 'Solidity', 'Blockchain'],
    github: 'https://github.com/shane-Coder/RideShare',
  },
  {
    title: 'Shopping',
    description: 'An e-commerce project with user authentication, cart-to-checkout flow, and a Django backend.',
    tech: ['Python', 'Django', 'SQLite'],
    github: 'https://github.com/shane-Coder/shopping',
  },
  {
    title: 'ImageUploader',
    description: 'An image upload system focused on metadata handling and backend reliability.',
    tech: ['Python', 'Django', 'Pillow'],
    github: 'https://github.com/shane-Coder/Image-Uploader',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Head>
        <title>Projects | Shivam Omer</title>
        <meta
          name="description"
          content="Selected backend and DevOps projects by Shivam Omer — PulseCheck cron job monitoring, an Azure Databricks Delta Lake pipeline, Kafka-driven microservices, and more."
        />
        <link rel="canonical" href="https://shivam-portfolio-gold-omega.vercel.app/projects" />
      </Head>

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">Projects</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Selected Work</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
            The projects I put the most into — real architecture decisions, not just tutorials.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <h2 className="text-2xl font-semibold text-gradient">{project.title}</h2>
              <p className="mt-3 text-zinc-700 dark:text-zinc-400">{project.description}</p>

              {project.highlights && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-sm">
                <Link href={project.github} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className="font-medium text-teal-600 transition hover:text-teal-500">
                    GitHub
                  </a>
                </Link>
                {project.live && (
                  <Link href={project.live} legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" className="font-medium text-green-600 transition hover:text-green-500">
                      Demo
                    </a>
                  </Link>
                )}
                {project.caseStudy && (
                  <Link href={project.caseStudy} className="font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                    Case Study →
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Other Projects</h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Smaller repos, experiments, and earlier practice work.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {otherProjects.map((project, index) => (
              <a
                key={index}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:border-teal-500 dark:border-zinc-800 dark:bg-zinc-900/60"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
