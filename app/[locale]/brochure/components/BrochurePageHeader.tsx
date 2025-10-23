import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface BrochurePageHeaderProps {
  variant?: 'light' | 'dark';
}

export function BrochurePageHeader({ variant = 'light' }: BrochurePageHeaderProps) {
  const tc = useTranslations('common');
  const textColor = variant === 'dark' ? 'text-white' : 'text-brand-navy';
  const subtextColor = variant === 'dark' ? 'text-white/60' : 'text-muted-foreground';

  return (
    <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
      <div className="text-right">
        <p className={`${textColor} font-black text-base leading-tight`}>{tc('brand')}</p>
        <p className={`${subtextColor} text-xs mt-0.5`}>{tc('websiteUrl')}</p>
      </div>
      <Image
        src="/assets/logo.avif"
        alt="AE4NET Logo"
        width={70}
        height={70}
        className="h-auto w-[70px] object-contain"
      />
    </div>
  );
}

