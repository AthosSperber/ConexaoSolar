import { FC } from 'react';
import { homeContent } from '../../data/texts';

const About: FC = () => {
  return (
    <section 
      id="about" 
      className="w-full py-16 md:py-24 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800"
      aria-label="Sobre Conecta Solar"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {homeContent.about.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {homeContent.about.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
