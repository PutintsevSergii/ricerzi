import Image from 'next/image'

export default function About() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=2070"
              alt="Rycerze Jana Pawła II members"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">
              O nas
            </h2>
            <p className="text-lg text-text mb-6">
              Rycerze Jana Pawła II to wspólnota katolicka, która powstała w duchu nauczania
              św. Jana Pawła II. Naszym celem jest budowanie silnej wspólnoty wiernych,
              którzy pragną żyć zgodnie z wartościami chrześcijańskimi i służyć Bogu oraz
              bliźnim.
            </p>
            <p className="text-lg text-text mb-6">
              W naszej działalności skupiamy się na trzech głównych obszarach:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                  1
                </span>
                <span className="ml-3 text-text">
                  <strong className="font-semibold">Ochrona życia</strong> - działamy na rzecz
                  obrony życia od poczęcia do naturalnej śmierci
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                  2
                </span>
                <span className="ml-3 text-text">
                  <strong className="font-semibold">Działalność charytatywna</strong> -
                  pomagamy potrzebującym w duchu miłosierdzia
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                  3
                </span>
                <span className="ml-3 text-text">
                  <strong className="font-semibold">Wsparcie dla Ukrainy</strong> - angażujemy
                  się w pomoc naszym sąsiadom w potrzebie
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 