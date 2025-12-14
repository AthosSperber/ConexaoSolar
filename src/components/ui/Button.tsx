import { FC, ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

const Button: FC<Props> = ({ variant = 'primary', children, ...rest }) => {
  const base = 'px-4 py-2 rounded-full font-semibold transition';
  const cls = variant === 'primary' ? `${base} bg-green-600 text-white hover:bg-green-700` : `${base} border border-green-600 text-green-600 hover:bg-green-50`;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
};

export default Button;
