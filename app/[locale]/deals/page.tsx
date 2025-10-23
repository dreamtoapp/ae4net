import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function DealsPage() {
  const t = useTranslations('deals');

  const mockDeals = [
    {
      id: 1,
      title: 'Paris Summer Getaway',
      destination: 'Paris, France',
      discount: '65%',
      originalPrice: 1200,
      discountedPrice: 420,
      image: '/placeholder-paris.jpg',
    },
    {
      id: 2,
      title: 'Dubai Luxury Experience',
      destination: 'Dubai, UAE',
      discount: '70%',
      originalPrice: 2000,
      discountedPrice: 600,
      image: '/placeholder-dubai.jpg',
    },
    {
      id: 3,
      title: 'Maldives Paradise',
      destination: 'Maldives',
      discount: '60%',
      originalPrice: 3000,
      discountedPrice: 1200,
      image: '/placeholder-maldives.jpg',
    },
  ];

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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockDeals.map((deal) => (
              <Card key={deal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <p className="text-4xl font-bold text-primary">{deal.discount} OFF</p>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{deal.title}</CardTitle>
                    <Badge className="bg-accent text-accent-foreground">{deal.discount}</Badge>
                  </div>
                  <CardDescription>{deal.destination}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground line-through">
                      ${deal.originalPrice}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      ${deal.discountedPrice}
                    </p>
                  </div>
                  <Button className="w-full">View Deal</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}







