export interface Testimonial {
  id: string;
  name: string;
  instagramHandle?: string;
  destination: string;
  stars: number;       // 1–5
  nps: number;         // 0–10
  wouldReturn: 'si' | 'talvez' | 'no';
  text: string;
  date: string;        // YYYY-MM-DD
  featured?: boolean;
}

// Agregar reseñas reales aquí una vez recibidas y aprobadas por email (Formspree)
export const testimonials: Testimonial[] = [];

export interface TestimonialMetrics {
  avgStars: number;
  npsScore: number;      // –100 a +100 (fórmula estándar NPS)
  wouldReturnPct: number;
  total: number;
}

export function getMetrics(data: Testimonial[]): TestimonialMetrics {
  if (!data.length) return { avgStars: 0, npsScore: 0, wouldReturnPct: 0, total: 0 };

  const avgStars =
    Math.round((data.reduce((s, t) => s + t.stars, 0) / data.length) * 10) / 10;

  // NPS estándar: (promotores 9-10) - (detractores 0-6) / total × 100
  const promoters  = data.filter(t => t.nps >= 9).length;
  const detractors = data.filter(t => t.nps <= 6).length;
  const npsScore   = Math.round(((promoters - detractors) / data.length) * 100);

  const returning      = data.filter(t => t.wouldReturn === 'si').length;
  const wouldReturnPct = Math.round((returning / data.length) * 100);

  return { avgStars, npsScore, wouldReturnPct, total: data.length };
}

export function getFeatured(data: Testimonial[], limit = 4): Testimonial[] {
  const featured = data.filter(t => t.featured);
  return (featured.length >= limit ? featured : data).slice(0, limit);
}
