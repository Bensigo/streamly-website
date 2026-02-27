// ── Programmatic SEO data for service × location pages ─────────────────────

export interface SeoPage {
  slug: string;
  service: string;
  serviceSlug: string;
  location: string;
  locationSlug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  bullets: string[];
  cta: string;
}

const services = [
  {
    name: 'CTV Ad Monetization',
    slug: 'ctv-ad-monetization',
    bullets: [
      'Ad server configuration & SSP integration',
      'Dynamic floor price optimization',
      'Demand partner evaluation & onboarding',
      'Revenue stack architecture & implementation',
    ],
    cta: 'Talk to us about your monetization goals',
  },
  {
    name: 'AI-Augmented Ad Ops',
    slug: 'ai-augmented-ad-ops',
    bullets: [
      'Real-time yield optimization with AI',
      'Automated performance monitoring & reporting',
      'SSP relationship & deal structure management',
      'Campaign trafficking & quality assurance',
    ],
    cta: 'Find out which Yield Engine tier is right for you',
  },
  {
    name: 'CTV Yield Optimization',
    slug: 'ctv-yield-optimization',
    bullets: [
      'Floor price optimization & demand analysis',
      'Fill rate improvement strategies',
      'Programmatic guaranteed & PMP management',
      'AI-powered anomaly detection & yield monitoring',
    ],
    cta: 'Talk to us about optimizing your yield',
  },
  {
    name: 'Adtech Partnership Development',
    slug: 'adtech-partnership-development',
    bullets: [
      'Publisher landscape mapping & opportunity assessment',
      'Active publisher outreach & relationship building',
      'Partnership negotiation & onboarding support',
      'Market intelligence & competitive analysis',
    ],
    cta: 'Explore your market opportunity',
  },
  {
    name: 'Programmatic Monetization Consulting',
    slug: 'programmatic-monetization-consulting',
    bullets: [
      'Monetization health check & gap analysis',
      'Ad stack audit & 90-day strategic roadmap',
      'SSP portfolio optimization & deal structuring',
      'Fractional monetization director retainer',
    ],
    cta: 'Book a free monetization consultation',
  },
];

const locations = [
  { name: 'Middle East & North Africa', slug: 'mea', region: 'MEA' },
  { name: 'UAE', slug: 'uae', region: 'the UAE' },
  { name: 'Dubai', slug: 'dubai', region: 'Dubai' },
  { name: 'Saudi Arabia', slug: 'saudi-arabia', region: 'Saudi Arabia' },
  { name: 'Riyadh', slug: 'riyadh', region: 'Riyadh' },
  { name: 'Egypt', slug: 'egypt', region: 'Egypt' },
  { name: 'Qatar', slug: 'qatar', region: 'Qatar' },
  { name: 'Kuwait', slug: 'kuwait', region: 'Kuwait' },
  { name: 'Bahrain', slug: 'bahrain', region: 'Bahrain' },
  { name: 'Oman', slug: 'oman', region: 'Oman' },
  { name: 'Jordan', slug: 'jordan', region: 'Jordan' },
  { name: 'Morocco', slug: 'morocco', region: 'Morocco' },
  { name: 'Tunisia', slug: 'tunisia', region: 'Tunisia' },
  { name: 'Turkey', slug: 'turkey', region: 'Turkey' },
  { name: 'Pakistan', slug: 'pakistan', region: 'Pakistan' },
];

export function getAllSeoPages(): SeoPage[] {
  const pages: SeoPage[] = [];

  for (const svc of services) {
    for (const loc of locations) {
      const slug = `${svc.slug}-${loc.slug}`;
      pages.push({
        slug,
        service: svc.name,
        serviceSlug: svc.slug,
        location: loc.name,
        locationSlug: loc.slug,
        title: `${svc.name} in ${loc.name} | Streamly`,
        metaDescription: `Streamly provides expert ${svc.name.toLowerCase()} services for CTV publishers and adtech vendors in ${loc.name}. From strategy to implementation — built for the streaming opportunity in ${loc.region}.`,
        h1: `${svc.name} in ${loc.name}`,
        intro: `The CTV and streaming market in ${loc.region} is growing rapidly. Publishers are launching ad-supported tiers, audiences are scaling, and the programmatic infrastructure needed to monetize effectively is maturing fast. Streamly helps publishers and adtech vendors in ${loc.region} make the most of this opportunity — with specialist ${svc.name.toLowerCase()} services designed for the region.`,
        bullets: svc.bullets,
        cta: svc.cta,
      });
    }
  }

  return pages;
}

export function getSeoPageBySlug(slug: string): SeoPage | undefined {
  return getAllSeoPages().find(p => p.slug === slug);
}
