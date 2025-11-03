import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Go File Organizer CLI",
      description:
        "A fast and efficient CLI tool built in Go to automatically organize files into folders based on file extensions. Handles directories safely, runs cross-platform, and simplifies file management.",
      tech: ["Go", "CLI", "File System", "Cross-Platform", "Automation"],
      github: "https://github.com/shane-Coder/file-organizer-cli",
      live: "https://github.com/shane-Coder/file-organizer-cli", 
      preview: "https://rawcdn.githack.com/shane-Coder/file-organizer-cli/main/visualSimulator.html",
      highlights: [
        "Organizes files automatically by extension.",
        "Cross-platform support (Windows, macOS, Linux).",
        "Built with Go’s standard library — no dependencies.",
        "Future-ready: dry-run mode and test automation planned.",
      ],
    },
    {
      title: "Capstone Todo API",
      description:
        "A production-ready REST API for task management, built with Go and PostgreSQL, containerized using Docker, and deployed on Render. Implements secure CRUD operations and clean architecture.",
      tech: [
        "Go",
        "Docker",
        "PostgreSQL",
        "Render",
        "DSA",
        "REST API",
        "Cloud Deployment",
      ],
      github: "https://github.com/shane-Coder/capstone-todo-api",
      live: "https://go-todo-api-i7ih.onrender.com/",
    },
    {
      title: "Learning Go",
      description:
        "Personal repository documenting my journey learning Golang through practical examples and mini-projects.",
      tech: ["Go", "CLI", "Data Structures"],
      github: "https://github.com/shane-Coder/learning-go",
      live: "https://github.com/shane-Coder/learning-go",
    },
    {
      title: "RideShare",
      description:
        "Blockchain-based carpool platform saving 31% in ride charges. Built with encrypted peer-to-peer smart contracts and transparent transactions.",
      tech: ["Node.js", "ExpressJS", "Solidity", "Blockchain"],
      github: "https://github.com/shane-Coder/RideShare",
      live: "https://github.com/shane-Coder/RideShare",
    },
    {
      title: "Shopping",
      description:
        "Scalable e-commerce site with secure user authentication, matrix image processing, and seamless cart-to-checkout flow.",
      tech: ["Python", "Django", "SQLite"],
      github: "https://github.com/shane-Coder/shopping",
      live: "https://github.com/shane-Coder/shopping",
    },
    {
      title: "ImageUploader",
      description:
        "Secure image upload system with encryption, metadata tagging, and optimized backend performance.",
      tech: ["Python", "Django", "Pillow"],
      github: "https://github.com/shane-Coder/Image-Uploader",
      live: "https://github.com/shane-Coder/Image-Uploader",
    },
  ];

  return (
    <main className="bg-white text-black dark:bg-black dark:text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-10 text-center">🚀 Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gradient">
              {project.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-3 leading-relaxed">
              {project.description}
            </p>

            {project.highlights && (
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-3 space-y-1 text-sm">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-gray-800 text-sm px-2 py-1 rounded-full text-gray-800 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link href={project.github} legacyBehavior>
                <a
                  target="_blank"
                  className="text-blue-500 hover:text-blue-300 font-medium transition"
                >
                  🐙 GitHub
                </a>
              </Link>
              {project.live && (
                <Link href={project.live} legacyBehavior>
                  <a
                    target="_blank"
                    className="text-green-500 hover:text-green-300 font-medium transition"
                  >
                    🔗 Live Demo
                  </a>
                </Link>
              )}
              {project.preview && (
                <Link href={project.preview} legacyBehavior>
                  <a
                    target="_blank"
                    className="text-purple-500 hover:text-purple-300 font-medium transition"
                  >
                    🎨 UI Preview
                  </a>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
