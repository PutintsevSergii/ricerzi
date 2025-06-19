'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '../ui/heading'

interface AboutProps {
  content: {
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
}

export default function About({ content }: AboutProps) {
  // Replace spaces with non-breaking spaces in the title
  const formattedTitle = content.heroTitle.replace(/John Paul II/g, 'John\u00A0Paul\u00A0II')

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative bg-primary text-white">
        <div className="container-custom">
          {/* Opening Quote */}
          <div className="py-12 md:py-16 border-b border-primary-light">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-bold mb-4 text-accent-light">
                "{content.closingQuote}"
              </blockquote>
              <p className="text-white/80">— {content.closingQuoteAuthor}</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <Heading level={1} className="text-4xl md:text-5xl font-bold mb-6 text-accent-light">
                {formattedTitle}
              </Heading>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl mb-8">{content.heroDescription}</p>
                <div className="space-y-2 text-accent-light">
                  <p>{content.launchDate}</p>
                  <p>{content.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Combined Why We Exist and Order Information Section */}
      <div className="container-custom py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Why We Exist Column */}
          <div>
            <Heading level={2} className="text-3xl font-bold mb-6 text-primary">
              {content.whyHereTitle}
            </Heading>
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">{content.whyHereContent}</p>
              <ul className="space-y-4">
                {content.whyHerePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order Information Column */}
          <div>
            <Heading level={2} className="text-3xl font-bold mb-6 text-primary">
              {content.orderTitle}
            </Heading>
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">{content.orderDescription}</p>
              <p>{content.orderStats}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 