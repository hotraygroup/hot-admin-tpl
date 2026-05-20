# Project Instructions

## Tech Stack
- **Framework**: Nuxt.js 4.2.2 (SSR disabled, SPA mode)
- **UI Library**: PrimeVue 4.5.4 with Aura theme
- **CSS**: TailwindCSS 6.14 + SCSS (sass-embedded 1.97)
- **State**: Pinia 3.0.4 with persistedstate
- **i18n**: @nuxtjs/i18n 10.2.1 (zh-CN, en)
- **Language**: TypeScript

## Code Style
- Components use Vue 3 Composition API (`<script setup>`)
- File naming: PascalCase for components, camelCase for configs/stores
- SCSS partials in `app/assets/sass/`
- TailwindCSS for utility classes, SCSS for custom styling

## Testing
- No test framework configured

## Build & Run
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Generate static**: `npm run generate`

## Project Structure
```
app/
├── assets/sass/     → SCSS stylesheets
├── components/      → Vue components
├── config/          → App config (menu.ts, theme.ts)
├── layouts/         → Page layouts
├── pages/           → Route pages (devices, home, internet, setting, wireless)
├── plugins/         → Nuxt plugins
└── store/           → Pinia stores
i18n/                → Translation files
```

## Conventions
- Use Pinia for state management (stores are persisted to localStorage)
- PrimeVue components for UI (Aura theme, dark mode via `.app-dark` class)
- SCSS architecture: `styles.scss` → partials in `layout/`