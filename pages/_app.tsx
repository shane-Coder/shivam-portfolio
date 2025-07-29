import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <div className="pt-20">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
