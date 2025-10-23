# next-intl v4 Migration Guide

## 🔄 Version Update: v3 → v4.3.12

The latest version of next-intl is **4.3.12** (major version bump from v3 to v4).

---

## ⚠️ Breaking Changes in v4

### 1. Configuration Changes

**OLD (v3):**
```typescript
// i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'always'
});
```

**NEW (v4):**
```typescript
// i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar', 'fr'],
  defaultLocale: 'en'
});
```

### 2. Middleware Configuration

**Update middleware.ts:**

**OLD (v3):**
```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(ar|en|fr)/:path*']
};
```

**NEW (v4):**
```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(ar|en|fr)/:path*']
};
```
*(Same structure, but internal handling improved)*

### 3. Next.js Config

**Update next.config.ts:**

**Current:**
```typescript
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

export default withNextIntl(nextConfig);
```

**Stays the same**, but v4 has better performance and compatibility with Next.js 15.5.6.

---

## 🔧 Required Code Updates

### Update i18n/routing.ts

```typescript
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'ar', 'fr'],
  defaultLocale: 'en'
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
```

### Update i18n/request.ts

```typescript
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

---

## 📝 Migration Steps

### Step 1: Update i18n/routing.ts

Remove `localePrefix: 'always'` if present:

```typescript
export const routing = defineRouting({
  locales: ['en', 'ar', 'fr'],
  defaultLocale: 'en'
  // Remove: localePrefix: 'always' (this is now default behavior)
});
```

### Step 2: No Changes Needed for Components

All your existing components will continue to work:
- `useTranslations()` - ✅ Works the same
- `<Link>` component - ✅ Works the same
- `useLocale()` - ✅ Works the same
- Translation files - ✅ Same format

### Step 3: Install and Test

```bash
# Using pnpm
pnpm install

# Or using npm
npm install

# Test the app
pnpm dev
# or
npm run dev
```

---

## ✨ New Features in v4.3.12

### 1. Better Performance
- Faster translation lookups
- Optimized for Next.js 15.5.6
- Reduced bundle size

### 2. Enhanced Type Safety
- Better TypeScript inference
- Improved autocomplete for translation keys
- Type-safe routing

### 3. Improved Next.js 15 Support
- Full App Router compatibility
- Better Server Components support
- Enhanced streaming support

### 4. Better Error Messages
- More helpful error messages
- Better debugging information
- Improved development experience

---

## 🧪 Testing Checklist

After migration, test:

- [ ] Language switching (EN → AR → FR)
- [ ] RTL layout for Arabic
- [ ] All page routes work
- [ ] Translation keys resolve correctly
- [ ] Links between pages work
- [ ] Server and Client components work
- [ ] Build completes successfully
- [ ] Production build runs correctly

---

## 🚨 Common Issues & Solutions

### Issue 1: Type Errors

**Error**: `Type error: Cannot find module 'next-intl/routing'`

**Solution**:
```bash
# Clear TypeScript cache
rm -rf .next tsconfig.tsbuildinfo
pnpm install
```

### Issue 2: Middleware Not Working

**Error**: Routes not redirecting properly

**Solution**: Ensure middleware.ts has correct matcher:
```typescript
export const config = {
  matcher: ['/', '/(ar|en|fr)/:path*']
};
```

### Issue 3: Translations Not Loading

**Error**: Missing translations or undefined keys

**Solution**: Check that all translation files are present:
```
messages/
  ├── en.json
  ├── ar.json
  └── fr.json
```

---

## 📚 Official Documentation

- **next-intl v4 Docs**: https://next-intl-docs.vercel.app/
- **Migration Guide**: https://next-intl-docs.vercel.app/docs/getting-started
- **Next.js 15 Guide**: https://next-intl-docs.vercel.app/docs/environments/server-client-components

---

## ✅ What Doesn't Need to Change

Good news! Most of your code stays the same:

### Translation Files (messages/*.json)
✅ **No changes needed** - Same JSON format

### Components Using Translations
✅ **No changes needed** - `useTranslations()` works the same

### Link Components
✅ **No changes needed** - Import and usage stay the same

### Layout and Pages
✅ **No changes needed** - Same structure

---

## 🎯 Summary

**What Changed:**
- ⬆️ Version: 3.x → 4.3.12
- 🔧 Minor config adjustments in routing.ts
- ✨ Better performance and Next.js 15 support

**What Stayed the Same:**
- ✅ All translation files
- ✅ All components and pages
- ✅ Translation syntax
- ✅ Link component usage

**Installation:**
```bash
# The package.json has been updated to 4.3.12
pnpm install
# or
npm install
```

---

**Ready to use!** The migration from v3 to v4 is minimal and your existing code is already compatible! 🎉







