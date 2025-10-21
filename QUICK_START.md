# Arabian Eagle International - Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Prerequisites

Ensure you have the required versions:
- **Node.js**: ≥18.18.0 (Recommended: 22.19.0)
- **npm**: ≥9.0.0

```bash
# Check your versions
node --version  # Should be ≥18.18.0
npm --version   # Should be ≥9.0.0
```

### Step 2: Install Dependencies

```bash
# Install all packages
npm install
```

This will install:
- Next.js 15.0.3
- React 19.0.0
- TypeScript 5.7.2
- All other dependencies

### Step 3: Start Development Server

```bash
npm run dev
```

You should see:
```
✓ Ready in 2.3s
○ Local: http://localhost:3000
```

### Step 4: Open the Application

Open your browser and navigate to:
- **English**: http://localhost:3000/en
- **Arabic**: http://localhost:3000/ar (RTL layout)
- **French**: http://localhost:3000/fr

The root URL (`http://localhost:3000`) automatically redirects to English.

---

## 📱 Testing the Application

### 1. Test Language Switching
1. Click the language switcher (globe icon) in the header
2. Select different languages: 🇺🇸 English, 🇸🇦 العربية, 🇫🇷 Français
3. Verify RTL layout for Arabic

### 2. Test All Pages
Visit each page to ensure it loads:
- ✅ Home (`/`)
- ✅ About (`/about`)
- ✅ Cards (`/cards`)
- ✅ Priority Pass (`/priority-pass`)
- ✅ Services (`/services`)
- ✅ Join (`/join`)
- ✅ Contact (`/contact`)
- ✅ Hotels (`/hotels`)
- ✅ Deals (`/deals`)
- ✅ Experiences (`/experiences`)
- ✅ Legal (`/legal`)

### 3. Test Responsive Design
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on different screen sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1440px)

### 4. Test Interactive Features
- ✅ Mobile hamburger menu
- ✅ Language switcher dropdown
- ✅ Animated statistics counters
- ✅ Form inputs
- ✅ Registration tabs
- ✅ Card hover effects

---

## 🔧 Verify Installation

### Run Type Checking
```bash
npm run type-check
```

**Expected**: No TypeScript errors

### Run Linting
```bash
npm run lint
```

**Expected**: No ESLint errors or only minor warnings

### Check for Vulnerabilities
```bash
npm audit
```

**Expected**: No high or critical vulnerabilities

---

## 🏗️ Build for Production

### Test Production Build

```bash
# Build the application
npm run build
```

**Expected Output**:
```
Route (app)                              Size     First Load JS
┌ ○ /[locale]                            ###  kB        ### kB
├ ○ /[locale]/about                      ###  kB        ### kB
├ ○ /[locale]/cards                      ###  kB        ### kB
... (all routes listed)
```

### Start Production Server

```bash
npm start
```

**Expected**: Server starts on http://localhost:3000

---

## 📦 What's Included

### Pages (11 Total)
1. **Home** - Hero, stats, benefits, CTAs
2. **About** - Mission, vision, achievements
3. **Cards** - MasterCard showcase
4. **Priority Pass** - Lounge access details
5. **Services** - All services overview
6. **Join** - Registration forms (3 types)
7. **Contact** - Contact form and info
8. **Hotels** - Hotel search
9. **Deals** - Holiday packages
10. **Experiences** - Member testimonials
11. **Legal** - Terms and conditions

### Components
- Header with navigation
- Footer with sitemap
- Language switcher
- Animated stats counter
- Benefit cards
- Service cards
- All shadcn/ui components

### Features
- ✅ Multi-language (EN, AR, FR)
- ✅ RTL support for Arabic
- ✅ Fully responsive
- ✅ Type-safe with TypeScript
- ✅ Accessible (WCAG AA)
- ✅ SEO-friendly
- ✅ Modern animations
- ✅ Form validation ready

---

## 🐛 Troubleshooting

### Issue: npm install fails
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Issue: Port 3000 already in use
**Solution**:
```bash
# Use a different port
npm run dev -- -p 3001
```

### Issue: TypeScript errors
**Solution**:
```bash
# Clear cache
rm -rf .next tsconfig.tsbuildinfo
npm install
npm run dev
```

### Issue: Module not found errors
**Solution**:
```bash
# Reinstall dependencies
npm install
# Restart dev server
npm run dev
```

---

## 📚 Next Steps

### For Development
1. **Read the Documentation**
   - [IMPLEMENTATION_NOTES.md](./IMPLEMENTATION_NOTES.md) - Technical details
   - [UPGRADE_GUIDE.md](./UPGRADE_GUIDE.md) - Version information
   - [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Project overview

2. **Explore the Code**
   - Check `app/[locale]/` for all pages
   - Review `components/` for reusable components
   - Look at `messages/` for translations

3. **Customize Content**
   - Update translation files in `messages/`
   - Add real images to `public/`
   - Update contact information
   - Add real testimonials

### For Production
1. **Environment Variables**
   - Copy `.env.example` to `.env.local`
   - Add API keys and secrets
   - Configure database connection

2. **Backend Integration**
   - Implement server actions in `actions/`
   - Connect to hotel booking API
   - Set up authentication
   - Configure email service

3. **Deployment**
   - Deploy to Vercel, Netlify, or similar
   - Configure custom domain
   - Set up analytics
   - Enable monitoring

---

## 💡 Tips

### Development Tips
- Use `npm run type-check` frequently
- Keep components small and focused
- Follow existing patterns
- Use semantic color tokens (not hardcoded colors)

### Performance Tips
- Images will be optimized automatically by Next.js
- Use `loading="lazy"` for images below the fold
- Keep bundle size small
- Use dynamic imports for heavy components

### Best Practices
- All text should come from translation files
- Components should be responsive by default
- Follow accessibility guidelines
- Write TypeScript types for all props

---

## ✅ Success Checklist

After following this guide, you should have:

- [ ] Node.js ≥18.18.0 installed
- [ ] npm ≥9.0.0 installed
- [ ] All dependencies installed
- [ ] Development server running
- [ ] All pages loading correctly
- [ ] Language switching working
- [ ] Mobile responsive design working
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Production build successful

---

## 🎉 You're Ready!

Your Arabian Eagle International website is now running. The application is:
- ✅ Modern and responsive
- ✅ Multi-language with RTL support
- ✅ Type-safe and performant
- ✅ Ready for customization

Start exploring and building! 🚀

---

**Need Help?**
- Check [UPGRADE_GUIDE.md](./UPGRADE_GUIDE.md) for detailed configuration
- Review [IMPLEMENTATION_NOTES.md](./IMPLEMENTATION_NOTES.md) for architecture details
- See [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) for project overview



