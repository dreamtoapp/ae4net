import { NextRequest, NextResponse } from 'next/server';
import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

export const dynamic = 'force-dynamic';
export const maxDuration = 60; // Vercel: 60 seconds max (hobby/pro)

export async function GET(request: NextRequest) {
  let browser;

  try {
    // Get the origin from the request
    const origin = request.headers.get('origin') ||
      request.headers.get('referer')?.split('/').slice(0, 3).join('/') ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

    const locale = request.nextUrl.searchParams.get('locale') || 'en';

    // Launch browser with environment-specific config (Vercel official approach)
    const isVercel = !!process.env.VERCEL || process.env.VERCEL_ENV === 'production';

    if (isVercel) {
      // Vercel Production: Use @sparticuz/chromium (official)
      browser = await puppeteer.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath(),
        headless: true,
      });
    } else {
      // Local Development: Find local Chrome/Chromium
      const chromePaths = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // Windows Chrome
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', // Windows Chrome (x86)
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // macOS
        '/usr/bin/google-chrome', // Linux
        '/usr/bin/chromium-browser', // Linux Chromium
      ];

      // Find first available Chrome
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

    const page = await browser.newPage();

    // Set viewport for consistent rendering
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2
    });

    // Navigate to the brochure page
    const url = `${origin}/${locale}/brochure`;
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for fonts and images to load
    await page.evaluateHandle('document.fonts.ready');

    // Hide the floating buttons for PDF
    await page.evaluate(() => {
      const floatingButtons = document.querySelector('[class*="fixed"][class*="bottom"]');
      if (floatingButtons) {
        (floatingButtons as HTMLElement).style.display = 'none';
      }
    });

    // Generate PDF
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      preferCSSPageSize: false
    });

    await browser.close();

    // Return PDF
    return new NextResponse(Buffer.from(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="AE4NET-Brochure.pdf"',
        'Cache-Control': 'no-store, max-age=0'
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

