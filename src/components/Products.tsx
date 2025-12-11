import { Home, Building2, Package, Wrench } from 'lucide-react';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

function ProductCard({ icon, title, description, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
          <div className="text-green-600 group-hover:text-white transition-colors">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Products() {
  const products = [
    {
      icon: <Home className="w-7 h-7" />,
      title: 'Sistemas Fotovoltaicos Residenciais',
      description:
        'Instalação completa para casas, com orçamento personalizado e equipamentos certificados.',
      image:
        'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: 'Sistemas Comerciais',
      description:
        'Projetos que reduzem custos operacionais e aumentam a eficiência energética do seu negócio.',
      image:
        'https://images.pexels.com/photos/1472886/pexels-photo-1472886.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: 'Kits de Energia Solar',
      description:
        'Kits montados para quem busca uma solução prática e econômica.',
      image:
        'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: 'Suporte e Manutenção',
      description:
        'Acompanhamento técnico, limpeza e manutenção dos sistemas instalados.',
      image:
        'https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="produtos" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossos Produtos e Soluções
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em energia solar para diferentes
            necessidades e perfis de consumo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5519999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
