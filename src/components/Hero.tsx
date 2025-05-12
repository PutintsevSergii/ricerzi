import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative h-[80vh] min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=2070"
          alt="Catholic church interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Rycerze Jana Pawła II
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-100">
              Wierni tradycji, otwarci na przyszłość. Budujemy wspólnotę w duchu nauczania św. Jana Pawła II.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/join"
                className="rounded-md bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-dark"
              >
                Dołącz do nas
              </Link>
              <Link
                href="/about"
                className="rounded-md bg-white px-6 py-3 text-base font-medium text-primary hover:bg-gray-100"
              >
                Dowiedz się więcej
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 