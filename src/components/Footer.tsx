import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT } from '../data/content';

const SERVICE_LINKS = [
  { label: 'Cumpleaños a medida', href: '/tarifas#cumpleanos' },
  { label: 'Escape Rooms temáticos', href: '/tarifas#escape-rooms' },
  { label: 'Animación personalizada', href: '/tarifas#animacion' },
  { label: 'Entretenimiento extra', href: '/tarifas#entretenimiento' },
];

const COMPANY_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'miniPlanet', href: '/miniplanet' },
  { label: 'Tarifas', href: '/tarifas' },
  { label: 'Calculadora', href: '/calculadora' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1040] text-white/80 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" aria-label="MiniPlanet – inicio">
            <span className="font-display font-bold text-2xl italic text-[#DDD6FE]">
              mini<span className="text-[#F97316] not-italic">Planet</span>
            </span>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Tu evento, tu momento y tu planeta favorito.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MiniPlanet en Instagram"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-150 btn-press
                         min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MiniPlanet en WhatsApp"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-150 btn-press
                         min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {/* WhatsApp icon via SVG since lucide doesn't have it */}
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.11 1.533 5.827L.057 23.486a.5.5 0 0 0 .619.61l5.76-1.508A11.948 11.948 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.888 0-3.66-.52-5.17-1.424l-.37-.222-3.422.897.914-3.326-.241-.382A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Company links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Empresa</h3>
          <ul className="space-y-2" role="list">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Servicios</h3>
          <ul className="space-y-2" role="list">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contacto</h3>
          <ul className="space-y-3" role="list">
            <li className="flex items-start gap-2 text-sm text-white/60">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#F97316]" aria-hidden="true" />
              <span>{CONTACT.addressFull}</span>
            </li>
            <li>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                <Phone size={16} className="shrink-0 text-[#F97316]" aria-hidden="true" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                <Mail size={16} className="shrink-0 text-[#F97316]" aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} MiniPlanet. Todos los derechos reservados.</p>
          <p>Altea, Alicante — Benidorm · Calpe · Alfaz · La Nucía · Callosa</p>
        </div>
      </div>
    </footer>
  );
}
