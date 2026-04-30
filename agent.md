# Agent Instructions

These instructions are for any coding agent working in this repository. The priority is to keep the website working while changes are made safely and incrementally.

## Core Goal

Keep the public website functional across supported languages, pages, desktop browsers, and mobile layouts. No existing user-facing functionality should be broken while implementing fixes or refactors.

## Supported Website Surface

The site currently supports:

- Languages: `lv`, `pl`, `en`, `ru`
- Localized routes:
  - `/[lang]`
  - `/[lang]/about`
  - `/[lang]/documents`
  - `/[lang]/contacts`
- Root redirect: `/` redirects to `/lv`
- Static content from `src/content`
- Public assets from `public`

Do not remove or rename these routes, language codes, content files, or public assets unless the task explicitly requires it and tests/readme/checklist are updated in the same change.

## Safe Change Rules

- Keep changes small and focused.
- Prefer existing patterns before introducing new libraries or abstractions.
- Do not make unrelated visual, content, dependency, or formatting changes.
- Do not delete content, routes, assets, or config unless there is a documented reason.
- Do not use `dangerouslySetInnerHTML` for CMS/frontmatter content.
- Do not add source-level `console.log` debugging.
- Do not bypass linting or tests in build scripts.
- Do not reintroduce unrestricted file-reading API routes.
- Treat `src/content` as user-facing production content.

## Required Checks

Run these before finishing any code change:

```bash
npm run test
npm run lint
npm run build
```

If `npm run build` fails only because the sandbox cannot fetch Google Fonts, rerun it with network access and state that clearly in the final note.

Also run this when dependencies change:

```bash
npm audit --audit-level=low
```

Do not claim the work is complete if any required check fails. Report the failure and what remains.

## Browser And Mobile Compatibility

Changes must preserve:

- Responsive layout on mobile, tablet, and desktop.
- Usable navigation on small screens.
- Readable text without overlap or clipping.
- Valid links for all localized navigation items.
- Working images and PDFs from `public`.
- Compatibility with current evergreen browsers: Chrome, Safari, Firefox, and Edge.

For UI/layout changes, manually verify at least:

- Mobile width around `375px`
- Tablet width around `768px`
- Desktop width around `1280px`

Prefer CSS and Tailwind patterns already used in the project. Avoid fixed dimensions that break small screens unless they are paired with responsive constraints.

## Content And Localization

When adding a page or language:

- Update `src/config/navigation.ts`.
- Update `src/middleware.ts` if language support changes.
- Add matching files under `src/content/pages`.
- Add matching `src/content/site.<lang>.md`.
- Update `tests/content.test.ts` if the new page has new required fields.
- Update `README.md` and `docs/fix-checklist.md` when behavior or known work changes.

All supported languages must have the same route coverage unless explicitly documented otherwise.

## Refactoring Guidance

The content loader still needs cleanup. When refactoring it:

- Move content loading toward a server utility, for example `src/lib/content.ts`.
- Keep existing route behavior unchanged.
- Keep the current content file naming convention.
- Preserve static generation for localized pages.
- Add or update tests before changing behavior.
- Avoid moving Markdown parsing into client components.

## Dependency Guidance

- Do not add dependencies for small utilities that can be handled safely with platform APIs.
- Remove unused dependencies when discovered.
- Keep dependency upgrades separate from feature work when possible.
- For Next.js, React, ESLint, or TypeScript major upgrades, expect breaking changes and verify with `npm run test`, `npm run lint`, and `npm run build`.

## Completion Criteria

A change is complete only when:

- The requested behavior is implemented.
- Existing routes still build.
- Tests and lint pass.
- Production build passes.
- Any remaining risks are added to `docs/fix-checklist.md`.
- The final response lists what changed and which checks passed.
