import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function BrochurePage9Contact() {
  const t = useTranslations();
  const tc = useTranslations('common');
  const tb = useTranslations('brochure');

  return (
    <div className="pdf-page p-12 flex flex-col justify-between bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-navy relative overflow-hidden">
      <div className="page-number text-white">{tc('page')} 9 {tc('of')} 9</div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex-1 flex flex-col justify-center">
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

          <h2 className="text-4xl font-black text-white mb-4 leading-tight">
            {t('home.cta.title')}
          </h2>
          <p className="text-base text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            {t('home.cta.description')}
          </p>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl mb-8 shadow-2xl">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center justify-center gap-3">
              <span className="w-12 h-1 bg-gradient-to-r from-transparent to-brand-gold rounded-full" />
              {t('nav.contact')}
              <span className="w-12 h-1 bg-gradient-to-l from-transparent to-brand-gold rounded-full" />
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-3">📧</div>
                <p className="font-bold text-brand-gold mb-2 text-sm uppercase tracking-wide">{tc('email')}</p>
                <p className="text-white/90 text-sm font-medium">info@ae4net.com</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-3">📱</div>
                <p className="font-bold text-brand-gold mb-2 text-sm uppercase tracking-wide">{tc('phone')}</p>
                <p className="text-white/90 text-sm font-medium">+1 (555) 123-4567</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-3">🌐</div>
                <p className="font-bold text-brand-gold mb-2 text-sm uppercase tracking-wide">{tc('website')}</p>
                <p className="text-white/90 text-sm font-medium">www.ae4net.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/20 pt-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-white/70 text-sm">{tc('copyright')}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-white/50 text-xs">
          <span>{tc('tagline')}</span>
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
          <span className="text-brand-gold font-semibold">EST. 1986</span>
        </div>
      </div>
    </div>
  );
}

