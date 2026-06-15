import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  slug: string;
  index?: number;
}

export default function ServiceCard({ title, description, price, image, slug, index = 0 }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1], delay: index * 0.06 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm
                 hover:shadow-xl hover:shadow-[#F97316]/10
                 transition-shadow duration-300 flex flex-col"
    >
      <div className="aspect-[4/3] overflow-hidden bg-[#FEF0DC]">
        <img
          src={image}
          alt={`${title} en Altea – MiniPlanet`}
          loading="lazy"
          width={400}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/400x300/FED7AA/C2410C?text=${encodeURIComponent(title)}`;
          }}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm font-semibold text-[#F97316] mb-1">{price}</p>
        <h3 className="font-display text-xl font-bold text-[#1A1040] mb-2">{title}</h3>
        <p className="text-sm text-[#3D2D70]/70 leading-relaxed flex-1">{description}</p>
        <Link
          to={slug}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7C3AED]
                     hover:text-[#F97316] transition-colors duration-150 group/link"
          aria-label={`Reservar ${title}`}
        >
          Reservar
          <ArrowRight
            size={15}
            aria-hidden="true"
            className="group-hover/link:translate-x-0.5 transition-transform duration-150"
          />
        </Link>
      </div>
    </motion.article>
  );
}
