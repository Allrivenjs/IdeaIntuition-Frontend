import { Metadata } from 'next';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Idea Intuition',
  description: 'Generate ideas for successfull projects',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
      <script src="/node_modules/flowbite/dist/flowbite.min.js" />
    </html>
  );
}
