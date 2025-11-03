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
            Hi, I’m <strong>Shivam Omer</strong> — a{" "}
            <span className="font-semibold">Python Backend Developer</span> and{" "}
            <span className="font-semibold">DevOps Engineer</span> with over 1.5
            years of experience building scalable systems, optimizing APIs, and
            managing automation pipelines. I’m passionate about clean code,
            cloud-native design, and solving real-world business challenges.
          </p>

          {/* --- CURRENT ROLE --- */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Current Role</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I currently work at{" "}
              <strong>Tussle Digital</strong> and its subsidiary{" "}
              <strong>RakshaIT</strong> as a{" "}
              <span className="font-semibold">Python Backend Developer</span>.
              My role involves backend development, system maintenance, and
              client support for <strong>APS (Australia Payroll Services)</strong>.
            </p>

            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-700 dark:text-gray-400">
              <li>
                Troubleshoot, analyze, and resolve client issues raised by APS
                using <strong>PostgreSQL</strong>, <strong>SQL queries</strong>,
                and Python scripts.
              </li>
              <li>
                Work with <strong>virtual machines</strong> and{" "}
                <strong>Remote Desktop Protocol (RDP)</strong> for environment
                management across Windows and Linux servers.
              </li>
              <li>
                Develop and maintain REST APIs using{" "}
                <strong>Django</strong> and <strong>FastAPI</strong> for
                RakshaIT projects.
              </li>
              <li>
                Perform <strong>CRUD operations</strong>, data modeling, and API
                testing with <strong>Postman</strong>.
              </li>
              <li>
                Collaborate across teams to deploy and monitor services on{" "}
                <strong>macOS, Linux, and Windows</strong> environments.
              </li>
            </ul>
          </section>

          {/* --- PAST EXPERIENCE --- */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Previous Experience</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Previously, I worked at <strong>Solytics Partners</strong> from
              March 2024 to August 2025. I initially joined as a Backend Developer
              and later transitioned into a DevOps-focused role.
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
