"# RR DevPro — Personal Portfolio & Blog

Personal portfolio website for Ruslan Rassamakhin — frontend developer & designer.

## Tech Stack

- **Next.js 15** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion** — Smooth animations

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header + Footer)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── portfolio/page.tsx  # Portfolio with filters
│   ├── portfolio/[slug]/   # Project detail page
│   ├── services/page.tsx   # Services page
│   └── contact/page.tsx    # Contact form
├── components/
│   ├── layout/             # Header, Footer, Container
│   ├── ui/                 # Card, Button, Pill, etc.
│   └── blocks/             # Page-level sections
└── data/                   # Mock data (projects, skills, etc.)
```

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with hero, skills, portfolio preview |
| `/about` | Bio, experience timeline, principles |
| `/portfolio` | Filterable project grid (Web/Mobile/Desktop) |
| `/portfolio/[slug]` | Individual project case study |
| `/services` | Services offered, process, tech stack |
| `/contact` | Contact form + info |" 
