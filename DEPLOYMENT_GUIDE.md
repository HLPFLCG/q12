# Q12 Agency Website - Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the best choice for Next.js projects and takes less than 2 minutes.

#### Steps:

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
cd q12
vercel
```

Follow the prompts:
- Link to existing project? No
- Project name: q12-agency
- Directory: ./
- Override settings? No

4. **Production Deploy**
```bash
vercel --prod
```

5. **Add Environment Variable**
Go to your Vercel dashboard → Settings → Environment Variables:
- Name: `NEXT_PUBLIC_FORMSPREE_ID`
- Value: Your Formspree form ID (get it at https://formspree.io/)

---

### Option 2: Netlify

Netlify is also great and has a free tier.

#### Steps:

1. **Install Netlify CLI**
```bash
npm i -g netlify-cli
```

2. **Login**
```bash
netlify login
```

3. **Build the Site**
```bash
cd q12
npm run build
```

4. **Deploy**
```bash
netlify deploy --prod --dir=.next
```

5. **Add Environment Variable**
Go to Netlify dashboard → Site settings → Environment variables:
- Key: `NEXT_PUBLIC_FORMSPREE_ID`
- Value: Your Formspree form ID

---

### Option 3: Cloudflare Pages

Cloudflare Pages is free and very fast.

#### Steps:

1. **Push to GitHub** (already done!)
   - Repository: HLPFLCG/q12
   - Branch: claude/redesign-q12-website-4it4u

2. **Connect to Cloudflare**
   - Go to: https://dash.cloudflare.com/
   - Pages → Create a project
   - Connect to Git
   - Select HLPFLCG/q12
   - Select branch: claude/redesign-q12-website-4it4u

3. **Build Settings**
```
Build command: npm run build
Build output directory: .next
```

4. **Environment Variables**
Add in Cloudflare Pages settings:
- `NEXT_PUBLIC_FORMSPREE_ID` = Your form ID

5. **Deploy!**

---

### Option 4: GitHub Pages (Free)

#### Steps:

1. **Update next.config.ts** for GitHub Pages
Add to existing config:
```typescript
const nextConfig: NextConfig = {
  // ... existing config ...
  
  // GitHub Pages support
  basePath: '',
  assetPrefix: '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. **Build**
```bash
npm run build
```

3. **Deploy to GitHub Pages**
```bash
# Or use GitHub Actions (recommended)
```

---

## 📋 Pre-Deployment Checklist

### Must Complete Before Deploying:

- [ ] Update phone number in `src/lib/form-config.ts`
  ```typescript
  contactPhone: "+1 (YOUR_REAL_NUMBER)",
  ```

- [ ] Get Formspree form ID
  1. Go to https://formspree.io/
  2. Sign up/login
  3. Create new form
  4. Copy the form ID
  5. Add to environment variables

- [ ] Verify email address works
  - Test: hello@q12agency.com
  - Update if different

- [ ] Check social media links
  - Instagram: https://www.instagram.com/q12_agency/
  - LinkedIn: https://www.linkedin.com/in/johnnysaffra
  - Update if different

- [ ] Review content
  - Check all text is correct
  - Verify portfolio images are appropriate
  - Review testimonials

### Optional but Recommended:

- [ ] Add analytics (Google Analytics, Plausible)
- [ ] Set up custom domain
- [ ] Configure SSL (automatic on most platforms)
- [ ] Set up error monitoring (Sentry)
- [ ] Add favicon

---

## 🔧 Environment Variables

### Create `.env.local` file:

```bash
# Form Configuration
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

### For Vercel Dashboard:
- Go to Project Settings → Environment Variables
- Add: `NEXT_PUBLIC_FORMSPREE_ID`
- Value: Your actual form ID

### For Netlify:
- Site Settings → Build & deploy → Environment variables
- Add: `NEXT_PUBLIC_FORMSPREE_ID`

### For Cloudflare Pages:
- Settings → Environment variables
- Add: `NEXT_PUBLIC_FORMSPREE_ID`

---

## 🎯 After Deployment

### 1. Test the Site
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Mobile version looks good
- [ ] Contact form submits
- [ ] Social media links work
- [ ] Privacy/Terms pages load

### 2. Check Performance
- [ ] Run Lighthouse audit (should be 90+)
- [ ] Test page load speed
- [ ] Check Core Web Vitals

### 3. SEO Check
- [ ] Meta tags are correct
- [ ] Open Graph tags work
- [ ] Title is correct
- [ ] Description is accurate

### 4. Monitor
- [ ] Set up analytics
- [ ] Check for errors
- [ ] Monitor uptime

---

## 📱 Testing on Real Devices

### Required Testing:
- [ ] iPhone Safari (iOS 14+)
- [ ] Android Chrome
- [ ] iPad
- [ ] Desktop Chrome
- [ ] Desktop Safari
- [ ] Desktop Firefox

### Test Checklist:
- [ ] All sections scroll smoothly
- [ ] Mobile menu works
- [ ] Form submits on mobile
- [ ] Images load correctly
- [ ] Animations play smoothly

---

## 🌐 Domain Configuration

### Custom Domain (Optional)

**Vercel:**
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records (Vercel provides)

**Netlify:**
1. Go to Domain settings
2. Add custom domain
3. Update DNS records

**Cloudflare:**
1. Go to Custom domains
2. Add domain
3. Update DNS

---

## 🔒 Security Checklist

- [ ] HTTPS enabled (automatic on most platforms)
- [ ] Security headers configured (already in next.config.ts)
- [ ] CSP is working
- [ ] No exposed API keys
- [ ] Contact form has spam protection (Formspree provides)

---

## 📊 Monitoring

### Recommended Tools:

**Analytics:**
- Google Analytics (free)
- Plausible (privacy-focused, paid)
- Umami (self-hosted)

**Error Tracking:**
- Sentry (free tier available)
- LogRocket

**Uptime:**
- UptimeRobot (free)
- Pingdom

**Performance:**
- Google PageSpeed Insights
- WebPageTest
- Lighthouse CI

---

## 🆘 Troubleshooting

### Build Fails:
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Form Not Submitting:
1. Check Formspree ID is correct
2. Verify environment variable is set
3. Check browser console for errors
4. Test Formspree dashboard

### Images Not Loading:
1. Check remotePatterns in next.config.ts
2. Verify URLs are correct
3. Check CSP headers

### Styling Issues:
1. Check Tailwind CSS is loading
2. Verify globals.css is imported
3. Check for CSS conflicts

---

## 📞 Support

### Documentation:
- COMPREHENSIVE_REVIEW.md - Full analysis
- CLEANUP_SUMMARY.md - All changes
- README_IMPROVEMENTS.md - Quick start

### Useful Commands:
```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

---

## ✨ Deployment Recommendation

**Best Option: Vercel**

Why Vercel?
- Built by Next.js creators
- Automatic deployments
- Free SSL
- Fast CDN
- Easy environment variables
- Preview URLs for pull requests
- Best performance for Next.js

**Time to Deploy:** 2-3 minutes

**Cost:** Free tier is sufficient

---

## 🎉 Final Steps

1. ✅ Choose deployment platform (Vercel recommended)
2. ✅ Update contact phone number
3. ✅ Get Formspree form ID
4. ✅ Add environment variable
5. ✅ Deploy
6. ✅ Test everything
7. ✅ Share with your friend!

---

**Estimated Time to Complete:** 30 minutes

**Difficulty Level:** Easy ⭐⭐☆☆☆

**Support:** Comprehensive documentation provided

---

**Good luck! Your friend is going to love this gift!** 🎁✨