import { languages } from '@/config/navigation'
import { useContent } from '@/hooks/useContent'
import About from '@/components/About/index'

interface AboutPageProps {
  params: {
    lang: string
  }
}

interface AboutContent {
  heroTitle: string
  heroDescription: string
  launchDate: string
  location: string
  whyHereTitle: string
  whyHereContent: string
  whyHerePoints: string[]
  orderTitle: string
  orderDescription: string
  orderStats: string
  closingQuote: string
  closingQuoteAuthor: string
}

export default function AboutPage({ params: { lang } }: AboutPageProps) {
  const { data } = useContent(`pages/about.${lang}`)

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