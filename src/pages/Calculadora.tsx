import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import {
  CALCULATOR_RENTAL,
  CALCULATOR_ENTERTAINMENT,
  CALCULATOR_DECORATION,
  CONTACT,
} from '../data/content';

interface EntertainmentSelection {
  id: string;
  hours: number;
}

export default function Calculadora() {
  const [rentalIndex, setRentalIndex] = useState<number>(0);
  const [extraHoursBefore, setExtraHoursBefore] = useState(0);
  const [extraHoursAfter, setExtraHoursAfter] = useState(0);
  const [entertainment, setEntertainment] = useState<EntertainmentSelection[]>([]);
  const [decorationIndex, setDecorationIndex] = useState<number | null>(null);
  const [escapePersons, setEscapePersons] = useState(0);
  const [photocallHours, setPhotocallHours] = useState(0);

  const rental = CALCULATOR_RENTAL[rentalIndex];

  function toggleEntertainment(id: string, hours: number) {
    setEntertainment((prev) => {
      const exists = prev.find((e) => e.id === id);
      if (exists) return prev.filter((e) => e.id !== id);
      return [...prev, { id, hours }];
    });
  }

  function setEntertainmentHours(id: string, hours: number) {
    setEntertainment((prev) =>
      prev.map((e) => (e.id === id ? { ...e, hours } : e))
    );
  }

  function isEntSelected(id: string) {
    return entertainment.some((e) => e.id === id);
  }
  function getEntHours(id: string) {
    return entertainment.find((e) => e.id === id)?.hours ?? 1;
  }

  // ── Calculation ──
  const rentalCost = rental.price + 30; // cleaning included
  const extraCost = (extraHoursBefore + extraHoursAfter) * 30;
  const entertainmentCost = entertainment.reduce((sum, sel) => {
    const ent = CALCULATOR_ENTERTAINMENT.find((e) => e.id === sel.id);
    if (!ent) return sum;
    if (ent.flatRate) return sum + (ent.pricePerHour ?? 0);
    return sum + (ent.perHour ? ent.pricePerHour * sel.hours : ent.pricePerHour);
  }, 0);
  const decorationCost = decorationIndex !== null ? CALCULATOR_DECORATION[decorationIndex].price : 0;
  const escapeCost = escapePersons * 20;
  const photocallCost = photocallHours * 150;
  const total = rentalCost + extraCost + entertainmentCost + decorationCost + escapeCost + photocallCost;

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="px-6 py-16 bg-gradient-to-br from-[#1A1040] to-[#3D2D70] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold tracking-widest uppercase">
            Herramienta
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Calcula tu <span className="italic text-[#FED7AA]">presupuesto</span>
          </h1>
          <p className="mt-4 text-white/70">
            Combina los servicios y obtén una estimación al instante. Precio sin IVA.
          </p>
        </motion.div>
      </section>

      <section className="py-12 px-6 bg-[#FFF8F0]">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Left: form */}
          <div className="lg:col-span-2 space-y-8">

            {/* 1. Rental */}
            <div className="bg-white rounded-2xl p-6 border border-[#FED7AA]">
              <h2 className="font-semibold text-[#1A1040] mb-1">
                1. Alquiler de sala <span className="text-[#F97316]">*</span>
              </h2>
              <p className="text-xs text-[#3D2D70]/60 mb-4">Incluye limpieza (30 €)</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {CALCULATOR_RENTAL.map((opt, i) => (
                  <button
                    key={opt.label}
                    onClick={() => setRentalIndex(i)}
                    aria-pressed={rentalIndex === i}
                    className={`p-4 rounded-xl border text-left transition-colors duration-150 btn-press
                      ${rentalIndex === i
                        ? 'border-[#F97316] bg-[#FFF8F0]'
                        : 'border-[#E5E7EB] hover:border-[#FED7AA]'
                      }`}
                  >
                    <p className="text-sm font-medium text-[#1A1040]">{opt.label}</p>
                    <p className="text-lg font-bold text-[#F97316] mt-1">{opt.price} €</p>
                  </button>
                ))}
              </div>

              {/* Extra hours */}
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3D2D70] mb-1">
                    Hora extra anterior (+30 €/h)
                  </label>
                  <select
                    value={extraHoursBefore}
                    onChange={(e) => setExtraHoursBefore(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#DDD6FE] text-sm bg-white
                               focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  >
                    {[0, 1, 2].map((n) => (
                      <option key={n} value={n}>{n === 0 ? 'Sin hora extra' : `${n} hora${n > 1 ? 's' : ''}`}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3D2D70] mb-1">
                    Hora extra posterior (+30 €/h)
                  </label>
                  <select
                    value={extraHoursAfter}
                    onChange={(e) => setExtraHoursAfter(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#DDD6FE] text-sm bg-white
                               focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  >
                    {[0, 1, 2].map((n) => (
                      <option key={n} value={n}>{n === 0 ? 'Sin hora extra' : `${n} hora${n > 1 ? 's' : ''}`}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 2. Escape Room */}
            <div className="bg-white rounded-2xl p-6 border border-[#DDD6FE]">
              <h2 className="font-semibold text-[#1A1040] mb-1">2. Escape Room (20 €/persona)</h2>
              <p className="text-xs text-[#3D2D70]/60 mb-4">Mystery Box, Escape Room clásico o Láser Tag</p>
              <div className="flex items-center gap-3">
                <label htmlFor="escape-persons" className="text-sm font-medium text-[#3D2D70]">
                  Nº de participantes:
                </label>
                <input
                  id="escape-persons"
                  type="number"
                  min={0}
                  max={30}
                  value={escapePersons}
                  onChange={(e) => setEscapePersons(Math.max(0, Number(e.target.value)))}
                  className="w-24 px-3 py-2 rounded-xl border border-[#DDD6FE] text-sm bg-white
                             focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                />
              </div>
            </div>

            {/* 3. Entertainment */}
            <div className="bg-white rounded-2xl p-6 border border-[#FBCFE8]">
              <h2 className="font-semibold text-[#1A1040] mb-4">3. Animación y entretenimiento</h2>
              <div className="space-y-3">
                {CALCULATOR_ENTERTAINMENT.map((ent) => {
                  const selected = isEntSelected(ent.id);
                  const hours = getEntHours(ent.id);
                  return (
                    <div
                      key={ent.id}
                      className={`flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl border transition-colors duration-150
                        ${selected ? 'border-[#EC4899] bg-[#FFF0F6]' : 'border-[#E5E7EB]'}`}
                    >
                      <label className="flex items-center gap-3 flex-1 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() => toggleEntertainment(ent.id, 1)}
                          className="w-4 h-4 accent-[#EC4899]"
                          aria-label={`Añadir ${ent.label}`}
                        />
                        <span className="text-sm font-medium text-[#1A1040]">{ent.label}</span>
                        <span className="text-xs text-[#3D2D70]/60 ml-auto">
                          {ent.flatRate
                            ? `${ent.pricePerHour} € (tarifa plana)`
                            : `${ent.pricePerHour} €/h`}
                        </span>
                      </label>
                      {selected && ent.perHour && !ent.flatRate && (
                        <select
                          value={hours}
                          onChange={(e) => setEntertainmentHours(ent.id, Number(e.target.value))}
                          className="px-3 py-1.5 rounded-lg border border-[#FBCFE8] text-xs bg-white
                                     focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                          aria-label={`Horas de ${ent.label}`}
                        >
                          {[1, 2, 3, 4].map((h) => (
                            <option key={h} value={h}>{h}h</option>
                          ))}
                        </select>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Photocall */}
            <div className="bg-white rounded-2xl p-6 border border-[#DDD6FE]">
              <h2 className="font-semibold text-[#1A1040] mb-4">4. Photocall 360° (150 €/h)</h2>
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-[#3D2D70]">Horas:</label>
                <div className="flex gap-2">
                  {[0, 1, 2, 3, 4].map((h) => (
                    <button
                      key={h}
                      onClick={() => setPhotocallHours(h)}
                      aria-pressed={photocallHours === h}
                      className={`w-10 h-10 rounded-full text-sm font-semibold btn-press transition-colors duration-150
                        ${photocallHours === h
                          ? 'bg-[#7C3AED] text-white'
                          : 'bg-[#F5F3FF] text-[#7C3AED] hover:bg-[#DDD6FE]'
                        }`}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Decoration */}
            <div className="bg-white rounded-2xl p-6 border border-[#FED7AA]">
              <h2 className="font-semibold text-[#1A1040] mb-4">5. Decoración</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CALCULATOR_DECORATION.map((dec, i) => (
                  <button
                    key={dec.label}
                    onClick={() => setDecorationIndex(decorationIndex === i ? null : i)}
                    aria-pressed={decorationIndex === i}
                    className={`p-3 rounded-xl border text-left text-sm transition-colors duration-150 btn-press
                      ${decorationIndex === i
                        ? 'border-[#F97316] bg-[#FFF8F0]'
                        : 'border-[#E5E7EB] hover:border-[#FED7AA]'
                      }`}
                  >
                    <p className="font-medium text-[#1A1040]">{dec.label}</p>
                    <p className="text-[#F97316] font-bold mt-1">{dec.price} €</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: summary sticky */}
          <div>
            <div className="sticky top-28">
              <motion.div
                className="bg-white rounded-2xl border border-[#FED7AA] p-6 shadow-lg shadow-[#F97316]/10"
                layout
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              >
                <h2 className="font-display text-xl font-bold text-[#1A1040] mb-4">Resumen estimado</h2>

                <div className="space-y-2 text-sm">
                  <LineItem label={`Sala (${rental.label})`} value={rental.price} />
                  <LineItem label="Limpieza" value={30} />
                  {extraHoursBefore > 0 && (
                    <LineItem label={`Hora extra anterior ×${extraHoursBefore}`} value={extraHoursBefore * 30} />
                  )}
                  {extraHoursAfter > 0 && (
                    <LineItem label={`Hora extra posterior ×${extraHoursAfter}`} value={extraHoursAfter * 30} />
                  )}
                  {escapePersons > 0 && (
                    <LineItem label={`Escape Room ×${escapePersons} personas`} value={escapeCost} />
                  )}
                  {entertainment.map((sel) => {
                    const ent = CALCULATOR_ENTERTAINMENT.find((e) => e.id === sel.id)!;
                    const cost = ent.flatRate
                      ? ent.pricePerHour
                      : ent.perHour ? ent.pricePerHour * sel.hours : ent.pricePerHour;
                    return (
                      <LineItem
                        key={sel.id}
                        label={`${ent.label}${ent.perHour && !ent.flatRate ? ` ×${sel.hours}h` : ''}`}
                        value={cost ?? 0}
                      />
                    );
                  })}
                  {photocallHours > 0 && (
                    <LineItem label={`Photocall 360° ×${photocallHours}h`} value={photocallCost} />
                  )}
                  {decorationIndex !== null && (
                    <LineItem label={CALCULATOR_DECORATION[decorationIndex].label} value={decorationCost} />
                  )}
                </div>

                <div className="border-t border-[#FED7AA] mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#1A1040]">Total estimado</span>
                    <motion.span
                      key={total}
                      initial={{ scale: 0.95, opacity: 0.7 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                      className="font-display text-2xl font-bold text-[#F97316]"
                    >
                      {total} €
                    </motion.span>
                  </div>
                  <p className="text-xs text-[#3D2D70]/50 mt-1">Sin IVA · Estimación orientativa</p>
                </div>

                <div className="flex items-start gap-2 mt-4 p-3 rounded-xl bg-[#F5F3FF]">
                  <Info size={14} className="text-[#7C3AED] mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="text-xs text-[#3D2D70]/70">
                    Este presupuesto es orientativo. Te enviaremos un presupuesto definitivo tras confirmar disponibilidad.
                  </p>
                </div>

                <Link
                  to="/contacto"
                  className="mt-5 flex items-center justify-center w-full py-3.5 rounded-full
                             bg-[#F97316] text-white font-semibold text-sm hover:bg-[#C2410C]
                             btn-press min-h-[44px]"
                >
                  Solicitar presupuesto
                </Link>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center w-full py-3 rounded-full
                             bg-green-50 text-green-800 font-semibold text-sm hover:bg-green-100
                             btn-press min-h-[44px]"
                >
                  Consultar por WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function LineItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between text-[#3D2D70]/80">
      <span>{label}</span>
      <span className="font-semibold text-[#1A1040]">{value} €</span>
    </div>
  );
}
