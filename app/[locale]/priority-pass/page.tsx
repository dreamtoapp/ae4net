import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/routing';
import { Wifi, Coffee, Droplets, Users, Armchair, Check, Heart, Globe, Newspaper, Tv, Briefcase, DollarSign, Key } from 'lucide-react';

export default function PriorityPassPage() {
  const t = useTranslations('priorityPass');
  const tc = useTranslations('common');

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">{t('subtitle')}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('description')}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{t('stats.lounges')}</div>
                <p className="text-muted-foreground">{t('stats.loungesLabel')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">{t('stats.countries')}</div>
                <p className="text-muted-foreground">{t('stats.countriesLabel')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{t('stats.cities')}</div>
                <p className="text-muted-foreground">{t('stats.citiesLabel')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">{t('keyAccess.title')}</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('keyAccess.description')}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('howToUse.title')}</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">1</div>
                    <CardTitle className="text-lg">{t('howToUse.stepTitle1')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t('howToUse.beforeTravel')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">2</div>
                    <CardTitle className="text-lg">{t('howToUse.stepTitle2')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{t('howToUse.admission')}</p>
                  <p className="text-sm text-muted-foreground italic">{t('howToUse.guests')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('benefits.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Key className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t('benefits.access.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{t('benefits.access.description')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{t('benefits.network.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{t('benefits.network.description')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t('benefits.value.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{t('benefits.value.description')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                    <Coffee className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{t('benefits.facilities.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{t('benefits.facilities.description')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t('benefits.economicAdvantage.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{t('benefits.economicAdvantage.description')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('features.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{t('features.feature1')}</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{t('features.feature2')}</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{t('features.feature3')}</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{t('features.feature4')}</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{t('features.feature5')}</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{t('features.feature6')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('amenities.title')}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Wifi className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{t('amenities.wifi')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Coffee className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{t('amenities.food')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Droplets className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{t('amenities.showers')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{t('amenities.meeting')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Armchair className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{t('amenities.comfort')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Newspaper className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{t('amenities.newspaper')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Tv className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{t('amenities.tv')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{t('amenities.business')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{t('companion.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{t('companion.description')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent/20 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-accent rounded-full mb-4">
              <span className="text-sm font-semibold text-white">{t('freeOffer.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('freeOffer.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('freeOffer.subtitle')}</p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/join">{tc('joinNow')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">{t('disclaimer.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{t('disclaimer.text')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}



