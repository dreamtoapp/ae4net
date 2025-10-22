import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { BrochurePageHeader } from './BrochurePageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Hotel, Armchair, Globe, Percent } from 'lucide-react';

export function BrochurePage2Stats() {
  const t = useTranslations();
  const tc = useTranslations('common');
  const ta = useTranslations('about');

  return (
    <div className="pdf-page p-12 flex flex-col items-center justify-center bg-gradient-to-br from-brand-light-gray to-background relative overflow-hidden">
      <Image
        src="/assets/pattern.jpg"
        alt="Pattern"
        fill
        className="object-cover opacity-8 mix-blend-multiply"
        quality={90}
      />

      <BrochurePageHeader />

      <div className="page-number relative z-10">{tc('page')} 2 {tc('of')} 9</div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
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

        <div className="grid grid-cols-2 gap-5">
          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90 transform group-hover:scale-105 transition-transform" />
            <CardContent className="relative p-0 flex flex-col justify-center items-center text-center py-6 px-5">
              <div className="mb-2">
                <Hotel className="h-8 w-8 text-brand-gold" />
              </div>
              <div className="text-4xl font-black text-primary-foreground mb-1.5 tracking-tight">1,145,000+</div>
              <div className="h-0.5 w-12 bg-brand-gold rounded-full mb-1.5" />
              <p className="text-xs text-primary-foreground/90 font-medium uppercase tracking-wide">{t('home.stats.hotelsLabel')}</p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-navy/90 transform group-hover:scale-105 transition-transform" />
            <CardContent className="relative p-0 flex flex-col justify-center items-center text-center py-6 px-5">
              <div className="mb-2">
                <Armchair className="h-8 w-8 text-brand-gold" />
              </div>
              <div className="text-4xl font-black text-white mb-1.5 tracking-tight">850+</div>
              <div className="h-0.5 w-12 bg-brand-gold rounded-full mb-1.5" />
              <p className="text-xs text-white/90 font-medium uppercase tracking-wide">{t('home.stats.loungesLabel')}</p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary/90 transform group-hover:scale-105 transition-transform" />
            <CardContent className="relative p-0 flex flex-col justify-center items-center text-center py-6 px-5">
              <div className="mb-2">
                <Globe className="h-8 w-8 text-brand-gold" />
              </div>
              <div className="text-4xl font-black text-secondary-foreground mb-1.5 tracking-tight">120+</div>
              <div className="h-0.5 w-12 bg-brand-gold rounded-full mb-1.5" />
              <p className="text-xs text-secondary-foreground/90 font-medium uppercase tracking-wide">{t('home.stats.countriesLabel')}</p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/90 transform group-hover:scale-105 transition-transform" />
            <CardContent className="relative p-0 flex flex-col justify-center items-center text-center py-6 px-5">
              <div className="mb-2">
                <Percent className="h-8 w-8 text-brand-gold" />
              </div>
              <div className="text-4xl font-black text-accent-foreground mb-1.5 tracking-tight">75%</div>
              <div className="h-0.5 w-12 bg-brand-gold rounded-full mb-1.5" />
              <p className="text-xs text-accent-foreground/90 font-medium uppercase tracking-wide">{t('home.stats.discountLabel')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

