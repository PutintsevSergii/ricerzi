# Fix Checklist

Use this as the source checklist for follow-up hardening work.

## Completed in this pass

- [x] Add automated tests for localized route/content consistency.
- [x] Add automated guards against checked-in `console.log` calls and `dangerouslySetInnerHTML`.
- [x] Fix the lint dependency mismatch by adding the missing `@typescript-eslint` packages.
- [x] Remove the production build escape hatch from `npm run build`.
- [x] Remove full Markdown content logging during build/render.
- [x] Add supported `lv`, `pl`, `en`, and `ru` contact content for the existing `/[lang]/contacts` route.
- [x] Add the contacts page to localized navigation.
- [x] Remove direct CMS/frontmatter HTML rendering from the hero slogan.
- [x] Use one font loading path through `next/font/google`.
- [x] Remove duplicate and unnecessary `dangerouslyAllowSVG` image configuration.
- [x] Remove unused `/api/content` file-reading route.
- [x] Remove unused `next-intl` dependency.
- [x] Remove stale unsupported Ukrainian content files.
- [x] Update stale technical documentation.
- [x] Update dependencies conservatively within the current Next.js 14 / React 18 architecture.
- [x] Reduce npm audit findings to the remaining framework-level Next.js advisory.

## Remaining Fixes

- [x] Move content loading out of `src/hooks/useContent.ts` into `src/lib/content.ts`.
- [x] Rename `useContent` by replacing it with server utility functions.
- [x] Define typed content contracts per page instead of relying on `gray-matter` data as loose objects.
- [ ] Replace placeholder social links with production-owned URLs.
- [ ] Plan the breaking Next.js 16 / React 19 upgrade needed to clear remaining framework advisories.
- [ ] Review and fix remaining npm audit findings after the framework upgrade path is chosen.
- [ ] Add browser-level smoke coverage once the visual design stabilizes.
