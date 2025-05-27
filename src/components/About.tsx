import Image from 'next/image'

interface AboutProps {
  title: string
  content: string
}

export default function About({ title, content }: AboutProps) {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=2070"
              alt="Knights of John Paul II members"
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
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                  1
                </span>
                <span className="ml-3 text-text">
                  <strong className="font-semibold">Protection of Life</strong> - we work to defend life from conception to natural death
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                  2
                </span>
                <span className="ml-3 text-text">
                  <strong className="font-semibold">Charitable Work</strong> - we help those in need through the spirit of mercy
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                  3
                </span>
                <span className="ml-3 text-text">
                  <strong className="font-semibold">Support for Ukraine</strong> - we engage in humanitarian aid for our neighbors in need
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 