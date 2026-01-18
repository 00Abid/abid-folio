# Abid Khan - Enterprise SEO Portfolio

![Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![Next.js](https://img.shields.io/badge/Next.js-16.1-black)
![React](https://img.shields.io/badge/React-19-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-cyan)
![Performance](https://img.shields.io/badge/Lighthouse-100-green)

A high-performance, Enterprise-grade SEO portfolio built with **Next.js 16 (App Router)** and **Tailwind CSS v4**. This project demonstrates the intersection of modern frontend engineering and advanced Technical SEO (AEO).

## 🚀 Features

### Core Engineering
*   **Framework**: Next.js 16 (App Router, Server Components).
*   **Styling**: Tailwind CSS v4 (Zero-runtime CSS).
*   **Deployment**: Vercel Edge Network.
*   **Architecture**: Semantic HTML5, ARIA Accessible, Mobile-First.

### Enterprise SEO (Search Engine Optimization)
*   **AEO (Answer Engine Optimization)**: Structured specifically for LLMs (Perplexity, ChatGPT) using `llms.txt` and "Direct Answer" content blocks.
*   **Structured Data (Schema)**:
    *   `ProfilePage` & `Organization`
    *   `BlogPosting` with nested `FAQPage`
    *   `BreadcrumbList` & `ItemList`
*   **Performance**:
    *   LCP Optimization (Eager loaded hero images).
    *   CLS Elimination (Fixed aspect ratios).
    *   Responsive Images (`sizes` prop implementation).
*   **Technical**:
    *   Dynamic `sitemap.xml` & `robots.txt`.
    *   Self-referencing Canonical URLs.
    *   `security.txt` & `humans.txt` standards.
    *   Internationalization (`hreflang` targeting `en-US`).

## 🛠️ Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/00Abid/abid-folio.git
    cd abid-folio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Visit `http://localhost:3000` to see the live site.

4.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## 📂 Project Structure

```bash
src/
├── app/
│   ├── blog/            # Blog Index & Dynamic [slug] Routes
│   ├── layout.js        # Root Layout (Metadata, Navbar, Footer)
│   ├── page.js          # Homepage Component Assembly
│   ├── error.js         # Global Error Boundary
│   ├── sitemap.js       # Dynamic Sitemap Generation
│   └── robots.js        # Robots.txt Generation
├── components/          # React Requirements (Navbar, Hero, Projects, etc.)
└── lib/                 # Data Utilities (Blog Data, etc.)
public/
├── .well-known/         # Security & Metadata Standards
├── llms.txt             # AI Agent Context File
└── ...assets
```

## 🛡️ Security

This project adheres to strict security standards.
*   **Disclosure**: See [security.txt](public/.well-known/security.txt).
*   **Headers**: HSTS and X-Frame-Options configured via Vercel headers.

## 📄 License

MIT License © 2026 Abid Khan.
