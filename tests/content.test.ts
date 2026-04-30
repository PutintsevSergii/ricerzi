import { describe, expect, it } from 'vitest'
import matter from 'gray-matter'
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { languages, navigation } from '@/config/navigation'

const rootDir = path.resolve(__dirname, '..')
const contentDir = path.join(rootDir, 'src/content')
const localizedAppDir = path.join(rootDir, 'src/app/[lang]')

const requiredFieldsByPage: Record<string, string[]> = {
  home: ['title', 'heroName', 'heroSlogan', 'heroDescription', 'aboutTitle', 'aboutContent', 'initiativesTitle', 'initiatives'],
  about: ['heroTitle', 'heroDescription', 'whyHereTitle', 'whyHereContent', 'whyHerePoints', 'orderTitle', 'orderDescription'],
  documents: ['title', 'description', 'ruleTitle', 'ruleContent', 'rulePillars'],
  contacts: ['title', 'contactTitle', 'contactDescription', 'contactInfoTitle', 'socialMediaTitle', 'contactInfo', 'socialMedia'],
}

function supportedLanguageCodes() {
  return languages.map(({ code }) => code)
}

function localizedRoutes() {
  const routes = ['home']

  for (const entry of readdirSync(localizedAppDir)) {
    const entryPath = path.join(localizedAppDir, entry)
    if (statSync(entryPath).isDirectory() && existsSync(path.join(entryPath, 'page.tsx'))) {
      routes.push(entry)
    }
  }

  return routes.sort()
}

function parseContentFile(filePath: string) {
  return matter(readFileSync(filePath, 'utf8')).data
}

describe('localized content', () => {
  it('has content files with required frontmatter for every supported route and language', () => {
    const routeNames = localizedRoutes()

    for (const routeName of routeNames) {
      expect(requiredFieldsByPage[routeName], `missing field contract for route "${routeName}"`).toBeDefined()

      for (const lang of supportedLanguageCodes()) {
        const filePath = path.join(contentDir, 'pages', `${routeName}.${lang}.md`)

        expect(existsSync(filePath), `missing content file ${path.relative(rootDir, filePath)}`).toBe(true)

        const data = parseContentFile(filePath)
        for (const field of requiredFieldsByPage[routeName]) {
          expect(data[field], `${routeName}.${lang} is missing ${field}`).toBeTruthy()
        }
      }
    }
  })

  it('has site metadata for every supported language', () => {
    for (const lang of supportedLanguageCodes()) {
      const filePath = path.join(contentDir, `site.${lang}.md`)
      expect(existsSync(filePath), `missing ${path.relative(rootDir, filePath)}`).toBe(true)

      const data = parseContentFile(filePath)
      expect(data.title, `site.${lang} is missing title`).toBeTruthy()
      expect(data.description, `site.${lang} is missing description`).toBeTruthy()
      expect(data.orgName, `site.${lang} is missing orgName`).toBeTruthy()
    }
  })
})

describe('language configuration', () => {
  it('keeps proxy, navigation, and language switcher codes aligned', () => {
    const supported = supportedLanguageCodes()
    const proxy = readFileSync(path.join(rootDir, 'src/proxy.ts'), 'utf8')
    const proxyLanguages = Array.from(proxy.matchAll(/'([a-z]{2})'/g), match => match[1]).filter(code =>
      supported.includes(code as typeof supported[number]),
    )

    expect(Object.keys(navigation).sort()).toEqual([...supported].sort())
    expect([...new Set(proxyLanguages)].sort()).toEqual([...supported].sort())
  })

  it('links every navigation item to an implemented localized route', () => {
    const routePaths = new Set(localizedRoutes().map(route => (route === 'home' ? '/' : `/${route}`)))

    for (const [lang, items] of Object.entries(navigation)) {
      for (const item of items) {
        expect(routePaths.has(item.href), `${lang} navigation links to missing route ${item.href}`).toBe(true)
      }
    }
  })
})
