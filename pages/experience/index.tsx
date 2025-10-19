import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-12">
        <Head>
          <title>Experience | Shivam Omer</title>
        </Head>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-center">Experience</h1>

          {/* --- Tussle Digital --- */}
          <section className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6 mb-12">
            <div className="absolute -left-[11px] top-1 w-4 h-4 bg-green-500 rounded-full"></div>

            <h2 className="text-2xl font-semibold mb-1 text-gray-800 dark:text-white">
              🏢 Tussle Digital
            </h2>
            <p className="text-gray-600 dark:text-gray-400 italic mb-2">
              Python Backend Developer | Sept 2025 – Present
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-1">
              <li>Developing and optimizing scalable backend APIs using <strong>Python (FastAPI & Django)</strong>.</li>
              <li>Integrating authentication, data validation, and automated tests for microservices.</li>
              <li>Collaborating with frontend and DevOps teams for <strong>Docker</strong> & <strong>AWS</strong> deployments.</li>
              <li>Contributing to architecture design, code reviews, and CI/CD optimization.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Python", "FastAPI", "Django", "Docker", "AWS", "PostgreSQL"].map((tech) => (
                <span key={tech} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-800 dark:text-white text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* --- Solytics Partners --- */}
          <section className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6">
            <div className="absolute -left-[11px] top-1 w-4 h-4 bg-green-500 rounded-full"></div>

            <div className="flex items-center gap-3 mb-2">
              <Image src="/solytics-logo.png" alt="Solytics Logo" width={40} height={40} />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Solytics Partners
              </h2>
            </div>

            <p className="text-gray-700 dark:text-gray-400 mb-1">
              <strong>Backend Developer</strong> (Mar 2024 – Feb 2025)
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-3">
              <li>Built WarpDrive CLI for seamless JupyterHub workflows (cut latency by 80%).</li>
              <li>Developed distributed execution engine using Django + Golang.</li>
              <li>Managed CI/CD pipelines with Jenkins, Groovy, and GitHub Actions.</li>
            </ul>
            <div className="flex flex-wrap gap-2 text-sm mb-6">
              {['Python', 'Django', 'Golang', 'Jenkins', 'GitHub Actions'].map((tech, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-800 dark:text-white">{tech}</span>
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-400 mb-1">
              <strong>DevOps Engineer</strong> (Mar 2025 – May 2025)
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-3">
              <li>Led containerized deployments with Docker, Kubernetes, Helm, and Terraform.</li>
              <li>Implemented and integrated <code>h2o.automl</code> for ML pipelines.</li>
              <li>Worked across AWS, Azure, and on-premise infrastructure environments.</li>
            </ul>
            <div className="flex flex-wrap gap-2 text-sm">
              {['Docker', 'Kubernetes', 'Helm', 'Terraform', 'Ansible', 'AWS', 'Azure'].map((tech, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-800 dark:text-white">{tech}</span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </motion.div>
  );
}
