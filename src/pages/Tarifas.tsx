import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { PRICING, CONTACT } from '../data/content';
import { Link } from 'react-router-dom';

export default function Tarifas() {
  return (
    <main className="pt-24">
      {/* ── Hero ── */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#F97316] to-[#C2410C] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/15 text-xs font-semibold tracking-widest uppercase">
            Precios
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Tarifas para cada{' '}
            <span className="italic">aventura</span>
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Precios sin IVA. Personaliza tu fiesta combinando los servicios que más te gusten.
          </p>
        </motion.div>
      </section>

      {/* ── Pricing grid ── */}
      <section className="py-20 px-6 bg-[#FFF8F0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING.map((plan, i) => (
              <PricingCard
                key={plan.id}
                {...plan}
                accent={plan.accent as 'orange' | 'violet' | 'pink'}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Notas ── */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="p-6 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE]"
          >
            <h2 className="font-semibold text-[#7C3AED] mb-3">Información importante</h2>
            <ul className="space-y-2 text-sm text-[#3D2D70]/80">
              <li>• Precios <strong>sin IVA</strong>. Se aplica IVA vigente en el presupuesto final.</li>
              <li>• Reserva confirmada con señal de <strong>80 €</strong>.</li>
              <li>• El resto del importe se abona <strong>48 h antes</strong> del evento.</li>
              <li>• El alquiler de sala incluye limpieza (€30 ya incluidos en la tarifa).</li>
              <li>• Catering externo permitido. Consulta nuestros proveedores recomendados.</li>
            </ul>
          </motion.div>

          <div className="mt-8 text-center">
            <p className="text-[#3D2D70]/70 mb-4">¿No sabes cuánto costará tu fiesta?</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                to="/calculadora"
                className="px-6 py-3 rounded-full bg-[#7C3AED] text-white font-semibold text-sm
                           hover:bg-[#5B21B6] btn-press min-h-[44px] flex items-center"
              >
                Usar la calculadora
              </Link>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white border border-[#DDD6FE] text-[#7C3AED] font-semibold text-sm
                           hover:bg-[#F5F3FF] btn-press min-h-[44px] flex items-center"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
