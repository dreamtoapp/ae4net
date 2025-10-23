export interface Deal {
  id: number;
  title: string;
  destination: string;
  country: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  image: string;
  featured: boolean;
  validUntil: string;
  includes: string[];
}

export const deals: Deal[] = [
  {
    id: 1,
    title: 'Paris Luxury Escape',
    destination: 'Paris',
    country: 'France',
    description: 'Experience the City of Light with 5-star accommodation, gourmet dining, and exclusive tours.',
    originalPrice: 2400,
    discountedPrice: 840,
    discount: '65%',
    image: '/deals/paris.jpg',
    featured: true,
    validUntil: '2024-06-30',
    includes: ['5-star hotel', 'Daily breakfast', 'Airport transfers', 'City tour'],
  },
  {
    id: 2,
    title: 'Dubai Premium Experience',
    destination: 'Dubai',
    country: 'UAE',
    description: 'Luxury meets adventure in Dubai. Stay at premium hotels and enjoy exclusive experiences.',
    originalPrice: 3000,
    discountedPrice: 900,
    discount: '70%',
    image: '/deals/dubai.jpg',
    featured: true,
    validUntil: '2024-08-31',
    includes: ['Luxury hotel', 'Desert safari', 'Burj Khalifa tickets', 'Dubai Mall vouchers'],
  },
  {
    id: 3,
    title: 'Maldives Paradise',
    destination: 'Male',
    country: 'Maldives',
    description: 'Tropical paradise awaits. Overwater villas, pristine beaches, and world-class diving.',
    originalPrice: 4500,
    discountedPrice: 1800,
    discount: '60%',
    image: '/deals/maldives.jpg',
    featured: true,
    validUntil: '2024-07-31',
    includes: ['Overwater villa', 'All-inclusive meals', 'Spa treatments', 'Water sports'],
  },
  {
    id: 4,
    title: 'Tokyo Cultural Journey',
    destination: 'Tokyo',
    country: 'Japan',
    description: 'Discover ancient traditions and modern marvels in Japan\'s vibrant capital.',
    originalPrice: 2800,
    discountedPrice: 1120,
    discount: '60%',
    image: '/deals/tokyo.jpg',
    featured: false,
    validUntil: '2024-09-30',
    includes: ['4-star hotel', 'JR Pass', 'Temple tours', 'Traditional dining'],
  },
  {
    id: 5,
    title: 'New York City Break',
    destination: 'New York',
    country: 'USA',
    description: 'The city that never sleeps. Broadway shows, world-class museums, and iconic landmarks.',
    originalPrice: 2200,
    discountedPrice: 880,
    discount: '60%',
    image: '/deals/newyork.jpg',
    featured: false,
    validUntil: '2024-10-31',
    includes: ['Central hotel', 'Broadway tickets', 'Museum passes', 'Food tour'],
  },
  {
    id: 6,
    title: 'Bali Tropical Retreat',
    destination: 'Bali',
    country: 'Indonesia',
    description: 'Serene beaches, lush rice terraces, and spiritual temples await in Bali.',
    originalPrice: 1800,
    discountedPrice: 720,
    discount: '60%',
    image: '/deals/bali.jpg',
    featured: false,
    validUntil: '2024-12-31',
    includes: ['Beach resort', 'Spa package', 'Temple tours', 'Cooking class'],
  },
];







