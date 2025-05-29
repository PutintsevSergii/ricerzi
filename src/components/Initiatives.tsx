import { HeartIcon, HandRaisedIcon, FlagIcon } from '@heroicons/react/24/outline'

interface Initiative {
  title: string
  description: string
  icon: string
}

interface InitiativesProps {
  initiatives: Initiative[],
  initiativesExplanation: string
}

const iconMap = {
  heart: HeartIcon,
  hand: HandRaisedIcon,
  flag: FlagIcon,
}

export default function Initiatives({ initiatives, initiativesExplanation }: InitiativesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Our Initiatives
          </h2>
          <p className="text-lg text-text mb-12 max-w-3xl mx-auto">
            {initiativesExplanation}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {initiatives.map((initiative) => {
            const Icon = iconMap[initiative.icon as keyof typeof iconMap]
            return (
              <div
                key={initiative.title}
                className="bg-background rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-4">
                  {initiative.title}
                </h3>
                <p className="text-text">{initiative.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 