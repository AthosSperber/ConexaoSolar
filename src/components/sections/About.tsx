import { FC, useState } from 'react';
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from '../../config/whatsapp';
import { getInitials, useConsultant } from '../../config/consultant';

const About: FC = () => {
  const { consultant } = useConsultant();
  const [photoError, setPhotoError] = useState(false);

  const whatsappHref = buildWhatsAppUrl(
    consultant.whatsapp?.defaultMessage,
    consultant.whatsapp?.number || WHATSAPP_NUMBER,
    consultant.name
  );

  const initials = getInitials(consultant.name);

  return (
    <section 
      id="about" 
      className="w-full py-16 md:py-20 lg:py-28 bg-gradient-to-b from-emerald-50/60 via-emerald-50/20 to-emerald-50/60 dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-950 border-t border-gray-200 dark:border-gray-700"
      aria-label={`Apresentação do consultor ${consultant.name}`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <div className="w-56 sm:w-64 aspect-[4/5] rounded-3xl overflow-hidden border border-emerald-100/70 dark:border-emerald-900/30 bg-white/90 dark:bg-gray-900/70 shadow-lg flex items-center justify-center">
              {consultant.photo?.src && !photoError ? (
                <img
                  src={consultant.photo.src}
                  alt={consultant.photo.alt || consultant.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    setPhotoError(true);
                  }}
                />
              ) : null}
              {(!consultant.photo?.src || photoError) && (
                <div className="text-5xl font-extrabold text-emerald-700 dark:text-emerald-200">
                  {initials}
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold text-sm uppercase tracking-wide rounded-full mb-6">
              {consultant.about.heading}
            </div>

            {consultant.badge?.text ? (
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/25 text-emerald-800 dark:text-emerald-100 border border-emerald-200/60 dark:border-emerald-900/30">
                  {consultant.badge.text}
                </span>
              </div>
            ) : null}

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
              {consultant.about.title}
            </h2>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {consultant.about.description}
            </p>

            <div className="mt-8">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg"
              >
                Falar comigo no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
