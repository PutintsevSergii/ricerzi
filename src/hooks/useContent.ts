import matter from 'gray-matter'

// Import about page markdown files
const aboutLv = require('../content/pages/about.lv.md')
const aboutPl = require('../content/pages/about.pl.md')
const aboutEn = require('../content/pages/about.en.md')
const aboutUa = require('../content/pages/about.ua.md')

// Import home page markdown files
const homeLv = require('../content/pages/home.lv.md')
const homePl = require('../content/pages/home.pl.md')
const homeEn = require('../content/pages/home.en.md')
const homeUa = require('../content/pages/home.ua.md')

// Import contacts page markdown files
const contactsLv = require('../content/pages/contacts.lv.md')
const contactsPl = require('../content/pages/contacts.pl.md')
const contactsEn = require('../content/pages/contacts.en.md')
const contactsUa = require('../content/pages/contacts.ua.md')

// Map paths to their content
const contentMap: Record<string, any> = {
  'pages/about.lv': aboutLv,
  'pages/about.pl': aboutPl,
  'pages/about.en': aboutEn,
  'pages/about.ua': aboutUa,
  'pages/home.lv': homeLv,
  'pages/home.pl': homePl,
  'pages/home.en': homeEn,
  'pages/home.ua': homeUa,
  'pages/contacts.lv': contactsLv,
  'pages/contacts.pl': contactsPl,
  'pages/contacts.en': contactsEn,
  'pages/contacts.ua': contactsUa,
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