# Components Directory

This directory contains all React components for the Arabian Eagle International website.

## Structure

```
components/
├── ui/                    # shadcn/ui components (Button, Card, Input, etc.)
├── Header.tsx            # Main navigation header
├── Footer.tsx            # Site footer with links
├── LanguageSwitcher.tsx  # Language selector (EN/AR/FR)
├── BenefitCard.tsx       # Card for displaying benefits
├── ServiceCard.tsx       # Card for displaying services
└── StatsCounter.tsx      # Animated statistics counter
```

## Component Guidelines

### shadcn/ui Components

The `ui/` directory contains components from [shadcn/ui](https://ui.shadcn.com/). These are:
- Fully customizable
- Built with Radix UI primitives
- Styled with Tailwind CSS
- Type-safe with TypeScript

### Custom Components

Custom components follow these principles:
1. **Server Components by Default**: Unless client interactivity is needed
2. **TypeScript**: All components are fully typed
3. **Tailwind CSS**: Use utility classes for styling
4. **Responsive**: Mobile-first design approach
5. **Accessible**: WCAG AA compliance

### Usage Example

```tsx
import { BenefitCard } from '@/components/BenefitCard';
import { Hotel } from 'lucide-react';

<BenefitCard
  icon={Hotel}
  title="Hotel Discounts"
  description="Save up to 75% on hotels worldwide"
/>
```




