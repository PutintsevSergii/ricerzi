import { Inter, Merriweather } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

// Define supported languages
const languages = ['lv', 'pl', 'en', 'ua']

// Language-specific metadata
const metadataByLang = {
  lv: {
    title: 'Jāņa Pāvila II Bruņinieki',
    description: 'Katoļu bruņinieku ordenis Jāņa Pāvila II vārdā',
  },
  pl: {
    title: 'Rycerze Jana Pawła II',
    description: 'Katolicki Zakon Rycerzy Jana Pawła II',
  },
  en: {
    title: 'Knights of John Paul II',
    description: 'Catholic Order of Knights of John Paul II',
  },
  ua: {
    title: 'Лицарі Івана Павла II',
    description: 'Католицький орден лицарів Івана Павла II',
  },
}

export const metadata = {
  title: 'Knights of John Paul II',
  description: 'Catholic Order of Knights of John Paul II',
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
  const langMetadata = metadataByLang[lang as keyof typeof metadataByLang]

  return (
    <html lang={lang}>
      <head>
        <title>{langMetadata.title}</title>
        <meta name="description" content={langMetadata.description} />
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