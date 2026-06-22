export interface Trip {
  slug: string;
  title: string;
  destination: string;
  country: string;
  duration: string;
  price: string;
  image: string;
  tags: string[];
  featured?: boolean;
  description: string;
  highlights: string[];
  includes: string[];
  category: 'aventura' | 'retiro' | 'cultural' | 'internacional';
}

export const trips: Trip[] = [
  {
    slug: 'patagonia-austral',
    title: 'Patagonia Austral',
    destination: 'El Calafate & El Chaltén',
    country: 'Argentina',
    duration: '8 días',
    price: '$280.000',
    image: '/images/trips/patagonia.jpg',
    tags: ['Aventura', 'Naturaleza', 'Trekking'],
    featured: true,
    description: 'Explorá los glaciares y montañas más imponentes del mundo en un viaje diseñado para que te conectes con la naturaleza y con vos misma.',
    highlights: ['Torres del Paine', 'Perito Moreno', 'Fitz Roy', 'Laguna de los Tres'],
    includes: ['Alojamiento', 'Desayunos', 'Guía experta', 'Traslados'],
    category: 'aventura',
  },
  {
    slug: 'retiro-mendoza',
    title: 'Retiro de Bienestar en Mendoza',
    destination: 'Valle de Uco',
    country: 'Argentina',
    duration: '5 días',
    price: '$180.000',
    image: '/images/trips/mendoza.jpg',
    tags: ['Retiro', 'Bienestar', 'Vino'],
    featured: false,
    description: 'Yoga, meditación, catas de vino y spa en plena cordillera. Un retiro para desconectarte del mundo y reencontrarte con vos.',
    highlights: ['Yoga diario', 'Spa en bodega', 'Cata de vinos', 'Masajes'],
    includes: ['Alojamiento boutique', 'Todas las comidas', 'Actividades', 'Traslados'],
    category: 'retiro',
  },
  {
    slug: 'colombia-magica',
    title: 'Colombia Mágica',
    destination: 'Cartagena & Medellín',
    country: 'Colombia',
    duration: '10 días',
    price: '$420.000',
    image: '/images/trips/colombia.jpg',
    tags: ['Internacional', 'Cultural', 'Playas'],
    featured: true,
    description: 'Del Caribe colonial a la ciudad de la eterna primavera. Colombia te va a robar el corazón con su gente, su cultura y sus paisajes.',
    highlights: ['Ciudad Amurallada', 'Islas del Rosario', 'El Poblado', 'Guatapé'],
    includes: ['Vuelos internos', 'Alojamiento', 'Desayunos', 'Guía local'],
    category: 'internacional',
  },
  {
    slug: 'norte-argentino',
    title: 'Magia del Norte',
    destination: 'Salta & Jujuy',
    country: 'Argentina',
    duration: '6 días',
    price: '$195.000',
    image: '/images/trips/norte.jpg',
    tags: ['Cultural', 'Naturaleza', 'Fotografía'],
    featured: false,
    description: 'Salinas Grandes, Quebrada de Humahuaca, Cafayate. El norte argentino es pura magia que no te podés perder.',
    highlights: ['Salinas Grandes', 'Quebrada de Humahuaca', 'Cafayate', 'Iruya'],
    includes: ['Alojamiento', 'Desayunos', 'Guía local', 'Traslados'],
    category: 'cultural',
  },
  {
    slug: 'retiro-misiones',
    title: 'Selva & Cataratas',
    destination: 'Puerto Iguazú',
    country: 'Argentina',
    duration: '4 días',
    price: '$150.000',
    image: '/images/trips/iguazu.jpg',
    tags: ['Naturaleza', 'Aventura', 'UNESCO'],
    featured: false,
    description: 'Las Cataratas del Iguazú son una de las maravillas naturales del mundo. Vivilas desde todos los ángulos en una experiencia única.',
    highlights: ['Garganta del Diablo', 'Circuito inferior y superior', 'Paseo en bote', 'Sendero macuco'],
    includes: ['Alojamiento', 'Desayunos', 'Entradas', 'Traslados'],
    category: 'aventura',
  },
  {
    slug: 'peru-mistico',
    title: 'Perú Místico',
    destination: 'Lima, Cusco & Machu Picchu',
    country: 'Perú',
    duration: '12 días',
    price: '$580.000',
    image: '/images/trips/peru.jpg',
    tags: ['Internacional', 'Cultural', 'Historia'],
    featured: false,
    description: 'Un viaje al corazón del Imperio Inca. Machu Picchu, el Valle Sagrado, el lago Titicaca y la gastronomía más sorprendente del mundo.',
    highlights: ['Machu Picchu', 'Valle Sagrado', 'Lago Titicaca', 'Barrio Barranco'],
    includes: ['Vuelos internos', 'Alojamiento', 'Desayunos', 'Tren a Aguas Calientes', 'Guía'],
    category: 'internacional',
  },
];

export const getFeaturedTrips = () => trips.filter((t) => t.featured);
export const getTripBySlug = (slug: string) => trips.find((t) => t.slug === slug);
export const getTripsByCategory = (category: Trip['category']) => trips.filter((t) => t.category === category);
