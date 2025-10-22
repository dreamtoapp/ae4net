import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { DownloadPdfButton } from '@/components/DownloadPdfButton';
import { Hotel, Plane, Car, CreditCard, Check, Wifi, Coffee, Droplets, Users, Armchair, Newspaper, Tv, Briefcase } from 'lucide-react';
import { services } from '@/lib/data/services';
import { deals } from '@/lib/data/deals';
import { testimonials } from '@/lib/data/testimonials';

export default function BrochurePage() {
  const t = useTranslations();

  return (
    <div className="brochure-container bg-white text-black">
      {/* Cover Page */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden page-break">
        <Image
          src="/assets/banner.avif"
          alt="AE4NET Cover"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />
        <div className="relative z-10 text-center px-8">
          <div className="mb-8 flex justify-center">
            <Image
              src="/assets/logo.avif"
              alt="AE4NET Logo"
              width={200}
              height={200}
              className="h-auto w-48 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            {t('home.hero.title')}{' '}
            <span className="text-yellow-400">{t('home.hero.titleHighlight')}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg">
            {t('home.hero.subtitle')}
          </p>
          <div className="mb-4 text-white/90 text-sm max-w-2xl mx-auto">
            <p>{t('common.brand')} • {t('common.tagline')}</p>
          </div>
          <div className="mb-8">
            <DownloadPdfButton label={t('common.downloadPdf')} />
          </div>
          <div className="text-white/80 text-base">
            {new Date().getFullYear()} • Professional Travel Brochure
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-8 page-break">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-900">
            {t('home.hero.title')} {t('home.hero.titleHighlight')}
          </h2>
          <p className="text-xl text-gray-700 text-center leading-relaxed mb-12">
            {t('home.hero.subtitle')}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-lg avoid-break">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,145,000+</div>
              <p className="text-sm text-gray-600">{t('home.stats.hotelsLabel')}</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg avoid-break">
              <div className="text-4xl font-bold text-blue-600 mb-2">850+</div>
              <p className="text-sm text-gray-600">{t('home.stats.loungesLabel')}</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg avoid-break">
              <div className="text-4xl font-bold text-blue-600 mb-2">120+</div>
              <p className="text-sm text-gray-600">{t('home.stats.countriesLabel')}</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg avoid-break">
              <div className="text-4xl font-bold text-blue-600 mb-2">75%</div>
              <p className="text-sm text-gray-600">{t('home.stats.discountLabel')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-8 bg-gray-50 page-break">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
            {t('home.benefits.title')}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t('home.benefits.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm avoid-break">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Hotel className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{t('home.benefits.hotelTitle')}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{t('home.benefits.hotelDesc')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm avoid-break">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Plane className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{t('home.benefits.loungeTitle')}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{t('home.benefits.loungeDesc')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm avoid-break">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Car className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{t('home.benefits.carTitle')}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{t('home.benefits.carDesc')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm avoid-break">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{t('home.benefits.cardTitle')}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{t('home.benefits.cardDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 page-break">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
            {t('about.title')}
          </h2>

          <div className="space-y-6">
            <div className="avoid-break">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('about.whatIsAE.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{t('about.whatIsAE.description1')}</p>
              <p className="text-gray-600 leading-relaxed mb-4">{t('about.whatIsAE.description2')}</p>
              <p className="text-gray-600 leading-relaxed">{t('about.whatIsAE.description3')}</p>
            </div>

            <div className="avoid-break mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('about.companyOverview.title')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{t('about.companyOverview.description1')}</p>
              <p className="text-gray-600 leading-relaxed mb-4">{t('about.companyOverview.description2')}</p>
              <p className="text-gray-600 leading-relaxed">{t('about.companyOverview.description3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 bg-gray-50 page-break">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t('services.subtitle')}
          </p>

          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-sm avoid-break">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 capitalize">
                      {service.id.replace('-', ' ')}
                    </h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {service.stats.count}
                    </div>
                    <p className="text-gray-600 mb-2">{service.stats.description}</p>
                    <div className="inline-block px-4 py-2 bg-green-100 text-green-800 font-bold rounded-full">
                      {service.discount}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Pass Section */}
      <section className="py-16 px-8 page-break">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
            {t('priorityPass.title')}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t('priorityPass.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg avoid-break">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('priorityPass.benefits.peaceAndCalm.title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('priorityPass.benefits.peaceAndCalm.description')}</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg avoid-break">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t('priorityPass.benefits.worldwide.title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('priorityPass.benefits.worldwide.description')}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg text-white avoid-break">
            <h3 className="text-2xl font-bold mb-4">{t('priorityPass.amenities.title')}</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <Wifi className="h-6 w-6 mr-2" />
                <span>{t('priorityPass.amenities.wifi')}</span>
              </div>
              <div className="flex items-center">
                <Coffee className="h-6 w-6 mr-2" />
                <span>{t('priorityPass.amenities.food')}</span>
              </div>
              <div className="flex items-center">
                <Droplets className="h-6 w-6 mr-2" />
                <span>{t('priorityPass.amenities.showers')}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-2" />
                <span>{t('priorityPass.amenities.meeting')}</span>
              </div>
              <div className="flex items-center">
                <Armchair className="h-6 w-6 mr-2" />
                <span>{t('priorityPass.amenities.comfort')}</span>
              </div>
              <div className="flex items-center">
                <Newspaper className="h-6 w-6 mr-2" />
                <span>{t('priorityPass.amenities.newspaper')}</span>
              </div>
              <div className="flex items-center">
                <Tv className="h-6 w-6 mr-2" />
                <span>{t('priorityPass.amenities.tv')}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-6 w-6 mr-2" />
                <span>{t('priorityPass.amenities.business')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-16 px-8 bg-gray-50 page-break">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
            {t('deals.title')}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t('deals.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {deals.slice(0, 6).map((deal) => (
              <div key={deal.id} className="bg-white rounded-lg shadow-sm overflow-hidden avoid-break">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{deal.title}</h3>
                      <p className="text-gray-600">{deal.destination}, {deal.country}</p>
                    </div>
                    <div className="bg-green-100 px-3 py-1 rounded-full">
                      <span className="text-green-800 font-bold">{deal.discount} OFF</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{deal.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400 line-through text-lg">${deal.originalPrice}</span>
                      <span className="text-3xl font-bold text-blue-600">${deal.discountedPrice}</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                    <ul className="space-y-1">
                      {deal.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards/Membership Section */}
      <section className="py-16 px-8 page-break">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
            {t('cards.title')}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t('cards.subtitle')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-lg avoid-break">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('cards.basic.name')}</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                ${t('cards.basic.annualFee')}<span className="text-xl text-gray-600">/year</span>
              </div>
              <ul className="space-y-3">
                {['feature1', 'feature2', 'feature3', 'feature4'].map((key) => (
                  <li key={key} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{t(`cards.basic.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg border-4 border-blue-500 relative avoid-break">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('cards.silver.name')}</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                ${t('cards.silver.annualFee')}<span className="text-xl text-gray-600">/year</span>
              </div>
              <ul className="space-y-3">
                {['feature1', 'feature2', 'feature3', 'feature4', 'feature5'].map((key) => (
                  <li key={key} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{t(`cards.silver.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 rounded-lg avoid-break">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('cards.gold.name')}</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                ${t('cards.gold.annualFee')}<span className="text-xl text-gray-600">/year</span>
              </div>
              <ul className="space-y-3">
                {['feature1', 'feature2', 'feature3', 'feature4', 'feature5', 'feature6'].map((key) => (
                  <li key={key} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{t(`cards.gold.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-gray-50 page-break">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">
            {t('experiences.title')}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t('experiences.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm avoid-break">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Final Page */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/assets/logo.avif"
              alt="AE4NET Logo"
              width={150}
              height={150}
              className="h-auto w-36 object-contain"
            />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-blue-900">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('home.cta.description')}
          </p>

          <div className="bg-blue-50 p-8 rounded-lg mb-12 avoid-break">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('nav.contact')}</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Email</p>
                <p className="text-gray-600">info@ae4net.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Website</p>
                <p className="text-gray-600">www.ae4net.com</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <p className="text-gray-600">
              {t('common.copyright')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

