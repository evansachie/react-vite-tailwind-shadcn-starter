# React + Vite + Tailwind + shadcn/ui Starter

This is a React + TypeScript starter template with:

- Vite for dev/build
- Tailwind CSS with token-based theming
- shadcn/ui component setup
- React Router baseline routing
- `next-themes` for light/dark/system mode

## Setup

### 1) Install dependencies

```bash
pnpm install
```

### 2) Start development server

```bash
pnpm dev
```

### 3) Build and preview

```bash
pnpm build
pnpm preview
```

### 4) Lint

```bash
pnpm lint
```

## Add shadcn Components

This template is set up with `components.json`, aliasing, and Tailwind config for shadcn.

Add a single component:

```bash
pnpm dlx shadcn@latest add button
```

Add multiple components:

```bash
pnpm dlx shadcn@latest add button input card dialog
```

Generated components are placed in `src/components/ui`.

## Folder Conventions

Use this structure as your default organization:

- `src/components/ui` - generated shadcn primitives
- `src/components` - app-level reusable components
- `src/pages` - route-level page components
- `src/layout` - app shell, navigation, route wrappers
- `src/contexts` - global providers and context modules
- `src/hooks` - reusable custom hooks
- `src/lib` - utilities and shared helpers
- `src/assets` - static images and icons

Current routing entry points:

- `src/main.tsx` - app bootstrap and global providers
- `src/App.tsx` - router and route mapping

## Theming Approach

The project uses class-based dark mode and CSS variables.

- Tailwind dark mode is configured with `darkMode: ["class"]`.
- Theme tokens are defined in `src/index.css` under `:root` and `.dark`.
- `ThemeProvider` wraps the app in `src/main.tsx`.
- `ThemeToggle` in `src/components/theme-toggle.tsx` switches between:
  - `light`
  - `dark`
  - `system`

When adding new UI, prefer token-based classes such as:

- `bg-background`
- `text-foreground`
- `text-muted-foreground`
- `border-border`

This keeps components consistent across light and dark themes.
