# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 14** digital agency website template called "Digiv" - a coworking cafe/creative agency template with multiple pages showcasing services, projects, pricing, blog, and contact sections.

## Development Commands

```bash
# Start development server (default port 3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **UI**: React 18, Bootstrap 5.3.3
- **Styling**: SCSS with modular component architecture
- **Animations**: Framer Motion (`motion` package)
- **Additional**: Swiper.js for carousels, react-modal-video for video overlays

### Project Structure

- **`src/app/`** - Next.js App Router pages
  - Each route is a `page.js` file (e.g., `/about/page.js`, `/services/page.js`)
  - Root layout in `layout.js` imports global styles, Header, Footer, and utility components

- **`src/components/`** - Reusable React components organized by feature:
  - `header/` - TopHeader, Navbar, Header (client component with mobile menu state)
  - `about/`, `blogs/`, `services/`, `projects/`, `testimonial/`, `pricing/` - Feature-specific components
  - Most components are server components unless marked `'use client'`

- **`src/db/`** - Static data files (JavaScript exports)
  - `menuData.js` - Navigation menu structure
  - `*Data.js` files for blogs, projects, testimonials, services, pricing, FAQs

- **`src/assets/`** - Static assets
  - `scss/` - SCSS files following ITCSS-like structure:
    - `_abstracts/` - Variables, mixins
    - `_base/` - Typography, buttons
    - `_components/` - Component-specific styles (header, footer, blogs, services, etc.)
  - `font/` - Bootstrap Icons and Font Awesome

- **`src/utils/`** - Utility components and helpers
  - `pathNameLoad.jsx` - Client component that adds body classes based on current route
  - `animations/` - Animation wrapper components (slideUp, slideDown)

### Key Patterns

1. **Path Aliases**: `@/*` maps to `./src/*` (configured in `jsconfig.json`)

2. **Client vs Server Components**:
   - Header, Bootstrap, PathNameLoad, and animation wrappers are client components (`'use client'`)
   - Most page and feature components are server components by default

3. **Layout System**:
   - Root layout (`src/app/layout.js`) wraps all pages with Header, Footer, Bootstrap initialization, and PathNameLoad
   - Bootstrap component dynamically imports Bootstrap JS on mount
   - PathNameLoad adds route-specific body classes for styling

4. **Data-Driven Content**:
   - Navigation, services, projects, testimonials, etc. are imported from `src/db/` data files
   - Makes it easy to update content without touching component code

5. **Styling Approach**:
   - SCSS modules imported in root layout
   - Component-specific SCSS in `_components/` directory
   - Bootstrap 5 utilities used throughout JSX

## Important Notes

- This is a **template/theme project** - pages contain placeholder content and demo data
- All data is currently static; no backend or CMS integration
- Images referenced use `/images/` and `/icons/` paths (assumed to be in `public/` directory)
- Suppress hydration warnings in layout due to Bootstrap dynamic import pattern
