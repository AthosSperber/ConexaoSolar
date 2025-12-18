import { useState, FC, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

const Accordion: FC<Props> = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-emerald-200/70 dark:border-emerald-900/30 rounded-2xl overflow-hidden bg-white/90 dark:bg-gray-900/70">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-emerald-50/70 dark:hover:bg-emerald-950/20 transition"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 dark:text-white">{title}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{open ? 'Fechar' : 'Abrir'}</span>
      </button>

      <div className={`${open ? 'block' : 'hidden'} px-5 pb-5 text-gray-700 dark:text-gray-300`}>{children}</div>
    </div>
  );
};

export default Accordion;
