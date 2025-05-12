import matter from 'gray-matter'

// Import markdown files
import aboutLv from '../content/pages/about.lv.md'
import aboutPl from '../content/pages/about.pl.md'
import aboutEn from '../content/pages/about.en.md'
import aboutUa from '../content/pages/about.ua.md'

// Map paths to their content
const contentMap: Record<string, string> = {
  'pages/about.lv': aboutLv,
  'pages/about.pl': aboutPl,
  'pages/about.en': aboutEn,
  'pages/about.ua': aboutUa,
}

export function useContent(path: string) {
  const content = contentMap[path]
  if (!content) {
    throw new Error(`Content not found for path: ${path}`)
  }
  return matter(content)
} 