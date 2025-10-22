import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { services } from '@/lib/data/services';
import { BrochurePageHeader } from './BrochurePageHeader';
import { Card, CardContent } from '@/components/ui/card';

export function BrochurePage5Services() {
  const t = useTranslations();
  const tc = useTranslations('common');
  const tb = useTranslations('brochure');

  return (
    <div className="pdf-page p-12 flex flex-col items-center justify-center bg-gradient-to-br from-brand-light-gray to-muted relative overflow-hidden">
      <Image
        src="/assets/pattern.jpg"
        alt="Pattern"
        fill
        className="object-cover opacity-8 mix-blend-multiply"
        quality={90}
      />

      <BrochurePageHeader />

      <div className="page-number relative z-10">{tc('page')} 5 {tc('of')} 9</div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="px-4 py-1.5 bg-gradient-to-r from-secondary to-accent text-secondary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
              {tb('moreServices')}
            </div>
          </div>
          <h2 className="text-4xl font-black text-foreground mb-2">{t('services.title')} (Continued)</h2>
        </div>

        <div className="space-y-5">
          {services.slice(2, 4).map((service, idx) => (
            <Card key={service.id} className="group relative border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy via-accent to-secondary" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-navy/10 to-transparent rounded-bl-full" />

              <CardContent className="relative p-6 z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-brand-navy/10 text-brand-navy text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
                      {tb('service')} {idx + 3}
                    </div>
                    <h3 className="text-2xl font-black text-foreground mb-3 capitalize">
                      {service.id.replace('-', ' ')}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <div className="text-3xl font-black bg-gradient-to-r from-brand-navy to-accent bg-clip-text text-transparent">
                        {service.stats.count}
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{service.stats.description}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-gold to-brand-light-yellow text-foreground font-bold rounded-xl shadow-md">
                      <span className="text-sm">{tb('saveUpTo')}</span>
                      <span className="text-lg">{service.discount}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t-2 border-dashed border-border/50">
                  <ul className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="flex-shrink-0 mt-0.5 mr-2">
                          <div className="p-1 bg-brand-gold/20 rounded-full">
                            <Check className="h-3.5 w-3.5 text-brand-gold drop-shadow-sm" />
                          </div>
                        </div>
                        <span className="text-foreground/80 leading-relaxed">{feature}</span>
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

