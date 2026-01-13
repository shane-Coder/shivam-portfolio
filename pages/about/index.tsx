import Head from "next/head";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <main className="bg-white text-black dark:bg-black dark:text-white min-h-screen p-6">
        <Head>
          <title>About — Shivam Omer</title>
          <meta
            name="description"
            content="Learn more about Shivam Omer — a Python Backend Developer and DevOps Engineer experienced in APIs, automation, and scalable cloud systems."
          />
        </Head>

        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m <strong>Shivam Omer</strong>, a <span className="font-semibold">Software Engineer</span> currently working at <strong>Move37 AI</strong>, where I help build AI-driven data and intelligent document processing systems.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I have strong experience in backend engineering and DevOps, with hands-on work in Python, Go, Django, FastAPI, Docker, Kubernetes, and cloud infrastructure. Previously at Solytics Partners, I worked across backend development and DevOps, contributing to high-impact internal platforms and production systems.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I enjoy working close to the problem space, owning systems end-to-end, and building software that is reliable, scalable, and easy to maintain.
          </p>

          {/* --- CURRENT ROLE --- */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Current Role</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I currently work at <strong>Move37 AI Technologies Pvt. Ltd.</strong> as a <span className="font-semibold">Software Engineer</span>.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700 dark:text-gray-400">
              <li>Working on AI-driven backend systems and data processing pipelines.</li>
              <li>Designing and building scalable backend services with a focus on clean architecture and performance.</li>
              <li>Collaborating closely with founders and senior engineers on system design and technical execution.</li>
            </ul>
          </section>

          {/* --- PAST EXPERIENCE --- */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Previous Experience</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Previously, I worked at <strong>Tussle Digital</strong> and its subsidiary <strong>RakshaIT</strong> as a <span className="font-semibold">Python Backend Developer</span>, supporting enterprise clients including <strong>APS (Australia Payroll Services)</strong>.
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700 dark:text-gray-400">
              <li>Resolved production issues and client queries using PostgreSQL, SQL queries, and Python scripts.</li>
              <li>Worked on virtual machines and Remote Desktop Protocol (RDP) for Windows and Linux server environments.</li>
              <li>Developed and maintained REST APIs using Django and FastAPI.</li>
              <li>Handled CRUD operations, data validation, and API testing with Postman.</li>
              <li>Collaborated with cross-functional teams across macOS, Linux, and Windows systems.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I worked at <strong>Solytics Partners</strong> I initially joined as a Backend Developer (Mar 2024 – Feb 2025) and later transitioned into a DevOps Engineer role (Mar 2025 – May 2025).
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700 dark:text-gray-400">
              <li>
                Built <strong>WarpDrive</strong>, a Python CLI tool that reduced
                execution latency by 80% for JupyterHub workflows.
              </li>
              <li>
                Designed a distributed execution engine using{" "}
                <strong>Django</strong> and <strong>Golang</strong>.
              </li>
              <li>
                Automated CI/CD pipelines using{" "}
                <strong>Jenkins</strong>, <strong>Groovy</strong>, and{" "}
                <strong>GitHub Actions</strong>.
              </li>
              <li>
                Deployed applications with <strong>Docker</strong>,{" "}
                <strong>Kubernetes</strong>, <strong>Helm</strong>, and{" "}
                <strong>Terraform</strong> across AWS and on-prem environments.
              </li>
            </ul>
          </section>

          {/* --- TECH STACK --- */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 dark:text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold underline">Languages:</span>{" "}
                  Python, Go, SQL, Java, C++
                </li>
                <li>
                  <span className="font-semibold underline">Frameworks:</span>{" "}
                  Django, FastAPI, REST API, Flask
                </li>
                <li>
                  <span className="font-semibold underline">Databases:</span>{" "}
                  PostgreSQL, MySQL
                </li>
              </ul>

              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-semibold underline">DevOps:</span>{" "}
                  Docker, Kubernetes, Helm, Jenkins
                </li>
                <li>
                  <span className="font-semibold underline">
                    Cloud & Infra:
                  </span>{" "}
                  AWS, Terraform, Ansible, Azure
                </li>
                <li>
                  <span className="font-semibold underline">Tools:</span>{" "}
                  GitHub Actions, Postman, Linux, RDP
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Key Highlights</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Optimized distributed execution pipelines reducing runtime by 80%.</li>
              <li>Designed scalable backend APIs with FastAPI and Django for production workloads.</li>
              <li>Automated CI/CD pipelines across multi-cloud infrastructure (AWS, Azure, on-prem).</li>
            </ul>
          </section>

          {/* --- RESUME --- */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Resume</h2>
            <a
              href="/ShivamOmer.pdf"
              download
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-4 py-2 rounded hover:opacity-90 transition shadow-md"
            >
              📄 Download Resume →
            </a>
          </section>

          {/* --- PERSONAL TOUCH --- */}
          <p className="text-sm text-gray-700 dark:text-gray-400 pt-8 leading-relaxed">
            Outside of work, I enjoy exploring cloud automation, learning new
            programming languages like Go, and helping junior developers get
            started with backend and DevOps. When I’m not coding, I’m usually
            debugging with a cup of chai ☕.
          </p>

          <img src="https://github-readme-stats.vercel.app/api?username=shane-Coder&show_icons=true&theme=tokyonight" alt="GitHub stats" />

        </div>
      </main>
    </motion.div>
  );
}
