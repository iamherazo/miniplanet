import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingCardProps {
  id: string;
  title: string;
  price: string;
  includes: string[];
  image: string;
  accent: 'orange' | 'violet' | 'pink';
  index?: number;
}

const ACCENT_MAP = {
  orange: { bg: 'bg-[#FFF8F0]', border: 'border-[#FED7AA]', badge: 'bg-[#F97316] text-white', check: 'text-[#F97316]' },
  violet: { bg: 'bg-[#F5F3FF]', border: 'border-[#DDD6FE]', badge: 'bg-[#7C3AED] text-white', check: 'text-[#7C3AED]' },
  pink:   { bg: 'bg-[#FFF0F6]', border: 'border-[#FBCFE8]', badge: 'bg-[#EC4899] text-white', check: 'text-[#EC4899]' },
};

export default function PricingCard({ id, title, price, includes, image, accent, index = 0 }: PricingCardProps) {
  const a = ACCENT_MAP[accent];

  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1], delay: index * 0.07 }}
      className={`rounded-2xl border ${a.border} ${a.bg} overflow-hidden flex flex-col`}
    >
      <div className="aspect-[16/9] overflow-hidden bg-[#FEF0DC]">
        <img
          src={image}
          alt={`${title} – MiniPlanet Altea`}
          loading="lazy"
          width={600}
          height={337}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/600x337/FED7AA/C2410C?text=${encodeURIComponent(title)}`;
          }}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className={`inline-block self-start text-xs font-bold px-3 py-1 rounded-full ${a.badge} mb-3`}>
          {price}
        </span>
        <h3 className="font-display text-2xl font-bold text-[#1A1040] mb-4">{title}</h3>
        <ul className="space-y-2 flex-1" role="list">
          {includes.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-[#3D2D70]/80">
              <Check size={15} className={`${a.check} shrink-0`} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          to="/contacto"
          className={`mt-6 flex items-center justify-center py-3 rounded-full text-sm font-semibold
                      ${a.badge} hover:opacity-90 btn-press min-h-[44px]`}
          aria-label={`Reservar ${title}`}
        >
          Reservar
        </Link>
      </div>
    </motion.article>
  );
}
