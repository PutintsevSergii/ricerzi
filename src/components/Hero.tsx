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
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
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
              className="mt-6 text-xl sm:text-2xl leading-8 text-gray-600"
              dangerouslySetInnerHTML={{ __html: content.heroSlogan }}
            />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {content.heroDescription}
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="/jp2.png"
            alt="Hero image"
            width={200}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  )
} 