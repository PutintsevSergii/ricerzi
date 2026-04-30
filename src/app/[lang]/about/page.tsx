import { isLanguageCode, languages } from '@/config/navigation'
import { getPageContent, type AboutContent } from '@/lib/content'
import About from '@/components/About/index'
import { notFound } from 'next/navigation'

interface AboutPageProps {
  params: Promise<{
    lang: string
  }>
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params

  if (!isLanguageCode(lang)) {
    notFound()
  }

  const { data } = getPageContent('about', lang)

  if (!data) {
    return null
  }

  const content: AboutContent = {
    heroTitle: data.heroTitle,
    heroDescription: data.heroDescription,
    launchDate: data.launchDate,
    location: data.location,
    whyHereTitle: data.whyHereTitle,
    whyHereContent: data.whyHereContent,
    whyHerePoints: data.whyHerePoints,
    orderTitle: data.orderTitle,
    orderDescription: data.orderDescription,
    orderStats: data.orderStats,
    closingQuote: data.closingQuote,
    closingQuoteAuthor: data.closingQuoteAuthor
  }

  return <About content={content} />
}

// Generate static params for all supported languages
export async function generateStaticParams() {
  return languages.map(({ code }) => ({ lang: code }))
} 
