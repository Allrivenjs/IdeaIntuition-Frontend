import {FC, Fragment, ReactNode} from 'react';

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
  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
      </Head>

      <nav>
        <Navbar />
      </nav>

      <main>{children}</main>
    </Fragment>
  );
};
