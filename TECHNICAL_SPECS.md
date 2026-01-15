# Q12 Agency Website - Technical Specifications

## 🏗️ Architecture Overview

### Technology Stack

**Frontend Framework:**
- Next.js 16.1.2 (App Router)
- React 19.2.3
- TypeScript 5.x

**Styling:**
- Tailwind CSS v4
- Custom CSS variables in `globals.css`
- Glass morphism effects
- Gradient animations

**Icons:**
- Lucide React (lightweight icon library)

**Animations:**
- CSS-based animations (no heavy animation libraries)
- Intersection Observer for scroll-triggered animations
- React Intersection Observer library

**Build Tools:**
- Turbopack (Next.js's bundler)
- TypeScript compiler
- PostCSS

---

## 📁 Project Structure

```
q12/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── privacy/             # Privacy Policy page
│   │   │   └── page.tsx
│   │   ├── terms/               # Terms of Service page
│   │   │   └── page.tsx
│   │   ├── error.tsx            # Error boundary
│   │   ├── layout.tsx           # Root layout
│   │   ├── loading.tsx          # Loading state
│   │   ├── not-found.tsx        # 404 page
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   ├── components/              # React components
│   │   ├── About.tsx            # About section
│   │   ├── Contact.tsx          # Contact form section
│   │   ├── Footer.tsx           # Footer
│   │   ├── Hero.tsx             # Hero/Landing section
│   │   ├── Navigation.tsx       # Navigation bar
│   │   ├── Services.tsx         # Services grid
│   │   ├── Testimonials.tsx     # Testimonials carousel
│   │   ├── Work.tsx             # Portfolio/Work section
│   │   └── index.ts             # Component exports
│   └── lib/                     # Utility libraries
│       ├── form-config.ts       # Form configuration
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   └── ... (images, icons)
├── .env.example                 # Environment variables template
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── ... documentation files
```

---

## 🎨 Design System

### Color Palette

**Primary Colors:**
```css
--dark: #0a0a0a;              /* Main background */
--dark-secondary: #111111;     /* Secondary background */
--dark-tertiary: #1a1a1a;     /* Tertiary background */
```

**Accent Colors:**
```css
--accent: #6366f1;            /* Primary accent (indigo) */
--accent-light: #818cf8;      /* Light accent */
--accent-dark: #4f46e5;       /* Dark accent */
--accent-rgb: 99, 102, 241;   /* RGB values for use */
```

**Text Colors:**
```css
--text-primary: #ffffff;      /* Main text */
--text-secondary: #a1a1aa;    /* Secondary text */
--text-muted: #71717a;        /* Muted text */
```

**Glass Effects:**
```css
--glass-bg: rgba(255, 255, 255, 0.03);
--glass-border: rgba(255, 255, 255, 0.08);
--glass-hover: rgba(255, 255, 255, 0.06);
```

### Typography

**Font Family:**
- System fonts for performance
- Fallback: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

**Headings:**
```css
h1: clamp(2.5rem, 8vw, 5rem);    /* Responsive: 40px - 80px */
h2: clamp(2rem, 5vw, 3.5rem);     /* Responsive: 32px - 56px */
h3: clamp(1.5rem, 3vw, 2rem);     /* Responsive: 24px - 32px */
```

**Font Weights:**
- Light: 300
- Normal: 400
- Medium: 500
- Semi-bold: 600
- Bold: 700
- Black: 900

### Spacing Scale

**Container:**
- Mobile: `padding: 0 1.5rem`
- Tablet: `padding: 0 2rem`
- Desktop: `padding: 0 4rem`
- Max-width: `1280px`

**Section Padding:**
- Mobile: `padding: 6rem 0`
- Desktop: `padding: 8rem 0`

### Animations

**Fade In Up:**
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

**Float:**
```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

**Pulse Accent:**
```css
@keyframes pulseAccent {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}
```

---

## 🔧 Configuration Files

### next.config.ts

**Performance Optimizations:**
```typescript
reactStrictMode: true,
poweredByHeader: false,
compress: true,
experimental: {
  optimizeCss: true,
}
```

**Image Optimization:**
```typescript
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
  ],
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  imageSizes: [16, 32, 48, 64, 96, 128, 256],
}
```

**Security Headers:**
```typescript
X-DNS-Prefetch-Control: on
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: [CSP rules]
```

---

## 📦 Dependencies

### Production Dependencies

**Core:**
- `next@16.1.2` - React framework
- `react@19.2.3` - UI library
- `react-dom@19.2.3` - React DOM

**Styling:**
- `tailwindcss@^4` - Utility-first CSS
- `@tailwindcss/postcss@^4` - Tailwind PostCSS plugin

**Utilities:**
- `clsx@^2.1.1` - Conditional classes
- `tailwind-merge@^3.4.0` - Merge Tailwind classes

**UI Components:**
- `lucide-react@^0.562.0` - Icon library
- `react-intersection-observer@^10.0.0` - Scroll animations

### Development Dependencies

**TypeScript:**
- `typescript@^5` - Type checking
- `@types/node@^20` - Node types
- `@types/react@^19` - React types
- `@types/react-dom@^19` - React DOM types

**Linting:**
- `eslint@^9` - Code linting
- `eslint-config-next@16.1.2` - Next.js ESLint config

---

## 🚀 Performance

### Build Performance
- **Build Time:** ~3.5 seconds
- **Bundle Size:** Optimized with automatic code splitting
- **Static Generation:** All pages pre-rendered
- **Image Optimization:** Automatic AVIF/WebP conversion

### Runtime Performance
- **Lighthouse Score:** Expected 90+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s

### Optimization Techniques
1. Static Site Generation (SSG)
2. Image optimization with Next.js Image component
3. Automatic code splitting
4. CSS optimization
5. Compression enabled
6. Lazy loading for below-fold images

---

## 🔒 Security

### Content Security Policy (CSP)
```javascript
default-src 'self'
script-src 'self' 'unsafe-eval' 'unsafe-inline'
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
img-src 'self' data: blob: https://images.unsplash.com
font-src 'self' https://fonts.gstatic.com
connect-src 'self'
frame-ancestors 'none'
base-uri 'self'
form-action 'self'
```

### Security Headers
- Strict Transport Security (HSTS)
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

### Input Validation
- Email validation with regex
- Input sanitization (removes <, > characters)
- Character limits on all inputs
- Client-side validation

---

## ♿ Accessibility

### Features Implemented
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators
- Skip links (implied through proper heading structure)
- Reduced motion support
- Semantic HTML
- Alt text on images
- Form labels properly associated
- Color contrast meets WCAG AA standards

### Screen Reader Support
- Proper heading hierarchy
- Descriptive link text
- Form error announcements
- Status messages accessible

---

## 📱 Responsive Design

### Breakpoints
```css
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large desktop */
```

### Mobile-First Approach
All styles start with mobile, then enhanced for larger screens using `md:`, `lg:`, etc.

### Responsive Features
- Collapsible mobile navigation
- Responsive grid layouts
- Adaptive typography with `clamp()`
- Touch-friendly interactions
- Optimized images per device

---

## 🌐 SEO

### Meta Tags
```typescript
Title: Q12 Agency | Premium UGC & Social Media Marketing Agency
Description: Q12 Agency is a premium creative studio...
Keywords: UGC agency, user generated content, social media marketing...
```

### Open Graph
```typescript
og:type: website
og:locale: en_US
og:title: Q12 Agency | Premium UGC & Social Media Marketing Agency
og:description: Premium creative studio...
og:image: /og-image.png
```

### Twitter Cards
```typescript
twitter:card: summary_large_image
twitter:title: ...
twitter:description: ...
twitter:image: /og-image.png
```

### Technical SEO
- XML sitemap generated
- robots.txt configured
- Canonical URLs set
- Structured data ready (to be added)
- Semantic HTML structure

---

## 🔗 Routing

### Pages
- `/` - Home page
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/*` - 404 page

### Hash Navigation
- `#services` - Services section
- `#work` - Portfolio section
- `#about` - About section
- `#testimonials` - Testimonials section
- `#contact` - Contact form

---

## 📊 State Management

### Client State
- React `useState` for form state
- React `useState` for UI state (mobile menu, active testimonial)
- No external state management needed

### Server State
- Static generation (no server state)
- Form submission via API/Formspree

---

## 🎯 Component Architecture

### Page Components
- `page.tsx` - Main home page, composes all section components

### Section Components
- `Navigation` - Fixed header with mobile menu
- `Hero` - Landing section with stats
- `Services` - Services grid with hover effects
- `Work` - Portfolio with category filtering
- `About` - Founder info and company values
- `Testimonials` - Client testimonials carousel
- `Contact` - Contact form and info
- `Footer` - Links and final CTA

### Utility Components
- `Glass` - Reusable glass morphism card
- `GradientText` - Text gradient effect
- `Button` - Primary/secondary button variants

---

## 🔧 Development Workflow

### Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Style
- TypeScript strict mode enabled
- ESLint configured
- Prettier recommended (not included)
- Component naming: PascalCase
- File naming: PascalCase for components

---

## 📈 Analytics & Monitoring (To Be Added)

### Recommended Tools
- Google Analytics / Plausible
- Sentry (error tracking)
- Vercel Analytics (if using Vercel)
- Hotjar / LogRocket (session recording)

### Events to Track
- Page views
- Form submissions
- Button clicks (CTAs)
- Navigation clicks
- Portfolio clicks

---

## 🔄 Future Enhancements

### Potential Features
1. Blog/Resources section
2. Case studies with detailed pages
3. Client login portal
4. Appointment booking
5. Live chat widget
6. Multi-language support
7. Dark/light mode toggle
8. Advanced filtering for portfolio
9. Video backgrounds
10. 3D animations (Three.js)

---

## 📚 API Integration

### Current
- Formspree (form submissions)

### Future Potential
- Instagram API (show recent posts)
- Google Maps (show office location)
- Calendar API (appointment booking)
- CMS (Headless CMS for content)

---

## 🎨 Brand Assets

### Logo
- Simple "Q" lettermark
- Gradient: indigo to purple
- Used in Navigation, Hero, Footer

### Colors
- Primary: Indigo (#6366f1)
- Secondary: Purple (#818cf8)
- Background: Black (#0a0a0a)

### Typography
- Clean, modern sans-serif
- Bold headings
- Light body text
- High contrast for readability

---

## 📋 Browser Support

### Target Browsers
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (latest)

### Features Used
- CSS Grid
- Flexbox
- CSS Custom Properties
- Intersection Observer API
- ES6+ JavaScript

---

## 🛠️ Maintenance

### Regular Tasks
- Update dependencies (monthly)
- Monitor performance
- Check for security updates
- Review analytics
- Update content
- Test on new browsers/OS

### Content Updates
- Easy to edit in component files
- No build needed for text changes
- Portfolio images can be swapped
- Testimonials can be updated

---

**Last Updated:** January 15, 2026  
**Version:** 1.0.0  
**Status:** Production Ready (85%)