import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/routing';
import { CreditCard, Plane, ShoppingBag, Star, Check, CheckCircle2, Calendar, TrendingUp, Wifi, Shield, DollarSign, Users } from 'lucide-react';

export default function CardsPage() {
  const t = useTranslations('cards');

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
            <p className="text-lg text-muted-foreground">{t('subtitle')}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">{t('intro.title')}</h2>
            <p className="text-lg text-muted-foreground italic">{t('intro.subtitle')}</p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="flex flex-col items-center p-4 bg-background rounded-lg">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-center">{t('intro.highlights.founded')}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-background rounded-lg">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-center">{t('intro.highlights.pioneer')}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-background rounded-lg">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                <Wifi className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-center">{t('intro.highlights.technology')}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-background rounded-lg">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 mb-3">
                <DollarSign className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium text-center">{t('intro.highlights.lowCost')}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-background rounded-lg">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-center">{t('intro.highlights.insurance')}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-background rounded-lg">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 mb-3">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-sm font-medium text-center">{t('intro.highlights.noCost')}</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-background rounded-lg">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 mb-3">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <p className="text-sm font-medium text-center">{t('intro.highlights.members')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">{t('membership.title')}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base mb-6 leading-relaxed">
                  {t('membership.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-accent/10 to-primary/10 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Plane className="h-6 w-6 text-accent" />
                  </div>
                  <Badge variant="secondary">{t('priorityPass.lounges')}</Badge>
                </div>
                <CardTitle className="text-2xl">{t('priorityPass.title')}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base mb-4 leading-relaxed">
                  {t('priorityPass.description')}
                </CardDescription>
                <div className="flex gap-2 mb-6">
                  <Badge variant="outline">{t('priorityPass.cities')}</Badge>
                  <Badge variant="outline">{t('priorityPass.countries')}</Badge>
                </div>
                <Button asChild className="w-full">
                  <Link href="/priority-pass">{t('priorityPass.learnMore')}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <ShoppingBag className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className="bg-green-500 hover:bg-green-600">{t('partners.freeYear')}</Badge>
                </div>
                <CardTitle className="text-2xl">{t('partners.title')}</CardTitle>
                <p className="text-sm font-medium text-muted-foreground mt-1">{t('partners.subtitle')}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base mb-6 leading-relaxed">
                  {t('partners.description')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-accent/10 to-primary/10 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <CreditCard className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-2xl">{t('mastercard.title')}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base mb-4 leading-relaxed">
                  {t('mastercard.description')}
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{t('mastercard.features.prepaid')}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{t('mastercard.features.control')}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{t('mastercard.features.worldwide')}</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{t('mastercard.features.onlineShopping')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}



