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
    <head><link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css" rel="stylesheet" />

    </head>
      <body>{children}</body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></script>
    </html>
  );
}
