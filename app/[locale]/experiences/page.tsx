import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ExperiencesPage() {
  const t = useTranslations('experiences');

  const mockExperiences = [
    {
      id: 1,
      author: 'Sarah Johnson',
      location: 'Tokyo, Japan',
      title: 'Amazing Lounge Access',
      content: 'The Priority Pass lounge access made my 8-hour layover in Tokyo so comfortable. Free meals, WiFi, and comfortable seating!',
      date: '2024-01-15',
    },
    {
      id: 2,
      author: 'Mohammed Al-Rahman',
      location: 'London, UK',
      title: 'Incredible Hotel Savings',
      content: 'Saved over 60% on a luxury hotel in London. The Arabian Eagle card has already paid for itself!',
      date: '2024-01-10',
    },
    {
      id: 3,
      author: 'Marie Dubois',
      location: 'New York, USA',
      title: 'Best Travel Card Ever',
      content: 'From hotel discounts to lounge access, this card has everything a frequent traveler needs. Highly recommended!',
      date: '2024-01-05',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h1>
            <p className="text-lg text-muted-foreground mb-8">{t('subtitle')}</p>
            <Button size="lg">{t('shareYours')}</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {mockExperiences.map((experience) => (
              <Card key={experience.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{experience.title}</CardTitle>
                      <CardDescription>
                        {experience.author} • {experience.location}
                      </CardDescription>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {new Date(experience.date).toLocaleDateString()}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{experience.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}






