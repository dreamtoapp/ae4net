import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Plane, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const t = useTranslations();

  const footerLinks = {
    about: [
      { href: '/about', label: t('nav.about') },
      { href: '/experiences', label: t('nav.experiences') },
    ],
    services: [
      { href: '/services', label: t('nav.services') },
      { href: '/cards', label: t('nav.cards') },
      { href: '/priority-pass', label: t('nav.priorityPass') },
      { href: '/hotels', label: t('nav.hotels') },
    ],
    support: [
      { href: '/contact', label: t('nav.contact') },
      { href: '/join', label: t('nav.join') },
    ],
  };

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <Plane className="h-5 w-5 text-primary-foreground" />
              </div>
              <span>{t('common.brand')}</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {t('common.tagline')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.about')}</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t('common.copyright')}
          </p>
          <Link
            href="/legal"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {t('common.legalNotice')}
          </Link>
        </div>
      </div>
    </footer>
  );
}



