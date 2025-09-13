import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Capstone Todo API",
      description: "A production-ready REST API for task management, built with Go and PostgreSQL, containerized using Docker, and deployed on Render. Implements secure CRUD operations and demonstrates best practices in backend design.",
      tech: ["Go", "Docker", "PostgreSQL", "Render", "DSA", "REST API", "Cloud Deployment"],
      github: "https://github.com/shane-Coder/capstone-todo-api",
      live: "https://go-todo-api-i7ih.onrender.com/"
    },
    {
      title: 'RideShare',
      description: 'Blockchain-based carpool platform saving 31% in ride charges. Built with encrypted peer-to-peer smart contracts.',
      tech: ['Node.js', 'ExpressJS', 'Solidity', 'Blockchain'],
      github: 'https://github.com/shane-Coder/RideShare',
      live: 'https://github.com/shane-Coder/RideShare' // No live link available
    },
    {
      title: 'Shopping',
      description: 'Scalable e-commerce site with secure user auth, matrix image processing, and seamless cart-to-checkout flow.',
      tech: ['Python', 'Django', 'SQLite'],
      github: 'https://github.com/shane-Coder/shopping',
      live: 'https://github.com/shane-Coder/shopping' // No live link available
    },
    {
      title: 'ImageUploader',
      description: 'Secure image upload system with encryption, metadata tagging, and optimized backend performance.',
      tech: ['Python', 'Django', 'Pillow'],
      github: 'https://github.com/shane-Coder/Image-Uploader',
      live: 'https://github.com/shane-Coder/Image-Uploader' // No live link available
    }
  ];

  return (
    <main className="bg-white text-black dark:bg-black dark:text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-300 dark:border-gray-700 p-6 rounded-lg bg-gray-100 dark:bg-gray-900 transition">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-400 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-800 text-sm px-2 py-1 rounded text-gray-800 dark:text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
            <Link href={project.github} legacyBehavior>
              <a target="_blank" className="text-blue-400 hover:text-white">🐙 GitHub</a>
            </Link>
            <Link href={project.live} legacyBehavior>
              <a target="_blank" className="ml-4 text-green-400 hover:text-white">🔗 Live Demo</a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
