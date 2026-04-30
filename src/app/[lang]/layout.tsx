import { Inter, Merriweather } from 'next/font/google'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
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

type LanguageParams = Promise<{ lang: string }>

export async function generateMetadata({ params }: { params: LanguageParams }): Promise<Metadata> {
  const { lang } = await params

  if (!isLanguageCode(lang)) {
    return {}
  }

  const { data } = getSiteContent(lang)

  return {
    title: data.title,
    description: data.description,
  }
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: LanguageParams
}) {
  const { lang } = await params

  // Check if the language is supported
  if (!isLanguageCode(lang)) {
    notFound()
  }

  // Get language-specific metadata and footer fields
  const { data } = getSiteContent(lang)
  const { orgName, address, email, phone, copyright } = data

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
    <div className={`${inter.variable} ${merriweather.variable} min-h-screen flex flex-col font-body bg-background text-text`}>
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
  )
} 
