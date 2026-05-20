# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hot Admin Template - a Nuxt 4 admin dashboard template using PrimeVue 4, TailwindCSS, Pinia, and TypeScript. Client-side rendered (SSR disabled).

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Nuxt 4 | 4.2.2 |
| UI Library | PrimeVue | 4.5.4 |
| Theme | PrimeVue Aura | - |
| Styling | TailwindCSS | 6.14.0 |
| State | Pinia | 3.0.4 |
| i18n | @nuxtjs/i18n | 10.2.1 |

## Common Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## Architecture

- **Framework**: Nuxt 4 with Vue 3 Composition API
- **UI Library**: PrimeVue 4 with Aura theme (dark mode via `.app-dark` class)
- **Styling**: TailwindCSS + SCSS (assets/sass/styles.scss)
- **State Management**: Pinia with persistedstate (localStorage)
- **Internationalization**: @nuxtjs/i18n with zh-CN and en locales
- **Scroll**: vue3-perfect-scrollbar
- **Rendering**: Client-side only (SSR disabled)

### Request Flow

```
URL → Nuxt Router → app/pages/*.vue → app/components/* → Pinia stores → localStorage
```

### Directory Structure

- `app/pages/` - Route pages (file-based routing)
- `app/components/` - Reusable Vue components
- `app/layouts/` - Layouts (default.vue, empty.vue)
- `app/store/` - Pinia stores (theme.ts, menu.ts)
- `app/config/` - Configuration files (menu.ts)
- `app/plugins/` - Nuxt plugins (scrollbar.ts)
- `i18n/` - Localization files

### Key Patterns

- Pages auto-import from `app/` directory
- Pinia stores use `defineStore` with persistedstate via `persist: true`
- Components use PrimeVue components with TailwindCSS styling
- Dark mode toggled by adding/removing `.app-dark` class on root element

## Where to Look

| I want to... | Look at... |
|--------------|-----------|
| Add a new page | `app/pages/` |
| Add a component | `app/components/` |
| Add navigation items | `app/config/menu.ts` |
| Modify theme/dark mode | `app/store/theme.ts` |
| Add new state | `app/store/` |
| Change translations | `i18n/lang/` |
| Modify layout | `app/layouts/default.vue` |

## Testing

No test infrastructure configured in this project.