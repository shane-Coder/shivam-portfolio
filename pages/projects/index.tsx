import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'RideShare',
      tech: ['Node.js', 'ExpressJS', 'Solidity', 'Blockchain'],
      description: 'Blockchain-based carpool platform saving 31% in ride charges. Built with encrypted peer-to-peer smart contracts.',
      link: 'https://github.com/shane-Coder/RideShare'
    },
    {
      title: 'Shopping',
      tech: ['Python', 'Django', 'SQLite'],
      description: 'Scalable e-commerce site with secure user auth, matrix image processing, and seamless cart-to-checkout flow.',
      link: 'https://github.com/shane-Coder/shopping'
    },
    {
      title: 'ImageUploader',
      tech: ['Python', 'Django', 'Pillow'],
      description: 'Secure image upload system with encryption, metadata tagging, and optimized backend performance.',
      link: 'https://github.com/shane-Coder/Image-Uploader'
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
            <Link href={project.link} legacyBehavior>
              <a
                target="_blank"
                className="text-green-500 hover:text-black dark:hover:text-white transition duration-300"
              >
                View on GitHub →
              </a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
