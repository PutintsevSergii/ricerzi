import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { isLanguageCode, languages } from '@/config/navigation'

export type LanguageCode = (typeof languages)[number]['code']
export type PageName = 'home' | 'about' | 'documents' | 'contacts'

export interface Initiative {
  title: string
  description: string
  icon: string
}

export interface HomeContent {
  title: string
  heroName: string
  heroSlogan: string
  heroDescription: string
  aboutTitle: string
  aboutContent: string
  initiativesTitle: string
  initiativesExplanation: string
  initiatives: Initiative[]
}

export interface AboutValue {
  title: string
  description: string
}

export interface AboutMilestone {
  year: string
  description: string
}

export interface AboutContent {
  heroTitle: string
  heroDescription: string
  launchDate: string
  location: string
  whyHereTitle: string
  whyHereContent: string
  whyHerePoints: string[]
  orderTitle: string
  orderDescription: string
  orderStats: string
  closingQuote: string
  closingQuoteAuthor: string
  values?: AboutValue[]
  involvementTitle?: string
  involvementSteps?: string[]
  image?: string
  imageAlt?: string
  missionTitle?: string
  missionContent?: string
  valuesTitle?: string
  historyTitle?: string
  historyContent?: string
  milestones?: AboutMilestone[]
}

export interface DocumentLink {
  title: string
  description: string
  url: string
  icon: string
}

export interface DocumentsContent {
  title: string
  description: string
  documents?: DocumentLink[]
  ruleTitle: string
  ruleContent: string
  rulePillars: string[]
  ruleContent2?: string
  rulePdf?: string
}

export interface ContactInfo {
  icon: string
  label: string
  value: string
}

export interface SocialLink {
  icon: string
  platform: string
  url: string
}

export interface ContactsContent {
  title: string
  contactTitle: string
  contactDescription: string
  contactInfoTitle: string
  socialMediaTitle: string
  contactInfo: ContactInfo[]
  socialMedia: SocialLink[]
}

export interface SiteMetadata {
  title: string
  description: string
  orgName?: string
  address?: string
  email?: string
  phone?: string
  copyright?: string
}

type PageContentByName = {
  home: HomeContent
  about: AboutContent
  documents: DocumentsContent
  contacts: ContactsContent
}

const contentRoot = path.join(process.cwd(), 'src/content')
function assertLanguage(lang: string): asserts lang is LanguageCode {
  if (!isLanguageCode(lang)) {
    throw new Error(`Unsupported language: ${lang}`)
  }
}

function readFrontmatter<T>(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(rawContent, {
    excerpt: false,
    excerpt_separator: '---',
  })

  return {
    data: data as T,
    content,
  }
}

export function getPageContent<TPage extends PageName>(page: TPage, lang: string) {
  assertLanguage(lang)

  return readFrontmatter<PageContentByName[TPage]>(
    path.join(contentRoot, 'pages', `${page}.${lang}.md`),
  )
}

export function getSiteContent(lang: string) {
  assertLanguage(lang)

  return readFrontmatter<SiteMetadata>(path.join(contentRoot, `site.${lang}.md`))
}
