import {
  Brain,
  Cog,
  BarChart3,
  MessageSquareMore,
  PhoneCall,
  Puzzle,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Casos de Éxito", href: "#casos-de-exito" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export const SERVICES = [
  {
    icon: Brain,
    title: "Desarrollo de IA a la Medida",
    description:
      "Creamos modelos y sistemas de inteligencia artificial personalizados que se adaptan a las necesidades únicas de tu negocio.",
  },
  {
    icon: Cog,
    title: "Automatización de Procesos",
    description:
      "Optimizamos tus flujos de trabajo con soluciones de automatización inteligente que reducen costos y eliminan errores.",
  },
  {
    icon: BarChart3,
    title: "Analítica de Datos",
    description:
      "Transformamos tus datos en información accionable con dashboards interactivos y modelos predictivos avanzados.",
  },
  {
    icon: MessageSquareMore,
    title: "Chatbots y Asistentes IA",
    description:
      "Desarrollamos asistentes virtuales inteligentes que mejoran la experiencia de tus clientes y aumentan la eficiencia operativa.",
  },
  {
    icon: PhoneCall,
    title: "Agentes de Voz Telefónicos",
    description:
      "Implementamos agentes de IA que realizan y reciben llamadas telefónicas, agendan citas y califican prospectos.",
  },
  {
    icon: Puzzle,
    title: "Integración de IA",
    description:
      "Conectamos soluciones de IA con tus sistemas existentes para una transición fluida y sin interrupciones.",
  },
];

export const STATS = [
  { value: "149,000+", label: "Leads generados" },
  { value: "1,000s", label: "Horas ahorradas" },
  { value: "100%", label: "De satisfacción" },
  { value: "0", label: "Llamadas perdidas" },
];

export const ABOUT_FEATURES = [
  "Enfoque centrado en resultados medibles y retorno de inversión",
  "Metodología ágil que garantiza entregas rápidas y de alta calidad",
  "Tecnología de vanguardia aplicada a problemas reales de negocio",
  "Soluciones listas en semanas, no meses",
  "Garantía de satisfacción — si no ves resultados, te devolvemos tu inversión",
];

export const CASE_STUDIES = [
  {
    tag: "Asistentes IA",
    title: "Asistente Ejecutivo IA — Empleado Digital 24/7",
    description:
      "Implementamos un asistente ejecutivo con IA que opera 24/7 vía WhatsApp. Gestiona correos, calendario, CRM, seguimiento de leads y planificación diaria.",
    result: "+10 hrs semanales automatizadas",
    image: "/case-assistant.jpg",
  },
  {
    tag: "E-Commerce",
    title: "Automatización integral para reventa en línea",
    description:
      "Sistema end-to-end que automatiza análisis de subastas con IA, verificación de productos por visión computacional, creación de listados, optimización de precios y reportes de P&L.",
    result: "174% ROI promedio en ventas",
    image: "/case-ecommerce.jpg",
  },
  {
    tag: "Agentes de Voz",
    title: "Agente Telefónico IA 24/7",
    description:
      "Agente telefónico con IA que contesta llamadas en español natural las 24 horas. Agenda citas, califica leads, responde preguntas frecuentes y transfiere consultas complejas.",
    result: "0 llamadas perdidas, −40% carga recepción",
    image: "/case-voice.jpg",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Click Rick entendió por completo nuestras necesidades desde el primer día y entregó una solución que superó nuestras expectativas.",
    name: "Paola Arellano",
    role: "Operaciones, Eleana Inc.",
  },
  {
    quote:
      "La implementación del chatbot inteligente redujo nuestros tiempos de respuesta en un 80%. El equipo de Click Rick es profesional, ágil y siempre disponible.",
    name: "Carlos Mendoza",
    role: "CEO, Grupo Comercial del Norte",
  },
  {
    quote:
      "Gracias a la analítica de datos que nos implementaron, ahora tomamos decisiones basadas en información real. Ha sido un cambio radical para nuestra empresa.",
    name: "Ana Lucía Ramírez",
    role: "Gerente de Operaciones, LogisPro",
  },
];

export const CLIENT_LOGOS = [
  { name: "TechMex" },
  { name: "Grupo Norte" },
  { name: "LogisPro" },
  { name: "Fermata Capital" },
  { name: "Nova Industries" },
  { name: "Apex Retail" },
  { name: "Meridian Labs" },
  { name: "Solara Health" },
];

export const FOOTER_SERVICES = [
  "Desarrollo de IA",
  "Automatización",
  "Analítica de Datos",
  "Chatbots IA",
  "Agentes de Voz",
  "Integración",
];

export const FOOTER_COMPANY = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Casos de Éxito", href: "#casos-de-exito" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Blog", href: "#" },
  { label: "Carreras", href: "#" },
];

export const FOOTER_CONTACT = {
  email: "contact@clickrick.ai",
  address: "Ciudad de México, México",
};
