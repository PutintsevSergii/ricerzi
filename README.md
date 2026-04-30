# Rycerze Jana Pawla II Website

Multilingual website for the Knights of John Paul II community in Riga, built with Next.js App Router, TypeScript, Tailwind CSS, and Markdown frontmatter content.

## Features

- Multilingual routes: Latvian (`lv`), Polish (`pl`), English (`en`), and Russian (`ru`)
- Static content for home, about, documents, and contacts pages
- Localized navigation and site metadata
- Markdown frontmatter content files under `src/content`
- Next.js image rendering and Google font loading through `next/font`
- Vitest coverage for route/content consistency and source safety checks

## Requirements

- Node.js 18.17 or later
- npm

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The middleware redirects `/` to `/lv`.

## Commands

```bash
npm run dev        # Start the local development server
npm run build      # Run linting/type checks and create a production build
npm run start      # Start the production server after a build
npm run lint       # Run Next.js ESLint checks
npm run test       # Run Vitest tests once
npm run test:watch # Run Vitest in watch mode
```

## Content

Localized page content lives in `src/content/pages` with the pattern:

```text
home.lv.md
about.lv.md
documents.lv.md
contacts.lv.md
```

Site-wide localized metadata lives in `src/content/site.<lang>.md`.

When adding a language, update all of these together:

- `src/config/navigation.ts`
- `src/middleware.ts`
- `src/content/site.<lang>.md`
- every page content file for that language

The test suite checks that supported localized routes have matching content files and required frontmatter fields.

## Project Structure

```text
src/
  app/              Next.js App Router routes
  components/       React components
  config/           Navigation and language config
  content/          Markdown frontmatter content
  hooks/            Current content loader
  styles/           CSS theme variables
tests/              Vitest checks
docs/               Project notes and fix checklist
public/             Static assets and PDFs
```

## Maintenance Notes

- Track follow-up hardening work in `docs/fix-checklist.md`.
- Keep `npm run lint`, `npm run test`, and `npm run build` passing before larger rework.
- The current content loader is synchronous and should eventually move from `src/hooks/useContent.ts` into a server utility.
