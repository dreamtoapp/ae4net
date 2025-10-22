import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { services } from '@/lib/data/services';
import { BrochurePageHeader } from './BrochurePageHeader';

export function BrochurePage5Services() {
  const t = useTranslations();
  const tc = useTranslations('common');
  const tb = useTranslations('brochure');

  return (
    <div className="pdf-page p-12 flex flex-col bg-gradient-to-br from-brand-light-gray to-muted relative overflow-hidden">
      <Image
        src="/assets/pattern.jpg"
        alt="Pattern"
        fill
        className="object-cover opacity-8 mix-blend-multiply"
        quality={90}
      />

      <BrochurePageHeader />

      <div className="page-number relative z-10">{tc('page')} 5 {tc('of')} 9</div>

      <div className="text-center mb-10 relative z-10">
        <div className="inline-block mb-4">
          <div className="px-4 py-1.5 bg-gradient-to-r from-secondary to-accent text-secondary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
            {tb('moreServices')}
          </div>
        </div>
        <h2 className="text-4xl font-black text-foreground mb-2">{t('services.title')} (Continued)</h2>
      </div>

      <div className="space-y-6 flex-1 relative z-10">
        {services.slice(2, 4).map((service, idx) => (
          <div key={service.id} className="relative bg-background p-8 rounded-2xl shadow-xl border-l-4 border-brand-navy hover:shadow-2xl transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-navy/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 bg-brand-navy/10 text-brand-navy text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
                    {tb('service')} {idx + 3}
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-3 capitalize">
                    {service.id.replace('-', ' ')}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-4xl font-black bg-gradient-to-r from-brand-navy to-accent bg-clip-text text-transparent">
                      {service.stats.count}
                    </div>
                    <span className="text-sm text-muted-foreground">{service.stats.description}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-gold to-brand-light-yellow text-foreground font-bold rounded-xl shadow-lg">
                    <span className="text-sm">{tb('saveUpTo')}</span>
                    <span className="text-lg">{service.discount}</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t-2 border-dashed border-border">
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <div className="flex-shrink-0 mt-0.5 mr-2">
                        <div className="p-1 bg-brand-gold/20 rounded-full">
                          <Check className="h-3 w-3 text-brand-gold" />
                        </div>
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

