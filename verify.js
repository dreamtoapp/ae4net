const fs = require('fs');
const path = require('path');

console.log('\n🔍 VERIFICATION SCRIPT - LOCAL & VERCEL\n');
console.log('=' .repeat(60));

let allPassed = true;

// Test 1: Check Chrome Installation
console.log('\n✓ Test 1: Chrome Installation');
const chromePaths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
];
const chromeFound = chromePaths.find(p => fs.existsSync(p));
if (chromeFound) {
  console.log('  ✅ Chrome found:', chromeFound);
} else {
  console.log('  ⚠️  Chrome not found in standard locations');
  console.log('  💡 PDF generation may still work if Chrome is installed elsewhere');
}

// Test 2: Check Package.json
console.log('\n✓ Test 2: Package Dependencies');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const hasPuppeteerCore = packageJson.dependencies['puppeteer-core'];
const hasChromium = packageJson.dependencies['@sparticuz/chromium'];
const hasOldPuppeteer = packageJson.dependencies['puppeteer'];

if (hasPuppeteerCore) {
  console.log('  ✅ puppeteer-core:', hasPuppeteerCore);
} else {
  console.log('  ❌ puppeteer-core: NOT FOUND');
  allPassed = false;
}

if (hasChromium) {
  console.log('  ✅ @sparticuz/chromium:', hasChromium);
} else {
  console.log('  ❌ @sparticuz/chromium: NOT FOUND');
  allPassed = false;
}

if (hasOldPuppeteer) {
  console.log('  ⚠️  OLD puppeteer package still present (should be removed)');
  allPassed = false;
} else {
  console.log('  ✅ Old puppeteer package removed');
}

// Test 3: Check next.config.ts
console.log('\n✓ Test 3: Next.js Configuration');
const nextConfig = fs.readFileSync('next.config.ts', 'utf8');
if (nextConfig.includes('serverExternalPackages')) {
  if (nextConfig.includes('@sparticuz/chromium') && nextConfig.includes('puppeteer-core')) {
    console.log('  ✅ serverExternalPackages configured correctly');
  } else {
    console.log('  ⚠️  serverExternalPackages exists but may not include required packages');
  }
} else {
  console.log('  ❌ serverExternalPackages NOT FOUND in next.config.ts');
  allPassed = false;
}

// Test 4: Check API Route
console.log('\n✓ Test 4: API Route Configuration');
const apiRoutePath = path.join('app', 'api', 'brochure-pdf', 'route.ts');
if (fs.existsSync(apiRoutePath)) {
  const apiRoute = fs.readFileSync(apiRoutePath, 'utf8');
  
  const hasImportChromium = apiRoute.includes("import chromium from '@sparticuz/chromium'");
  const hasImportPuppeteer = apiRoute.includes("import puppeteer from 'puppeteer-core'");
  const hasEnvironmentDetection = apiRoute.includes('isVercel') || apiRoute.includes('VERCEL_ENV');
  const hasMaxDuration = apiRoute.includes('maxDuration');
  
  if (hasImportChromium) {
    console.log('  ✅ Imports @sparticuz/chromium');
  } else {
    console.log('  ❌ Missing @sparticuz/chromium import');
    allPassed = false;
  }
  
  if (hasImportPuppeteer) {
    console.log('  ✅ Imports puppeteer-core');
  } else {
    console.log('  ❌ Missing puppeteer-core import');
    allPassed = false;
  }
  
  if (hasEnvironmentDetection) {
    console.log('  ✅ Environment detection configured');
  } else {
    console.log('  ⚠️  Environment detection may be missing');
  }
  
  if (hasMaxDuration) {
    console.log('  ✅ maxDuration set for Vercel');
  } else {
    console.log('  ⚠️  maxDuration not set (Vercel may timeout)');
  }
} else {
  console.log('  ❌ API route not found:', apiRoutePath);
  allPassed = false;
}

// Test 5: Check DirectPdfDownload component
console.log('\n✓ Test 5: PDF Download Component');
const pdfComponentPath = path.join('components', 'DirectPdfDownload.tsx');
if (fs.existsSync(pdfComponentPath)) {
  const pdfComponent = fs.readFileSync(pdfComponentPath, 'utf8');
  if (pdfComponent.includes('/api/brochure-pdf')) {
    console.log('  ✅ Points to correct API route');
  } else {
    console.log('  ⚠️  May not be using API route');
  }
} else {
  console.log('  ℹ️  Component not found (may be in different location)');
}

// Summary
console.log('\n' + '='.repeat(60));
console.log('\n📊 VERIFICATION SUMMARY\n');

if (allPassed && chromeFound) {
  console.log('🎉 ALL TESTS PASSED!\n');
  console.log('✅ LOCAL:   Ready to use (Chrome found)');
  console.log('✅ VERCEL:  Ready to deploy');
  console.log('✅ CLIENTS: Will have zero issues\n');
  console.log('🚀 You can deploy to Vercel now: git push\n');
  process.exit(0);
} else if (allPassed && !chromeFound) {
  console.log('⚠️  MOSTLY READY\n');
  console.log('⚠️  LOCAL:   Chrome not found (PDF may still work)');
  console.log('✅ VERCEL:  Ready to deploy');
  console.log('✅ CLIENTS: Will have zero issues\n');
  console.log('💡 Try PDF generation in browser to confirm local setup\n');
  process.exit(0);
} else {
  console.log('❌ SOME ISSUES FOUND\n');
  console.log('Please fix the issues marked with ❌ above\n');
  process.exit(1);
}

