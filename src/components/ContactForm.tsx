import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  mission: string;
}

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT ?? '';

async function sendForm(data: FormData): Promise<void> {
  if (!ENDPOINT) {
    await new Promise((r) => setTimeout(r, 1200));
    return;
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error al enviar');
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', mission: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<Status>('idle');

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'El nombre es obligatorio.';
    if (!form.email.trim()) {
      e.email = 'El email es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Introduce un email válido.';
    }
    if (!form.mission.trim()) e.mission = 'Cuéntanos tu misión.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      await sendForm(form);
      setStatus('success');
      setForm({ name: '', email: '', mission: '' });
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle size={56} className="text-green-500" aria-hidden="true" />
        <h3 className="font-display text-2xl font-bold text-[#1A1040]">¡Mensaje enviado!</h3>
        <p className="text-[#3D2D70]/70 max-w-sm">
          Hemos recibido tu misión. Te contactaremos en breve para preparar el despegue.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 px-6 py-2.5 rounded-full bg-[#F97316] text-white text-sm font-semibold
                     hover:bg-[#C2410C] btn-press"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Formulario de contacto">
      {status === 'error' && (
        <div
          role="alert"
          className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm"
        >
          <AlertCircle size={16} aria-hidden="true" />
          Hubo un problema al enviar. Inténtalo de nuevo o escríbenos por WhatsApp.
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-[#1A1040] mb-1.5">
          Nombre <span aria-hidden="true" className="text-[#F97316]">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          onBlur={() => validate()}
          aria-describedby={errors.name ? 'error-name' : undefined}
          aria-invalid={!!errors.name}
          placeholder="Tu nombre"
          className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-[#1A1040]
                      placeholder:text-[#3D2D70]/40 min-h-[44px]
                      focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent
                      transition-colors duration-150
                      ${errors.name ? 'border-red-400' : 'border-[#DDD6FE]'}`}
        />
        {errors.name && (
          <p id="error-name" role="alert" className="mt-1 text-xs text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-[#1A1040] mb-1.5">
          Email <span aria-hidden="true" className="text-[#F97316]">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          onBlur={() => validate()}
          aria-describedby={errors.email ? 'error-email' : undefined}
          aria-invalid={!!errors.email}
          placeholder="tu@email.com"
          className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-[#1A1040]
                      placeholder:text-[#3D2D70]/40 min-h-[44px]
                      focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent
                      transition-colors duration-150
                      ${errors.email ? 'border-red-400' : 'border-[#DDD6FE]'}`}
        />
        {errors.email && (
          <p id="error-email" role="alert" className="mt-1 text-xs text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-mission" className="block text-sm font-semibold text-[#1A1040] mb-1.5">
          Tu misión <span aria-hidden="true" className="text-[#F97316]">*</span>
        </label>
        <p id="mission-hint" className="text-xs text-[#3D2D70]/60 mb-2">
          Cuéntanos: nº de tripulantes (niños), edad del protagonista, fecha deseada y servicios de interés.
        </p>
        <textarea
          id="contact-mission"
          required
          rows={5}
          value={form.mission}
          onChange={(e) => setForm((f) => ({ ...f, mission: e.target.value }))}
          onBlur={() => validate()}
          aria-describedby={`mission-hint${errors.mission ? ' error-mission' : ''}`}
          aria-invalid={!!errors.mission}
          placeholder="Ej: Queremos celebrar el cumpleaños de Sofía (6 años) el 15 de julio, somos 20 niños..."
          className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-[#1A1040]
                      placeholder:text-[#3D2D70]/40 resize-none
                      focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent
                      transition-colors duration-150
                      ${errors.mission ? 'border-red-400' : 'border-[#DDD6FE]'}`}
        />
        {errors.mission && (
          <p id="error-mission" role="alert" className="mt-1 text-xs text-red-600">
            {errors.mission}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        aria-disabled={status === 'sending'}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full
                   bg-[#F97316] text-white font-semibold text-sm
                   hover:bg-[#C2410C] btn-press min-h-[44px]
                   disabled:opacity-60 disabled:cursor-not-allowed
                   transition-opacity duration-150"
      >
        {status === 'sending' ? (
          <>
            <Loader size={16} className="animate-spin" aria-hidden="true" />
            Enviando…
          </>
        ) : (
          'Enviar misión'
        )}
      </button>
    </form>
  );
}
