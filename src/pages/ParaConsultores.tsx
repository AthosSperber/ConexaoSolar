import ForConsultants from '../components/sections/ForConsultants';
import GovernedSnapshot from '../components/GovernedSnapshot';

export default function ParaConsultores() {
  return (
    <>
      <ForConsultants />

      <section className="w-full py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
              Governed Snapshot
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Indicadores auditáveis do Conexão Solar
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Dados governados e publicados como artefatos estáticos para garantir transparência e rastreabilidade.
            </p>
          </div>
          <GovernedSnapshot />
        </div>
      </section>
    </>
  );
}
