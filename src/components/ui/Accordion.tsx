import { useState, FC, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

const Accordion: FC<Props> = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-white md:hidden"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-gray-500">{open ? 'Fechar' : 'Abrir'}</span>
      </button>

      <div className={`${open ? 'block' : 'hidden'} md:block p-4 bg-white`}>{children}</div>
    </div>
  );
};

export default Accordion;
