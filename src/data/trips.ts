export interface Trip {
  slug: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  price: string;
  image: string;
  imagePosition?: string;
  tags: string[];
  featured?: boolean;
  comingSoon?: boolean;
  soldOut?: boolean;
  dateStart?: string;
  dateEnd?: string;
  description: string;
  highlights: string[];
  includes: string[];
  category: 'aventura' | 'retiro' | 'cultural' | 'internacional';
}

export const trips: Trip[] = [
  {
    slug: 'pipa-brasil',
    title: 'Pipa',
    destination: 'Pipa, Rio Grande do Norte',
    country: 'Brasil',
    duration: '7 días',
    price: 'U$D1.300',
    image: '/images/trips/pipa.jpg',
    tags: ['Playa', 'Surf', 'Drinks'],
    featured: true,
    comingSoon: true,
    dateStart: '20 Noviembre 2026',
    dateEnd: '27 Noviembre 2026',
    soldOut: true,
    description: 'Pipa es uno de los destinos más vibrantes del nordeste brasileño. Playas paradisíacas, surf, fiesta y una energía que te va a enamorar.',
    highlights: ['Praia do Amor', 'Barrancas de Tibau do Sul', 'Vida nocturna', 'Surf y kitesurf'],
    includes: ['Por confirmar'],
    category: 'internacional',
  },
  {
    slug: 'itamambuca-brasil',
    title: 'Itamambuca',
    destination: 'Ubatuba, São Paulo',
    country: 'Brasil',
    duration: '7 días',
    price: 'USD1.500',
    image: '/images/trips/itamambuca.jpg',
    tags: ['Surf', 'Naturaleza', 'Relax'],
    featured: true,
    comingSoon: true,
    dateStart: '9 Diciembre 2026',
    dateEnd: '16 Diciembre 2026',
    description: 'Itamambuca es la playa de surf más icónica de Ubatuba. Olas perfectas, selva atlántica y una calma que solo Brasil puede darte.',
    highlights: ['Surf en Itamambuca', 'Selva atlántica', 'Playas vírgenes', 'Gastronomía local'],
    includes: ['Por confirmar'],
    category: 'aventura',
  },
  {
    slug: 'marruecos-surf-trip',
    title: 'Marruecos',
    destination: 'Marruecos',
    country: 'Marruecos',
    duration: 'Por confirmar',
    price: 'USD1.650',
    image: '/images/trips/marruecos.jpg',
    imagePosition: 'center',
    tags: ['Surf', 'Aventura', 'África'],
    featured: true,
    comingSoon: true,
    dateStart: 'Abr 2027',
    description: 'Un surf trip único al corazón de África. Olas perfectas, paisajes increíbles, cultura vibrante y una experiencia que no vas a olvidar.',
    highlights: ['Por confirmar'],
    includes: ['Por confirmar'],
    category: 'internacional',
  },
  {
    slug: 'praia-do-rosa-brasil',
    title: 'Praia do Rosa',
    destination: 'Praia do Rosa, Santa Catarina',
    country: 'Brasil',
    duration: 'Por confirmar',
    price: 'Próximamente',
    image: '/images/trips/dorosa.jpg',
    tags: ['Playa', 'Surf', 'Naturaleza'],
    featured: true,
    comingSoon: true,
    description: 'Praia do Rosa es uno de los secretos mejor guardados de Brasil. Una bahía espectacular, avistamiento de ballenas y una onda relajada y auténtica.',
    highlights: ['Avistamiento de ballenas', 'Laguna de Rosa', 'Surf', 'Vida pueblerina'],
    includes: ['Por confirmar'],
    category: 'aventura',
  },
];

// Destinos ya realizados — se muestran en el formulario de reseñas.
// Agregar acá cada vez que un viaje finaliza.
export const pastDestinations: string[] = [
  'Buzios, Brasil',
];

export const getFeaturedTrips = () => trips.filter((t) => t.featured);
export const getTripBySlug = (slug: string) => trips.find((t) => t.slug === slug);
export const getTripsByCategory = (category: Trip['category']) => trips.filter((t) => t.category === category);
