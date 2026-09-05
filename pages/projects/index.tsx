import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '../../components/Badge';

const featuredProjects = [
  {
    title: 'PulseCheck — Cron Job & Scheduled Task Monitoring',
    description:
      'A monitoring service that catches silently failing cron jobs and scheduled tasks. Each job pings a unique URL after it runs; if the expected ping does not arrive in time, PulseCheck fires an email alert. Built with a production-style multi-service architecture and deployed live on Fly.io.',
    tech: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Celery', 'Redis', 'JWT Auth', 'Docker', 'Fly.io'],
    github: 'https://github.com/shane-Coder/PulseCheck',
    live: 'https://pulsecheck-shivam.fly.dev/',
    caseStudy: '/blog/pulsecheck',
    highlights: [
      'Dead-man-switch monitoring: alerts fire when an expected ping goes missing, not only on explicit errors',
      'Celery Beat + Redis background scheduler continuously checks for overdue jobs and dispatches SMTP email alerts',
      'JWT authentication with HttpOnly cookies, backed by a server-rendered Jinja2 dashboard',
      'Split into independently deployable web, worker, and scheduler services alongside Postgres and Redis, ready to scale from Docker Compose to Kubernetes',
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
    live: 'https://go-todo-api-i7ih.onrender.com/',
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
