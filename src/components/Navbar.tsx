import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      role="banner"
    >
      <nav
        className={`
          glass rounded-full flex items-center gap-2 px-4 py-2
          transition-shadow duration-300
          ${scrolled ? 'shadow-lg shadow-black/10' : ''}
          w-full max-w-5xl
        `}
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 mr-2 shrink-0"
          aria-label="MiniPlanet – inicio"
        >
          <span className="font-display font-bold text-xl text-[#7C3AED] italic">
            mini<span className="text-[#F97316] not-italic">Planet</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 flex-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-150
                   ${isActive
                     ? 'bg-[#F97316] text-white'
                     : 'text-[#1A1040] hover:bg-[#FED7AA]/60'
                   }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2 ml-auto shrink-0">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
                       text-[#1A1040] hover:bg-green-100 transition-colors duration-150 btn-press"
          >
            <MessageCircle size={15} aria-hidden="true" />
            <span className="hidden lg:inline">{CONTACT.phone}</span>
          </a>
          <Link
            to="/contacto"
            className="px-4 py-1.5 rounded-full text-sm font-semibold
                       bg-[#F97316] text-white hover:bg-[#C2410C] btn-press"
          >
            Reservar
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="ml-auto md:hidden p-2 rounded-full hover:bg-[#FED7AA]/60 transition-colors btn-press
                     min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="glass absolute top-[72px] left-4 right-4 rounded-2xl p-4 flex flex-col gap-1 shadow-xl shadow-black/10"
          role="dialog"
          aria-label="Menú de navegación"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150
                 ${isActive ? 'bg-[#F97316] text-white' : 'text-[#1A1040] hover:bg-[#FED7AA]/60'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="border-t border-white/40 mt-2 pt-2 flex gap-2">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium
                         bg-green-50 text-green-800 hover:bg-green-100 btn-press min-h-[44px]"
            >
              <MessageCircle size={15} aria-hidden="true" />
              WhatsApp
            </a>
            <Link
              to="/contacto"
              className="flex-1 flex items-center justify-center py-3 rounded-xl text-sm font-semibold
                         bg-[#F97316] text-white hover:bg-[#C2410C] btn-press min-h-[44px]"
            >
              Reservar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
