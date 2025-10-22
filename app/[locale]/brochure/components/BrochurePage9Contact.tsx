import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Globe } from 'lucide-react';

export function BrochurePage9Contact() {
  const t = useTranslations();
  const tc = useTranslations('common');
  const tb = useTranslations('brochure');

  return (
    <div className="pdf-page p-12 flex flex-col justify-between items-center bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-navy relative overflow-hidden">
      <Image
        src="/assets/pattern.jpg"
        alt="Pattern"
        fill
        className="object-cover opacity-8 mix-blend-multiply"
        quality={90}
      />

      <div className="page-number text-primary relative z-10">{tc('page')} 9 {tc('of')} 9</div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />

      <div className="w-full max-w-6xl mx-auto relative z-10 flex-1 flex flex-col justify-center">
        <div className="text-center mb-12">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-gold/20 blur-2xl rounded-full" />
              <Image
                src="/assets/logo.avif"
                alt="AE4NET Logo"
                width={160}
                height={160}
                className="h-auto w-40 object-contain relative z-10"
              />
            </div>
          </div>

          <div className="inline-block mb-6">
            <div className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
              <span className="text-brand-gold font-bold text-sm">{tb('readyToStart')}</span>
            </div>
          </div>

          <h2 className="text-4xl font-black text-primary mb-4 leading-tight">
            {t('home.cta.title')}
          </h2>
          <p className="text-base text-primary/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            {t('home.cta.description')}
          </p>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-black text-primary mb-6 flex items-center justify-center gap-3">
                <span className="w-12 h-1 bg-gradient-to-r from-transparent to-brand-gold rounded-full" />
                {t('nav.contact')}
                <span className="w-12 h-1 bg-gradient-to-l from-transparent to-brand-gold rounded-full" />
              </h3>
              <div className="grid grid-cols-3 gap-5">
                <Card className="bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:bg-white/10 hover:border-brand-gold/40 transition-all shadow-lg group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                        <div className="relative p-3 bg-gradient-to-br from-primary to-primary/90 rounded-full shadow-lg">
                          <Mail className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <p className="font-black text-brand-gold mb-2 text-sm uppercase tracking-wider">{tc('email')}</p>
                    <p className="text-primary text-sm font-bold">info@ae4net.com</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:bg-white/10 hover:border-brand-gold/40 transition-all shadow-lg group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-brand-navy/20 blur-xl rounded-full" />
                        <div className="relative p-3 bg-gradient-to-br from-brand-navy to-brand-navy/90 rounded-full shadow-lg">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <p className="font-black text-brand-gold mb-2 text-sm uppercase tracking-wider">{tc('phone')}</p>
                    <p className="text-primary text-sm font-bold">+1 (555) 123-4567</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:bg-white/10 hover:border-brand-gold/40 transition-all shadow-lg group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full" />
                        <div className="relative p-3 bg-gradient-to-br from-secondary to-secondary/90 rounded-full shadow-lg">
                          <Globe className="h-6 w-6 text-secondary-foreground" />
                        </div>
                      </div>
                    </div>
                    <p className="font-black text-brand-gold mb-2 text-sm uppercase tracking-wider">{tc('website')}</p>
                    <p className="text-primary text-sm font-bold">www.ae4net.com</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10 border-t border-white/20 pt-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-primary/70 text-sm">{tc('copyright')}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-primary/50 text-xs">
          <span>{tc('tagline')}</span>
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
          <span className="text-brand-gold font-semibold">EST. 1986</span>
        </div>
      </div>
    </div>
  );
}

