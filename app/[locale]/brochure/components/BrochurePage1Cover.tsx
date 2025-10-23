import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function BrochurePage1Cover() {
  const t = useTranslations();
  const tc = useTranslations('common');
  const ta = useTranslations('about');

  return (
    <div className="pdf-page relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-navy">
      <div className="page-number">{tc('page')} 1 {tc('of')} 9</div>
      <Image
        src="/assets/banner.avif"
        alt="AE4NET Cover"
        fill
        className="object-cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/70 via-brand-navy/60 to-brand-navy/70" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 text-center">
        <div className="mb-10 relative">
          <div className="absolute inset-0 bg-brand-gold/20 blur-2xl rounded-full" />
          <Image
            src="/assets/logo.avif"
            alt="AE4NET Logo"
            width={200}
            height={200}
            className="h-auto w-52 object-contain relative z-10"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-8">
          <span className="text-brand-gold font-bold text-sm tracking-wide">EST. 1988</span>
          <span className="text-white/60">•</span>
          <span className="text-white/90 font-medium text-sm">{tc('yearsExperience')}</span>
        </div>

        <h1 className="text-6xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
          {t('home.hero.title')}{' '}
          <span className="bg-gradient-to-r from-brand-gold via-brand-light-yellow to-brand-gold bg-clip-text text-transparent">
            {t('home.hero.titleHighlight')}
          </span>
        </h1>

        <div className="max-w-4xl mx-auto space-y-4 mb-10">
          <p className="text-lg text-white/95 leading-relaxed drop-shadow-lg font-light">
            {ta('companyOverview.description1')}
          </p>
          <p className="text-base text-white/85 leading-relaxed drop-shadow-lg font-light">
            {ta('companyOverview.description2')}
          </p>
        </div>

        <div className="flex items-center gap-3 mb-6 text-white/80 text-sm font-medium">
          <span>{tc('brand')}</span>
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
          <span>{tc('tagline')}</span>
        </div>

        <div className="text-white/60 text-xs tracking-widest uppercase">
          {new Date().getFullYear()} • Professional Travel Brochure
        </div>
      </div>
    </div>
  );
}

