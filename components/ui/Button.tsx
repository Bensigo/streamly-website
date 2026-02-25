import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const baseStyles = 'inline-flex items-center justify-center font-semibold text-sm transition-all duration-200 cursor-pointer';

const variants = {
  primary: 'bg-cyan text-navy hover:bg-cyan-a11y hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2',
  secondary: 'bg-transparent border-2 border-cyan text-cyan hover:bg-cyan/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2',
  ghost: 'bg-white text-navy hover:bg-cyan hover:text-navy border border-[var(--border-gray)] focus-visible:outline-3 focus-visible:outline-cyan focus-visible:outline-offset-2',
};

const sizes = {
  sm: 'h-8 px-4 text-[13px] rounded-[var(--radius-md)]',
  md: 'h-10 px-6 text-sm rounded-[var(--radius-lg)]',
  lg: 'h-12 px-8 text-sm rounded-[var(--radius-lg)]',
};

export default function Button({ children, variant = 'primary', size = 'md', href, className = '', onClick, type = 'button' }: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}
