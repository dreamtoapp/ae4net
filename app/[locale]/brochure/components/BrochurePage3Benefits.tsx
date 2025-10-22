import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Hotel, Plane, Car, CreditCard } from 'lucide-react';
import { BrochurePageHeader } from './BrochurePageHeader';

export function BrochurePage3Benefits() {
  const t = useTranslations();
  const tc = useTranslations('common');
  const tb = useTranslations('brochure');

  return (
    <div className="pdf-page p-12 flex flex-col bg-background relative overflow-hidden">
      <Image
        src="/assets/pattern.jpg"
        alt="Pattern"
        fill
        className="object-cover opacity-5 mix-blend-multiply"
        quality={90}
      />

      <BrochurePageHeader />

      <div className="page-number relative z-10">{tc('page')} 3 {tc('of')} 9</div>

      <div className="text-center mb-10 relative z-10">
        <div className="inline-block mb-4">
          <div className="px-4 py-1.5 bg-gradient-to-r from-primary to-brand-navy text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
            {tb('memberBenefits')}
          </div>
        </div>
        <h2 className="text-4xl font-black text-foreground mb-3">{t('home.benefits.title')}</h2>
        <p className="text-base text-muted-foreground font-light">{t('home.benefits.subtitle')}</p>
      </div>

      <div className="grid grid-cols-2 gap-6 flex-1 relative z-10">
        <div className="group relative bg-gradient-to-br from-background to-primary/10 p-7 rounded-2xl border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-t-2xl" />
          <div className="flex items-start mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-xl" />
              <div className="relative p-4 bg-gradient-to-br from-primary to-primary/90 rounded-xl shadow-lg">
                <Hotel className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mt-3 ml-4">{t('home.benefits.hotelTitle')}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{t('home.benefits.hotelDesc')}</p>
        </div>

        <div className="group relative bg-gradient-to-br from-background to-brand-navy/10 p-7 rounded-2xl border-2 border-brand-navy/20 shadow-lg hover:shadow-xl transition-all">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy to-accent rounded-t-2xl" />
          <div className="flex items-start mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-navy/20 blur-xl rounded-xl" />
              <div className="relative p-4 bg-gradient-to-br from-brand-navy to-brand-navy/90 rounded-xl shadow-lg">
                <Plane className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mt-3 ml-4">{t('home.benefits.loungeTitle')}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{t('home.benefits.loungeDesc')}</p>
        </div>

        <div className="group relative bg-gradient-to-br from-background to-secondary/10 p-7 rounded-2xl border-2 border-secondary/20 shadow-lg hover:shadow-xl transition-all">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-brand-gold rounded-t-2xl" />
          <div className="flex items-start mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-xl" />
              <div className="relative p-4 bg-gradient-to-br from-secondary to-secondary/90 rounded-xl shadow-lg">
                <Car className="h-8 w-8 text-secondary-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mt-3 ml-4">{t('home.benefits.carTitle')}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{t('home.benefits.carDesc')}</p>
        </div>

        <div className="group relative bg-gradient-to-br from-background to-accent/10 p-7 rounded-2xl border-2 border-accent/20 shadow-lg hover:shadow-xl transition-all">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-brand-gold rounded-t-2xl" />
          <div className="flex items-start mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl rounded-xl" />
              <div className="relative p-4 bg-gradient-to-br from-accent to-accent/90 rounded-xl shadow-lg">
                <CreditCard className="h-8 w-8 text-accent-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mt-3 ml-4">{t('home.benefits.cardTitle')}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{t('home.benefits.cardDesc')}</p>
        </div>
      </div>
    </div>
  );
}

