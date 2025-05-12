'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const currentLang = pathname.split('/')[1]

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Information */}
          <div>
            <h3 className="font-heading text-lg font-semibold">Contact Us</h3>
            <div className="mt-4 space-y-2">
              <p>Rycerze Jana Pawła II</p>
              <p>ul. Example 123</p>
              <p>00-000 Warszawa, Poland</p>
              <p>Email: contact@rycerzejp2.pl</p>
              <p>Phone: +48 123 456 789</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
            <nav className="mt-4 space-y-2">
              <Link href={`/${currentLang}/about`} className="block hover:text-accent">
                About Us
              </Link>
              <Link href={`/${currentLang}/spirituality`} className="block hover:text-accent">
                Spirituality
              </Link>
              <Link href={`/${currentLang}/join`} className="block hover:text-accent">
                Join Us
              </Link>
              <Link href={`/${currentLang}/contact`} className="block hover:text-accent">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 space-y-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-accent"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-accent"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-accent"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-dark pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Rycerze Jana Pawła II. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 