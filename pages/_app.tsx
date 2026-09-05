import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Head>
        <title>Shivam Omer | Backend Developer & DevOps Engineer</title>
        <meta
          name="description"
          content="Portfolio of Shivam Omer — Backend Developer and DevOps Engineer skilled in Python, Django, Kafka, Docker, Kubernetes, AWS, and Azure."
        />
        <meta
          name="keywords"
          content="Shivam Omer, Backend Developer, Python Developer, Golang, Django, FastAPI, DevOps, AWS, Azure, Docker, Kubernetes, Terraform, Ansible, CI/CD, Kafka"
        />
        <meta name="author" content="Shivam Omer" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Shivam Omer | Backend Developer & DevOps Engineer" />
        <meta property="og:description" content="Building scalable APIs, event-driven services, and cloud-native infrastructure with Python and modern DevOps practices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shivam-portfolio-gold-omega.vercel.app/" />
        <meta property="og:image" content="https://shivam-portfolio-gold-omega.vercel.app/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shivam Omer | Backend Developer & DevOps Engineer" />
        <meta name="twitter:description" content="Python, Django, Kafka, Docker, Kubernetes, AWS/Azure — building reliable systems at scale." />
        <meta name="twitter:image" content="https://shivam-portfolio-gold-omega.vercel.app/og-image.png" />

        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#09090b" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://shivam-portfolio-gold-omega.vercel.app/#person',
                  name: 'Shivam Omer',
                  url: 'https://shivam-portfolio-gold-omega.vercel.app/',
                  sameAs: [
                    'https://www.linkedin.com/in/programmer-shivam/',
                    'https://github.com/shane-Coder',
                  ],
                  jobTitle: 'Backend Developer & DevOps Engineer',
                  worksFor: {
                    '@type': 'Organization',
                    name: 'Move37AI',
                  },
                  alumniOf: {
                    '@type': 'CollegeOrUniversity',
                    name: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU)',
                  },
                  knowsAbout: ['Python', 'Django', 'FastAPI', 'Kafka', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Terraform', 'CI/CD'],
                  image: 'https://shivam-portfolio-gold-omega.vercel.app/profile.jpg',
                  description: 'Backend Developer & DevOps Engineer building scalable APIs, automation pipelines, and cloud infrastructure with Python, Django, Kafka, and AWS/Azure.',
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://shivam-portfolio-gold-omega.vercel.app/#website',
                  url: 'https://shivam-portfolio-gold-omega.vercel.app/',
                  name: 'Shivam Omer | Backend Developer & DevOps Engineer',
                  description: 'Portfolio of Shivam Omer — Backend Developer and DevOps Engineer skilled in Python, Django, Kafka, Docker, Kubernetes, AWS, and Azure.',
                  publisher: { '@id': 'https://shivam-portfolio-gold-omega.vercel.app/#person' },
                  inLanguage: 'en',
                },
              ],
            }),
          }}
        />
      </Head>

      <Navbar />
      <div className="flex min-h-screen flex-col pt-20">
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
