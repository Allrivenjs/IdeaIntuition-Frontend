import { FC } from 'react';

type Heading = {
  children: string;
};
export const Heading: FC<Heading> = ({ children }) => {
  return (
    <h2 className='w-full block text-center text-2xl font-bold mb-6'>
      {children}
    </h2>
  );
};
