# Brochure PDF Generation API

This API route generates a high-quality PDF of the AE4NET brochure using Puppeteer.

## How It Works

1. **Server-Side Rendering**: Uses Puppeteer (headless Chrome) to render the brochure page
2. **Perfect Fidelity**: Captures exactly what you see in the browser, including:
   - All CSS gradients
   - Backdrop filters
   - Mix-blend modes
   - Custom fonts
   - Complex layouts
3. **Print-Optimized**: Uses Chrome's native PDF generation for optimal quality

## API Endpoint

```
GET /api/brochure-pdf?locale={locale}
```

### Parameters

- `locale` (optional): Language locale (default: 'en')
  - Example: `en`, `ar`, `fr`

### Response

Returns a PDF file with:
- Format: A4
- Print backgrounds: Enabled
- Zero margins (full-page design)
- Filename: `AE4NET-Brochure.pdf`

## Usage

### From Client Component

```tsx
const response = await fetch(`/api/brochure-pdf?locale=${locale}`);
const blob = await response.blob();
const url = window.URL.createObjectURL(blob);
// Download or display PDF
```

### Direct Link

```html
<a href="/api/brochure-pdf?locale=en" download>Download Brochure</a>
```

## Benefits Over html2canvas

| Feature | html2canvas | Puppeteer |
|---------|------------|-----------|
| CSS Gradient Support | ❌ Limited | ✅ Full |
| background-clip: text | ❌ No | ✅ Yes |
| Mix-blend-mode | ❌ No | ✅ Yes |
| Backdrop-filter | ❌ No | ✅ Yes |
| File Size | Large | Optimized |
| Generation Speed | Slow | Fast |
| Maintenance | Complex workarounds | Clean code |

## Performance

- **First generation**: ~3-5 seconds (browser launch)
- **Subsequent**: ~2-3 seconds (cached fonts/assets)
- **File size**: ~200-500KB (vs 2-3MB with html2canvas)

## Production Deployment

### Vercel

For Vercel deployment, use `puppeteer-core` with `@sparticuz/chromium`:

```bash
pnpm add puppeteer-core @sparticuz/chromium
```

Update the route to use chromium executable:

```typescript
import chromium from '@sparticuz/chromium';

const browser = await puppeteer.launch({
  args: chromium.args,
  executablePath: await chromium.executablePath(),
  headless: chromium.headless,
});
```

### Other Platforms

Works out of the box on:
- Railway
- Render
- Digital Ocean
- AWS Lambda (with layers)
- Self-hosted servers

## Troubleshooting

### Browser launch fails

Add more args:
```typescript
args: ['--no-sandbox', '--disable-setuid-sandbox']
```

### Fonts not loading

Ensure fonts are publicly accessible and increase timeout:
```typescript
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
```

### Large file size

Reduce image quality or viewport scale in the code.

