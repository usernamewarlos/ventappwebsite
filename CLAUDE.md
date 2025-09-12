# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page for the "TBreak" quit weed/cannabis app, using:
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui components (class-variance-authority, clsx, tailwind-merge)
- Bun as the package manager
- Static site generation with `output: 'export'`

## Development Commands

```bash
# Development server with Turbopack
bun dev

# Build static site (outputs to 'out' directory)
bun build

# Start production server
bun start

# Type checking and Next.js linting
bun lint

# Code formatting with Biome
bun format
```

## Architecture

### Static Export Configuration
The app is configured for static export in `next.config.js`:
- `output: 'export'` - generates static HTML
- `distDir: 'out'` - output directory for static files
- Images are unoptimized for static export compatibility
- Configured for deployment on Netlify (see `netlify.toml`)

### App Directory Structure (Next.js App Router)
- `src/app/layout.tsx` - Root layout with fonts (Geist Sans/Mono), metadata, and ClientBody wrapper
- `src/app/page.tsx` - Landing page with hero, features, and CTAs
- `src/app/ClientBody.tsx` - Client-side body wrapper component
- `src/app/globals.css` - Tailwind CSS imports and global styles
- `src/lib/utils.ts` - Utility functions (cn for className merging)

### External Dependencies
- `same-runtime` - Loaded via script tag in layout for external functionality
- External images hosted on `ext.same-assets.com` and `ugc.same-assets.com`

### Code Style
- Biome for formatting and linting (configuration in `biome.json`)
- Double quotes for strings
- 2-space indentation
- TypeScript strict mode enabled