import Expansao from '../components/sections/Expansao';
import IGreenClub from '../components/sections/iGreenClub';

export default function Partnerships() {
  return (
    <>
      <section className="bg-[#16a34a]/10 dark:bg-[#16a34a]/20 py-14 md:py-20 border-b border-green-200 dark:border-green-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 dark:text-green-300 mb-4 drop-shadow-sm">Parcerias & Benefícios</h1>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto mb-6">Conheça as oportunidades de expansão e os benefícios exclusivos do <span className='font-semibold text-green-700 dark:text-green-300'>iGreen Club</span></p>
          <div className="flex flex-col items-center gap-3 mt-6">
            <a
              href="https://wa.me/5519996693018?text=Quero%20saber%20mais%20sobre%20parcerias%20iGreen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg transition focus:outline-none focus:ring-2 focus:ring-green-400/70"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.72 11.06a6 6 0 11-5.66-5.66m5.66 5.66L21 21" /></svg>
              Falar sobre Parcerias
            </a>
            <span className="text-xs text-gray-500 dark:text-gray-400">Tire dúvidas ou inicie sua parceria pelo WhatsApp</span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-2 md:px-4">
        <Expansao />
        <IGreenClub />
      </div>
    </>
  );
}
