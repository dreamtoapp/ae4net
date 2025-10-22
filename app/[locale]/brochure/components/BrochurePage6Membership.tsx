import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { BrochurePageHeader } from './BrochurePageHeader';
import { Card, CardContent } from '@/components/ui/card';

export function BrochurePage6Membership() {
  const t = useTranslations();
  const tc = useTranslations('common');
  const tb = useTranslations('brochure');

  return (
    <div className="pdf-page p-12 flex flex-col items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-navy relative overflow-hidden">
      <Image
        src="/assets/pattern.jpg"
        alt="Pattern"
        fill
        className="object-cover opacity-8 mix-blend-multiply"
        quality={90}
      />

      <BrochurePageHeader variant="dark" />

      <div className="page-number text-white relative z-10">{tc('page')} 6 {tc('of')} 9</div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="px-4 py-1.5 bg-gradient-to-r from-brand-gold to-brand-light-yellow text-foreground text-xs font-bold uppercase tracking-wider rounded-full">
              {tb('membershipTiers')}
            </div>
          </div>
          <h2 className="text-4xl font-black text-white mb-2">{t('cards.title')}</h2>
          <p className="text-base text-white/70 font-light">{t('cards.subtitle')}</p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted-foreground/20 rounded-2xl transform group-hover:scale-105 transition-transform" />
            <Card className="relative bg-gradient-to-br from-muted to-muted/90 border border-border shadow-2xl flex flex-col h-full overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-muted-foreground/20 text-muted-foreground text-xs font-bold rounded-full mb-3">
                    {tb('starter')}
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-1">{t('cards.basic.name')}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-brand-gold">${t('cards.basic.annualFee')}</span>
                    <span className="text-sm text-muted-foreground">/year</span>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
                <ul className="space-y-2.5 flex-1">
                  {['feature1', 'feature2', 'feature3', 'feature4'].map((key) => (
                    <li key={key} className="flex items-start text-xs">
                      <div className="flex-shrink-0 mt-0.5 mr-2">
                        <div className="p-0.5 bg-border rounded-full">
                          <Check className="h-3 w-3 text-brand-gold drop-shadow-sm" />
                        </div>
                      </div>
                      <span className="text-foreground/80">{t(`cards.basic.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
            <Card className="relative bg-gradient-to-br from-primary to-primary/90 border-2 border-primary-foreground/20 shadow-2xl flex flex-col h-full transform scale-105 overflow-hidden">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <div className="px-4 py-1.5 bg-gradient-to-r from-brand-gold to-brand-light-yellow text-foreground text-xs font-black rounded-full shadow-lg uppercase">
                  {tb('mostPopular')}
                </div>
              </div>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 mt-2">
                  <div className="inline-block px-3 py-1 bg-primary-foreground/20 text-primary-foreground text-xs font-bold rounded-full mb-3">
                    {tb('recommended')}
                  </div>
                  <h3 className="text-xl font-black text-primary-foreground mb-1">{t('cards.silver.name')}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-brand-gold">${t('cards.silver.annualFee')}</span>
                    <span className="text-sm text-primary-foreground/80">/year</span>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-primary-foreground/40 to-transparent mb-4" />
                <ul className="space-y-2.5 flex-1">
                  {['feature1', 'feature2', 'feature3', 'feature4', 'feature5'].map((key) => (
                    <li key={key} className="flex items-start text-xs">
                      <div className="flex-shrink-0 mt-0.5 mr-2">
                        <div className="p-0.5 bg-primary-foreground/40 rounded-full">
                          <Check className="h-3 w-3 text-brand-gold drop-shadow-sm" />
                        </div>
                      </div>
                      <span className="text-primary-foreground font-medium">{t(`cards.silver.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold to-brand-light-yellow rounded-2xl transform group-hover:scale-105 transition-transform" />
            <Card className="relative bg-gradient-to-br from-brand-gold to-brand-light-yellow border border-brand-gold shadow-2xl flex flex-col h-full overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-brand-navy text-white text-xs font-bold rounded-full mb-3">
                    {tb('premium')}
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-1">{t('cards.gold.name')}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-brand-navy">${t('cards.gold.annualFee')}</span>
                    <span className="text-sm text-foreground/70">/year</span>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-brand-navy/30 to-transparent mb-4" />
                <ul className="space-y-2.5 flex-1">
                  {['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'].map((key) => (
                    <li key={key} className="flex items-start text-xs">
                      <div className="flex-shrink-0 mt-0.5 mr-2">
                        <div className="p-0.5 bg-brand-navy rounded-full">
                          <Check className="h-3 w-3 text-white drop-shadow-sm" />
                        </div>
                      </div>
                      <span className="text-foreground font-medium">{t(`cards.gold.${key}`)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

