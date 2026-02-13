import { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'hover' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'bg-bg-white rounded-radius-card shadow-card';
  
  const variants = {
    default: '',
    hover: 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
    interactive: 'transition-all duration-200 cursor-pointer hover:shadow-lg hover:-translate-y-1 active:translate-y-0',
  };
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = `${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default Card;
