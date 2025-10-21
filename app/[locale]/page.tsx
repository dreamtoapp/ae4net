import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { BenefitCard } from '@/components/BenefitCard';
import { StatsCounter } from '@/components/StatsCounter';
import { Hotel, Plane, Car, CreditCard } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('home.hero.title')}{' '}
              <span className="text-primary">{t('home.hero.titleHighlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/join">{t('home.hero.ctaPrimary')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">{t('home.hero.ctaSecondary')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <StatsCounter end={1145000} suffix="+" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{t('home.stats.hotelsLabel')}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <StatsCounter end={850} suffix="+" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{t('home.stats.loungesLabel')}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <StatsCounter end={120} suffix="+" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{t('home.stats.countriesLabel')}</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <StatsCounter end={75} suffix="%" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{t('home.stats.discountLabel')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.benefits.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('home.benefits.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={Hotel}
              title={t('home.benefits.hotelTitle')}
              description={t('home.benefits.hotelDesc')}
            />
            <BenefitCard
              icon={Plane}
              title={t('home.benefits.loungeTitle')}
              description={t('home.benefits.loungeDesc')}
            />
            <BenefitCard
              icon={Car}
              title={t('home.benefits.carTitle')}
              description={t('home.benefits.carDesc')}
            />
            <BenefitCard
              icon={CreditCard}
              title={t('home.benefits.cardTitle')}
              description={t('home.benefits.cardDesc')}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent/30 rounded-full mb-4">
              <span className="text-sm font-semibold">{t('home.promotion.title')}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t('home.promotion.freePass')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('home.promotion.withFirstTrip')}
            </p>
            <Button asChild size="lg">
              <Link href="/join">{t('common.joinNow')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.howItWorks.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.howItWorks.step1Title')}</h3>
              <p className="text-muted-foreground">{t('home.howItWorks.step1Desc')}</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.howItWorks.step2Title')}</h3>
              <p className="text-muted-foreground">{t('home.howItWorks.step2Desc')}</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.howItWorks.step3Title')}</h3>
              <p className="text-muted-foreground">{t('home.howItWorks.step3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.cta.title')}</h2>
            <p className="text-lg mb-8 opacity-90">{t('home.cta.description')}</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/join">{t('home.cta.button')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}



