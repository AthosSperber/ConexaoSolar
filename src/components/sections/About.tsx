import { FC } from 'react';
import { homeContent } from '../../data/texts';

const About: FC = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {homeContent.about.title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed line-height-relaxed">
          {homeContent.about.description}
        </p>
      </div>
    </section>
  );
};

export default About;
