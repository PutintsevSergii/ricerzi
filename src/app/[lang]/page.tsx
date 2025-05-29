import { notFound } from 'next/navigation'
import { useContent } from '@/hooks/useContent'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Initiatives from '@/components/Initiatives'

// Define supported languages
const languages = ['lv', 'pl', 'en', 'ua']

export default function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  // Check if the language is supported
  if (!languages.includes(lang)) {
    notFound()
  }

  // Load language-specific content
  const { data: content } = useContent(`pages/home.${lang}`)

  if (!content) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Hero 
        title={content.heroTitle}
        description={content.heroDescription}
      />
      <About 
        title={content.aboutTitle}
        content={content.aboutContent}
      />
      <Initiatives initiatives={content.initiatives} initiativesExplanation={content.initiativesExplanation} />
    </div>
  )
}

// Generate static params for all supported languages
export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
} 