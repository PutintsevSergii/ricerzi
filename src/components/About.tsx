import Image from 'next/image'

export interface AboutValue {
  title: string
  description: string
}

export interface AboutMilestone {
  year: string
  description: string
}

export interface AboutContent {
  heroTitle: string
  heroDescription: string
  missionTitle: string
  missionContent: string
  valuesTitle: string
  values: AboutValue[]
  image: string
  imageAlt: string
  historyTitle: string
  historyContent: string
  milestones: AboutMilestone[]
}

export interface AboutPageProps {
  params: {
    lang: string
  }
}

interface AboutProps {
  title: string
  content: string
  values?: AboutValue[]
  image?: string
  imageAlt?: string
}

export default function About({ title, content, values, image, imageAlt }: AboutProps) {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={image || "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=2070"}
              alt={imageAlt || "Knights of John Paul II members"}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">
              {title}
            </h2>
            <div className="prose prose-lg text-text mb-6">
              {content}
            </div>
            {values && (
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                      {index + 1}
                    </span>
                    <span className="ml-3 text-text">
                      <strong className="font-semibold">{value.title}</strong> - {value.description}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 