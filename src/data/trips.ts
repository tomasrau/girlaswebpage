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
    slug: 'cordoba-wakeboard',
    title: 'Córdoba',
    destination: 'El Molino, Córdoba',
    country: 'Argentina',
    duration: '3 días',
    price: 'USD450',
    image: '/images/trips/cordoba.jpg',
    tags: ['Wakeboard', 'Deporte', 'Naturaleza'],
    featured: true,
    comingSoon: true,
    dateStart: '25 Septiembre 2026',
    dateEnd: '27 Septiembre 2026',
    description: 'Un finde en El Molino, Córdoba, para animarte a pararte arriba de la tabla. Wakeboard con clases de La Real en Molino Beach Wakepark, buena compañía y todo resuelto para que solo tengas que disfrutar.',
    highlights: ['Molino Beach Wakepark', 'Clases de wakeboard con La Real'],
    includes: ['Clases de wakeboard', 'Hospedaje', 'Comidas'],
    category: 'aventura',
  },
  {
    slug: 'enduro-marcos-paz',
    title: 'Enduro',
    destination: 'Perla Negra, Marcos Paz, Buenos Aires',
    country: 'Argentina',
    duration: 'Experiencia en el día',
    price: 'AR$270.000',
    image: '/images/trips/enduro.jpg',
    tags: ['Moto', 'Enduro', 'Deporte extremo'],
    featured: true,
    comingSoon: true,
    description: 'Una masterclass de moto enduro pensada para mujeres, en Perla Negra, Marcos Paz. Adrenalina arriba de la moto, técnica de la mano de instructores y un grupo copado para animarte a algo que capaz nunca probaste.',
    highlights: ['Experiencia de moto enduro para mujeres', 'Masterclass incluida'],
    includes: ['Equipo incluido'],
    category: 'aventura',
  },
  {
    slug: 'wakeboard-tigre',
    title: 'Tigre',
    destination: 'Delta, Tigre, Buenos Aires',
    country: 'Argentina',
    duration: 'Experiencia en el día',
    price: 'AR$160.000',
    image: '/images/trips/wake-sunset.jpg',
    tags: ['Wakeboard', 'Lancha', 'Naturaleza'],
    featured: true,
    comingSoon: true,
    description: 'Un día por el Delta arriba de una lancha, tabla de wakeboard y buena onda. Clases para todos los niveles, brunch a bordo y un atardecer de cierre que le da nombre a la experiencia.',
    highlights: ['Clases con Lucre Amoroso', 'Brunch a bordo', 'Sunset de cierre'],
    includes: ['Por confirmar'],
    category: 'aventura',
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
