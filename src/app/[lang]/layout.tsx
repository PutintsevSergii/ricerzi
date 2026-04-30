import { Inter, Merriweather } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getSiteContent } from '@/lib/content'
import { isLanguageCode, navigation, languages } from '@/config/navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
})

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Check if the language is supported
  if (!isLanguageCode(lang)) {
    notFound()
  }

  // Get language-specific metadata and footer fields
  const { data } = getSiteContent(lang)
  const { title, description, orgName, address, email, phone, copyright } = data

  // Get the current language's navigation items
  const currentNavigation = navigation[lang]

  // Prepare languages data for the switcher
  const languagesData = languages.map(lang => ({
    code: lang.code,
    name: lang.name,
    flag: {
      en: '🇬🇧',
      pl: '🇵🇱',
      lv: '🇱🇻',
      ru: '🇷🇺',
    }[lang.code]
  }))

  return (
    <html lang={lang}>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} font-body bg-background text-text`}>
        <div className="min-h-screen flex flex-col">
          <Header 
            currentLang={lang}
            navigation={currentNavigation}
            languages={languagesData}
          />
          <main className="flex-grow">{children}</main>
          <Footer 
            orgName={orgName}
            address={address}
            email={email}
            phone={phone}
            copyright={copyright}
          />
        </div>
      </body>
    </html>
  )
} 
