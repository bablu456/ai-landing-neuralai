# NeuralAI Landing Page
bablu kumar
Modern, animated landing page for an AI infrastructure startup. Built with React + Vite, Tailwind CSS v4, custom glassmorphism utilities, Framer Motion animations, and Lucide icons.

https://github.com/bablu456/ai-landing-neuralai

## Table of Contents

1. [Overview](#overview)
2. [Live Preview](#live-preview)
3. [Sections](#sections)
4. [Features](#features)
5. [Tech Stack](#tech-stack)
6. [Getting Started](#getting-started)
7. [Available Scripts](#available-scripts)
8. [Project Structure](#project-structure)
9. [Styling Notes](#styling-notes)
10. [Deployment](#deployment)

## Overview

The project recreates a premium SaaS/AI landing page experience:

- Sticky glassmorphism navbar with mobile slide-in menu.
- Hero section with mesh gradients, animated badges, and CTA buttons.
- Bento-style feature grid with motion on scroll.
- Rich footer with multi-column link lists and social icons.

Every component uses consistent spacing, gradients, and motion to deliver a cohesive brand story for “NeuralAI”.

## Live Preview

Start the dev server locally:

```bash
npm install
npm run dev
```

## Sections

| Section   | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| Navbar    | Sticky top navigation, scroll-aware styling, animated mobile drawer.        |
| Hero      | Mesh gradient background, headline, supporting copy, CTA buttons, blur FX.  |
| Features  | 6-card bento grid highlighting product pillars with framer-motion reveals. |
| Footer    | Brand summary, social icons (GitHub, Twitter/X, LinkedIn, Mail), quick links. |

## Features

- Framer Motion entrance, hover, and scroll animations for premium feel.
- Custom glass and shimmer utility classes defined in `src/index.css`.
- Responsive layout (mobile-first, uses Tailwind grid utilities).
- Lucide icons for consistent iconography.
- Smooth scrolling and mesh gradient background for depth.

## Tech Stack

- **React 19** with Vite for fast dev experience.
- **Tailwind CSS v4** (via `@tailwindcss/postcss`) plus hand-authored CSS utilities.
- **Framer Motion 12** for animation primitives (`motion`, `AnimatePresence`, `useScroll`, `useTransform`).
- **Lucide React** icon set (`Sparkles`, `Brain`, `Cpu`, etc.).
- **Plus Jakarta Sans** web font from Google Fonts.

## Getting Started

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:5173 by default)
npm run dev

# Lint the project
npm run lint

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Available Scripts

| Command         | Description                      |
|-----------------|----------------------------------|
| `npm run dev`   | Start Vite dev server with HMR   |
| `npm run build` | Bundle assets for production     |
| `npm run lint`  | Run ESLint with React presets    |
| `npm run preview` | Preview the production bundle  |

## Project Structure

```
ai-startup-landing/
├─ src/
│  ├─ App.jsx              # Composes Navbar, Hero, Features, Footer
│  ├─ index.css            # Tailwind + custom utilities (glass, blobs, shimmer)
│  ├─ components/
│  │  ├─ Navbar.jsx        # Sticky nav, desktop + mobile menu
│  │  ├─ Hero.jsx          # Headline section with gradients & CTAs
│  │  ├─ Features.jsx      # Bento grid with motion cards
│  │  └─ Footer.jsx        # Brand summary, link columns, social icons
│  └─ main.jsx             # React entry point
├─ public/
│  └─ vite.svg
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```

## Styling Notes

- `src/index.css` defines:
  - Mesh gradient blobs (`.mesh-blob`, `.blob-purple`, `.blob-cyan`, `.blob-pink`).
  - Glassmorphism utility `.glass-premium`.
  - Shimmer CTA button effect `.btn-shimmer`.
  - Text gradient helpers (`.text-gradient-accent`, `.text-gradient-premium`).
  - Global body background and font family.
- Tailwind v4 directives (`@import "tailwindcss"`) handle base utilities.

## Deployment

1. Build the project: `npm run build`.
2. Deploy the contents of `dist/` to any static hosting provider (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).
3. Ensure the site serves over HTTPS for smooth font + icon loading.

## License

MIT © 2025 Bablukumar Inc.
