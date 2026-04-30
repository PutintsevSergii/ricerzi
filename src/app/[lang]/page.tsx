import { getPageContent } from '@/lib/content'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Initiatives from '@/components/Initiatives'
import { isLanguageCode, languages } from '@/config/navigation'
import { notFound } from 'next/navigation'

export default function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  if (!isLanguageCode(lang)) {
    notFound()
  }

  // Load language-specific content
  const { data: content } = getPageContent('home', lang)

  if (!content) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Hero content={content} />
      <About
        image="/lv_simb.png"
        title={content.aboutTitle}
        content={content.aboutContent}
      />
      <Initiatives 
        initiatives={content.initiatives} 
        initiativesExplanation={content.initiativesExplanation}
        title={content.initiativesTitle}
      />
    </div>
  )
}

// Generate static params for all supported languages
export async function generateStaticParams() {
  return languages.map(({ code }) => ({ lang: code }))
} 
