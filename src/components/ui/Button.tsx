import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'primary';
  size?: 'default' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      primary: 'bg-green-600 text-white hover:bg-green-700 rounded-full px-4 py-2 font-semibold',
    };

    const sizes = {
      default: 'h-10 py-2 px-4',
      icon: 'h-10 w-10',
    };

    const newClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`;

    return <button className={newClassName.trim()} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button };
export default Button;
