import { CONTACT } from '../data/content';

export interface SeoConfig {
  title: string;
  description: string;
  canonical: string;
}

export const SEO_ROUTES: Record<string, SeoConfig> = {
  '/': {
    title: 'Cumpleaños infantiles en Altea | MiniPlanet',
    description:
      'Sala privada de eventos infantiles en Altea. Fiestas de cumpleaños, escape rooms y animación para niños de 2 a 12 años. ¡Reserva ya tu fecha!',
    canonical: 'https://miniplanet.es/',
  },
  '/miniplanet': {
    title: 'Nuestro espacio | Sala de fiestas infantiles Altea | MiniPlanet',
    description:
      'Conoce MiniPlanet: 50 m² de sala diáfana + 30 m² de parque infantil en el corazón de Altea. Accesible desde Benidorm, Calpe, Alfaz y La Nucía.',
    canonical: 'https://miniplanet.es/miniplanet',
  },
  '/tarifas': {
    title: 'Tarifas y precios | Fiestas infantiles Altea | MiniPlanet',
    description:
      'Precios para cumpleaños, escape rooms, animación y entretenimiento extra en MiniPlanet Altea. Sala privada desde 150 €. Consulta opciones y reserva.',
    canonical: 'https://miniplanet.es/tarifas',
  },
  '/calculadora': {
    title: 'Calcula tu presupuesto | Eventos infantiles Altea | MiniPlanet',
    description:
      'Calcula el presupuesto estimado para tu fiesta en MiniPlanet Altea. Combina alquiler de sala, animación, decoración y extras en segundos.',
    canonical: 'https://miniplanet.es/calculadora',
  },
  '/contacto': {
    title: 'Contacto y reservas | Sala infantil Altea | MiniPlanet',
    description:
      'Contacta con MiniPlanet para reservar tu fiesta en Altea. Llámanos al 664 450 349 o escríbenos. ¡Tu planeta favorito te espera!',
    canonical: 'https://miniplanet.es/contacto',
  },
};

export const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MiniPlanet',
  description:
    'Sala privada de eventos infantiles en Altea. Cumpleaños, escape rooms y animación para niños.',
  url: 'https://miniplanet.es',
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Comunitat Valenciana, 8, Esc. 2 – Local 3',
    addressLocality: 'Altea',
    addressRegion: 'Alicante',
    postalCode: '03590',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CONTACT.lat,
    longitude: CONTACT.lng,
  },
  openingHours: 'Mo-Su 10:00-21:00',
  sameAs: [CONTACT.instagram],
  image: 'https://miniplanet.es/images/cumpleanos-infantil-altea.png',
};
