# Karl Darren De Sosa | Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.

🔗 **Live:** [portfolio-karldarren.vercel.app](https://portfolio-karldarren.vercel.app)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Blog:** MDX (next-mdx-remote)
- **Contact Form:** EmailJS
- **Deployment:** Vercel

## Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/Light theme toggle with persistence
- ✅ Scroll-in animations on all sections
- ✅ Active navbar highlighting on scroll
- ✅ MDX-powered blog with reading time
- ✅ Working contact form (EmailJS)
- ✅ Resume download button
- ✅ Project cards with screenshots
- ✅ Back-to-top button
- ✅ Loading animation
- ✅ Custom 404 page
- ✅ SEO optimized (Open Graph, sitemap, robots.txt)

## Sections

- Hero with gradient background
- About Me
- Work Experience (timeline)
- Projects with live links
- Skills (categorized)
- Certifications
- Contact Form
- Blog

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Blog

Add new posts by creating `.mdx` files in `content/blog/`:

```
content/blog/
├── my-developer-journey.mdx
└── building-cavitenest.mdx
```

Each post needs frontmatter:

```mdx
---
title: "Post Title"
date: "2026-01-01"
excerpt: "Short description"
tags: ["Tag1", "Tag2"]
---

Your content here...
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
src/
├── app/
│   ├── blog/                # Blog pages
│   ├── globals.css          # Design tokens & global styles
│   ├── layout.tsx           # Root layout + fonts + SEO + JSON-LD
│   ├── not-found.tsx        # Custom 404
│   ├── opengraph-image.tsx  # Dynamic OG image
│   ├── page.tsx             # Home page composition
│   ├── robots.ts            # SEO robots.txt
│   └── sitemap.ts           # SEO sitemap
├── components/
│   ├── layout/              # DashboardShell, Sidebar, Topbar, MobileMenu, Footer, ThemeToggle, ThemeScript, BackToTop, useActiveSection
│   ├── motion/              # Shared Framer Motion variants
│   ├── sections/            # Hero, Stats, Projects, MoreThanCode, Services, About, Experience, Skills, Approach, Certifications, Contact
│   └── ui/                  # Container, Section, SectionHeading, Card, Button, Tag, Icon, TerminalWindow
├── data/                    # profile, nav, experience, projects, skills, services, certifications, technologies, stats
├── data/                    # Centralized content (profile, experience, projects, skills, services, certs, technologies, stats)
└── lib/
    ├── blog.ts              # Blog utilities
    └── seo.ts               # JSON-LD structured data helpers
```

## Design System

Design tokens live in `src/app/globals.css` as CSS custom properties (color, spacing,
radius, shadow, motion). Fonts are self-hosted via `next/font` (Geist Sans + Geist Mono).
Theme is applied pre-hydration by `ThemeScript` to avoid flash of the wrong theme, and all
non-essential motion respects `prefers-reduced-motion`.

## Author

**Karl Darren De Sosa**
- BS Information Technology — Cavite State University (Magna Cum Laude)
- Full-Stack Web Developer & IT Support Specialist

## License

This project is for personal use.
