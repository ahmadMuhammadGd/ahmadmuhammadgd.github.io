# Ahmad Muhammad - Portfolio

A technical portfolio built with Astro, showcasing data engineering work and open-source projects.

## Features

- **Fast**: Built with Astro for optimized static site generation
- **Dark mode**: Light and dark themes with a persisted toggle
- **Responsive**: Mobile-first design using Tailwind CSS
- **Content Collections**: Structured markdown content for projects and writing
- **Type-safe**: Strict TypeScript configuration

## Project Structure

```
portfolio/
├── src/
│   ├── pages/                  # File-based routes
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   ├── resume.astro       # Resume page
│   │   ├── contact-me.astro   # Contact page
│   │   └── writing/
│   │       ├── index.astro    # Writing index (DEV.to articles)
│   │       └── [slug].astro   # Project case studies
│   ├── components/            # Reusable components
│   ├── layouts/               # Page layout with SEO and theme bootstrapping
│   ├── content/               # Markdown content
│   │   ├── projects/          # Case study markdown files
│   │   └── writing/           # Article markdown files
│   ├── lib/                   # DEV.to article fetching
│   ├── styles/                # Global styles and design tokens
│   └── content.config.ts      # Content collection schemas
├── public/                    # Static assets
├── .github/workflows/         # GitHub Pages deployment
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts a local development server at `http://localhost:4321`.

### Build

```bash
npm run build
```

Generates a production-ready build in `./dist/`.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Adding Content

### Projects

Add a new markdown file to `src/content/projects/`. The filename becomes the route (`dqt.md` → `/writing/dqt`).

```markdown
---
title: "Project Name"
description: "Short description"
tags: ["Tag1", "Tag2"]
featured: true
metrics:
  - value: "Metric"
    label: "Description"
---

## Section

Content here...
```

### Writing

Add a new markdown file to `src/content/writing/`:

```markdown
---
title: "Article Title"
description: "Article description"
date: 2024-08-20
---

Article content...
```

## Customization

### Colors & Theme

Edit `tailwind.config.mjs` to customize the semantic color tokens. Their values are defined as CSS variables in `src/styles/global.css`.

### Typography

Global text styles are defined in `src/styles/global.css`.

### Components

Reusable components are in `src/components/`. Each component can be imported and used in pages.

## Deployment

The site is built as static HTML/CSS/JS. A GitHub Pages workflow is defined in `.github/workflows/deploy.yml`; it runs on pushes to `master` and deploys through GitHub Actions.

The site can also be deployed to any static host by uploading `dist/`.

- **Vercel**: Connect your GitHub repo
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Use the included workflow
- **Any static host**: Upload the `dist/` folder

## Technology Stack

- **Framework**: Astro 7.x
- **Styling**: Tailwind CSS 3.x
- **Content**: Astro Content Collections with Markdown
- **Language**: TypeScript
- **Typography**: Tailwind CSS Typography plugin

## License

© 2024 Ahmad Muhammad. All rights reserved.
