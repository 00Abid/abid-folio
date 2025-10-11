# Abid Khan – Portfolio Website

A modern, interactive portfolio built with React, Tailwind CSS, and Vite. It showcases projects, skills, and experience with smooth interactions and a 3D "Hyperspeed" background effect.

## Features

- Interactive 3D Hyperspeed road effect (Three.js + postprocessing)
- Floating Bubble Menu with smooth navigation (GSAP)
- Click-to-section navigation with smooth scrolling
- Responsive UI across mobile, tablet, and desktop
- SEO assets included (robots.txt, sitemap.xml)
- Fast development/build times (Vite)

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Three.js, postprocessing
- GSAP (animations)
- Lenis (smooth scrolling)
- React Icons, Font Awesome
- tailwind-merge, uuid

## Getting Started

### Prerequisites
- Node.js 18+ (LTS 20 recommended)
- npm 9+ (or yarn/pnpm)

### Installation
1. Clone the repository
   ```bash
   git clone <repository-url>
   cd abid-folio
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the local development server:
   
   ```
    npm run dev
    ```


## Project Structure

```
abid-folio/
├── public/
│   ├── ae.webp
│   ├── ca.webp
│   ├── cry.webp
│   ├── favicon.ico
│   ├── lb.webp
│   ├── link.webp
│   ├── profile.jpg
│   ├── robots.txt
│   ├── sai.webp
│   ├── seo.webp
│   └── sitemap.xml
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── components/
│   │   ├── BubbleMenu.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hyperspeed.jsx
│   │   ├── ProjectsCards.jsx
│   │   └── SkillsSection.jsx
│   ├── index.css
│   ├── main.jsx
│   └── presets/
│       └── hyperspeedPresets.jsx
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Configuration & Customization

- Hyperspeed colors and effect options can be customized in `src/presets/hyperspeedPresets.jsx` and `src/components/Hyperspeed.jsx`.
- Navigation labels and hover styles can be adjusted in `src/components/BubbleMenu.jsx`.
- Project cards and images are defined in `src/components/ProjectsCards.jsx` and `/public` assets.
- Experience entries can be edited in `src/components/ExperienceSection.jsx`.

## SEO & Performance

- Includes `robots.txt` and `sitemap.xml` in `public/`.
- Built with Vite for fast HMR and optimized builds.
- Mobile performance optimizations applied to Hyperspeed.


## Live Demo

- Link : [Abid Khan – Portfolio Website](https://abid-khan-portfolio.vercel.app/)
