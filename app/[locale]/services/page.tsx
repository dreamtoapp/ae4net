import { useTranslations } from 'next-intl';
import { ServiceCard } from '@/components/ServiceCard';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Hotel,
  Plane,
  Car,
  CreditCard,
  Building2,
  Users,
  Star,
  Calendar,
  MapPin,
  Percent,
  BookOpen,
  Mail,
  FileText,
  ShoppingBag,
  Music,
  Heart,
  Globe
} from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.title')}</h1>
            <p className="text-lg text-muted-foreground">{t('services.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <Hotel className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">{t('services.stats.hotels')}</div>
              <div className="text-sm text-muted-foreground">{t('services.stats.hotelsLabel')}</div>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">{t('services.stats.customers')}</div>
              <div className="text-sm text-muted-foreground">{t('services.stats.customersLabel')}</div>
            </Card>
            <Card className="p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">{t('services.stats.reviews')}</div>
              <div className="text-sm text-muted-foreground">{t('services.stats.reviewsLabel')}</div>
            </Card>
            <Card className="p-6 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">{t('services.stats.freeNights')}</div>
              <div className="text-sm text-muted-foreground">{t('services.stats.freeNightsLabel')}</div>
            </Card>
            <Card className="p-6 text-center col-span-2 md:col-span-1">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1">{t('services.stats.cities')}</div>
              <div className="text-sm text-muted-foreground">{t('services.stats.citiesLabel')}</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">{t('services.facilities.title')}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">{t('services.facilities.title')}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <Percent className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{t('services.facilities.hotelDiscounts.title')}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('services.facilities.hotelDiscounts.description')}
                </p>
              </Card>
              <Card className="p-6">
                <BookOpen className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{t('services.facilities.freeBooking.title')}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('services.facilities.freeBooking.description')}
                </p>
              </Card>
              <Card className="p-6">
                <Star className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{t('services.facilities.vipPrivileges.title')}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('services.facilities.vipPrivileges.description')}
                </p>
              </Card>
              <Card className="p-6">
                <Car className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{t('services.facilities.carRentalDiscounts.title')}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('services.facilities.carRentalDiscounts.description')}
                </p>
              </Card>
              <Card className="p-6">
                <Mail className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{t('services.facilities.freeEmail.title')}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('services.facilities.freeEmail.description')}
                </p>
              </Card>
              <Card className="p-6">
                <FileText className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">{t('services.facilities.newsletter.title')}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t('services.facilities.newsletter.description')}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Card Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.cardServices.title')}</h2>
              <p className="text-xl text-muted-foreground mb-6">{t('services.cardServices.subtitle')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('services.cardServices.intro')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Car className="w-10 h-10 mx-auto mb-3 text-primary" />
                <p className="font-medium">{t('services.cardServices.services.carBoatRental')}</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <MapPin className="w-10 h-10 mx-auto mb-3 text-primary" />
                <p className="font-medium">{t('services.cardServices.services.cityTours')}</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Music className="w-10 h-10 mx-auto mb-3 text-primary" />
                <p className="font-medium">{t('services.cardServices.services.concerts')}</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Heart className="w-10 h-10 mx-auto mb-3 text-primary" />
                <p className="font-medium">{t('services.cardServices.services.weddingHalls')}</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <ShoppingBag className="w-10 h-10 mx-auto mb-3 text-primary" />
                <p className="font-medium">{t('services.cardServices.services.shopping')}</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <Hotel className="w-10 h-10 mx-auto mb-3 text-primary" />
                <p className="font-medium">{t('services.cardServices.services.hotelReservations')}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Consulting Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('services.travelConsulting.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('services.travelConsulting.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('services.otherServices.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('services.otherServices.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Existing Services Cards Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              icon={Hotel}
              title={t('services.hotelBookings.title')}
              description={t('services.hotelBookings.description')}
              features={[
                'Access to 1,145,000+ hotels worldwide',
                'Up to 75% discount from main rates',
                'Special member rates',
                'Easy booking process',
              ]}
            />
            <ServiceCard
              icon={Plane}
              title={t('services.loungeAccess.title')}
              description={t('services.loungeAccess.description')}
              features={[
                '850+ VIP lounges worldwide',
                'Available in 120+ countries',
                'Complimentary food & beverages',
                'High-speed WiFi access',
              ]}
            />
            <ServiceCard
              icon={Car}
              title={t('services.carRentals.title')}
              description={t('services.carRentals.description')}
              features={[
                'Up to 30% discount',
                'Major rental companies',
                'Worldwide coverage',
                'Flexible booking',
              ]}
            />
            <ServiceCard
              icon={CreditCard}
              title={t('services.mastercard.title')}
              description={t('services.mastercard.description')}
              features={[
                'Prepaid debit card',
                'Controlled spending',
                'Worldwide acceptance',
                'Member privileges',
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}



