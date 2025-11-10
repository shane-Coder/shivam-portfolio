import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Tussle Digital",
      logo: "/tussle-logo.png",
      role: "Python Backend Developer",
      duration: "Sept 2025 – Present",
      highlights: [
        "Developing and maintaining backend APIs using Python (FastAPI & Django).",
        "Handling client project for APS (Australia Payroll Services) — managing technical queries, backend issues, and optimizing performance.",
        "Leveraging SQL, PostgreSQL, and Python scripts for debugging and analytical reports.",
        "Managing Virtual Machines and RDP sessions on Linux & Windows servers.",
        "Collaborating with DevOps teams for CI/CD automation and API deployment on AWS.",
      ],
      tech: ["Python", "Django", "FastAPI", "PostgreSQL", "SQL", "AWS", "Docker", "Linux", "RDP"],
    },
    {
      company: "RakshaIT (Subsidiary of Tussle Digital)",
      logo: "/rakshait-logo.png",
      role: "Python Backend Developer",
      duration: "Sept 2025 – Present",
      highlights: [
        "Building RESTful APIs using Django and FastAPI frameworks with secure authentication.",
        "Implementing CRUD operations, schema optimization, and data validation in PostgreSQL.",
        "Testing APIs using Postman and ensuring adherence to OpenAPI standards.",
        "Working across macOS, Linux, and Windows environments for cross-platform development.",
        "Contributing to backend architecture and integration of new features for enterprise clients.",
      ],
      tech: ["Python", "Django", "FastAPI", "Postman", "PostgreSQL", "Linux", "macOS", "Windows"],
    },
    {
      company: "Solytics Partners",
      logo: "/solytics-logo.png",
      roles: [
        {
          title: "Backend Developer",
          duration: "Mar 2024 – Feb 2025",
          highlights: [
            "Developed WarpDrive CLI tool (Python-based) that accelerated JupyterHub execution by 80%.",
            "Engineered a distributed execution engine (Django + Golang) cutting task runtimes from 5 mins to <1 min.",
            "Created and optimized APIs for distributed workloads and task orchestration.",
            "Implemented CI/CD pipelines using Jenkins, Groovy, and GitHub Actions.",
            "Collaborated with data science teams to deploy ML workflows efficiently.",
          ],
          tech: ["Python", "Django", "Golang", "Jenkins", "GitHub Actions", "PostgreSQL"],
        },
        {
          title: "DevOps Engineer",
          duration: "Mar 2025 – Aug 2025",
          highlights: [
            "Transitioned internally to explore end-to-end DevOps lifecycle and infrastructure automation.",
            "Led containerized deployments with Docker, Kubernetes, Helm, and Terraform.",
            "Implemented h2o.automl integration for production-grade machine learning pipelines.",
            "Deployed and managed multi-cloud infrastructure (AWS, Azure, and on-premises).",
            "Automated environment provisioning using Ansible and Terraform, improving deployment speed by 60%.",
          ],
          tech: [
            "Docker",
            "Kubernetes",
            "Helm",
            "Terraform",
            "Ansible",
            "AWS",
            "Azure",
            "CI/CD",
          ],
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
      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-12">
        <Head>
          <title>Experience | Shivam Omer</title>
          <meta
            name="description"
            content="Professional experience of Shivam Omer — Python Backend Developer and DevOps Engineer skilled in Django, FastAPI, Docker, and AWS."
          />
        </Head>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">Professional Experience</h1>

          {experiences.map((exp, idx) => (
            <section
              key={idx}
              className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6 pb-12 last:pb-0"
            >
              <div className="absolute -left-[11px] top-2 w-4 h-4 bg-green-500 rounded-full shadow-md"></div>

              {/* --- Company Header --- */}
              <div className="flex items-center gap-3 mb-4">
                {exp.logo && (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={40}
                    height={40}
                    className="rounded-sm"
                  />
                )}
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {exp.company}
                </h2>
              </div>

              {/* --- Single Role --- */}
              {!exp.roles &&
                <>
                  <p className="text-gray-700 dark:text-gray-400 italic mb-2">
                    {exp.role} | {exp.duration}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                    {exp.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              }

              {/* --- Multiple Roles (like Solytics) --- */}
              {exp.roles && exp.roles.map((role, i) => (
                <div key={i} className="mb-8">
                  <p className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                    {role.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 italic mb-2">
                    {role.duration}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                    {role.highlights.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {role.tech.map((t, k) => (
                      <span
                        key={k}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>

        <div className="text-center mt-10 text-gray-600 dark:text-gray-400 text-sm">
          <p>
            🚀 Bridging Backend Engineering & DevOps — delivering reliable, scalable, and automated systems.
          </p>
          <p>Let’s collaborate to build impactful technology.</p>
        </div>
      </main>
    </motion.div>
  );
}
