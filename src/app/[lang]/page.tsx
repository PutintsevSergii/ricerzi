import { notFound } from 'next/navigation'
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

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Initiatives />
    </div>
  )
}

// Generate static params for all supported languages
export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
} 