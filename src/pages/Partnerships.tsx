import Expansao from '../components/sections/Expansao';
import IGreenClub from '../components/sections/iGreenClub';

export default function Partnerships() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-50/60 via-emerald-50/20 to-emerald-50/60 dark:from-gray-950 dark:via-emerald-950/15 dark:to-gray-950 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Parcerias & Benefícios</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">Conheça as oportunidades de expansão e os benefícios exclusivos do iGreen Club</p>
        </div>
      </section>

      <Expansao />
      <IGreenClub />
    </>
  );
}
