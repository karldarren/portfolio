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
│   ├── blog/           # Blog pages
│   ├── globals.css     # Theme & global styles
│   ├── layout.tsx      # Root layout + SEO
│   ├── not-found.tsx   # Custom 404
│   ├── page.tsx        # Home page
│   ├── robots.ts       # SEO robots.txt
│   └── sitemap.ts      # SEO sitemap
├── components/
│   ├── About.tsx
│   ├── AnimatedSection.tsx
│   ├── BackToTop.tsx
│   ├── Certifications.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── ThemeToggle.tsx
└── lib/
    └── blog.ts         # Blog utilities
```

## Author

**Karl Darren De Sosa**
- BS Information Technology — Cavite State University (Magna Cum Laude)
- Full-Stack Web Developer & IT Support Specialist

## License

This project is for personal use.
