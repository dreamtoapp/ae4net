import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { BrochurePageHeader } from './BrochurePageHeader';

export function BrochurePage2Stats() {
  const t = useTranslations();
  const tc = useTranslations('common');
  const ta = useTranslations('about');

  return (
    <div className="pdf-page p-12 flex flex-col bg-gradient-to-br from-brand-light-gray to-background relative overflow-hidden">
      <Image
        src="/assets/pattern.jpg"
        alt="Pattern"
        fill
        className="object-cover opacity-8 mix-blend-multiply"
        quality={90}
      />

      <BrochurePageHeader />

      <div className="page-number relative z-10">{tc('page')} 2 {tc('of')} 9</div>

      <div className="text-center mb-12 relative z-10">
        <div className="inline-block mb-4">
          <div className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
            {t('brochure.ourImpact')}
          </div>
        </div>
        <h2 className="text-5xl font-black bg-gradient-to-r from-brand-navy via-primary to-brand-navy bg-clip-text text-transparent mb-6 leading-tight">
          {t('home.hero.title')} {t('home.hero.titleHighlight')}
        </h2>
        <p className="text-base text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-3 font-light">
          {ta('companyOverview.description1')}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
          {ta('companyOverview.description2')}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 flex-1 relative z-10">
        <div className="group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90 transform group-hover:scale-105 transition-transform" />
          <div className="relative p-8 flex flex-col justify-center items-center text-center">
            <div className="text-5xl font-black text-primary-foreground mb-3 tracking-tight">1,145,000+</div>
            <div className="h-1 w-16 bg-brand-gold rounded-full mb-3" />
            <p className="text-sm text-primary-foreground/90 font-medium uppercase tracking-wide">{t('home.stats.hotelsLabel')}</p>
          </div>
        </div>

        <div className="group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-navy/90 transform group-hover:scale-105 transition-transform" />
          <div className="relative p-8 flex flex-col justify-center items-center text-center">
            <div className="text-5xl font-black text-white mb-3 tracking-tight">850+</div>
            <div className="h-1 w-16 bg-brand-gold rounded-full mb-3" />
            <p className="text-sm text-white/90 font-medium uppercase tracking-wide">{t('home.stats.loungesLabel')}</p>
          </div>
        </div>

        <div className="group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/90 transform group-hover:scale-105 transition-transform" />
          <div className="relative p-8 flex flex-col justify-center items-center text-center">
            <div className="text-5xl font-black text-secondary-foreground mb-3 tracking-tight">120+</div>
            <div className="h-1 w-16 bg-brand-gold rounded-full mb-3" />
            <p className="text-sm text-secondary-foreground/90 font-medium uppercase tracking-wide">{t('home.stats.countriesLabel')}</p>
          </div>
        </div>

        <div className="group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/90 transform group-hover:scale-105 transition-transform" />
          <div className="relative p-8 flex flex-col justify-center items-center text-center">
            <div className="text-5xl font-black text-accent-foreground mb-3 tracking-tight">75%</div>
            <div className="h-1 w-16 bg-brand-gold rounded-full mb-3" />
            <p className="text-sm text-accent-foreground/90 font-medium uppercase tracking-wide">{t('home.stats.discountLabel')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

