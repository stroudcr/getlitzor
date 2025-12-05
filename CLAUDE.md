# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Litzor** is a marketing agency landing page built with Next.js 15, React 19, and Tailwind CSS 4. The site promotes AI-powered marketing services for local service businesses. It uses the Next.js App Router architecture and is optimized for SEO and performance with Vercel Analytics integration.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

Development server runs on http://localhost:3000

## Tech Stack

- **Framework**: Next.js 15.3.0 with App Router
- **React**: 19.0.0
- **Styling**: Tailwind CSS 4.1.3 with @theme inline directive
- **TypeScript**: Strict mode enabled
- **Analytics**: @vercel/analytics
- **Fonts**: Geist Sans and Geist Mono (Google Fonts via next/font)

## Project Structure

```
app/
├── components/          # React components
│   └── Navbar.tsx      # Main navigation component
├── cookies/            # Cookie policy page
├── privacy/            # Privacy policy page
├── terms/              # Terms of service page
├── layout.tsx          # Root layout with metadata and fonts
├── page.tsx            # Home page with all landing page sections
├── not-found.tsx       # 404 error page
├── robots.ts           # robots.txt configuration
└── sitemap.ts          # Sitemap generation

styles/
└── globals.css         # Global styles with Tailwind imports

next.config.ts          # Next.js configuration
```

## Architecture Notes

### Single-Page Design
The homepage (app/page.tsx) is a comprehensive single-page application containing:
- Hero section
- Services showcase (6 service cards)
- About section with brand imagery
- Testimonials (3 customer quotes)
- CTA section
- Contact form
- Footer with navigation

All main sections use anchor navigation (e.g., `#services`, `#about`, `#contact`) for smooth scrolling.

### Next.js Configuration (next.config.ts)
The app has several important configurations:
- **Security headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy
- **Image optimization**: Supports WebP and AVIF formats, configured for placehold.co domain
- **Caching**: Aggressive caching for images and static assets (1 year immutable)
- **React Strict Mode**: Enabled for development

### Metadata & SEO
Comprehensive SEO setup in app/layout.tsx:
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URL: https://www.getlitzor.com

Homepage includes extensive structured data:
- LocalBusiness schema with service offerings
- BreadcrumbList schema
- FAQPage schema with 3 Q&A pairs

### Styling Architecture
- Tailwind CSS 4 with new @theme inline syntax in globals.css
- Custom CSS variables for colors (--background, --foreground)
- Dark mode support via prefers-color-scheme
- Custom color: `cream-50` used throughout for backgrounds
- Brand color: `red-500` for CTAs and accents
- Font variables set in root layout: --font-geist-sans, --font-geist-mono

### Navigation
Navbar component (app/components/Navbar.tsx):
- Sticky header with backdrop blur
- Desktop and mobile navigation menus
- Mobile menu button (note: mobile menu toggle logic not implemented in current code)
- All navigation uses anchor links to page sections

### Policy Pages
Three legal/policy pages exist but are not currently in the sitemap:
- /privacy - Privacy Policy
- /terms - Terms of Service
- /cookies - Cookie Policy

These are linked in the footer and included in sitemap.ts with lower priority (0.3).

## Key Patterns

### Component Structure
- Functional components with TypeScript
- Interface definitions for props (ServiceProps, TestimonialProps)
- Data arrays (services, testimonials) defined in component for easy content management

### Image Handling
Uses Next.js Image component with:
- Lazy loading
- Automatic format optimization
- Responsive sizing
- Configured domains in next.config.ts

### Routing
- File-based routing via App Router
- Dynamic metadata exports for SEO
- Programmatic sitemap and robots.txt generation

## Important Context

### Brand Identity
- Company: Litzor
- Domain: getlitzor.com
- Tagline: "Technology That Brings You More Business"
- Focus: AI-powered marketing for local service businesses
- Brand colors: Cyan Blue (#03afdc) and Navy Blue (#0f3e66), with Cream (#fefcf8 / cream-50) backgrounds

### Website Design & Development
The site emphasizes:
- Simplicity and clarity over complexity
- Results-driven messaging
- AI/technology-forward positioning
- Local business focus

### Known Issues/TODOs
- Mobile menu toggle functionality not implemented (button exists but menu doesn't open)
- Contact form has no submission handler
- Social media links commented out in contact section
- Placeholder content for business address and coordinates in structured data
- Missing actual images (about-image.jpg, og-image.jpg, logo.svg)

## TypeScript Configuration

Strict mode enabled with:
- ES5 target for broad compatibility
- ESNext module system
- Preserve JSX (handled by Next.js)
- Incremental compilation
- No path aliases configured
