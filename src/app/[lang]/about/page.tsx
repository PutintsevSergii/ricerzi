'use client'

import { notFound } from 'next/navigation'
import { useContent } from '@/hooks/useContent'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Image } from '@/components/ui/image'

const languages = ['lv', 'pl', 'en', 'ua']

export default function AboutPage({ params }: { params: { lang: string } }) {
  if (!languages.includes(params.lang)) {
    notFound()
  }

  const { data: content } = useContent(`pages/about.${params.lang}`)

  if (!content) {
    return null
  }

  return (
    <main>
      <Section className="bg-primary text-white py-20">
        <Container>
          <Heading level={1} className="text-4xl md:text-5xl font-bold mb-6">
            {content.heroTitle}
          </Heading>
          <Text className="text-xl md:text-2xl max-w-3xl">
            {content.heroDescription}
          </Text>
        </Container>
      </Section>

      <Section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Heading level={2} className="text-3xl font-bold mb-6">
                {content.missionTitle}
              </Heading>
              <Text className="text-lg mb-8">{content.missionContent}</Text>
              <Heading level={3} className="text-2xl font-bold mb-4">
                {content.valuesTitle}
              </Heading>
              <ul className="space-y-4">
                {content.values.map((value: any, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary text-2xl mr-3">•</span>
                    <div>
                      <Text className="font-semibold">{value.title}</Text>
                      <Text className="text-gray-600">{value.description}</Text>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16">
        <Container>
          <Heading level={2} className="text-3xl font-bold mb-12 text-center">
            {content.historyTitle}
          </Heading>
          <div className="max-w-3xl mx-auto">
            <Text className="text-lg mb-8">{content.historyContent}</Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.milestones.map((milestone: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <Text className="font-semibold text-primary mb-2">
                    {milestone.year}
                  </Text>
                  <Text>{milestone.description}</Text>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  )
} 