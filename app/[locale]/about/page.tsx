import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Users, TrendingUp, Award, CheckCircle2, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const t = useTranslations('about');

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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                {t('whatIsAE.title')}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('whatIsAE.title')}</h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">{t('whatIsAE.description1')}</p>
              <p className="leading-relaxed">{t('whatIsAE.description2')}</p>
              <p className="leading-relaxed">{t('whatIsAE.description3')}</p>
              <p className="leading-relaxed">{t('whatIsAE.description4')}</p>
              <p className="leading-relaxed">{t('whatIsAE.description5')}</p>
              <p className="leading-relaxed">{t('whatIsAE.description6')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{t('companyOverview.title')}</h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="leading-relaxed">{t('companyOverview.description1')}</p>
              <p className="leading-relaxed">{t('companyOverview.description2')}</p>
              <p className="leading-relaxed">{t('companyOverview.description3')}</p>
              <p className="leading-relaxed">{t('companyOverview.description4')}</p>
              <p className="leading-relaxed">{t('companyOverview.description5')}</p>
              <p className="leading-relaxed">{t('companyOverview.description6')}</p>
              <p className="leading-relaxed">{t('companyOverview.description7')}</p>
              <p className="leading-relaxed">{t('companyOverview.description8')}</p>
              <p className="leading-relaxed">{t('companyOverview.description9')}</p>
              <p className="leading-relaxed">{t('companyOverview.description10')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('stats.title')}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{t('stats.foundedYear')}</div>
                  <p className="text-muted-foreground">{t('stats.founded')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{t('stats.membersCount')}</div>
                  <p className="text-muted-foreground">{t('stats.members')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{t('stats.spendingAmount')}</div>
                  <p className="text-muted-foreground">{t('stats.spending')}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-sm font-medium mb-2 text-muted-foreground">{t('stats.market')}</div>
                  <p className="text-sm">{t('stats.marketDesc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                {t('partnership.title')}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('partnership.title')}</h2>
              <p className="text-xl text-muted-foreground mb-8">{t('partnership.subtitle')}</p>
            </div>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{t('partnership.noCost')}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{t('partnership.formInstruction')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">{t('partnership.benefits.title')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg">{t('partnership.benefits.benefit1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg">{t('partnership.benefits.benefit2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg">{t('partnership.benefits.benefit3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg">{t('partnership.benefits.benefit4')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('cta.description')}</p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/contact">{t('cta.button')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}



