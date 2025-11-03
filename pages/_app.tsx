import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Shivam Omer | Backend Developer & DevOps Engineer</title>
        <meta
          name="description"
          content="Portfolio of Shivam Omer – Backend Developer & DevOps Engineer skilled in Python, Go, Django, FastAPI, Docker, and AWS."
        />
        <meta
          name="keywords"
          content="Shivam Omer, Backend Developer, Python Developer, Golang, Django, FastAPI, DevOps, AWS, Docker, Kubernetes, Terraform, Ansible, CI/CD, PostgreSQL"
        />
        <meta name="author" content="Shivam Omer" />
        <meta name="robots" content="index, follow" />

        {/* 🌍 Open Graph */}
        <meta property="og:title" content="Shivam Omer | Backend Developer & DevOps Engineer" />
        <meta
          property="og:description"
          content="Building scalable APIs, DevOps pipelines, and cloud-native systems using Python, Go, and AWS."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shivam-portfolio-gold-omega.vercel.app/" />
        <meta property="og:image" content="/profile.jpg" />

        {/* 🐦 Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shivam Omer | Backend Developer & DevOps Engineer" />
        <meta
          name="twitter:description"
          content="Python & Go Developer | DevOps Engineer | Building scalable APIs and automation pipelines."
        />
        <meta name="twitter:image" content="/profile.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />

        {/* 🧠 JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Shivam Omer',
              url: 'https://shivam-portfolio-gold-omega.vercel.app/',
              sameAs: [
                'https://www.linkedin.com/in/programmer-shivam/',
                'https://github.com/shane-Coder',
                'https://shivam-portfolio-gold-omega.vercel.app/',
              ],
              jobTitle: 'Backend Developer & DevOps Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'Tussle Digital / Raksha IT',
              },
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
              },
              knowsAbout: [
                'Python',
                'Golang',
                'Django',
                'FastAPI',
                'Docker',
                'Kubernetes',
                'AWS',
                'Terraform',
                'Ansible',
                'PostgreSQL',
                'CI/CD',
              ],
              image: 'https://shivam-portfolio-gold-omega.vercel.app/profile.jpg',
              description:
                'Backend Developer & DevOps Engineer building scalable APIs, automation pipelines, and cloud infrastructure with Python, Go, and AWS.',
            }),
          }}
        />
      </Head>

      <Navbar />
      <div className="pt-20">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
