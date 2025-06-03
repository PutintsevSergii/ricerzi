'use client'

import Image from 'next/image'
import { useContent } from '@/hooks/useContent'

interface HeroContent {
  heroName: string
  heroSlogan: string
  heroDescription: string
}

interface HeroProps {
  currentLang: string
}

export default function Hero({ currentLang }: HeroProps) {
  const { data: content } = useContent(`pages/home.${currentLang}`)

  if (!content) {
    return null
  }

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        {/* Content section */}
        <div className="px-6 lg:col-span-6 lg:px-0 flex items-center h-[800px]">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex flex-col items-center mb-8">
              <Image
                src="/regula.png"
                alt="Order Regula"
                width={200}
                height={200}
                className="h-32 w-32 sm:h-40 sm:w-40 object-contain"
              />
              <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
                {content.heroName}
              </h1>
            </div>
            <p 
              className="mt-6 text-xl sm:text-2xl leading-8 text-gray-600 bg-gray-100 p-4"
              dangerouslySetInnerHTML={{ __html: content.heroSlogan }}
            />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {content.heroDescription}
            </p>
          </div>
        </div>

        {/* Image section */}
        <div className="relative lg:col-span-6 lg:flex lg:items-center lg:justify-center h-[800px]">
          <div className="relative h-full w-full max-w-2xl mx-auto">
            <Image
              className="relative object-contain h-full w-full"
              src="/jp2.png"
              alt="Hero image"
              width={800}
              height={1200}
              priority
              style={{
                maxHeight: '100%',
                width: 'auto',
                margin: '0 auto'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 