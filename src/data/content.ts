export const CONTACT = {
  phone: '664 450 349',
  phoneHref: 'tel:+34664450349',
  whatsappHref: 'https://wa.me/34664450349',
  email: 'info@miniplanet.es',
  emailHref: 'mailto:info@miniplanet.es',
  instagram: 'https://www.instagram.com/miniplanetaltea/',
  address: 'Av. Comunitat Valenciana, 8, Esc. 2 – Local 3',
  city: '03590 Altea, Alicante',
  addressFull: 'Av. Comunitat Valenciana, 8, Esc. 2 – Local 3, 03590 Altea, Alicante',
  lat: 38.5988,
  lng: -0.0502,
  hours: 'Lun–Dom 10:00–21:00',
};

export const SERVICES = [
  {
    id: 'cumpleanos',
    title: 'Cumpleaños a medida',
    description:
      'Una fiesta diseñada para el protagonista del día. Sala privada exclusiva con todo lo que necesitas para que el momento sea perfecto.',
    price: 'Desde 150 €',
    image: '/images/cumpleanos-infantil-altea.png',
    slug: '/tarifas#cumpleanos',
  },
  {
    id: 'escape-rooms',
    title: 'Escape Rooms temáticos',
    description:
      'Aventuras emocionantes para pequeños detectives. Mystery Box, Escape Room clásico y Láser Tag para vivir la misión.',
    price: 'Desde 20 € /persona',
    image: '/images/escape-room-infantil-altea.png',
    slug: '/tarifas#escape-rooms',
  },
  {
    id: 'animacion',
    title: 'Animación personalizada',
    description:
      'Animadores, pintacaras y espectáculos adaptados a la temática de tu fiesta para que los niños no paren de reír.',
    price: 'Desde 70 € /hora',
    image: '/images/animacion-fiestas-infantiles-altea.png',
    slug: '/tarifas#animacion',
  },
  {
    id: 'entretenimiento',
    title: 'Entretenimiento extra',
    description:
      'Photocall 360º, pantalla interactiva y retro gaming para subir la emoción de la fiesta a otro nivel.',
    price: 'Desde 70 €',
    image: '/images/entretenimiento-extra-altea.png',
    slug: '/tarifas#entretenimiento',
  },
];

export const PRICING = [
  {
    id: 'cumpleanos',
    title: 'Cumpleaños a medida',
    price: 'Desde 150 €',
    includes: [
      'Sala privada de 50 m²',
      '2 aseos + terraza',
      'Mesas, sillas y altavoces',
      'Nevera y microondas',
      'Parque infantil de 30 m² (hasta 30 niños)',
      'Catering opcional',
    ],
    image: '/images/cumpleanos-infantil-altea.png',
    accent: 'orange',
  },
  {
    id: 'escape-rooms',
    title: 'Escape Rooms temáticos',
    price: 'Desde 20 € /persona',
    includes: [
      'Mystery Box',
      'Escape Room clásico',
      'Láser Tag',
    ],
    image: '/images/escape-room-infantil-altea.png',
    accent: 'violet',
  },
  {
    id: 'animacion',
    title: 'Animación personalizada',
    price: 'Desde 70 € /hora',
    includes: [
      'Animadores temáticos',
      'Pintacaras profesional',
      'Espectáculos a medida',
    ],
    image: '/images/animacion-fiestas-infantiles-altea.png',
    accent: 'pink',
  },
  {
    id: 'entretenimiento',
    title: 'Entretenimiento extra',
    price: 'Desde 70 €',
    includes: [
      'Photocall 360°',
      'Pantalla interactiva',
      'Retro gaming',
    ],
    image: '/images/entretenimiento-extra-altea.png',
    accent: 'orange',
  },
];

export const STATS = [
  { value: '50 m²', label: 'Sala diáfana' },
  { value: '30 m²', label: 'Parque infantil' },
  { value: '+80 m²', label: 'Espacio total' },
];

export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'miniPlanet', href: '/miniplanet' },
  { label: 'Tarifas', href: '/tarifas' },
  { label: 'Calculadora', href: '/calculadora' },
  { label: 'Contacto', href: '/contacto' },
];

export const CALCULATOR_RENTAL = [
  { label: 'Lunes–Jueves, Mañana/Tarde (4h)', price: 150 },
  { label: 'Lunes–Jueves, Día completo', price: 280 },
  { label: 'Viernes–Domingo, Mañana/Tarde (4h)', price: 190 },
  { label: 'Viernes–Domingo, Día completo', price: 350 },
];

export const CALCULATOR_ENTERTAINMENT = [
  { id: 'animacion', label: 'Animación', pricePerHour: 70, perHour: true },
  { id: 'personajes', label: 'Personajes', pricePerHour: 120, perHour: true },
  { id: 'pintacaras', label: 'Pintacaras', pricePerHour: 70, perHour: true },
  { id: 'talleres', label: 'Talleres', pricePerHour: 70, perHour: true },
  { id: 'cuentacuentos', label: 'Cuentacuentos', pricePerHour: 150, perHour: true },
  { id: 'spa-party', label: 'Spa Party', pricePerHour: 150, perHour: false, flatRate: true },
];

export const CALCULATOR_DECORATION = [
  { label: 'Columna pequeña', price: 100 },
  { label: 'Columna mediana', price: 160 },
  { label: 'Columna grande', price: 250 },
  { label: 'Columna XL', price: 300 },
  { label: 'Dos semi-arcos', price: 350 },
  { label: 'Arco completo', price: 410 },
];

export const CALCULATOR_EXTRAS = [
  { id: 'photocall', label: 'Photocall 360°', pricePerHour: 150, perHour: true, maxHours: 4 },
  { id: 'hora-extra', label: 'Hora extra', price: 30 },
];
