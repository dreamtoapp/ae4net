import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Building2, Printer, Globe } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');

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

      {/* USA Hotline */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4">{t('usaHotline.title')}</Badge>
            <a href={`tel:${t('usaHotline.number')}`} className="text-3xl md:text-4xl font-bold text-primary hover:underline whitespace-nowrap" dir="ltr">
              {t('usaHotline.number')}
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Get in Touch</h2>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t('form.name')}</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">{t('form.email')}</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t('form.phone')}</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country">{t('form.country')}</Label>
                      <Input id="country" placeholder="Country" />
                    </div>
                    <div>
                      <Label htmlFor="city">{t('form.city')}</Label>
                      <Input id="city" placeholder="City" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">{t('form.subject')}</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div>
                    <Label htmlFor="message">{t('form.message')}</Label>
                    <textarea
                      id="message"
                      rows={5}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <Button type="submit" className="w-full">{t('form.submit')}</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Lines Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('directLines.title')}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium mb-1">{t('directLines.kuwaitLabel')}</p>
                  <a href={`tel:${t('directLines.kuwait')}`} className="text-sm text-muted-foreground hover:text-primary whitespace-nowrap" dir="ltr">
                    {t('directLines.kuwait')}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium mb-1">{t('directLines.uaeLabel')}</p>
                  <a href={`tel:${t('directLines.uae')}`} className="text-sm text-muted-foreground hover:text-primary whitespace-nowrap" dir="ltr">
                    {t('directLines.uae')}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium mb-1">{t('directLines.egyptLabel')}</p>
                  <a href={`tel:${t('directLines.egypt')}`} className="text-sm text-muted-foreground hover:text-primary whitespace-nowrap" dir="ltr">
                    {t('directLines.egypt')}
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium mb-1">{t('directLines.philippinesLabel')}</p>
                  <a href={`tel:${t('directLines.philippines')}`} className="text-sm text-muted-foreground hover:text-primary whitespace-nowrap" dir="ltr">
                    {t('directLines.philippines')}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Offices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('officesTitle')}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Jeddah Office */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    {t('offices.jeddah.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{t('offices.jeddah.address')}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <a href={`tel:${t('offices.jeddah.tel')}`} className="text-muted-foreground hover:text-primary whitespace-nowrap" dir="ltr">
                      {t('offices.jeddah.tel')}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <a href={`tel:${t('offices.jeddah.mobile')}`} className="text-muted-foreground hover:text-primary whitespace-nowrap" dir="ltr">
                      {t('offices.jeddah.mobile')}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                    <a href={`mailto:${t('offices.jeddah.email')}`} className="text-muted-foreground hover:text-primary">
                      {t('offices.jeddah.email')}
                    </a>
                  </div>
                  <div className="pt-2 border-t">
                    <Badge variant="secondary">Est. {t('offices.jeddah.established')}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Kuwait Office */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    {t('offices.kuwait.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{t('offices.kuwait.address')}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <a href={`tel:${t('offices.kuwait.tel')}`} className="text-muted-foreground hover:text-primary whitespace-nowrap" dir="ltr">
                      {t('offices.kuwait.tel')}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <a href={`tel:${t('offices.kuwait.mobile')}`} className="text-muted-foreground hover:text-primary whitespace-nowrap" dir="ltr">
                      {t('offices.kuwait.mobile')}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                    <a href={`mailto:${t('offices.kuwait.email')}`} className="text-muted-foreground hover:text-primary">
                      {t('offices.kuwait.email')}
                    </a>
                  </div>
                  <div className="pt-2 border-t">
                    <Badge variant="secondary">Est. {t('offices.kuwait.established')}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Beirut Office */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    {t('offices.beirut.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{t('offices.beirut.address')}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <a href={`tel:${t('offices.beirut.tel')}`} className="text-muted-foreground hover:text-primary whitespace-nowrap" dir="ltr">
                      {t('offices.beirut.tel')}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground" dir="ltr">{t('offices.beirut.fax')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                    <a href={`mailto:${t('offices.beirut.email')}`} className="text-muted-foreground hover:text-primary">
                      {t('offices.beirut.email')}
                    </a>
                  </div>
                  <div className="pt-2 border-t">
                    <Badge variant="secondary">Est. {t('offices.beirut.established')}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism Agents */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('agents.title')}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Singapore */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('agents.singapore.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="font-medium">{t('agents.singapore.company')}</p>
                  <p className="text-muted-foreground leading-relaxed">{t('agents.singapore.address')}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.singapore.tel')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.singapore.fax')}</span>
                  </div>
                  <div className="pt-2">
                    <Badge variant="outline">License: {t('agents.singapore.license')}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Hong Kong */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('agents.hongKong.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="font-medium">{t('agents.hongKong.company')}</p>
                  <p className="text-muted-foreground leading-relaxed">{t('agents.hongKong.address')}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.hongKong.tel')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.hongKong.fax')}</span>
                  </div>
                  <div className="pt-2">
                    <Badge variant="outline">License: {t('agents.hongKong.license')}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Guangzhou */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('agents.guangzhou.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground leading-relaxed">{t('agents.guangzhou.address')}</p>
                  <div className="pt-2">
                    <Badge variant="secondary">{t('agents.guangzhou.hours')}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Beijing */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('agents.beijing.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground leading-relaxed">{t('agents.beijing.address')}</p>
                  <div className="pt-2">
                    <Badge variant="secondary">{t('agents.beijing.hours')}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Thailand */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('agents.thailand.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="font-medium">{t('agents.thailand.company')}</p>
                  <p className="text-muted-foreground leading-relaxed">{t('agents.thailand.address')}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.thailand.tel')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.thailand.fax')}</span>
                  </div>
                  <div className="pt-2">
                    <Badge variant="outline">License: {t('agents.thailand.license')}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Malaysia */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('agents.malaysia.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="font-medium">{t('agents.malaysia.company')}</p>
                  <p className="text-muted-foreground leading-relaxed">{t('agents.malaysia.address')}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.malaysia.tel')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.malaysia.fax')}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Philippines Manila */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('agents.philippinesManila.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="font-medium">{t('agents.philippinesManila.company')}</p>
                  <p className="text-muted-foreground leading-relaxed">{t('agents.philippinesManila.address')}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.philippinesManila.tel')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.philippinesManila.fax')}</span>
                  </div>
                  <div className="pt-2">
                    <Badge variant="outline">License: {t('agents.philippinesManila.license')}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Philippines Cebu */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('agents.philippinesCebu.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground leading-relaxed">{t('agents.philippinesCebu.address')}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.philippinesCebu.tel')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.philippinesCebu.fax')}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Shanghai */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('agents.shanghai.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="font-medium">{t('agents.shanghai.company')}</p>
                  <p className="text-muted-foreground leading-relaxed">{t('agents.shanghai.address')}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.shanghai.tel')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.shanghai.fax')}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Indochina */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('agents.indochina.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="font-medium">{t('agents.indochina.company')}</p>
                  <p className="text-muted-foreground leading-relaxed">{t('agents.indochina.address')}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.indochina.tel')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.indochina.fax')}</span>
                  </div>
                  <div className="pt-2">
                    <Badge variant="outline">License: {t('agents.indochina.license')}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Dubai */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    {t('agents.dubai.name')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="font-medium">{t('agents.dubai.company')}</p>
                  <p className="text-muted-foreground leading-relaxed">{t('agents.dubai.address')}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-muted-foreground whitespace-nowrap" dir="ltr">{t('agents.dubai.tel')}</span>
                  </div>
                  <div className="pt-2">
                    <Badge variant="outline">License: {t('agents.dubai.license')}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
