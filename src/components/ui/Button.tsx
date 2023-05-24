import { FC } from 'react';
import NextLink from "next/link";

type variant = 'text' | 'contained' | 'outlined';
type color = 'primary' | 'success' | 'error' | 'danger';
type rounded = 'sm' | 'base' | 'lg' | 'full';
type size = 'sm' | 'base' | 'lg' | 'xl';
interface ButtonProps {
  children: string;
  variant?: variant;
  color?: color;
  size?: size;
  rounded?: rounded;
  href?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'text',
  size = 'base',
  color = 'primary',
  rounded = 'base',
  href,
}) => {
  const variantStyles: Record<variant, Record<color, string>> = {
    contained: {
      primary: 'text-white bg-rose-500 hover:shadow-rose-500 border-0',
      success: 'text-white bg-green-500 hover:shadow-green-500 border-0',
      danger: 'text-white bg-yellow-500 hover:shadow-yellow-500 border-0',
      error: 'text-white bg-red-700 hover:shadow-red-700 border-0',
    },
    text: {
      primary: 'text-rose-500 bg-white hover:shadow-rose-500 border-0',
      success: 'text-green-500 bg-white hover:shadow-green-500 border-0',
      danger: 'text-yellow-500 bg-white hover:shadow-yellow-500 border-0',
      error: 'text-red-700 bg-white hover:shadow-red-700 border-0',
    },
    outlined: {
      primary:
          'text-rose-500 border-rose-500 border-rose-500 hover:shadow-rose-500',
      success:
          'text-green-500 border-green-500 border-green-500 hover:shadow-green-500',
      danger:
          'text-yellow-500 border-yellow-500 border-yellow-500 hover:shadow-yellow-500',
      error: 'text-red-700 border-red-700 border-red-700 hover:shadow-red-700',
    },
  };
  const roundedValues: Record<rounded, string> = {
    sm: 'rounded',
    base: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  const roundedValue = roundedValues[rounded] || 'rounded';
  return <NextLink href={href || '#'} >
    <button
        className={`py-2 px-5 sm:px-8 text-${size} ${(variantStyles[variant] as Record<color, string>)[color]}  font-medium tracking-wide border outline-none
        ${roundedValue} capitalize transition-all hover:shadow`}
    >
      {children}
    </button>
  </NextLink>;
};
