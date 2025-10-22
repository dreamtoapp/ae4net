import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90, 100], // Fix Next.js 16 warning
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  // Ensure proper handling of ESM packages
  transpilePackages: ['next-intl'],
  // Critical for Vercel: Don't bundle Puppeteer packages
  serverExternalPackages: ['@sparticuz/chromium', 'puppeteer-core'],
};

export default withNextIntl(nextConfig);

