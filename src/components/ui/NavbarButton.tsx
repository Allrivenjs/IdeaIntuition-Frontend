'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import classnames from 'classnames';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

type buttonBorder =
  | 'border-b-rose-500'
  | 'text-rose-500'
  | 'hover:text-rose-500'
  | 'hover:border-b-rose-500';
interface NavbarButton {
  href: string;
  children: ReactNode;
}

export const NavbarButton: FC<NavbarButton> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  const [buttonClassName, setButtonClassName] = useState('');
  const activeStyles: Record<buttonBorder, boolean> = {
    'border-b-rose-500': isActive,
    'text-rose-500': isActive,
    'hover:text-rose-500': !isActive,
    'hover:border-b-rose-500': !isActive,
  };

  useEffect(() => {
    setButtonClassName(
      classnames(
        'transition ease-in-out py-3 px-4 text-base text-neutral-600 border-2 border-transparent',
        activeStyles
      )
    );
  }, [isActive]);

  return (
    <li>
      <NextLink href={href}>
        <div className={buttonClassName}>{children}</div>
      </NextLink>
    </li>
  );
};
