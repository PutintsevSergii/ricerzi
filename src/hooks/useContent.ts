import matter from 'gray-matter'

// Import all markdown files
import aboutLv from '../content/pages/about.lv.md'
import aboutPl from '../content/pages/about.pl.md'
import aboutEn from '../content/pages/about.en.md'
import aboutRu from '../content/pages/about.ru.md'

// Import home page markdown files
import homeLv from '../content/pages/home.lv.md'
import homePl from '../content/pages/home.pl.md'
import homeEn from '../content/pages/home.en.md'
import homeRu from '../content/pages/home.ru.md'

// Import documents page markdown files
import documentsLv from '../content/pages/documents.lv.md'
import documentsPl from '../content/pages/documents.pl.md'
import documentsEn from '../content/pages/documents.en.md'
import documentsRu from '../content/pages/documents.ru.md'

// Import contacts page markdown files
import contactsLv from '../content/pages/contacts.lv.md'
import contactsPl from '../content/pages/contacts.pl.md'
import contactsEn from '../content/pages/contacts.en.md'
import contactsRu from '../content/pages/contacts.ru.md'

// Import site metadata files
import siteLv from '../content/site.lv.md'
import sitePl from '../content/site.pl.md'
import siteEn from '../content/site.en.md'
import siteRu from '../content/site.ru.md'

// Map paths to their content
export const contentMap: Record<string, string> = {
  'pages/about.lv': aboutLv,
  'pages/about.pl': aboutPl,
  'pages/about.en': aboutEn,
  'pages/about.ru': aboutRu,
  'pages/home.lv': homeLv,
  'pages/home.pl': homePl,
  'pages/home.en': homeEn,
  'pages/home.ru': homeRu,
  'pages/documents.lv': documentsLv,
  'pages/documents.pl': documentsPl,
  'pages/documents.en': documentsEn,
  'pages/documents.ru': documentsRu,
  'pages/contacts.lv': contactsLv,
  'pages/contacts.pl': contactsPl,
  'pages/contacts.en': contactsEn,
  'pages/contacts.ru': contactsRu,
  'site.lv': siteLv,
  'site.pl': sitePl,
  'site.en': siteEn,
  'site.ru': siteRu,
}

export function useContent(path: string) {
  try {
    const content = contentMap[path]
    if (!content) {
      throw new Error(`Content not found for path: ${path}`)
    }

    const result = matter(content, {
      excerpt: false,
      excerpt_separator: '---',
    })
    return result
  } catch (error) {
    console.error(`Error parsing content for path ${path}:`, error)
    throw error
  }
} 
