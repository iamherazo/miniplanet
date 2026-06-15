import { Link } from 'react-router-dom';
import { MapPin, Train, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { STATS, CONTACT } from '../data/content';

export default function MiniPlanetPage() {
  return (
    <main className="pt-24">
      {/* ── Hero ── */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#7C3AED] to-[#1A1040] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold tracking-widest uppercase">
            Nuestro espacio
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Tu espacio para celebrar{' '}
            <span className="italic text-[#FED7AA]">sin límites</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Sala privada amplia, segura y versátil en el corazón de Altea. Diseñada para que
            los pequeños astronautas vivan la fiesta de su vida.
          </p>
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 }}
                className="text-center p-6 rounded-2xl bg-[#FFF8F0] border border-[#FED7AA]"
              >
                <p className="font-display text-3xl sm:text-4xl font-bold text-[#F97316]">{stat.value}</p>
                <p className="text-sm text-[#3D2D70]/70 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Descripción ── */}
      <section className="py-16 px-6 bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-4"
          >
            <h2 className="font-display text-3xl font-bold text-[#1A1040]">
              Un local <span className="italic text-[#7C3AED]">pensado</span> para celebrar
            </h2>
            <p className="text-[#3D2D70]/70 leading-relaxed">
              MiniPlanet cuenta con una <strong className="text-[#1A1040]">sala diáfana de 50 m²</strong> que puedes
              decorar a tu gusto, dos aseos independientes, terraza exterior, mesas y sillas para todos,
              altavoces integrados, nevera y microondas.
            </p>
            <p className="text-[#3D2D70]/70 leading-relaxed">
              El espacio total supera los <strong className="text-[#1A1040]">80 m²</strong> para que los niños
              tengan libertad de movimiento y los adultos disfruten también de la celebración sin apreturas.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#DDD6FE]">
              <img
                src={`${import.meta.env.BASE_URL}images/sala-eventos-privada-altea.png`}
                alt="Sala de eventos privada en MiniPlanet Altea"
                loading="lazy"
                width={600}
                height={450}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x450/DDD6FE/7C3AED?text=Sala+privada';
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Parque infantil ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="order-2 md:order-1"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#FED7AA]">
              <img
                src={`${import.meta.env.BASE_URL}images/parque-bolas-cumpleanos-altea.png`}
                alt="Parque de bolas y zona infantil en MiniPlanet Altea"
                loading="lazy"
                width={600}
                height={450}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x450/FED7AA/C2410C?text=Parque+infantil';
                }}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.08 }}
            className="space-y-4 order-1 md:order-2"
          >
            <h2 className="font-display text-3xl font-bold text-[#1A1040]">
              Diversión diseñada para los{' '}
              <span className="italic text-[#F97316]">pequeños astronautas</span>
            </h2>
            <p className="text-[#3D2D70]/70 leading-relaxed">
              El <strong className="text-[#1A1040]">parque infantil de 30 m²</strong> incluye parque de bolas,
              zona de juego y una <strong className="text-[#1A1040]">pantalla interactiva</strong> que convierte
              cada movimiento en diversión.
            </p>
            <p className="text-[#3D2D70]/70 leading-relaxed">
              Perfecto para niños de <strong className="text-[#1A1040]">2 a 12 años</strong>, con capacidad para
              hasta <strong className="text-[#1A1040]">30 niños</strong> de forma segura y supervisada.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['Parque de bolas', 'Pantalla interactiva', '2–12 años', 'Hasta 30 niños'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#FFF8F0] border border-[#FED7AA] text-xs font-semibold text-[#F97316]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section className="py-16 px-6 bg-[#1A1040] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase text-[#FED7AA]">
              Ubicación
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              En el corazón de <span className="italic text-[#F97316]">Altea</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: MapPin,
                title: 'Dirección',
                desc: 'Av. Comunitat Valenciana, 8, Esc. 2 – Local 3, 03590 Altea',
              },
              {
                icon: Car,
                title: 'Aparcamiento',
                desc: 'Parking público a pocos metros. Fácil acceso desde la AP-7.',
              },
              {
                icon: Train,
                title: 'Transporte público',
                desc: 'Tren Cercanías parada Altea. Líneas de bus desde Benidorm y Calpe.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left"
              >
                <item.icon size={24} className="text-[#F97316] mb-3" aria-hidden="true" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-sm text-white/60 mb-2 font-semibold text-white">También llegamos a:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Benidorm', 'Calpe', 'Alfaz del Pi', 'La Nucía', 'Callosa d\'en Sarrià'].map((city) => (
                <span key={city} className="px-3 py-1 rounded-full bg-[#F97316]/20 text-[#FED7AA] text-xs font-medium">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 bg-[#FFF8F0] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="font-display text-3xl font-bold text-[#1A1040] mb-4">
            ¿Listo para <span className="italic text-[#7C3AED]">reservar</span>?
          </h2>
          <p className="text-[#3D2D70]/70 mb-8 max-w-md mx-auto">
            Consulta disponibilidad y asegura la fecha de tu fiesta.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              to="/contacto"
              className="px-8 py-3.5 rounded-full bg-[#F97316] text-white font-semibold text-sm
                         hover:bg-[#C2410C] btn-press shadow-md shadow-[#F97316]/30 min-h-[44px]
                         flex items-center"
            >
              Reservar
            </Link>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white border border-[#DDD6FE] text-[#7C3AED] font-semibold text-sm
                         hover:bg-[#DDD6FE]/40 btn-press min-h-[44px] flex items-center"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
