import { Inter, Merriweather } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useContent } from '@/hooks/useContent'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

// Define supported languages
const languages = ['lv', 'pl', 'en', 'ru']

interface SiteMetadata {
  title: string
  description: string
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Check if the language is supported
  if (!languages.includes(lang)) {
    notFound()
  }

  // Get language-specific metadata
  const { data } = useContent(`site.${lang}`)
  const { title, description } = data as SiteMetadata

  return (
    <html lang={lang}>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} font-body bg-background text-text`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 