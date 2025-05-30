import Image from 'next/image'

interface AboutProps {
  content: {
    title: string
    description: string
    image: string
    imageAlt: string
    values: Array<{
      title: string
      description: string
    }>
    milestones: Array<{
      year: string
      description: string
    }>
  }
}

export default function About({ content }: AboutProps) {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
            <p className="text-lg mb-8">{content.description}</p>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-4">
              {content.values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary text-2xl mr-3">•</span>
                  <div>
                    <p className="font-semibold">{value.title}</p>
                    <p className="text-gray-600">{value.description}</p>
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

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our History</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.milestones.map((milestone, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-semibold text-primary mb-2">
                    {milestone.year}
                  </p>
                  <p>{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 