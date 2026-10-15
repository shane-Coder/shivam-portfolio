import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Badge from '../../components/Badge';

const experiences = [
  {
    company: 'Self-Employed',
    role: 'Independent Software Engineer — Product Development',
    duration: 'Sep 2026 – Present',
    location: 'Delhi, India · Remote',
    highlights: [
      "Cronbell — built and operate a dead-man's-switch monitoring service for cron jobs and scheduled tasks: 33 REST endpoints, a 52-test PyTest suite in CI, Slack/Discord/webhook alerting, per-account Prometheus metrics, opt-in public status pages, and CSRF protection plus rate limiting on every state-changing endpoint; running in production with 20+ registered accounts.",
      'Re-architected it off an always-on Celery worker and Beat scheduler onto a token-guarded internal endpoint driven by an external scheduler, removing 24/7 compute from the hosting bill while preserving overdue detection; Redis retained for rate limiting only.',
      'NyotaNow — shipped a server-rendered invitation platform with one-tap RSVP and host dashboards in Next.js 16, React 19, TypeScript and PostgreSQL with Drizzle on Vercel; relocated app and database to Singapore, bringing page loads to roughly 0.3s from India. 36 invites created, 316 invite views and 37 RSVPs to date, with 22% of new invites coming from guests who received one — organic growth, no ad spend.',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Fly.io', 'Next.js', 'TypeScript', 'Drizzle ORM', 'Vercel'],
  },
  {
    company: 'Move37AI',
    logo: '/move37-logo.png',
    role: 'Software Development Engineer',
    duration: 'Jan 2026 – Aug 2026',
    location: 'Delhi, India',
    highlights: [
      'Developed event-driven backend services using Python, Django, Kafka and MongoDB, processing 10,000+ asynchronous events daily and delivering real-time notifications in under 5 seconds.',
      'Designed and shipped 15+ RESTful microservice endpoints for AI-driven, import-export and accounts-receivable platforms, improving backend scalability and transaction orchestration.',
      'Implemented Kafka producer-consumer architectures handling thousands of distributed events with resilient retry and asynchronous processing patterns.',
      'Containerized 6+ backend applications with Docker and streamlined Linux deployment workflows, cutting environment setup from ~2 hours to under 15 minutes.',
    ],
    tech: ['Python', 'Django', 'Kafka', 'MongoDB', 'Docker', 'Microservices', 'REST APIs'],
  },
  {
    company: 'Solytics Partners',
    logo: '/solytics-logo.png',
    role: 'DevOps Consultant',
    duration: 'Mar 2025 – Dec 2025',
    location: 'Pune, India',
    highlights: [
      'Managed and optimized 2 Amazon EKS clusters across 3 environments (development, staging and production) running enterprise applications and analytical platforms.',
      'Automated CI/CD workflows with Jenkins, Groovy, Docker and Kubernetes, reducing manual deployment effort by over 90% and cutting release cycles from days to under an hour across staging and production.',
      'Maintained infrastructure as code for ~20 services with Terraform, Ansible, Helm and AWS, and instrumented them with ELK, Prometheus and Grafana observability while supporting AWS and Azure cloud modernization.',
    ],
    tech: ['Kubernetes', 'EKS', 'Jenkins', 'Docker', 'Terraform', 'Ansible', 'Helm', 'AWS', 'Prometheus', 'Grafana', 'ELK'],
  },
  {
    company: 'Solytics Partners',
    logo: '/solytics-logo.png',
    role: 'Backend Developer',
    duration: 'Mar 2024 – Feb 2025',
    location: 'Pune, India',
    highlights: [
      'Engineered WarpDrive, a Python execution framework that reduced task execution latency by nearly 80% across distributed notebook workflows.',
      'Re-architected asynchronous execution services in Django and Golang, accelerating processing throughput 4x for large-scale analytical workloads.',
      'Built core components of the User Defined Functions ecosystem for Nimbus, a banking platform, integrated with Gitea, JupyterHub, Vault, Kubernetes and AWS services.',
    ],
    tech: ['Python', 'Django', 'Golang', 'Kubernetes', 'JupyterHub', 'Vault', 'Gitea', 'AWS'],
  },
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Head>
          <title>Experience | Shivam Omer</title>
          <meta name="description" content="Professional experience of Shivam Omer — backend developer and DevOps engineer focused on scalable systems and cloud automation." />
          <link rel="canonical" href="https://shivam-portfolio-gold-omega.vercel.app/experience" />
        </Head>

        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">Experience</p>
            <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Professional Journey</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
              Building scalable backend systems and reliable cloud infrastructure across startup and enterprise environments.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <section key={idx} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/60">
                <div className="flex flex-wrap items-center gap-3">
                  {exp.logo && (
                    <Image src={exp.logo} alt={`${exp.company} logo`} width={42} height={42} className="rounded-md" />
                  )}
                  <div>
                    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{exp.company}</h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{exp.role} • {exp.duration} • {exp.location}</p>
                  </div>
                </div>

                <ul className="mt-5 list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                  {exp.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <Badge key={i}>{t}</Badge>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </motion.div>
  );
}
