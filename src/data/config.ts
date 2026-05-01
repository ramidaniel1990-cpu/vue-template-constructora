// Datos centralizados de Constru Yamel
import type {
  SiteConfig,
  NavLink,
  HeroStat,
  Service,
  Project,
  ProcessStep,
  Testimonial,
  CompanyValue,
  ContactCard,
  FooterLink,
  SocialLink,
} from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Constru Yamel',
  tagline: 'Construyendo el futuro de Venezuela',
  whatsapp: '+58 424 910 8341',
  whatsappUrl:
    'https://wa.me/584249108341?text=Hola!%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20con%20Constru%20Yamel%20%F0%9F%8F%97%EF%B8%8F',
  instagram: 'https://www.instagram.com/construyamel',
  email: 'contacto@construyamel.com',
  location: 'Venezuela',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.3!2d-66.9036!3d10.4806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI4JzI5LjgiTiA2NsKwNTQnMTMuMCJX!5e0!3m2!1ses!2sve!4v1620000000000!5m2!1ses!2sve',
}

export const navLinks: NavLink[] = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PROYECTOS', href: '#proyectos' },
  { label: 'NOSOTROS', href: '#nosotros' },
  { label: 'CONTACTO', href: '#contacto' },
]

export const heroStats: HeroStat[] = [
  { value: '50+', label: 'Proyectos' },
  { value: '10+', label: 'Años' },
  { value: '100%', label: 'Satisfacción' },
  { value: '200+', label: 'Clientes' },
]

export const services: Service[] = [
  {
    id: 1,
    number: '01',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    title: 'Construcción Residencial',
    description:
      'Diseñamos y construimos casas y residencias que se adaptan a tu estilo de vida, con materiales de primera calidad y acabados impecables.',
  },
  {
    id: 2,
    number: '02',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    title: 'Construcción Comercial',
    description:
      'Edificios de oficinas, locales comerciales y espacios empresariales construidos con estándares internacionales y entregas puntuales.',
  },
  {
    id: 3,
    number: '03',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    title: 'Remodelaciones',
    description:
      'Transformamos espacios existentes con renovaciones integrales que respetan tu presupuesto y superan tus expectativas de diseño.',
  },
  {
    id: 4,
    number: '04',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    title: 'Acabados y Terminados',
    description:
      'Pisos, revestimientos, pintura y detalles de terminación que dan vida y personalidad a cada espacio que construimos.',
  },
  {
    id: 5,
    number: '05',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    title: 'Asesoría Técnica',
    description:
      'Evaluación estructural, revisión de planos y consultoría especializada para garantizar que tu proyecto cumpla todas las normativas.',
  },
  {
    id: 6,
    number: '06',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Gestión de Proyectos',
    description:
      'Coordinación integral de obra, control de presupuesto y seguimiento en tiempo real para que tu inversión sea siempre rentable.',
  },
]

export const projects: Project[] = [
  {
    id: 1,
    name: 'Residencia Los Pinos',
    city: 'Caracas',
    category: 'Residencial',
    image: '/images/PROYECT1.png',
  },
  {
    id: 2,
    name: 'Edificio Comercial Centro',
    city: 'Valencia',
    category: 'Comercial',
    image: '/images/PROYECT2.png',
  },
  {
    id: 3,
    name: 'Remodelación Villa Verde',
    city: 'Maracay',
    category: 'Remodelación',
    image: '/images/PROYECT3.png',
  },
  {
    id: 4,
    name: 'Urbanización El Mirador',
    city: 'Barquisimeto',
    category: 'Residencial',
    image: '/images/PROYECT4.png',
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    title: 'Consulta Inicial',
    description: 'Escuchamos tus ideas y evaluamos el terreno o espacio para definir el alcance del proyecto.',
  },
  {
    id: 2,
    number: '02',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    title: 'Planificación',
    description: 'Diseñamos planos, cronogramas y presupuesto detallado para que apruebes cada etapa antes de iniciar.',
  },
  {
    id: 3,
    number: '03',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    title: 'Construcción',
    description: 'Ejecutamos la obra con materiales certificados, equipo especializado y supervisión técnica diaria.',
  },
  {
    id: 4,
    number: '04',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    title: 'Entrega',
    description: 'Hacemos recorrido final contigo, entregamos garantía escrita y cerramos el proyecto con tu total satisfacción.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    initial: 'C',
    project: 'Residencia Los Pinos — Caracas',
    comment:
      'Constru Yamel superó todas nuestras expectativas. La calidad de los acabados y el cumplimiento del cronograma fueron impecables. Recomendamos su trabajo sin dudar.',
    rating: 5,
  },
  {
    id: 2,
    name: 'María González',
    initial: 'M',
    project: 'Remodelación integral — Maracay',
    comment:
      'Transformaron completamente nuestra oficina en tiempo récord. El equipo es profesional, ordenado y muy comunicativo durante todo el proceso. Excelente inversión.',
    rating: 5,
  },
  {
    id: 3,
    name: 'José Ramírez',
    initial: 'J',
    project: 'Local Comercial — Valencia',
    comment:
      'El resultado final fue exactamente lo que visualizamos. La atención al detalle y la calidad de los materiales utilizados hablan por sí solos. Muy satisfecho.',
    rating: 5,
  },
]

export const companyValues: CompanyValue[] = [
  {
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Calidad',
    description: 'Materiales certificados y procesos rigurosos en cada etapa de construcción.',
  },
  {
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    title: 'Compromiso',
    description: 'Tu proyecto es nuestra prioridad desde el primer día hasta la entrega final.',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Innovación',
    description: 'Técnicas modernas de construcción para maximizar eficiencia y durabilidad.',
  },
  {
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Puntualidad',
    description: 'Respetamos cada fecha pactada porque valoramos tu tiempo y tu inversión.',
  },
]

export const contactCards: ContactCard[] = [
  {
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    title: 'WhatsApp',
    value: '+58 424 910 8341',
    href: 'https://wa.me/584249108341?text=Hola!%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20con%20Constru%20Yamel%20%F0%9F%8F%97%EF%B8%8F',
  },
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Email',
    value: 'contacto@construyamel.com',
    href: 'mailto:contacto@construyamel.com',
  },
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Ubicación',
    value: 'Venezuela',
    href: 'https://maps.google.com/?q=Venezuela',
  },
]

export const footerLinks: FooterLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export const socialLinks: SocialLink[] = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/584249108341?text=Hola!%20Vi%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20con%20Constru%20Yamel%20%F0%9F%8F%97%EF%B8%8F',
    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
    color: 'text-white',
    bgColor: '#25D366',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/construyamel',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    color: 'text-white',
    bgColor: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/construyamel',
    icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    color: 'text-white',
    bgColor: '#1877F2',
  },
  {
    name: 'Maps',
    href: 'https://maps.google.com/?q=Venezuela',
    icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    color: 'text-white',
    bgColor: '#EA4335',
  },
]
