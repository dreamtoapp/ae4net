"use client";

import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/routing';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'en', name: 'English', countryCode: 'us' },
  { code: 'ar', name: 'العربية', countryCode: 'sa' },
  { code: 'fr', name: 'Français', countryCode: 'fr' },
  { code: 'tr', name: 'Türkçe', countryCode: 'tr' },
  { code: 'id', name: 'Indonesia', countryCode: 'id' },
  { code: 'de', name: 'Deutsch', countryCode: 'de' },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const currentLanguage = languages.find(lang => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    // Build the new URL with the correct locale
    const newPath = `/${newLocale}${pathname}`;
    router.replace(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          {currentLanguage && (
            <Image
              src={`https://flagcdn.com/w20/${currentLanguage.countryCode}.png`}
              width={20}
              height={15}
              alt={currentLanguage.name}
              className="rounded-sm"
            />
          )}
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={locale === lang.code ? 'bg-accent' : ''}
          >
            <Image
              src={`https://flagcdn.com/w20/${lang.countryCode}.png`}
              width={20}
              height={15}
              alt={lang.name}
              className="mr-2 rounded-sm"
            />
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}






