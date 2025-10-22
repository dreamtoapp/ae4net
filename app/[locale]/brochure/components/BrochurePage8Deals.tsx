import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { deals } from '@/lib/data/deals';
import { BrochurePageHeader } from './BrochurePageHeader';
import { Card, CardContent } from '@/components/ui/card';

export function BrochurePage8Deals() {
  const t = useTranslations();
  const tc = useTranslations('common');
  const tb = useTranslations('brochure');

  return (
    <div className="pdf-page p-12 flex flex-col items-center justify-center bg-background relative overflow-hidden">
      <Image
        src="/assets/pattern.jpg"
        alt="Pattern"
        fill
        className="object-cover opacity-8 mix-blend-multiply"
        quality={90}
      />

      <BrochurePageHeader />

      <div className="page-number relative z-10">{tc('page')} 8 {tc('of')} 9</div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="px-4 py-1.5 bg-gradient-to-r from-brand-gold to-brand-light-yellow text-foreground text-xs font-bold uppercase tracking-wider rounded-full">
              {tb('moreHotDeals')}
            </div>
          </div>
          <h2 className="text-4xl font-black text-foreground mb-2">{t('deals.title')} (Continued)</h2>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {deals.slice(4, 6).map((deal) => (
            <Card key={deal.id} className="group relative bg-background border-2 border-border shadow-lg hover:shadow-2xl transition-all hover:border-primary overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-brand-navy to-accent" />

              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-foreground mb-1 leading-tight">{deal.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium">📍 {deal.destination}, {deal.country}</p>
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-gold blur-md rounded-xl" />
                      <div className="relative px-3 py-1.5 bg-gradient-to-br from-brand-gold to-brand-light-yellow rounded-xl shadow-lg">
                        <span className="text-foreground font-black text-xs block leading-none">{deal.discount}</span>
                        <span className="text-foreground/80 text-[10px] font-bold block leading-none">OFF</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-xs mb-3 leading-relaxed">{deal.description}</p>

                <div className="mb-3 p-3 bg-gradient-to-br from-primary/10 to-brand-navy/10 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground block mb-0.5">{tb('was')}</span>
                      <span className="text-muted-foreground line-through text-sm font-semibold">${deal.originalPrice}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-brand-gold font-bold block mb-0.5">{tb('nowOnly')}</span>
                      <span className="text-3xl font-black bg-gradient-to-r from-primary to-brand-navy bg-clip-text text-transparent">
                        ${deal.discountedPrice}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-dashed border-border/50 pt-3">
                  <p className="text-xs font-black text-foreground mb-2 uppercase tracking-wide">{tb('packageIncludes')}</p>
                  <ul className="space-y-1.5">
                    {deal.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs">
                        <div className="flex-shrink-0 mt-0.5 mr-1.5">
                          <div className="p-0.5 bg-brand-gold/20 rounded-full">
                            <Check className="h-2.5 w-2.5 text-brand-gold drop-shadow-sm" />
                          </div>
                        </div>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

