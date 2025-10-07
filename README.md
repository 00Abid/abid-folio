# React + Tailwind (Vite)

A minimal React 19 + Vite 7 starter preconfigured with Tailwind CSS v4 and ESLint.

- React: 19.x
- Vite: 7.x with @vitejs/plugin-react
- Tailwind CSS: 4.x via @tailwindcss/vite
- ESLint: 9.x

## Prerequisites

- Node.js 18+ (LTS 20 recommended)
- npm 9+ (or your preferred package manager)

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

The app runs by default at http://localhost:5173

## Available Scripts

- dev: Start Vite dev server with HMR
- build: Production build to the dist/ folder
- preview: Preview the production build locally
- lint: Run ESLint

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Tailwind CSS Setup

This project uses Tailwind CSS v4 with the official Vite plugin.

- vite.config.js includes the Tailwind plugin:

```js
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

- src/index.css imports Tailwind layers:

```css
@import "tailwindcss";
```

Use Tailwind classes directly in your JSX, e.g.:

```jsx
<div className="p-6 rounded-xl bg-amber-800 text-white">Hello</div>
```

Note: Ensure you use valid Tailwind tokens (e.g., `bg-slate-500`, `bg-gray-200`). Shadeless color names like `bg-slate` or `bg-gray` are not valid.

## Project Structure

```
react+tailwind/
├─ public/
│  └─ vite.svg
├─ src/
│  ├─ assets/
│  │  └─ react.svg
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ README.md
└─ vite.config.js
```

Key entry points:
- index.html: App mount point and module script
- src/main.jsx: React root and global CSS import
- src/App.jsx: Example component using Tailwind classes

## Build & Deploy

Create a production build:

```bash
npm run build
```

- Output is written to dist/
- Deploy the dist/ folder to any static host (e.g., Netlify, Vercel, GitHub Pages, S3 + CloudFront)

Preview the production build locally:

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

Adjust rules in eslint.config.js as needed.

## Troubleshooting

- Styles not applying:
  - Confirm src/index.css is imported in src/main.jsx
  - Ensure the Tailwind plugin is present in vite.config.js
  - Use valid Tailwind class names with proper scales (e.g., `bg-gray-500`)
- Dev server issues:
  - Check Node.js version (>= 18)
  - If the default port is busy, set a custom port in the Vite config or start command

## License

No license specified.
