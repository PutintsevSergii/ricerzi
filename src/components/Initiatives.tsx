import { HeartIcon, HandRaisedIcon, FlagIcon } from '@heroicons/react/24/outline'

const initiatives = [
  {
    title: 'Ochrona życia',
    description:
      'Działamy na rzecz obrony życia od poczęcia do naturalnej śmierci, organizując modlitwy, marsze i akcje edukacyjne.',
    icon: HeartIcon,
  },
  {
    title: 'Działalność charytatywna',
    description:
      'Pomagamy potrzebującym poprzez organizację zbiórek, wolontariat i wsparcie materialne dla ubogich rodzin.',
    icon: HandRaisedIcon,
  },
  {
    title: 'Wsparcie dla Ukrainy',
    description:
      'Angażujemy się w pomoc humanitarną dla Ukrainy, organizując transporty z darami i wspierając uchodźców.',
    icon: FlagIcon,
  },
]

export default function Initiatives() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Nasze inicjatywy
          </h2>
          <p className="text-lg text-text mb-12 max-w-3xl mx-auto">
            Wspólnie działamy na rzecz dobra wspólnego, realizując nasze główne cele
            w duchu nauczania św. Jana Pawła II.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {initiatives.map((initiative) => (
            <div
              key={initiative.title}
              className="bg-background rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-6">
                <initiative.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-4">
                {initiative.title}
              </h3>
              <p className="text-text">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 