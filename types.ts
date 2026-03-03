export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrCity: string;
  avatarUrl: string;
  rating: number;
  text: string;
  customCss?: string;
}

export interface ThemeConfig {
  id: string;
  name: string;
  primary: string; // Main action color, borders, icons
  secondary: string; // Accents, decorative blobs
  starColor: string; // Specific for stars
  cardBg: string; // Background of the card
  textColor: string; // Main text color
  logoUrl?: string; // Optional custom logo for the theme/branding
}

export interface TestimonialProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}