'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

const names = {
  pl: 'Zakon Rycerzy Świętego Jana Pawła II Wielkiego',
  lv: 'Svētā Jāņa Pāvila II Lielā Bruņinieku Ordenis',
  ru: 'Орден Рыцарей Святого Иоанна Павла II Великого',
  en: 'Order of Knights of Saint John Paul II the Great'
}

const slogans = {
  pl: 'Żyj jak Wojownik Boga',
  lv: 'Dzīvo kā Dieva karotājs',
  ru: 'Живи как Воин Божий',
  en: 'Live as a Warrior of God'
}

const descriptions = {
  pl: 'Zakon Rycerzy Świętego Jana Pawła II Wielkiego to wspólnota katolickich mężczyzn, wiernych nauce Kościoła, służących Chrystusowi i Ojczyźnie. Inspirując się dziedzictwem Papieża-Polaka, dążymy do świętości poprzez modlitwę, służbę, obronę wiary i wspólnotowe działanie. Jesteśmy mężczyznami, którzy żyją jak wojownicy Boga – z odwagą, honorem i wiernością Ewangelii.',
  lv: 'Svētā Jāņa Pāvila II Lielā Bruņinieku Ordenis ir katoļu vīriešu kopiena, kas seko Baznīcas mācībai un kalpo Kristum un Tēvzemei. Mēs iedvesmojamies no Svētā Jāņa Pāvila II mantojuma, tiecoties uz svētumu caur lūgšanu, kalpošanu, ticības aizstāvēšanu un brālīgu vienotību. Mēs dzīvojam kā Dieva karotāji – ar drosmi, godu un uzticību Evaņģēlijam.',
  ru: 'Орден Рыцарей Святого Иоанна Павла II Великого — это братство католических мужчин, верных учению Церкви, служащих Христу и Отечеству. Вдохновлённые наследием Папы Иоанна Павла II, мы стремимся к святости через молитву, служение, защиту веры и братское единство. Мы живём как Воины Божии — с мужеством, честью и верностью Евангелию.',
  en: 'The Order of Knights of Saint John Paul II the Great is a community of Catholic men devoted to the Church, serving Christ and their homeland. Inspired by the legacy of Pope John Paul II, we strive for holiness through prayer, service, defense of the faith, and brotherhood. We live as warriors of God—with courage, honor, and loyalty to the Gospel.'
}

export default function Hero() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] as keyof typeof slogans || 'en'
  
  return (
    <div className="relative min-h-[600px] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 py-12 lg:py-16">
          {/* Text Content - Left side on desktop, top on mobile */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
              {names[lang]}
            </h1>
            <blockquote className="mt-6 text-2xl sm:text-3xl md:text-4xl font-serif italic text-primary/80 border-l-4 border-primary pl-4">
              "{slogans[lang]}"
            </blockquote>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600 lg:mx-0">
              {descriptions[lang]}
            </p>
          </div>

          {/* Image - Right side on desktop, bottom on mobile */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative h-[300px] lg:h-[500px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=2070"
                alt="Catholic church interior"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 