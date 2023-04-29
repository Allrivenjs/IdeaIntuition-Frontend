"use client";
import React, {FC, Fragment, ReactNode, useEffect} from 'react';

import Head from 'next/head';

import { Navbar } from '../ui';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
  pageDescription: string;
}

export const Layout: FC<LayoutProps> = ({
  pageTitle,
  pageDescription,
  children,
}) => {
    const [scrollActive, setScrollActive] = React.useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollActive(window.scrollY > 20);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScrollActive(window.scrollY > 20);
            });
        }
    }, [])
  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
      </Head>

      <nav className={ "fixed top-0 w-full z-30 bg-white transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-2")}>
        <Navbar />
      </nav>

      <main className="w-full mt-4 ">{children}</main>
    </Fragment>
  );
};
