import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: string;
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'sm' | 'base' | 'lg' | 'xl';
  color?: 'primary' | 'success' | 'error' | 'danger';
  rounded?: 'sm' | 'base' | 'lg' | 'full';
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = '',
  size = 'base',
  color = 'primary',
  rounded = 'base',
}) => {
  const textColor =
    variant === 'contained'
      ? 'text-white'
      : color === 'primary'
      ? 'text-rose-500'
      : color === 'success'
      ? 'text-green-500'
      : color === 'danger'
      ? 'text-yellow-500'
      : color === 'error'
      ? 'text-red-700'
      : 'text-indigo-500';

  console.log('text color', textColor);

  const backgroundColor =
    variant === 'outlined' || variant === 'text'
      ? 'transparent'
      : color === 'primary'
      ? 'rose-500'
      : color === 'success'
      ? 'green-500'
      : color === 'danger'
      ? 'yellow-500'
      : color === 'error'
      ? 'red-700'
      : 'black';

  const borderColor =
    variant === 'contained' || variant === 'text'
      ? 'transparent'
      : color === 'primary'
      ? 'rose-500'
      : color === 'success'
      ? 'green-500'
      : color === 'danger'
      ? 'yellow-500'
      : color === 'error'
      ? 'red-700'
      : 'black';

  const shadowColor =
    color === 'primary'
      ? 'rose-500'
      : color === 'success'
      ? 'green-500'
      : color === 'danger'
      ? 'yellow-500'
      : color === 'error'
      ? 'red-700'
      : 'black';

  const roundedValue =
    rounded === 'sm'
      ? 'rounded'
      : rounded === 'base'
      ? 'rounded-md'
      : rounded === 'lg'
      ? 'rounded-lg'
      : rounded === 'full'
      ? 'rounded-full'
      : 'rounded';

  return (
    <button
      className={`py-2 px-5 sm:px-8 text-${size} ${textColor} bg-${backgroundColor} font-medium tracking-wide border border-${borderColor} outline-none
        ${roundedValue} capitalize transition-all hover:shadow hover:shadow-${shadowColor} `}
    >
      {children}
    </button>
  );
};
