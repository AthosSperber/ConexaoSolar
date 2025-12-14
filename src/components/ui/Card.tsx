import { FC, ReactNode } from 'react';

type Props = {
  title?: string;
  children?: ReactNode;
};

const Card: FC<Props> = ({ title, children }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      {title && <div className="font-semibold mb-2">{title}</div>}
      <div className="text-sm text-gray-600">{children}</div>
    </div>
  );
};

export default Card;
