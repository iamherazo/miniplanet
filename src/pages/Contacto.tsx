import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { CONTACT } from '../data/content';

export default function Contacto() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#7C3AED] to-[#1A1040] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold tracking-widest uppercase">
            Contacto
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Prepárate para el{' '}
            <span className="italic text-[#FED7AA]">despegue</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Cuéntanos tu misión y te preparamos el mejor lanzamiento.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-2xl font-bold text-[#1A1040] mb-6">
                Datos de contacto
              </h2>
              <ul className="space-y-5" role="list">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FED7AA] flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#C2410C]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#3D2D70]/60 uppercase tracking-wider mb-1">Teléfono</p>
                    <a
                      href={CONTACT.phoneHref}
                      className="font-semibold text-[#1A1040] hover:text-[#F97316] transition-colors duration-150 text-lg"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FED7AA] flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#C2410C]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#3D2D70]/60 uppercase tracking-wider mb-1">Email</p>
                    <a
                      href={CONTACT.emailHref}
                      className="font-semibold text-[#1A1040] hover:text-[#F97316] transition-colors duration-150"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FED7AA] flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#C2410C]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#3D2D70]/60 uppercase tracking-wider mb-1">Dirección</p>
                    <p className="font-semibold text-[#1A1040]">{CONTACT.address}</p>
                    <p className="text-sm text-[#3D2D70]/70">{CONTACT.city}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FED7AA] flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-[#C2410C]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#3D2D70]/60 uppercase tracking-wider mb-1">Horario</p>
                    <p className="font-semibold text-[#1A1040]">{CONTACT.hours}</p>
                    <p className="text-sm text-[#3D2D70]/70">Abierto todos los días</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* WhatsApp direct */}
            <div className="p-6 rounded-2xl bg-green-50 border border-green-200">
              <p className="font-semibold text-green-800 mb-2">¿Prefieres WhatsApp?</p>
              <p className="text-sm text-green-700 mb-4">
                Escríbenos directamente y te respondemos en minutos.
              </p>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white
                           font-semibold text-sm hover:bg-green-600 btn-press min-h-[44px]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.11 1.533 5.827L.057 23.486a.5.5 0 0 0 .619.61l5.76-1.508A11.948 11.948 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.888 0-3.66-.52-5.17-1.424l-.37-.222-3.422.897.914-3.326-.241-.382A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Abrir WhatsApp
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MiniPlanet en Instagram"
                className="flex items-center gap-2 text-sm font-semibold text-[#7C3AED] hover:text-[#F97316]
                           transition-colors duration-150"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @miniplanetaltea
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-[#DDD6FE]"
          >
            <h2 className="font-display text-2xl font-bold text-[#1A1040] mb-6">
              Envíanos tu misión
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
