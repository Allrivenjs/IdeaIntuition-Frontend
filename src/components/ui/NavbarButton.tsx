import { FC, ReactNode } from 'react';

import NextLink from 'next/link';

interface NavbarButton {
  href: string;
  children: ReactNode;
}

export const NavbarButton: FC<NavbarButton> = ({ href, children }) => {
  return (
    <li>
      <NextLink href={href}>
        <div className='transition ease-in-out py-3 px-4 text-base text-neutral-600 border-2 border-transparent hover:border-b-rose-500 hover:text-rose-500'>
          {children}
        </div>
      </NextLink>
    </li>
  );
};
