import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const languages = ['en', 'lv', 'pl', 'ru']

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const pathname = request.nextUrl.pathname

  // Check if the pathname starts with a language code
  const pathnameHasLanguage = languages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  )

  if (pathnameHasLanguage) return

  // Always redirect to Latvian as default
  return NextResponse.redirect(
    new URL(`/lv${pathname}`, request.url)
  )
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next/|api/|favicon.ico|.*\\.png|.*\\.pdf|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.webp|.*\\.ico|.*\\.txt|.*\\.xml|.*\\.json).*)',  ],
} 