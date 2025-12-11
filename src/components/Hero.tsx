import { ArrowRight, Sun, TrendingDown, Leaf } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-green-900/70"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Energia Solar em Rio Claro – ConexãoSolar
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-4 font-medium">
            Reduza sua conta de luz e invista em energia limpa com quem entende
            do assunto.
          </p>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            A ConexãoSolar oferece soluções inteligentes em energia solar para
            residências, comércios e propriedades rurais. Economia,
            sustentabilidade e tecnologia ao seu alcance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://wa.me/5519999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg"
            >
              Fale pelo WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => scrollToSection('produtos')}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 w-full sm:w-auto"
            >
              Conheça nossos produtos
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 text-white">
              <div className="bg-green-600 p-4 rounded-full">
                <TrendingDown className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">Economia</h3>
              <p className="text-sm text-gray-200">
                Reduza até 95% da conta de luz
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-white">
              <div className="bg-green-600 p-4 rounded-full">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">Sustentabilidade</h3>
              <p className="text-sm text-gray-200">
                Energia limpa e renovável
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 text-white">
              <div className="bg-green-600 p-4 rounded-full">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg">Tecnologia</h3>
              <p className="text-sm text-gray-200">
                Equipamentos certificados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
