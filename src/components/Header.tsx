'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigation, languages } from '@/config/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])
  
  // Extract the current language from the pathname
  const currentLang = pathname.split('/')[1] as keyof typeof navigation
  
  // Get the path without the language prefix
  const pathWithoutLang = pathname.split('/').slice(2).join('/')
  const basePath = pathWithoutLang ? `/${pathWithoutLang}` : '/'

  // Get the current language's navigation items
  const currentNavigation = navigation[currentLang] || navigation.en

  return (
    <header className="bg-primary text-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href={`/${currentLang}`} className="font-heading text-2xl font-bold">
              Rycerze Jana Pawła II
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {currentNavigation.map((item) => (
              <Link
                key={item.name}
                href={`/${currentLang}${item.href}`}
                className={`text-sm font-medium hover:text-accent ${
                  pathname === `/${currentLang}${item.href}` ? 'text-accent' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}${basePath}`}
                  className="text-sm font-medium hover:text-accent"
                >
                  {lang.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-primary-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {currentNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={`/${currentLang}${item.href}`}
                  className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-primary-dark ${
                    pathname === `/${currentLang}${item.href}` ? 'bg-primary-dark' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-primary-dark pt-4">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}${basePath}`}
                    className="block rounded-md px-3 py-2 text-base font-medium hover:bg-primary-dark"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {lang.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 