import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              {content.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">{content.heroDescription}</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-accent">📅</span>
                <span>{content.launchDate}</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-accent">📍</span>
                <span>{content.location}</span>
              </div>
            </div>
            <Link 
              href="/join"
              className="btn-primary"
            >
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why We're Here Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center text-primary">
              {content.whyHereTitle}
            </h2>
            <div className="prose prose-lg text-text mb-8 text-center">
              {content.whyHereContent}
            </div>
            <ul className="space-y-4">
              {content.whyHerePoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent text-2xl mr-3">•</span>
                  <p className="text-lg text-text">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Order Information Section */}
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
              {content.orderTitle}
            </h2>
            <div className="prose prose-lg text-text mb-6">
              {content.orderDescription}
            </div>
            <p className="text-lg font-semibold text-text">{content.orderStats}</p>
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <blockquote className="text-2xl font-heading italic mb-4 text-primary">
              "{content.closingQuote}"
            </blockquote>
            <cite className="text-lg text-text-light">
              — {content.closingQuoteAuthor}
            </cite>
          </div>
        </div>
      </section>
    </main>
  )
} 