# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro-based digital garden/blog deployed to Netlify. Static site with selective client-side hydration for interactive components.

**Site:** https://bitwhys.io
**Package manager:** pnpm

## Commands

```bash
pnpm dev       # Start development server (port 4321)
pnpm build     # Production build to dist/
pnpm preview   # Preview production build locally
```

## Architecture

### Content System
- Articles live in `src/content/articles/` as MDX files
- Schema defined in `src/content.config.ts`: `title` (string), `pubDate` (date), `summary` (optional string)
- Dynamic routing via `src/pages/[slug].astro`
- Files prefixed with `_` are excluded from the collection

### Custom Markdown Plugins
- `src/plugins/remark-embedded-media.mjs` - Enables custom directives for link cards and embeds
- `src/plugins/rehype-image-processor.mjs` - Image optimization during build
- Requires `remark-directive` to be loaded first (see astro.config.mjs)

### Key Components
- `LinkCard.astro` - Interactive cards that lazy-load link metadata via IntersectionObserver
- `src/pages/api/proxy.ts` - Server endpoint that fetches external URLs for LinkCard (non-prerendered)

### Styling
- Tailwind CSS 4 with `@radix-ui/colors` for color tokens
- Typography configuration in `src/typography.ts`
- Utility helper `cx()` in `src/utils/cx.ts` (clsx + tailwind-merge)
- Code blocks use `astro-expressive-code` with themes: "dark-plus", "everforest-light"

### Fonts (Astro experimental fonts)
- Geist / Geist Mono (Google)
- VisbyCF (local, `src/assets/fonts/visby/`)
- Bluu Next (local, `src/assets/fonts/bluu-next/`)

### Image Optimization
- Sharp service with config in `src/utils/image-config.ts`
- Supports JPEG, PNG, WebP, AVIF output

## Code Style

- No semicolons (Prettier: `semi: false`)
- 2-space indentation
- Astro-aware formatting via `prettier-plugin-astro`
