import { FC, ReactNode } from 'react';

type Props = {
  title?: string;
  children?: ReactNode;
  className?: string;
};

const Card: FC<Props> = ({ title, children, className }) => {
  return (
    <div className={`bg-white/90 dark:bg-gray-900/70 p-4 rounded-2xl shadow-sm border border-emerald-200/70 dark:border-emerald-900/30 ${className ?? ''}`.trim()}>
      {title && <div className="font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</div>}
      <div className="text-sm text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
};

export default Card;
