import Expansao from '../components/sections/Expansao';
import iGreenClub from '../components/sections/iGreenClub';

export default function Partnerships() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Parcerias & Benefícios</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Conheça as oportunidades de expansão e os benefícios exclusivos do iGreen Club</p>
        </div>
      </section>

      <Expansao />
      <iGreenClub />
    </>
  );
}
