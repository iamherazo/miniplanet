# MiniPlanet — Rediseño Web

Sitio web completo para [MiniPlanet](https://miniplanet.es) (sala privada de eventos infantiles en Altea, Alicante).  
Construido con **React 18 + TypeScript + Vite + Tailwind CSS v4 + react-router-dom + framer-motion**.

---

## Instalación y desarrollo

```bash
cd miniplanet-redesign
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/
npm run preview    # preview del build de producción
```

---

## Assets placeholder que deben sustituirse

### Video del hero

| Ruta placeholder | Descripción |
|---|---|
| `public/videos/hero-miniplanet.mp4` | Vídeo de fondo del hero de inicio (loop, sin sonido). Ideal: 1920×1080, ≤10 MB. |
| `public/images/hero-miniplanet-altea.webp` | Imagen poster (fallback) para el hero mientras carga el vídeo. |

### Imágenes de contenido (formato WebP recomendado)

| Ruta | Uso |
|---|---|
| `public/images/cumpleanos-infantil-altea.webp` | Servicio y pricing de cumpleaños |
| `public/images/escape-room-infantil-altea.webp` | Servicio y pricing de escape rooms |
| `public/images/animacion-fiestas-infantiles-altea.webp` | Servicio y pricing de animación |
| `public/images/entretenimiento-extra-altea.webp` | Servicio y pricing de entretenimiento extra |
| `public/images/parque-infantil-cumpleanos-altea.webp` | Hero de la página miniPlanet |
| `public/images/sala-eventos-privada-altea.webp` | Sección descripción de la sala |
| `public/images/parque-bolas-cumpleanos-altea.webp` | Sección parque infantil |

**Mientras no existan estas imágenes**, el componente `onError` genera automáticamente un placeholder de color con el título. Optimización recomendada: WebP ≤200 KB por imagen.

---

## Configuración del formulario de contacto

El formulario (`src/components/ContactForm.tsx`) soporta tres modos de envío via variable de entorno:

### Opción A: Sin configurar (modo demo)
Si `VITE_CONTACT_ENDPOINT` no está definida, el formulario simula el envío (delay 1,2 s) y muestra estado de éxito. Útil para desarrollo.

### Opción B: Formspree
1. Crea una cuenta en [formspree.io](https://formspree.io) y un formulario nuevo.
2. Crea `.env.local`:
   ```
   VITE_CONTACT_ENDPOINT=https://formspree.io/f/xabcdefg
   ```

### Opción C: Endpoint propio
Crea un endpoint HTTP que acepte `POST` con body JSON `{ name, email, mission }` y devuelva `200 OK`.

---

## Checklist de auditoría SEO — estado

| # | Issue | Estado |
|---|---|---|
| 1 | Title tags únicos con keyword + ubicación | ✅ `src/lib/seo-config.ts` |
| 2 | Meta descriptions únicas (150-160 chars) | ✅ `src/components/SEO.tsx` |
| 3 | Schema.org `LocalBusiness` JSON-LD | ✅ Inyectado dinámicamente en `<head>` |
| 4 | Enlaces rotos del footer (`#`) | ✅ Corregidos a rutas reales con anchor |
| 5 | Solo Instagram + WhatsApp (canales reales) | ✅ Sin redes inventadas ni placeholders |
| 6 | H1 genérico sin ubicación | ✅ H1 incluye "Altea" en todas las páginas |
| 7 | Nombres de archivo descriptivos | ✅ Slugs SEO-friendly en español |
| 8 | Cobertura geográfica (Benidorm, Calpe, etc.) | ✅ Mencionados en home, footer y `/miniplanet` |
| 9 | Performance / Core Web Vitals | ✅ WebP, `loading="lazy"`, dimensiones declaradas |
| 10 | `sitemap.xml` y `robots.txt` | ✅ En `/public/` |

---

## Estructura del proyecto

```
src/
├── App.tsx                 — Router + layout global
├── index.css               — Tailwind v4 + tokens de diseño
├── data/
│   └── content.ts          — Todos los textos, precios y datos (edita aquí)
├── lib/
│   └── seo-config.ts       — Titles, descriptions y JSON-LD por ruta
├── components/
│   ├── SEO.tsx             — Inyecta <title>, <meta> y JSON-LD
│   ├── Navbar.tsx          — Navbar glass pill + menú responsive
│   ├── Footer.tsx          — Footer completo con enlaces reales
│   ├── WhatsAppButton.tsx  — Botón flotante WhatsApp
│   ├── ServiceCard.tsx     — Tarjeta de servicio con animación scroll
│   ├── PricingCard.tsx     — Tarjeta de tarifa con variantes de color
│   └── ContactForm.tsx     — Formulario con validación + estados
└── pages/
    ├── Home.tsx            — Inicio (hero + reserva + servicios + espacio)
    ├── MiniPlanet.tsx      — Sala, parque, ubicación
    ├── Tarifas.tsx         — 4 bloques de pricing
    ├── Calculadora.tsx     — Calculadora interactiva de presupuesto
    └── Contacto.tsx        — Formulario + datos de contacto
```

---

## Sistema de diseño

| Token | Valor |
|---|---|
| Color primario | `#F97316` (naranja cálido) |
| Color acento | `#7C3AED` (violeta) |
| Color highlight | `#EC4899` (rosa) |
| Fondo | `#FFF8F0` (crema cálido) |
| Texto principal | `#1A1040` (violeta oscuro) |
| Fuente display | Fraunces (serif, cursiva editorial) |
| Fuente UI | Plus Jakarta Sans |
| Glass | `bg-white/60 backdrop-blur-[12px] border-white/45` |
| Easing | `cubic-bezier(0.23, 1, 0.32, 1)` |
| Duración UI | 160–220 ms |
| Press feedback | `scale(0.97)` en `:active` |
| Stagger cards | 50–70 ms por ítem |

---

## Fase 2 (fuera de alcance inicial)

- Sección blog para SEO long-tail
- Galería de fotos de fiestas anteriores
- Sistema de reservas con calendario integrado
