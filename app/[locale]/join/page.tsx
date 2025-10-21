import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Hotel, Car, Check, Sparkles } from 'lucide-react';

export default function JoinPage() {
  const t = useTranslations('join');

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
            <p className="text-lg text-muted-foreground mb-4">{t('subtitle')}</p>
            <p className="text-muted-foreground">{t('intro.description')}</p>
          </div>
        </div>
      </section>

      {/* Benefits Highlights Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                {t('benefits.title')}
              </Badge>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Pricing Card */}
              <Card className="text-center border-primary/20">
                <CardHeader>
                  <DollarSign className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <CardTitle className="text-xl">{t('pricing.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary mb-2">{t('pricing.amount')}</div>
                  <p className="text-sm text-muted-foreground">{t('pricing.currency')}</p>
                </CardContent>
              </Card>

              {/* Hotel Discounts */}
              <Card className="text-center">
                <CardHeader>
                  <Hotel className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <CardTitle className="text-lg">50-75%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Hotel Discounts</p>
                  <p className="text-xs text-muted-foreground mt-2">1,145,000+ Hotels</p>
                </CardContent>
              </Card>

              {/* Car Rentals */}
              <Card className="text-center">
                <CardHeader>
                  <Car className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <CardTitle className="text-lg">{t('highlights.carRental.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Worldwide</p>
                </CardContent>
              </Card>

              {/* Value Proposition */}
              <Card className="text-center">
                <CardHeader>
                  <Check className="w-12 h-12 mx-auto mb-3 text-green-500" />
                  <CardTitle className="text-lg">{t('highlights.subscribeToday.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{t('benefits.save')}</p>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Benefits */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('highlights.hotelDiscounts.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('highlights.hotelDiscounts.description')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('highlights.feelComfortable.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('highlights.feelComfortable.description')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-center text-sm text-muted-foreground leading-relaxed">
                    {t('pricing.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Tabs defaultValue="new" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="new">{t('tabs.newMember')}</TabsTrigger>
                <TabsTrigger value="mobile">{t('tabs.mobile')}</TabsTrigger>
              </TabsList>

              <TabsContent value="new">
                <Card>
                  <CardHeader>
                    <CardTitle>Create New Account</CardTitle>
                    <CardDescription>Join Arabian Eagle and start saving today</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">{t('form.fullName')}</Label>
                      <Input id="fullName" placeholder="John Doe" />
                    </div>
                    <div>
                      <Label htmlFor="email">{t('form.email')}</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t('form.phone')}</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <Label htmlFor="userId">{t('form.userId')}</Label>
                      <Input id="userId" placeholder="Choose a username" />
                    </div>
                    <div>
                      <Label htmlFor="password">{t('form.password')}</Label>
                      <Input id="password" type="password" />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">{t('form.confirmPassword')}</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button className="w-full">{t('form.submit')}</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mobile">
                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Registration</CardTitle>
                    <CardDescription>Register using your mobile number</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="mobileNumber">{t('form.phone')}</Label>
                      <Input id="mobileNumber" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <Label htmlFor="mobileName">{t('form.fullName')}</Label>
                      <Input id="mobileName" placeholder="John Doe" />
                    </div>
                    <div>
                      <Label htmlFor="mobileEmail">{t('form.email')}</Label>
                      <Input id="mobileEmail" type="email" placeholder="your@email.com" />
                    </div>
                    <Button className="w-full">Send Verification Code</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>{t('benefits.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{t('benefits.access')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{t('benefits.save')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{t('benefits.exclusive')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('faq.title')}</h2>
              <p className="text-muted-foreground">For Business Partners</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger className="text-left">
                  {t('faq.partner.q1.question')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('faq.partner.q1.answer')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="q2">
                <AccordionTrigger className="text-left">
                  {t('faq.partner.q2.question')}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {t('faq.partner.q2.answer')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}



