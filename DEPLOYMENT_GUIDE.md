# PDF Generation Deployment Guide

## 100% Guarantee: Clients Will NOT Face Chrome Installation Issues

### Why?
- PDF generation is **SERVER-SIDE ONLY**
- Clients make HTTP request → Server generates PDF → Client downloads
- Clients never interact with Puppeteer or Chrome
- **Zero client-side dependencies**

---

## Deployment Steps by Platform

### Option A: Railway / Render / Digital Ocean (RECOMMENDED - EASIEST)

**Current code works perfectly!** Just deploy as is.

**Step 1: Approve Build Scripts (One-time setup)**
```bash
pnpm approve-builds puppeteer
```

**Step 2: Add to package.json (Insurance)**
```json
{
  "scripts": {
    "postinstall": "npx puppeteer browsers install chrome"
  }
}
```

**Step 3: Deploy**
```bash
git push
```

✅ Done! Chrome auto-installs during deployment.

---

### Option B: Vercel / AWS Lambda (Serverless)

**⚠️ Regular Puppeteer doesn't work on serverless!**

**Step 1: Install Serverless Packages**
```bash
pnpm remove puppeteer
pnpm add puppeteer-core @sparticuz/chromium
```

**Step 2: Replace route.ts**
```bash
# Rename the serverless version
mv app/api/brochure-pdf/route.serverless.ts app/api/brochure-pdf/route.ts
```

**Step 3: Update vercel.json (if it exists)**
```json
{
  "functions": {
    "app/api/brochure-pdf/route.ts": {
      "maxDuration": 60
    }
  }
}
```

**Step 4: Deploy**
```bash
vercel deploy
```

✅ Done! Uses lightweight serverless Chrome.

---

## Quick Decision Guide

**Where are you deploying?**

### Railway / Render / Digital Ocean / Heroku
```bash
# Run once:
pnpm approve-builds puppeteer

# Add to package.json scripts:
"postinstall": "npx puppeteer browsers install chrome"

# Deploy normally
```
✅ **Use current code** (app/api/brochure-pdf/route.ts)

---

### Vercel / Netlify / AWS Lambda
```bash
# Switch packages:
pnpm remove puppeteer
pnpm add puppeteer-core @sparticuz/chromium

# Replace file:
mv app/api/brochure-pdf/route.serverless.ts app/api/brochure-pdf/route.ts

# Deploy
```
✅ **Use serverless version**

---

## Testing After Deployment

### Test 1: Check Server Logs
Look for:
```
✅ PDF generated successfully
❌ "Could not find Chrome" → Chrome not installed
```

### Test 2: Test API Directly
```bash
curl https://your-domain.com/api/brochure-pdf?locale=en
```

Should return PDF binary.

### Test 3: Test from Browser
1. Go to your site
2. Click download button
3. Should generate and download PDF

---

## Troubleshooting

### Error: "Could not find Chrome"

**Railway/Render:**
```json
// package.json
{
  "scripts": {
    "postinstall": "npx puppeteer browsers install chrome"
  }
}
```

**Vercel:**
```bash
# You're using wrong package
pnpm remove puppeteer
pnpm add puppeteer-core @sparticuz/chromium
```

---

### Error: "Timeout"

Increase timeout:
```typescript
// In route.ts
await page.goto(url, {
  waitUntil: 'networkidle0',
  timeout: 60000 // Increase to 60 seconds
});
```

---

### Error: "Out of Memory"

**For Vercel:**
- Hobby plan: 1GB RAM limit (might struggle with complex PDFs)
- Pro plan: 3GB RAM (should work fine)

**For Railway/Render:**
- Increase memory in plan settings

---

## File Sizes

Expected results:
- **Development**: 200-500 KB per PDF
- **Production**: Same
- **Generation time**: 2-5 seconds

---

## Cost Considerations

### Railway (RECOMMENDED for PDF)
- $5/month starter plan
- Includes plenty of resources
- No cold starts
- ✅ Perfect for Puppeteer

### Vercel
- Hobby: Free (but 1GB RAM limit)
- Pro: $20/month (3GB RAM)
- Has cold starts (~3-5 second delay first time)

### Render
- $7/month starter plan
- Good for Puppeteer
- No cold starts

---

## Performance Optimization

### 1. Add Caching (Optional)
```typescript
// Cache generated PDFs for 1 hour
headers: {
  'Cache-Control': 'public, max-age=3600'
}
```

### 2. Reduce Viewport (Faster)
```typescript
await page.setViewport({
  width: 1200,
  height: 1600,
  deviceScaleFactor: 1 // Lower = faster (was 2)
});
```

### 3. Skip Heavy Images (Optional)
```typescript
await page.setRequestInterception(true);
page.on('request', (req) => {
  if (req.resourceType() === 'image') {
    req.abort();
  } else {
    req.continue();
  }
});
```

---

## Production Checklist

- [ ] Choose deployment platform
- [ ] Install correct Puppeteer version
- [ ] Add postinstall script (if not Vercel)
- [ ] Test PDF generation locally
- [ ] Deploy to production
- [ ] Test PDF download from production URL
- [ ] Check server logs for errors
- [ ] Test all locales (en, ar, fr)
- [ ] Monitor memory usage
- [ ] Set up error alerting

---

## Summary

**Clients:** ✅ Zero issues - they just download PDFs

**Server:** ✅ Chrome auto-installs with correct setup

**You need to:**
1. Choose platform (Railway recommended)
2. Run `pnpm approve-builds puppeteer`
3. Add postinstall script
4. Deploy!

**That's it!** 🚀

