import { useContent } from '@/hooks/useContent'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Initiatives from '@/components/Initiatives'
import { languages } from '@/config/navigation'

export default function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  // Load language-specific content
  const { data: content } = useContent(`pages/home.${lang}`)

  if (!content) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Hero currentLang={lang} />
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