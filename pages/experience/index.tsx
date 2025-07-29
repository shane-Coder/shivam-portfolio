
import Head from 'next/head';
import Image from 'next/image';

export default function Experience() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-12">
      <Head>
        <title>Experience | Shivam Omer</title>
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Experience</h1>

        <section className="border-l-2 border-gray-300 dark:border-gray-700 pl-6 relative">
          {/* Timeline marker */}
          <div className="absolute top-0 left-[-11px] w-4 h-4 bg-green-500 rounded-full"></div>

          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/solytics-logo.png" alt="Solytics Logo" width={40} height={40} />
              <h2 className="text-2xl font-semibold">Solytics Partners</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-400 mb-1">
              <strong>Backend Developer</strong> (Mar 2024 – Feb 2025)
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-3">
              <li>Built WarpDrive CLI for seamless JupyterHub workflows (cut latency by 80%)</li>
              <li>Developed distributed execution engine using Django + Golang</li>
              <li>Managed CI/CD with Jenkins, Groovy, and pre-commit hooks</li>
            </ul>

            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {['Python', 'Django', 'Golang', 'Jenkins', 'GitHub Actions'].map((tech, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-800 dark:text-white">{tech}</span>
              ))}
            </div>

            {/* Timeline marker */}
            <div className="absolute top-[170px] left-[-11px] w-4 h-4 bg-green-500 rounded-full"></div>

            <p className="text-gray-700 dark:text-gray-400 mb-1">
              <strong>DevOps Engineer</strong> (Mar 2025 – May 2025)
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-3">
              <li>Led containerized deployments via Docker, Kubernetes, Helm, and Terraform</li>
              <li>Implemented and integrated <code>h2o.automl</code> for production ML pipelines</li>
              <li>Worked across AWS, Azure, and on-premise infra environments</li>
            </ul>

            <div className="flex flex-wrap gap-2 text-sm">
              {['Docker', 'Kubernetes', 'Helm', 'Terraform', 'Ansible', 'AWS', 'Azure'].map((tech, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-800 dark:text-white">{tech}</span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
