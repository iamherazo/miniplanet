import { Link } from 'react-router-dom';
import { ArrowDown, CalendarDays, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { SERVICES, CONTACT } from '../data/content';

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
        {/* Hero background image */}
        <img
          src={`${import.meta.env.BASE_URL}images/hero-miniplanet-altea.png`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1040]/60 via-[#1A1040]/30 to-[#1A1040]/70" />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass text-white/90 text-xs font-semibold tracking-widest uppercase"
          >
            Altea · Alicante
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Tu fiesta en{' '}
            <span className="font-display italic text-[#FED7AA]">Altea</span>{' '}
            empieza aquí
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.16 }}
            className="mt-4 text-lg text-white/75 max-w-xl leading-relaxed"
          >
            Sala privada de eventos infantiles para cumpleaños, escape rooms y animación.
            Niños de 2 a 12 años. Hasta 30 tripulantes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.24 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 items-center"
          >
            <Link
              to="/contacto"
              className="px-8 py-3.5 rounded-full bg-[#F97316] text-white font-semibold text-sm
                         hover:bg-[#C2410C] btn-press shadow-lg shadow-[#F97316]/40 min-h-[44px]
                         flex items-center"
            >
              Reservar mi fiesta
            </Link>
            <Link
              to="/tarifas"
              className="px-8 py-3.5 rounded-full glass text-white font-semibold text-sm
                         hover:bg-white/20 btn-press min-h-[44px] flex items-center"
            >
              Ver tarifas
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <a
          href="#reserva"
          aria-label="Ver más contenido"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white
                     transition-colors duration-150"
        >
          <ArrowDown size={24} className="animate-bounce" aria-hidden="true" />
        </a>
      </section>

      {/* ── Reserva ── */}
      <section id="reserva" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-12"
          >
            <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-[#F97316]">
              Proceso de reserva
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1040]">
              Reserva una <span className="italic">fecha</span>
            </h2>
            <p className="mt-3 text-[#3D2D70]/70 max-w-xl mx-auto">
              Tan fácil como elegir tu día y asegurar el despegue. En cuatro pasos.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CalendarDays, step: '01', title: 'Elige tu fecha', desc: 'Consulta disponibilidad y selecciona el día y turno que mejor te venga.' },
              { icon: Star, step: '02', title: 'Personaliza', desc: 'Elige los servicios: animación, decoración, escape room y más.' },
              { icon: MapPin, step: '03', title: 'Señal de 80 €', desc: 'Confirma tu reserva con una pequeña señal de 80 € para asegurar tu plaza.' },
              { icon: CalendarDays, step: '04', title: 'Resto 48 h antes', desc: 'Abona el importe restante 48 horas antes del evento. Sin sorpresas.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 }}
                className="relative p-6 rounded-2xl bg-[#FFF8F0] border border-[#FED7AA]"
              >
                <span className="text-5xl font-display font-bold text-[#FED7AA] select-none absolute top-4 right-5">
                  {item.step}
                </span>
                <item.icon size={24} className="text-[#F97316] mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-[#1A1040] mb-1">{item.title}</h3>
                <p className="text-sm text-[#3D2D70]/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#F97316] text-white
                         font-semibold text-sm hover:bg-[#C2410C] btn-press shadow-md shadow-[#F97316]/30
                         min-h-[44px]"
            >
              Reservar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section className="py-20 px-6 bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-12"
          >
            <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-[#7C3AED]">
              Servicios disponibles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1040]">
              Todo lo que necesitas para{' '}
              <span className="italic text-[#F97316]">celebrar</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Espacio ── */}
      <section className="py-20 px-6 bg-[#1A1040] text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-12"
          >
            <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-[#FED7AA]">
              Nuestro espacio
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Diseñado para celebrar{' '}
              <span className="italic text-[#F97316]">sin límites</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#3D2D70]">
                <img
                  src={`${import.meta.env.BASE_URL}images/parque-infantil-cumpleanos-altea.png`}
                  alt="Parque infantil y sala de fiestas en MiniPlanet Altea"
                  loading="lazy"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x450/3D2D70/DDD6FE?text=MiniPlanet+Altea';
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '50 m²', label: 'Sala diáfana' },
                  { value: '30 m²', label: 'Parque infantil' },
                  { value: '+80 m²', label: 'Espacio total' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="font-display text-2xl font-bold text-[#F97316]">{stat.value}</p>
                    <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-white/70 leading-relaxed">
                MiniPlanet es una sala privada y exclusiva en <strong className="text-white">Altea</strong>,
                perfecta para niños de 2 a 12 años. Contamos con sala diáfana de 50 m², dos aseos, terraza,
                altavoces, nevera y microondas.
              </p>
              <p className="text-white/70 leading-relaxed">
                El <strong className="text-white">parque infantil de 30 m²</strong> con parque de bolas y
                pantalla interactiva permite que hasta <strong className="text-white">30 niños</strong> jueguen
                y disfruten sin límites. Accesible desde Benidorm, Calpe, Alfaz, La Nucía y Callosa.
              </p>

              <Link
                to="/miniplanet"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#F97316] text-white
                           font-semibold text-sm hover:bg-[#C2410C] btn-press min-h-[44px]"
              >
                Conocer el espacio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            ¿Listo para el <span className="italic text-[#FED7AA]">despegue</span>?
          </h2>
          <p className="text-white/70 mb-8">
            Escríbenos por WhatsApp o reserva directamente. Tu planeta favorito te espera.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-green-500 text-white font-semibold text-sm
                         hover:bg-green-600 btn-press shadow-lg shadow-green-500/40 min-h-[44px]
                         flex items-center justify-center"
            >
              WhatsApp directo
            </a>
            <Link
              to="/contacto"
              className="px-8 py-3.5 rounded-full bg-white text-[#7C3AED] font-semibold text-sm
                         hover:bg-[#FFF8F0] btn-press min-h-[44px] flex items-center justify-center"
            >
              Formulario de reserva
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
