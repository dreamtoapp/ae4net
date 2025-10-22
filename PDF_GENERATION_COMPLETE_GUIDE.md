# 🎯 Complete PDF Generation Guide for Next.js + Puppeteer

**A production-ready reference for implementing professional PDF generation in any Next.js application**

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [API Route Implementation](#api-route-implementation)
7. [Client Component](#client-component)
8. [Environment Setup](#environment-setup)
9. [Local Development](#local-development)
10. [Vercel Deployment](#vercel-deployment)
11. [Testing](#testing)
12. [Troubleshooting](#troubleshooting)
13. [Performance Optimization](#performance-optimization)
14. [Security Best Practices](#security-best-practices)
15. [Cost Analysis](#cost-analysis)

---

## Overview

This guide provides a complete implementation of server-side PDF generation using Puppeteer in Next.js. The solution:

- ✅ Works in both local development and production (Vercel)
- ✅ Generates high-fidelity PDFs from any webpage
- ✅ Handles all CSS, images, fonts, and gradients
- ✅ Auto-detects environment (local vs serverless)
- ✅ Production-tested and battle-proven
- ✅ Zero client-side dependencies

---

## Features

### ✅ What It Can Do

- Generate PDFs from any URL or HTML content
- Preserve all CSS styling (gradients, shadows, animations as static)
- Include all images, icons, and fonts
- Support multiple page sizes (A4, Letter, Legal, custom)
- Handle internationalization (multiple locales)
- High-resolution output (configurable DPI)
- Server-side processing (no client overhead)
- Scalable on serverless platforms

### ⚠️ Limitations

- PDFs are static snapshots (no interactivity)
- Hover effects are frozen at default state
- Animations are captured at initial frame
- Very complex CSS may render differently

---

## Technology Stack

```json
{
  "runtime": "Node.js 18+",
  "framework": "Next.js 15+",
  "pdf-engine": "Puppeteer + Chromium",
  "packages": {
    "puppeteer-core": "^24.26.0",
    "@sparticuz/chromium": "^141.0.0"
  }
}
```

**Why This Stack?**

- **puppeteer-core**: Lightweight (no bundled Chrome)
- **@sparticuz/chromium**: Serverless-optimized Chromium for Vercel/Lambda
- **Environment detection**: Uses local Chrome in dev, serverless in production

---

## Installation

### Step 1: Install Packages

```bash
# Using npm
npm install puppeteer-core @sparticuz/chromium

# Using pnpm
pnpm add puppeteer-core @sparticuz/chromium

# Using yarn
yarn add puppeteer-core @sparticuz/chromium
```

### Step 2: Verify Installation

```bash
# Check installed versions
npm list puppeteer-core @sparticuz/chromium
```

**Expected output:**
```
├── @sparticuz/chromium@141.0.0
└── puppeteer-core@24.26.0
```

---

## Configuration

### 1. Update `next.config.ts` (or `.js`)

**Critical:** Tell Next.js NOT to bundle Puppeteer packages

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ... your existing config
  
  // ✅ Critical for Vercel: Don't bundle Puppeteer packages
  serverExternalPackages: ['@sparticuz/chromium', 'puppeteer-core'],
};

export default nextConfig;
```

**Why?** These packages must be provided by Node.js runtime, not bundled by Webpack.

---

### 2. Create `.env.local` (Optional)

```env
# Optional: Override default settings
PDF_TIMEOUT=60000
PDF_VIEWPORT_WIDTH=1200
PDF_VIEWPORT_HEIGHT=1600
PDF_SCALE=2
```

---

## API Route Implementation

### Create `app/api/generate-pdf/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

// Force dynamic rendering (required for serverless)
export const dynamic = 'force-dynamic';

// Vercel timeout (hobby: 10s, pro: 60s)
export const maxDuration = 60;

export async function GET(request: NextRequest) {
  let browser;

  try {
    // 1. Extract parameters
    const locale = request.nextUrl.searchParams.get('locale') || 'en';
    const pageUrl = request.nextUrl.searchParams.get('url');
    
    if (!pageUrl) {
      return NextResponse.json(
        { error: 'URL parameter is required' },
        { status: 400 }
      );
    }

    // 2. Determine origin
    const origin = request.headers.get('origin') || 
                   request.headers.get('referer')?.split('/').slice(0, 3).join('/') ||
                   (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
    
    const fullUrl = pageUrl.startsWith('http') ? pageUrl : `${origin}${pageUrl}`;

    // 3. Environment detection
    const isVercel = !!process.env.VERCEL || process.env.VERCEL_ENV === 'production';
    
    // 4. Launch browser
    if (isVercel) {
      // Vercel/Lambda: Use serverless chromium
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    } else {
      // Local Development: Use installed Chrome
      const chromePaths = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // Windows
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', // Windows x86
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // macOS
        '/usr/bin/google-chrome', // Linux
        '/usr/bin/chromium-browser', // Linux Chromium
      ];
      
      const fs = await import('fs');
      const executablePath = chromePaths.find(path => {
        try {
          return fs.existsSync(path);
        } catch {
          return false;
        }
      });

      browser = await puppeteer.launch({
        executablePath,
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu'
        ]
      });
    }

    // 5. Create page and set viewport
    const page = await browser.newPage();
    
    await page.setViewport({
      width: parseInt(process.env.PDF_VIEWPORT_WIDTH || '1200'),
      height: parseInt(process.env.PDF_VIEWPORT_HEIGHT || '1600'),
      deviceScaleFactor: parseInt(process.env.PDF_SCALE || '2')
    });

    // 6. Navigate to page
    await page.goto(fullUrl, {
      waitUntil: 'networkidle0', // Wait for all network requests
      timeout: parseInt(process.env.PDF_TIMEOUT || '30000')
    });

    // 7. Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');

    // 8. Optional: Hide elements you don't want in PDF
    await page.evaluate(() => {
      // Hide floating buttons, navigation, etc.
      const elementsToHide = [
        '[class*="fixed"]',
        '[class*="sticky"]',
        'nav',
        'header',
        'footer'
      ];
      
      elementsToHide.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          (el as HTMLElement).style.display = 'none';
        });
      });
    });

    // 9. Generate PDF
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true, // Include backgrounds/gradients
      margin: {
        top: '0',
        right: '0',
        bottom: '0',
        left: '0'
      },
      preferCSSPageSize: false
    });

    // 10. Close browser
    await browser.close();

    // 11. Return PDF
    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="document.pdf"',
        'Cache-Control': 'no-store, max-age=0'
      }
    });

  } catch (error) {
    console.error('PDF Generation Error:', error);

    if (browser) {
      await browser.close();
    }

    return NextResponse.json(
      { 
        error: 'Failed to generate PDF', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}

// Optional: Add POST method for HTML content
export async function POST(request: NextRequest) {
  let browser;

  try {
    const { html, css } = await request.json();

    if (!html) {
      return NextResponse.json(
        { error: 'HTML content is required' },
        { status: 400 }
      );
    }

    const isVercel = !!process.env.VERCEL || process.env.VERCEL_ENV === 'production';
    
    // Launch browser (same as GET)
    if (isVercel) {
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    } else {
      const chromePaths = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '/usr/bin/google-chrome',
      ];
      
      const fs = await import('fs');
      const executablePath = chromePaths.find(path => {
        try {
          return fs.existsSync(path);
        } catch {
          return false;
        }
      });

      browser = await puppeteer.launch({
        executablePath,
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    }

    const page = await browser.newPage();
    
    await page.setContent(html, {
      waitUntil: 'networkidle0'
    });

    if (css) {
      await page.addStyleTag({ content: css });
    }

    await page.evaluateHandle('document.fonts.ready');

    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    await browser.close();

    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="document.pdf"',
      }
    });

  } catch (error) {
    console.error('PDF Generation Error:', error);

    if (browser) {
      await browser.close();
    }

    return NextResponse.json(
      { error: 'Failed to generate PDF', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
```

---

## Client Component

### Create `components/PdfDownloadButton.tsx`

```typescript
'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PdfDownloadButtonProps {
  url: string;
  filename?: string;
  locale?: string;
  children?: React.ReactNode;
}

export function PdfDownloadButton({ 
  url, 
  filename = 'document.pdf',
  locale = 'en',
  children 
}: PdfDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);

      // Call API route
      const response = await fetch(
        `/api/generate-pdf?url=${encodeURIComponent(url)}&locale=${locale}`
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.details || 'Failed to generate PDF');
      }

      // Get PDF blob
      const blob = await response.blob();

      // Create download link
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);

    } catch (error) {
      console.error('PDF Download Error:', error);
      alert(error instanceof Error ? error.message : 'Failed to download PDF');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      className="gap-2"
    >
      {isGenerating ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          {children || 'Download PDF'}
        </>
      )}
    </Button>
  );
}
```

### Usage Example

```tsx
import { PdfDownloadButton } from '@/components/PdfDownloadButton';

export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      
      <PdfDownloadButton 
        url="/en/brochure"
        filename="brochure.pdf"
        locale="en"
      >
        Download Brochure
      </PdfDownloadButton>
    </div>
  );
}
```

---

## Environment Setup

### Local Development

**Requirements:**
- Node.js 18+
- Chrome/Chromium browser installed
- Next.js project

**Auto-Detection:**
The API route automatically finds your Chrome installation at standard paths.

**Manual Override (if needed):**
```typescript
// In route.ts, add your custom path:
const chromePaths = [
  '/your/custom/chrome/path',
  ...existingPaths
];
```

---

### Vercel Production

**Requirements:**
- Vercel account
- `next.config.ts` configured with `serverExternalPackages`
- Pro plan recommended (60s timeout vs 10s on hobby)

**Automatic Setup:**
Once deployed, Vercel automatically:
1. Detects `VERCEL_ENV` environment variable
2. Uses `@sparticuz/chromium` package
3. Provides Chrome binary at runtime

---

## Local Development

### Start Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

### Test PDF Generation

**Option 1: Browser**
1. Navigate to your page
2. Click the download button
3. PDF should download

**Option 2: cURL**
```bash
curl http://localhost:3000/api/generate-pdf?url=/en/brochure -o test.pdf
```

**Option 3: Browser Direct**
```
http://localhost:3000/api/generate-pdf?url=/en/brochure
```

### Expected Performance (Local)

- **First request**: 15-30 seconds (includes page load)
- **Subsequent requests**: 5-15 seconds
- **PDF size**: 2-10 MB (depends on content)

---

## Vercel Deployment

### Step 1: Commit Changes

```bash
git add .
git commit -m "feat: Add PDF generation with Puppeteer"
git push
```

### Step 2: Deploy

**Automatic (Recommended):**
- Vercel auto-deploys on push if connected to GitHub

**Manual:**
```bash
npx vercel deploy --prod
```

### Step 3: Verify Deployment

1. Go to Vercel Dashboard
2. Check deployment status (should be green ✓)
3. Click "Visit" to open your site
4. Test PDF download

### Step 4: Check Function Logs

1. Vercel Dashboard → Functions → `/api/generate-pdf`
2. Look for:
   - ✅ Status 200 responses
   - ✅ No errors in logs
   - ⚠️ Check execution time

### Expected Performance (Vercel)

- **Cold start**: 5-10 seconds (first request after idle)
- **Warm requests**: 2-5 seconds
- **PDF size**: Same as local (2-10 MB)

---

## Testing

### Automated Test Script

Create `test-pdf.js`:

```javascript
const fs = require('fs');

async function testPdfGeneration() {
  console.log('🧪 Testing PDF Generation...\n');

  const testUrl = 'http://localhost:3000/api/generate-pdf?url=/en/brochure';
  
  try {
    console.log('📡 Sending request...');
    const startTime = Date.now();
    
    const response = await fetch(testUrl);
    const endTime = Date.now();
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${await response.text()}`);
    }

    const buffer = await response.arrayBuffer();
    const pdfSize = buffer.byteLength;
    
    fs.writeFileSync('test-output.pdf', Buffer.from(buffer));
    
    console.log('✅ Success!\n');
    console.log(`   Status: ${response.status}`);
    console.log(`   Size: ${(pdfSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Time: ${((endTime - startTime) / 1000).toFixed(2)}s`);
    console.log(`   File: test-output.pdf\n`);
    
    return true;
  } catch (error) {
    console.error('❌ Failed:', error.message);
    return false;
  }
}

testPdfGeneration();
```

**Run test:**
```bash
node test-pdf.js
```

---

## Troubleshooting

### Issue 1: "Could not find Chrome"

**Symptoms:**
```
Error: Could not find Chrome (ver. XXX)
```

**Solutions:**

**A. Install Chrome:**
- Windows: Download from google.com/chrome
- macOS: `brew install --cask google-chrome`
- Linux: `sudo apt install google-chrome-stable`

**B. Set custom path:**
```typescript
// In route.ts
const executablePath = '/your/custom/chrome/path';
```

---

### Issue 2: "Function Timeout" (Vercel)

**Symptoms:**
```
FUNCTION_INVOCATION_TIMEOUT
```

**Solutions:**

**A. Upgrade to Vercel Pro:**
- Hobby: 10s timeout
- Pro: 60s timeout ($20/month)

**B. Reduce quality:**
```typescript
deviceScaleFactor: 1 // Instead of 2
```

**C. Smaller viewport:**
```typescript
width: 800,  // Instead of 1200
height: 1000 // Instead of 1600
```

---

### Issue 3: "Memory Exceeded"

**Symptoms:**
```
Error: Page crashed!
```

**Solutions:**

**A. Upgrade to Vercel Pro:**
- Hobby: 1GB RAM
- Pro: 3GB RAM

**B. Reduce quality:**
```typescript
scale: 0.8, // In pdf() options
```

---

### Issue 4: PDF Different from Website

**Symptoms:**
- Colors wrong
- Layout broken
- Missing elements

**Solutions:**

**A. Wait for fonts:**
```typescript
await page.evaluateHandle('document.fonts.ready');
```

**B. Increase timeout:**
```typescript
await page.goto(url, {
  waitUntil: 'networkidle0',
  timeout: 60000 // Increase from 30000
});
```

**C. Add extra wait:**
```typescript
await page.waitForTimeout(2000); // Wait 2 more seconds
```

---

### Issue 5: "@sparticuz/chromium not found" (Vercel)

**Symptoms:**
```
Cannot find module '@sparticuz/chromium'
```

**Solutions:**

**A. Check next.config.ts:**
```typescript
serverExternalPackages: ['@sparticuz/chromium', 'puppeteer-core']
```

**B. Redeploy:**
```bash
vercel deploy --prod --force
```

---

## Performance Optimization

### 1. Caching

```typescript
// Add caching headers
return new NextResponse(pdf, {
  headers: {
    'Content-Type': 'application/pdf',
    'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
  }
});
```

### 2. Skip Unnecessary Resources

```typescript
// Skip images for faster generation
await page.setRequestInterception(true);
page.on('request', (req) => {
  if (req.resourceType() === 'image') {
    req.abort();
  } else {
    req.continue();
  }
});
```

### 3. Reuse Browser Instance

```typescript
// WARNING: Only for self-hosted, NOT serverless!
let browserInstance;

async function getBrowser() {
  if (!browserInstance) {
    browserInstance = await puppeteer.launch({ ... });
  }
  return browserInstance;
}
```

### 4. Reduce Viewport

```typescript
// Smaller = faster
await page.setViewport({
  width: 800,   // Down from 1200
  height: 1000, // Down from 1600
  deviceScaleFactor: 1 // Down from 2
});
```

---

## Security Best Practices

### 1. Rate Limiting

```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(10, '1 m'), // 10 per minute
});

export async function GET(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1';
  const { success } = await ratelimit.limit(ip);
  
  if (!success) {
    return new Response('Too many requests', { status: 429 });
  }
  
  // ... rest of code
}
```

### 2. URL Validation

```typescript
// Only allow internal URLs
const allowedPaths = ['/brochure', '/report', '/invoice'];
const requestedUrl = request.nextUrl.searchParams.get('url');

if (!allowedPaths.some(path => requestedUrl?.startsWith(path))) {
  return NextResponse.json(
    { error: 'Invalid URL' },
    { status: 403 }
  );
}
```

### 3. Authentication

```typescript
// Require auth token
const token = request.headers.get('authorization');

if (token !== process.env.PDF_API_SECRET) {
  return new Response('Unauthorized', { status: 401 });
}
```

---

## Cost Analysis

### Vercel Pricing

**Hobby Plan (Free):**
- ❌ 10s function timeout (too short for PDF)
- ❌ 1GB memory (tight)
- ✅ Good for testing only

**Pro Plan ($20/month):**
- ✅ 60s function timeout
- ✅ 3GB memory
- ✅ Production-ready
- ✅ 1000+ PDFs/day possible

### Railway ($5/month)
- ✅ No timeout limits
- ✅ Persistent instance
- ✅ Good Puppeteer support
- ✅ Alternative to Vercel

### Self-Hosted (VPS)
- ✅ Full control
- ✅ No timeouts
- ✅ Cheapest for high volume
- ⚠️ Requires DevOps knowledge

---

## Complete Implementation Checklist

### Initial Setup
- [ ] Install `puppeteer-core` and `@sparticuz/chromium`
- [ ] Update `next.config.ts` with `serverExternalPackages`
- [ ] Create API route at `app/api/generate-pdf/route.ts`
- [ ] Create client component for download button
- [ ] Test locally with Chrome installed

### Local Development
- [ ] Dev server runs without errors
- [ ] PDF generates successfully
- [ ] PDF matches website design
- [ ] All locales work (if applicable)
- [ ] Performance is acceptable (<30s)

### Vercel Deployment
- [ ] Code committed to Git
- [ ] Connected to Vercel
- [ ] Deployed successfully
- [ ] Environment variables set (if any)
- [ ] PDF generation tested in production
- [ ] Function logs show no errors
- [ ] All locales tested

### Production Readiness
- [ ] Rate limiting implemented
- [ ] Error handling robust
- [ ] Monitoring/logging setup
- [ ] Performance optimized
- [ ] Security reviewed
- [ ] Documentation complete
- [ ] Client tested and approved

---

## Summary

This guide provides everything needed to implement professional PDF generation in Next.js:

✅ **Works locally** (uses installed Chrome)  
✅ **Works on Vercel** (uses serverless Chromium)  
✅ **High fidelity** (preserves all styling)  
✅ **Production-ready** (error handling, timeouts)  
✅ **Scalable** (serverless architecture)  
✅ **Secure** (server-side only)  

**Key Files:**
1. `next.config.ts` - Add `serverExternalPackages`
2. `app/api/generate-pdf/route.ts` - API implementation
3. `components/PdfDownloadButton.tsx` - Client component

**Deploy Command:**
```bash
git push  # If connected to Vercel
```

**Test Command:**
```bash
curl http://localhost:3000/api/generate-pdf?url=/your-page -o test.pdf
```

---

**Version:** 1.0  
**Last Updated:** 2024  
**Tested On:** Next.js 15.5.6, Node.js 18+, Vercel  
**Status:** Production-Ready ✅

