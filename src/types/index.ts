// Tipos globales de Constru Yamel

export interface NavLink {
  label: string
  href: string
}

export interface HeroStat {
  value: string
  label: string
}

export interface Service {
  id: number
  number: string
  icon: string // SVG path data
  title: string
  description: string
}

export interface Project {
  id: number
  name: string
  city: string
  category: string
  image: string // URL de imagen
}

export interface ProcessStep {
  id: number
  number: string
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  id: number
  name: string
  initial: string
  project: string
  comment: string
  rating: number
}

export interface CompanyValue {
  icon: string
  title: string
  description: string
}

export interface ContactCard {
  icon: string
  title: string
  value: string
  href: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
  color: string // clase de color en hover activo
  bgColor: string // color de fondo activo
}

export interface SiteConfig {
  name: string
  tagline: string
  whatsapp: string
  whatsappUrl: string
  instagram: string
  email: string
  location: string
  mapEmbedUrl: string
}
