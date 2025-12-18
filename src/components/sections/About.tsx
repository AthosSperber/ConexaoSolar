import { FC } from 'react';
import { homeContent } from '../../data/texts';

const About: FC = () => {
  return (
    <section 
      id="about" 
      className="w-full py-16 md:py-20 lg:py-28 bg-gradient-to-b from-emerald-50/60 via-emerald-50/20 to-emerald-50/60 dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-950 border-t border-gray-200 dark:border-gray-700"
      aria-label="Sobre Conecta Solar"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-semibold text-sm uppercase tracking-wide rounded-full mb-6">
            Quem Somos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 md:mb-8 leading-tight">
            {homeContent.about.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {homeContent.about.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
