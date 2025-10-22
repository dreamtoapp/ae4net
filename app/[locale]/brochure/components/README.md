# Brochure Page Components

This folder contains all components specific to the `/brochure` route.

## Component Structure

All brochure page components follow this naming pattern: `BrochurePageX[Name].tsx`

- **BrochurePageHeader.tsx** - Reusable header with logo and brand (used on pages 2-9)
- **BrochurePage1Cover.tsx** - Cover page with hero content
- **BrochurePage2Stats.tsx** - Statistics and impact numbers
- **BrochurePage3Benefits.tsx** - Member benefits (Hotel, Lounge, Car, Card)
- **BrochurePage4Services.tsx** - Services part 1 (first 2 services)
- **BrochurePage5Services.tsx** - Services part 2 (services 3-4)
- **BrochurePage6Membership.tsx** - Membership cards (Basic, Silver, Gold)
- **BrochurePage7Deals.tsx** - Deals part 1 (first 4 deals)
- **BrochurePage8Deals.tsx** - Deals part 2 (deals 5-6)
- **BrochurePage9Contact.tsx** - Contact information and footer

## Purpose

These components are co-located with their route following Next.js App Router best practices. They are only used by the brochure page and kept separate from global components for better organization and maintainability.

