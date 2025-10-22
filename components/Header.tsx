"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations();

  const navItems = [
    { href: '/about', label: t('nav.about') },
    { href: '/cards', label: t('nav.cards') },
    { href: '/priority-pass', label: t('nav.priorityPass') },
    { href: '/services', label: t('nav.services') },
    { href: '/join', label: t('nav.join') },
    { href: '/contact', label: t('nav.contact') },
    { href: '/hotels', label: t('nav.hotels') },
    { href: '/deals', label: t('nav.deals') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.avif"
              alt="AE4NET Logo"
              width={64}
              height={64}
              className="h-auto w-16 object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="/join">{t('nav.register')}</Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-4">
                <Link href="/join">{t('nav.register')}</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}




