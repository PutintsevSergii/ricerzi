import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const languages = ['en', 'lv', 'pl', 'ru']

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathnameHasLanguage = languages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  )

  if (pathnameHasLanguage) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL(`/lv${pathname}`, request.url))
}

export const config = {
  matcher: [
    '/((?!_next/|api/|favicon.ico|.*\\.png|.*\\.pdf|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.webp|.*\\.ico|.*\\.txt|.*\\.xml|.*\\.json).*)',
  ],
}
