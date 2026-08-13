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
  past?: boolean;
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
    soldOut: true,
    dateStart: '20 Noviembre 2026',
    dateEnd: '27 Noviembre 2026',
    description: 'Pipa es uno de los destinos más vibrantes del nordeste brasileño. Playas paradisíacas, surf, fiesta y una energía que te va a enamorar.',
    highlights: ['Praia do Amor', 'Barrancas de Tibau do Sul', 'Vida nocturna', 'Surf y kitesurf'],
    includes: ['Por confirmar'],
    category: 'internacional',
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
    soldOut: true,
    dateStart: 'Abr 2027',
    description: 'Un surf trip único al corazón de África. Olas perfectas, paisajes increíbles, cultura vibrante y una experiencia que no vas a olvidar.',
    highlights: ['Por confirmar'],
    includes: ['Por confirmar'],
    category: 'internacional',
  },
  {
    slug: 'buzios-brasil',
    title: 'Búzios',
    destination: 'Búzios, Rio de Janeiro',
    country: 'Brasil',
    duration: '7 días',
    price: '',
    image: '/images/trips/buzios.jpg',
    imagePosition: 'center',
    tags: ['Playa', 'Surf', 'Brasil'],
    featured: false,
    past: true,
    dateStart: '13 Junio 2026',
    dateEnd: '20 Junio 2026',
    description: 'Búzios fue nuestra primera experiencia grupal. Olas, sol, nuevas amigas y la energía que define lo que es viajar con Girlas.',
    highlights: ['Praia de Geribá', 'Surf grupal', 'Rúa das Pedras', 'Atardecer en el muelle'],
    includes: ['Por confirmar'],
    category: 'internacional',
  },
];

// Destinos ya realizados — se muestran en el formulario de reseñas.
// Agregar acá cada vez que un viaje finaliza.
export const pastDestinations: string[] = [
  'Buzios, Brasil',
];

export const getFeaturedTrips = () => trips.filter((t) => t.featured && !t.past);
export const getTripBySlug = (slug: string) => trips.find((t) => t.slug === slug);
export const getTripsByCategory = (category: Trip['category']) => trips.filter((t) => t.category === category);
