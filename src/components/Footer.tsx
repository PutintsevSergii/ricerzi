'use client'

interface FooterProps {
  orgName?: string
  address?: string
  email?: string
  phone?: string
  copyright?: string
}

export default function Footer({
  orgName,
  address,
  email,
  phone,
  copyright,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  // Ensure phone always starts with '+' and is a string
  const displayPhone = typeof phone === 'string'
    ? (phone.startsWith('+') ? phone : `+${phone}`)
    : undefined;
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Contact Information */}
          <div className="space-y-4">
            {orgName && (
              <h2 className="text-2xl font-bold tracking-tight text-white">{orgName}</h2>
            )}
            <div className="mt-6 space-y-3 text-base/relaxed">
              {address && (
                <p className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  {address}
                </p>
              )}
              {email && (
                <p className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <a href={`mailto:${email}`} className="hover:text-accent transition-colors">
                    {email}
                  </a>
                </p>
              )}
              {displayPhone && (
                <p className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <a href={`tel:${displayPhone}`} className="hover:text-accent transition-colors">
                    {displayPhone}
                  </a>
                </p>
              )}
            </div>
          </div>

          <div className="mt-12 border-t border-primary-dark/30 pt-8">
            <p className="text-sm text-white/80">
              {copyright || `© ${currentYear} Rycerze Jana Pawła II. All rights reserved.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 