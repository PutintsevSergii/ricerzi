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

## Remaining Fixes

- [ ] Move content loading out of `src/hooks/useContent.ts` into a server utility, for example `src/lib/content.ts`.
- [ ] Rename `useContent` to avoid implying it is a React hook.
- [ ] Define typed content contracts per page instead of relying on `gray-matter` data as loose objects.
- [ ] Decide whether Ukrainian content is supported; either add `ua` to `src/config/navigation.ts` and middleware or remove stale `*.ua.md` files.
- [ ] Replace placeholder social links with production-owned URLs.
- [ ] Review and fix npm audit findings. Current install reports 20 vulnerabilities, including 1 critical.
- [ ] Add browser-level smoke coverage once the visual design stabilizes.
- [ ] Update or remove stale technical documentation in `docs/technical.md`.
