import Carousel from '../ui/Carousel';

const carouselItems = [
  {
    title: 'Conexão Solar',
    desc: 'Energia solar sem investimento inicial',
    icon: '☀️',
  },
  {
    title: 'Conexão Placas',
    desc: 'Gere sua própria energia',
    icon: '⚡',
  },
  {
    title: 'Conexão Green',
    desc: 'Economia sem instalar nada',
    icon: '💚',
  },
  {
    title: 'Conexão Livre',
    desc: 'Energia mais barata para empresas',
    icon: '🏢',
  },
  {
    title: 'Conexão Telecom',
    desc: 'Internet e conectividade otimizada',
    icon: '📡',
  },
];

export default function ProductCarousel() {
  return (
    <section className="px-4 py-16 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-2 text-gray-900 dark:text-white">Nossos Produtos</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Explore as soluções disponíveis</p>

        <Carousel
          items={carouselItems.map((item) => (
            <div key={item.title} className="px-2 py-4">
              <div className="bg-white dark:bg-gray-900 dark:border dark:border-gray-700 rounded-2xl shadow-md p-6 text-center h-full">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
          autoScroll
          interval={4000}
        />
      </div>
    </section>
  );
}
