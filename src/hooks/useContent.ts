import matter from 'gray-matter'

// Import all markdown files
const aboutLv = require('../content/pages/about.lv.md')
const aboutPl = require('../content/pages/about.pl.md')
const aboutEn = require('../content/pages/about.en.md')
const aboutRu = require('../content/pages/about.ru.md')

// Import home page markdown files
const homeLv = require('../content/pages/home.lv.md')
const homePl = require('../content/pages/home.pl.md')
const homeEn = require('../content/pages/home.en.md')
const homeRu = require('../content/pages/home.ru.md')

// Import contacts page markdown files
const contactsLv = require('../content/pages/contacts.lv.md')
const contactsPl = require('../content/pages/contacts.pl.md')
const contactsEn = require('../content/pages/contacts.en.md')
const contactsRu = require('../content/pages/contacts.ru.md')

// Import site metadata files
const siteLv = require('../content/site.lv.md')
const sitePl = require('../content/site.pl.md')
const siteEn = require('../content/site.en.md')
const siteRu = require('../content/site.ru.md')

// Map paths to their content
const contentMap: Record<string, any> = {
  'pages/about.lv': aboutLv,
  'pages/about.pl': aboutPl,
  'pages/about.en': aboutEn,
  'pages/about.ru': aboutRu,
  'pages/home.lv': homeLv,
  'pages/home.pl': homePl,
  'pages/home.en': homeEn,
  'pages/home.ru': homeRu,
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

    // Get the actual string content
    const contentString = typeof content === 'string' ? content : content.default || content

    // Debug log
    console.log('Content before parsing:', contentString)
    
    // Try to parse with more lenient options
    const result = matter(contentString, {
      excerpt: false,
      excerpt_separator: '---',
      engines: {
        yaml: {
          parse: (str: string) => {
            try {
              return require('js-yaml').load(str)
            } catch (e) {
              console.error('YAML parsing error:', e)
              throw e
            }
          }
        }
      }
    })
    return result
  } catch (error) {
    console.error(`Error parsing content for path ${path}:`, error)
    throw error
  }
} 