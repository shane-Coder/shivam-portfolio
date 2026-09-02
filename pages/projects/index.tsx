import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '../../components/Badge';

export default function Projects() {
  const projects = [
    {
      title: 'PulseCheck — Cron Job & Scheduled Task Monitoring',
      description:
        'A monitoring service that catches silently failing cron jobs and scheduled tasks. Each job pings a unique URL after it runs; if the expected ping does not arrive in time, PulseCheck fires an email alert. Built with a production-style multi-service architecture and deployed live on Fly.io.',
      tech: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Celery', 'Redis', 'JWT Auth', 'Docker', 'Fly.io'],
      github: 'https://github.com/shane-Coder/PulseCheck',
      live: 'https://pulsecheck-shivam.fly.dev/',
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
      live: 'https://github.com/shane-Coder/azure-databricks-delta-lake-pipeline',
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
      live: 'https://github.com/shane-Coder/log-management-microservice',
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
      live: 'https://github.com/shane-Coder/event-driven-notification-system',
      highlights: [
        'Designed resilient message processing flows',
        'Improved reliability through decoupled services',
        'Focused on scalable workflow orchestration',
      ],
    },
    {
      title: 'Go File Organizer CLI',
      description:
        'A fast and efficient CLI tool built in Go to organize files by extension with safe directory handling and cross-platform support.',
      tech: ['Go', 'CLI', 'Automation', 'Filesystem'],
      github: 'https://github.com/shane-Coder/file-organizer-cli',
      live: 'https://github.com/shane-Coder/file-organizer-cli',
      highlights: ['Cross-platform file automation', 'Simple and practical developer utility', 'Built with Go standard library'],
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
    {
      title: 'Learning Go',
      description:
        'A personal repository documenting my journey learning Golang through practical examples, mini-projects, and hands-on experimentation.',
      tech: ['Go', 'Learning', 'Algorithms', 'CLI'],
      github: 'https://github.com/shane-Coder/learning-go',
      live: 'https://github.com/shane-Coder/learning-go',
      highlights: ['Consistent practice through real examples', 'Strong grasp of Go fundamentals', 'Useful for iterative learning'],
    },
    {
      title: 'RideShare',
      description:
        'A blockchain-based carpool platform designed to reduce ride costs with transparent peer-to-peer transactions and secure smart contracts.',
      tech: ['Node.js', 'ExpressJS', 'Solidity', 'Blockchain'],
      github: 'https://github.com/shane-Coder/RideShare',
      live: 'https://github.com/shane-Coder/RideShare',
      highlights: ['Built with blockchain concepts', 'Peer-to-peer transport experience', 'Full-stack project experimentation'],
    },
    {
      title: 'Shopping',
      description:
        'A scalable e-commerce project with user authentication, cart-to-checkout flow, and a Django-based backend foundation.',
      tech: ['Python', 'Django', 'SQLite', 'Web App'],
      github: 'https://github.com/shane-Coder/shopping',
      live: 'https://github.com/shane-Coder/shopping',
      highlights: ['Product-oriented backend experience', 'Authentication and business flows', 'Practical full-stack implementation'],
    },
    {
      title: 'ImageUploader',
      description:
        'A secure image upload system focused on metadata handling, backend reliability, and smooth media interactions.',
      tech: ['Python', 'Django', 'Pillow', 'File Handling'],
      github: 'https://github.com/shane-Coder/Image-Uploader',
      live: 'https://github.com/shane-Coder/Image-Uploader',
      highlights: ['File processing and upload workflow', 'Backend-focused media handling', 'Practical application design'],
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">Projects</p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Selected Work</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            A broader look at the work I have built across backend systems, cloud data pipelines, automation, and product-oriented applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-slate-900/60"
            >
              <h2 className="text-2xl font-semibold text-gradient">{project.title}</h2>
              <p className="mt-3 text-gray-700 dark:text-gray-400">{project.description}</p>

              {project.highlights && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-400">
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
                  <a target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 transition hover:text-blue-500">
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
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
