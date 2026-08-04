import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      company: 'Move37AI',
      logo: '/move37-logo.png',
      role: 'Software Developer Engineer',
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
      roles: [
        {
          title: 'Backend Developer',
          duration: 'Mar 2024 – Feb 2025',
          location: 'Pune, India',
          highlights: [
            'Engineered WarpDrive, a Python-based execution framework that reduced task execution latency by nearly 80%.',
            'Re-architected asynchronous execution services using Django and Golang to accelerate large-scale analytical workloads.',
            'Built backend APIs and orchestration layers supporting concurrent execution workflows and distributed processing.',
          ],
          tech: ['Python', 'Django', 'Golang', 'PostgreSQL', 'REST APIs'],
        },
        {
          title: 'DevOps Consultant',
          duration: 'Mar 2025 – Dec 2025',
          location: 'Pune, India',
          highlights: [
            'Automated CI/CD pipelines with Jenkins, Groovy, Docker, and Kubernetes, cutting manual deployment effort by over 90%.',
            'Provisioned cloud-native infrastructure with Terraform, Helm, and AWS services to improve deployment consistency and operational reliability.',
            'Supported multi-cloud environments and infrastructure automation for production systems.',
          ],
          tech: ['Docker', 'Kubernetes', 'Terraform', 'Helm', 'AWS', 'Jenkins', 'CI/CD'],
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <main className="min-h-screen bg-white px-6 py-16 text-black dark:bg-black dark:text-white">
        <Head>
          <title>Experience | Shivam Omer</title>
          <meta name="description" content="Professional experience of Shivam Omer — backend developer and DevOps engineer focused on scalable systems and cloud automation." />
        </Head>

        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">Experience</p>
            <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Professional Journey</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              Building scalable backend systems and reliable cloud infrastructure across startup and enterprise environments.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <section key={idx} className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-800 dark:bg-slate-900/60">
                <div className="flex flex-wrap items-center gap-3">
                  {exp.logo && (
                    <Image src={exp.logo} alt={`${exp.company} logo`} width={42} height={42} className="rounded-md" />
                  )}
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{exp.company}</h2>
                    {!exp.roles && <p className="text-sm text-gray-600 dark:text-gray-400">{exp.role} • {exp.duration} • {exp.location}</p>}
                  </div>
                </div>

                {!exp.roles && (
                  <>
                    <ul className="mt-5 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                      {exp.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span key={i} className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {exp.roles && exp.roles.map((role, i) => (
                  <div key={i} className="mt-5 rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-950/70">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{role.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{role.duration} • {role.location}</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                      {role.highlights.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.tech.map((t, k) => (
                        <span key={k} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
    </motion.div>
  );
}
