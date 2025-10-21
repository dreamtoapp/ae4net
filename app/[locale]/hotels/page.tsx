'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

export default function HotelsPage() {
  const t = useTranslations('hotels');
  const [hotelType, setHotelType] = useState<string[]>([]);
  const [starRating, setStarRating] = useState<string[]>([]);

  const toggleHotelType = (type: string) => {
    setHotelType(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleStarRating = (rating: string) => {
    setStarRating(prev =>
      prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
    );
  };

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-lg text-muted-foreground mb-4">{t('subtitle')}</p>
            <Badge variant="secondary" className="text-lg px-4 py-2">{t('discount')}</Badge>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold border-b pb-2">{t('personalInfo')}</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">{t('form.email')} <span className="text-destructive">*</span></Label>
                        <Input id="email" type="email" required />
                      </div>

                      <div>
                        <Label htmlFor="gender">{t('form.gender')}</Label>
                        <Select>
                          <SelectTrigger id="gender">
                            <SelectValue placeholder={t('form.pleaseChoose')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">{t('form.male')}</SelectItem>
                            <SelectItem value="female">{t('form.female')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">{t('form.title')}</Label>
                        <Select>
                          <SelectTrigger id="title">
                            <SelectValue placeholder={t('form.pleaseChoose')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mr">{t('form.titleOptions.mr')}</SelectItem>
                            <SelectItem value="mrs">{t('form.titleOptions.mrs')}</SelectItem>
                            <SelectItem value="miss">{t('form.titleOptions.miss')}</SelectItem>
                            <SelectItem value="drMd">{t('form.titleOptions.drMd')}</SelectItem>
                            <SelectItem value="drPhd">{t('form.titleOptions.drPhd')}</SelectItem>
                            <SelectItem value="engineer">{t('form.titleOptions.engineer')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="firstName">{t('form.firstName')} <span className="text-destructive">*</span></Label>
                        <Input id="firstName" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="familyName">{t('form.familyName')} <span className="text-destructive">*</span></Label>
                        <Input id="familyName" required />
                      </div>

                      <div>
                        <Label htmlFor="nationality">{t('form.nationality')} <span className="text-destructive">*</span></Label>
                        <Select>
                          <SelectTrigger id="nationality">
                            <SelectValue placeholder={t('form.pleaseChoose')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sa">Saudi Arabia</SelectItem>
                            <SelectItem value="ae">United Arab Emirates</SelectItem>
                            <SelectItem value="kw">Kuwait</SelectItem>
                            <SelectItem value="qa">Qatar</SelectItem>
                            <SelectItem value="bh">Bahrain</SelectItem>
                            <SelectItem value="om">Oman</SelectItem>
                            <SelectItem value="eg">Egypt</SelectItem>
                            <SelectItem value="jo">Jordan</SelectItem>
                            <SelectItem value="lb">Lebanon</SelectItem>
                            <SelectItem value="sy">Syria</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="mobile">{t('form.mobile')} <span className="text-destructive">*</span></Label>
                      <Input id="mobile" type="tel" required />
                    </div>
                  </div>

                  {/* Hotel Information */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold border-b pb-2">{t('hotelInfo')}</h2>

                    <div>
                      <Label htmlFor="hotelName">{t('form.hotelName')}</Label>
                      <Input id="hotelName" />
                    </div>

                    <div className="text-center my-4">
                      <span className="text-sm font-medium text-muted-foreground">{t('form.or')}</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">{t('form.city')} <span className="text-destructive">*</span></Label>
                        <Input id="city" required />
                      </div>

                      <div>
                        <Label htmlFor="country">{t('form.country')} <span className="text-destructive">*</span></Label>
                        <Select>
                          <SelectTrigger id="country">
                            <SelectValue placeholder={t('form.pleaseChoose')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sa">Saudi Arabia</SelectItem>
                            <SelectItem value="ae">United Arab Emirates</SelectItem>
                            <SelectItem value="kw">Kuwait</SelectItem>
                            <SelectItem value="qa">Qatar</SelectItem>
                            <SelectItem value="bh">Bahrain</SelectItem>
                            <SelectItem value="om">Oman</SelectItem>
                            <SelectItem value="eg">Egypt</SelectItem>
                            <SelectItem value="fr">France</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="us">United States</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Travel Date */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold border-b pb-2">{t('travelDate')}</h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="from">{t('form.from')} <span className="text-destructive">*</span></Label>
                        <Input id="from" type="date" required />
                      </div>

                      <div>
                        <Label htmlFor="to">{t('form.to')}</Label>
                        <Input id="to" type="date" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="priceRange">{t('form.priceRange')}</Label>
                        <Input id="priceRange" type="number" placeholder="0" />
                      </div>

                      <div>
                        <Label htmlFor="currency">{t('form.currency')}</Label>
                        <Select defaultValue="sar">
                          <SelectTrigger id="currency">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sar">Saudi Arabia (SAR)</SelectItem>
                            <SelectItem value="usd">United States Dollar (USD)</SelectItem>
                            <SelectItem value="eur">Euro (EUR)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label className="mb-3 block">{t('form.starRating')}</Label>
                      <div className="flex flex-wrap gap-3">
                        {['6', '5', '4', '3', '2', '1'].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => toggleStarRating(rating)}
                            className={`px-4 py-2 rounded-md border transition-colors ${starRating.includes(rating)
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-background hover:bg-accent border-input'
                              }`}
                          >
                            {rating} ★
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="mb-3 block">{t('form.hotelType')}</Label>
                      <div className="flex flex-wrap gap-3">
                        {['apartment', 'hotel', 'resort'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => toggleHotelType(type)}
                            className={`px-4 py-2 rounded-md border transition-colors ${hotelType.includes(type)
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'bg-background hover:bg-accent border-input'
                              }`}
                          >
                            {t(`form.${type}`)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    {t('form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1,145,000+</div>
                <p className="text-muted-foreground">Hotels Worldwide</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">75%</div>
                <p className="text-muted-foreground">Maximum Discount</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



