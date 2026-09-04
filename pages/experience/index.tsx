import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Badge from '../../components/Badge';

const experiences = [
  {
    company: 'Move37AI',
    logo: '/move37-logo.png',
    role: 'Software Development Engineer',
    duration: 'Jan 2026 – Present',
    location: 'Delhi, India',
    highlights: [
      'Developed event-driven backend services using Python, Django, Kafka, and MongoDB for high-volume asynchronous workflows.',
      'Designed RESTful microservices for import-export and accounts receivable systems to improve orchestration and scalability.',
      'Implemented Kafka-based producer-consumer pipelines with resilient retry handling and asynchronous processing.',
      'Containerized applications with Docker and streamlined Linux-based deployment workflows across development and cloud environments.',
    ],
    tech: ['Python', 'Django', 'Kafka', 'MongoDB', 'Docker', 'Microservices', 'APIs'],
  },
  {
    company: 'Solytics Partners',
    logo: '/solytics-logo.png',
    role: 'Backend Developer',
    duration: 'Mar 2024 – Dec 2025',
    location: 'Pune, India',
    highlights: [
      'Engineered WarpDrive, a Python-based distributed task execution framework that reduced task execution latency by nearly 80% across distributed notebook workflows.',
      'Re-architected asynchronous execution services using Django and Golang, accelerating processing throughput by 4x for large-scale analytical workloads.',
      'Automated CI/CD pipelines with Jenkins, Groovy, Docker, and Kubernetes, decreasing manual deployment effort by over 90% and cutting release cycles from days to under 1 hour.',
      'Provisioned cloud-native infrastructure for 10+ services using Terraform, Helm, and AWS, improving deployment consistency and reducing configuration drift incidents.',
      'Built scalable backend APIs and orchestration layers supporting 100+ concurrent execution pipelines with fault-tolerant retry and microservice coordination.',
    ],
    tech: ['Python', 'Django', 'Golang', 'PostgreSQL', 'Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'AWS', 'CI/CD'],
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
              <section key={idx} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60">
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
