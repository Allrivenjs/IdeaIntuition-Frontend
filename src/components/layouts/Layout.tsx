import React, { FC, Fragment, ReactNode, useEffect } from 'react';

import { Navbar } from '../ui';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [scrollActive, setScrollActive] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScrollActive(window.scrollY > 20);
      });
    };
  }, []);

  return (
    <Fragment>
      <nav
        className={
          'fixed top-0 w-full z-30 bg-white transition-all ' +
          (scrollActive ? ' shadow-md pt-0' : ' pt-2')
        }
      >
        <Navbar />
      </nav>

      <main className='w-full mt-16 '>{children}</main>
    </Fragment>
  );
};
