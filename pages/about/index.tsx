import Head from 'next/head';

export default function About() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white min-h-screen p-6">

      <Head>
        <title>About — Shivam Omer</title>
      </Head>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">About Me</h1>

        <p className="text-gray-700 dark:text-gray-300">
          Hi, I am <span className="bg-white text-black dark:bg-black dark:text-white font-semibold">Shivam Omer</span> — a Backend Developer and DevOps Engineer with 1.5+ years of hands-on experience in building scalable systems and automation pipelines.
          I enjoy solving real-world problems with clean code, robust architecture, and end-to-end ownership.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Current Role</h2>
          <p className="text-gray-700 dark:text-gray-300">
            I worked at <strong>Solytics Partners</strong> from Mar 2024 to May 2025. Initially as a Backend Developer and then transitioned into DevOps.
            I built a CLI tool named <strong>WarpDrive</strong>, engineered a distributed execution engine, and automated CI/CD pipelines across cloud + on-prem environments.
          </p>
        </section>

        <section>
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 dark:text-gray-300">
            <ul className="list-disc list-inside space-y-2">
            <li>
                <span className="font-semibold underline">Languages:</span> Python, Golang, C++, Java
            </li>
            <li>
                <span className="font-semibold underline">Web:</span> Django, FastAPI, REST API, Flask
            </li>
            <li>
                <span className="font-semibold underline">Frontend:</span> HTML, CSS, JavaScript
            </li>
            </ul>

            <ul className="list-disc list-inside space-y-2">
            <li>
                <span className="font-semibold underline">DevOps:</span> Docker, Kubernetes, Helm
            </li>
            <li>
                <span className="font-semibold underline">Infrastructure:</span> Terraform, Ansible, AWS, Azure
            </li>
            <li>
                <span className="font-semibold underline">Tools:</span> GitHub Actions, Jenkins, Postman
            </li>
            </ul>
        </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Resume</h2>
          <a
            href="/ShivamOmer.pdf"
            download
            className="inline-block bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Download Resume →
          </a>
        </section>

        <p className="text-sm text-gray-700 dark:text-gray-300 pt-8">
          Outside work, I love simplifying tech ideas, helping junior devs, and sipping tea while debugging!
        </p>
      </div>
    </main>
  );
}
