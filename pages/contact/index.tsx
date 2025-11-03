import Head from 'next/head';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-12">
      <Head>
        <title>Contact | Shivam Omer</title>
      </Head>

      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-6">
          Feel free to reach out via email, LinkedIn, GitHub, Twitter, or phone. I'm always open to interesting projects and conversations.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a href="mailto:shivamrajomar@gmail.com" className="flex items-center gap-2 text-blue-500 hover:underline">
            <FaEnvelope /> shivamrajomar@gmail.com
          </a>

          <a href="https://www.linkedin.com/in/programmer-shivam/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:underline">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="https://github.com/shane-Coder" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:underline">
            <FaGithub /> GitHub
          </a>

          <a href="https://x.com/shivam1953811" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:underline">
            <FaTwitter /> Twitter
          </a>

          <a href="tel:+918303669396" className="flex items-center gap-2 text-blue-500 hover:underline">
            <FaPhone /> +91-8303669396
          </a>
        </div>

        <p className="mt-6 text-gray-600 dark:text-gray-400 text-center">
          Currently open for backend & DevOps roles — remote or on-site. Let’s build something great together 🚀
        </p>

      </div>
    </main>
  );
}
