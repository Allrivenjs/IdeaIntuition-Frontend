'use client';

import { Inter } from 'next/font/google';
import { Layout } from '@/components/layouts';

import { CreateProjectView } from '@/project';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <article
        className={`flex min-h-screen flex-col items-center  ${inter.className}`}
      >
        <CreateProjectView />
      </article>
    </Layout>
  );
}
