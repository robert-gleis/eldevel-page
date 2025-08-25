# eldevel – Electronics Development Landing Page

[![Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/Written%20in-TypeScript-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

Moderne, responsive Landing Page für **eldevel – Electronics Development** (Hans-Jürgen Rode). 
Statisch generiert mit Astro + Tailwind CSS für optimale Performance und SEO.

## 🚀 Quick Start

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
# → http://localhost:4321/landing-page

# Production Build
npm run build
```

## ✨ Features

- 📱 **Fully Responsive** - Mobile-First Design
- 🌙 **Dark Mode** - Toggle mit localStorage
- ⚡ **Lightning Fast** - <30KB Bundle ohne React
- 🔍 **SEO Optimized** - Meta Tags, JSON-LD, Sitemap
- ♿ **Accessible** - WCAG AA konform
- 🎨 **Modern Design** - eldevel Branding
- 📧 **Contact Forms** - Mailto + Formspree Ready

## 🏗️ Sections

- **Hero**: Headline + PCB Image + Floating Cards + Stats
- **About**: Hans-Jürgen Rode Portrait & Biography  
- **Services**: 7 Services mit spezifischen Icons
- **Process**: 5-Step Development Workflow
- **Clients**: 7 Reference Companies
- **Contact**: Info + Working Form
- **Legal**: Accordion (Impressum + Datenschutz)

## 🛠️ Tech Stack

- **Astro 5.x** - Static Site Generator
- **Tailwind CSS 3.x** - Utility-First CSS
- **TypeScript** - Type Safety
- **Vanilla JavaScript** - Mobile Menu + Dark Mode + Accordion

**Why No React?** 85% smaller bundle (28KB vs 180KB), better performance.

## 📁 Project Structure

```
├── src/
│   ├── content/de.ts         # Deutsche Texte (i18n ready)
│   ├── styles/globals.css    # Tailwind + Custom Components
│   ├── layouts/              # Base + SEO Layouts
│   ├── components/Header.astro # Navigation + Mobile Menu
│   └── pages/index.astro     # Single Page App
├── public/images/            # Optimierte Assets
└── example_assets/           # Original Sources
```

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"
   - This will automatically deploy from the `main` branch

2. **Repository Setup**:
   - **Option A**: Rename repository to `eldevel.github.io` for root domain
   - **Option B**: Use custom domain in GitHub Pages settings
   - **Option C**: Keep current name and site will be at `https://eldevel.github.io/landing-page`

3. **Automatic Deployment**:
   - Push to `main` branch triggers automatic build and deployment
   - Site will be available at `https://eldevel.github.io` (if repo renamed) or `https://eldevel.github.io/landing-page`

### Manual GitHub Pages Setup
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - uses: actions/deploy-pages@v4
```

### Netlify / Vercel
- Build command: `npm run build`
- Publish directory: `dist`

## 🔧 Configuration

### Content Updates
Edit `src/content/de.ts` for all text content:
```typescript
export const content = {
  hero: {
    headline: "Elektronik-Entwicklung, die Produkte voranbringt.",
    // ...
  },
  // ...
};
```

### Contact Form
Current: Mailto integration
```html
<form action="mailto:info@eldevel.de" method="post">
```

Alternative: Formspree
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Branding
Customize colors in `tailwind.config.cjs`:
```javascript
colors: {
  primary: { /* Teal */ },
  accent: { /* Orange */ },
}
```

## 📊 Performance

- **Lighthouse Score**: >90 (all categories)
- **Bundle Size**: ~28KB total
- **Image Loading**: Lazy (except hero)
- **Critical CSS**: Inlined

## 🔍 SEO

- Complete meta tags (OG, Twitter Cards)
- JSON-LD structured data
- Automatic sitemap generation
- Semantic HTML5 structure

## ♿ Accessibility

- WCAG AA compliant
- Keyboard navigation
- Screen reader optimized
- Focus management

## 🐛 Troubleshooting

**Build errors**:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Images not loading**: Check paths start with `/images/`

**Dark mode issues**: Check browser console for JS errors

## 📞 Support

- **E-Mail**: info@eldevel.de
- **Telefon**: 0461 – 494 339 10
- **Öffnungszeiten**: Mo–Fr 9–17 Uhr

---

© 2024 eldevel – Electronics Development. Alle Rechte vorbehalten.