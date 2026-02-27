# Streamly Website

## Tech Stack
- **Framework**: Next.js 15 (app router, static export via `output: "export"`)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with CSS custom properties for theming
- **Animation**: Framer Motion + CSS keyframes
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Project Structure
```
app/              # Next.js pages (about, blog, careers, case-studies, contact, services)
components/
  animations/     # FadeIn, CharacterReveal, FloatingShapes
  layout/         # Navbar, Footer, MobileNav, CommandPalette, ClientLayout
  sections/       # Page-specific section components
  ui/             # Reusable components (Button, SectionHeader, FilterChips, Accordion)
lib/
  data.ts         # Centralized data store (services, case studies, blog posts, team, etc.)
  theme.tsx       # ThemeProvider context + useTheme hook (light/dark, localStorage)
public/           # Static assets
```

## Conventions

### Components
- PascalCase filenames matching component name
- `'use client'` directive on all interactive components
- Props defined as inline interfaces
- Wrap visible sections in `<FadeIn>` for scroll-triggered animation

### Styling
- Tailwind utility classes (no CSS modules)
- Theme via CSS custom properties: `--bg-primary`, `--text-primary`, `--border-gray`
- Brand colors: navy (#11111F), cyan (#68D2DF), cyan-a11y (#4BBCC9)
- Design tokens defined in `globals.css` @theme block
- Dark mode via `.dark` class on document root

### Data
- All content data lives in `lib/data.ts` — pages import from there
- No CMS or API calls — fully static site

### Accessibility
- Semantic HTML (`section`, `article`, `main`)
- `aria-label` on interactive elements
- Focus states on all interactive components
- `prefers-reduced-motion` media query disables animations

## Commands
- `pnpm dev` — Start dev server
- `pnpm build` — Build static export to `out/`
- `pnpm lint` — Run Next.js ESLint
