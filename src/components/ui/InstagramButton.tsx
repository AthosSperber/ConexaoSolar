import { Instagram } from 'lucide-react';
import { useConsultant } from '../../config/consultant';
import { useState } from 'react';

const DEFAULT_INSTAGRAM_URL = 'https://www.instagram.com/athosigreen/';

export default function InstagramButton() {
  const { consultant } = useConsultant();
  const [hovered, setHovered] = useState(false);

  const href = consultant.social?.instagram?.trim() || DEFAULT_INSTAGRAM_URL;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-24 right-6 z-50 bg-gradient-to-br from-fuchsia-600 via-pink-500 to-orange-400 hover:from-fuchsia-700 hover:to-orange-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center ring-pink-400/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-950 ${hovered ? 'scale-105 shadow-pink-300/40' : ''}`}
      aria-label={`Ver Instagram de ${consultant.name}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ boxShadow: hovered ? '0 8px 32px 0 rgba(236, 72, 153, 0.25)' : undefined }}
    >
      <span className="inline-flex items-center justify-center">
        <Instagram className="w-6 h-6" />
      </span>
    </a>
  );
}
