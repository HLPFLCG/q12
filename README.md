# Q12 Agency

Premium creative agency website for Johnny Saffra's Q12 Agency, specializing in UGC content creation and social media marketing.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: CSS animations + react-intersection-observer
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages

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

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage
│   ├── globals.css     # Design system & animations
│   └── not-found.tsx   # 404 page
├── components/
│   ├── Navigation.tsx  # Header with mobile menu
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Services.tsx    # Services grid
│   ├── Work.tsx        # Portfolio with filters
│   ├── About.tsx       # Founder section
│   ├── Testimonials.tsx # Client reviews carousel
│   ├── Instagram.tsx   # Instagram feed section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with links
└── public/
    ├── icon.svg        # Favicon
    └── logo.svg        # Full logo
```

## Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. The `wrangler.toml` includes necessary compatibility flags

### Environment Variables

For production, set these in your deployment platform:
- Contact form uses Formspree (already configured)

## Features

- Mobile-first responsive design
- Smooth scroll animations
- Auto-advancing testimonial carousel
- Filterable portfolio gallery
- Instagram integration
- Contact form with Formspree
- SEO optimized with metadata

## Social Links

- [@johnnysaffra](https://instagram.com/johnnysaffra) - Personal
- [@q12_agency](https://instagram.com/q12_agency) - Agency
- [@johnny_ugc](https://instagram.com/johnny_ugc) - UGC Content
- [LinkedIn](https://linkedin.com/in/johnnysaffra)

## License

Private - Q12 Agency
