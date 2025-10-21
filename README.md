# Arabian Eagle International

Modern website for Arabian Eagle International - Your trusted partner in international travel.

## Features

- **Multi-language Support**: English, Arabic (RTL), and French
- **1,145,000+ Hotels Worldwide**: Up to 75% discount on hotel rates
- **850+ VIP Lounges**: Access to airport lounges in 120+ countries
- **Car Rental Discounts**: Save up to 30% on car rentals
- **Arabian Eagle MasterCard**: Prepaid debit card with exclusive benefits
- **Priority Pass**: FREE for one year with first trip

## Tech Stack

- **Framework**: Next.js 15.0.3 (App Router)
- **Language**: TypeScript 5.7.2
- **UI Library**: React 19.0.0 (stable)
- **Styling**: Tailwind CSS 3.4.15
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Internationalization**: next-intl 3.23.5
- **Animations**: Framer Motion 11.11.11
- **Forms**: React Hook Form 7.53.2 + Zod 3.23.8
- **Icons**: Lucide React 0.454.0

## Getting Started

### Prerequisites

- **Node.js**: ≥18.18.0 (Recommended: 22.19.0 LTS)
- **npm**: ≥9.0.0

Check your versions:
```bash
node --version
npm --version
```

### Installation

```bash
# Install dependencies
npm install

# Run type checking
npm run type-check

# Run linting
npm run lint
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

The app will automatically redirect to [http://localhost:3000/en](http://localhost:3000/en).

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
ae4net/
├── app/                    # Next.js App Router pages
│   └── [locale]/          # Internationalized routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                  # Utility functions
├── messages/             # Translation files (en, ar, fr)
├── i18n/                 # Internationalization config
└── public/               # Static assets
```

## Available Routes

- `/` - Home page
- `/about` - About Arabian Eagle
- `/cards` - Arabian Eagle Cards
- `/priority-pass` - Priority Pass information
- `/services` - All services
- `/join` - Member registration
- `/contact` - Contact us
- `/hotels` - Hotel search
- `/deals` - Holiday deals
- `/experiences` - Member stories

All routes support English (`/en`), Arabic (`/ar`), and French (`/fr`) languages.

## Content Extracted from Original Site

All content has been carefully extracted and modernized from the original ae4net.net website:

- Brand identity and tagline
- Core statistics and value propositions
- Service descriptions and features
- Registration options
- Multi-language support

## License

© 2011 Arabian Eagle International

# ae4net
