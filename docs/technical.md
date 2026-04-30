# Technical Notes

## Overview

This is a multilingual Next.js App Router site for the Knights of John Paul II community in Riga.

The implementation is intentionally static-first:

- Routes are localized under `/[lang]`.
- Supported languages are `lv`, `pl`, `en`, and `ru`.
- Markdown frontmatter files in `src/content` provide page and site text.
- Pages are statically generated through `generateStaticParams`.
- Content is loaded on the server through `src/lib/content.ts`.

## Routes

Current localized routes:

- `/[lang]`
- `/[lang]/about`
- `/[lang]/documents`
- `/[lang]/contacts`

The middleware redirects unlocalized paths to Latvian by default, so `/` redirects to `/lv`.

## Content Loading

Content loading lives in `src/lib/content.ts`.

Use:

```ts
getPageContent('home', lang)
getPageContent('about', lang)
getPageContent('documents', lang)
getPageContent('contacts', lang)
getSiteContent(lang)
```

The content utility:

- validates language codes against `src/config/navigation.ts`
- reads Markdown files from `src/content`
- parses frontmatter with `gray-matter`
- exposes typed content contracts for each page

Do not parse Markdown in client components. Pass typed content from route/server components into UI components.

## Localization Rules

When adding a language:

- add it to `src/config/navigation.ts`
- add it to `src/middleware.ts`
- add `src/content/site.<lang>.md`
- add every page content file under `src/content/pages`
- update tests if new required fields are introduced

All supported languages should have the same route coverage.

## Tests

Vitest tests live under `tests`.

Current coverage checks:

- every supported route has a content file for every supported language
- required page frontmatter fields exist
- navigation links point to implemented localized routes
- middleware languages match configured languages
- source files do not reintroduce `console.log` or `dangerouslySetInnerHTML`
- font loading stays centralized through `next/font`

Run:

```bash
npm run test
npm run lint
npm run build
```

## Dependency Policy

This project is currently on Next.js 14.2.x and React 18.

The npm audit report has one remaining high-severity advisory on Next.js that requires a breaking migration to Next.js 16. Treat that as a dedicated framework upgrade, not a drive-by dependency bump.

For routine work:

- prefer patch/minor updates within the current major line
- run `npm audit --audit-level=low` after dependency changes
- avoid major upgrades unless the change is scoped and verified separately
