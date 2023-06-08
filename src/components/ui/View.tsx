import { FC, ReactNode } from 'react';

export type View = {
  children: ReactNode;
};

export const View: FC<View> = ({ children }) => {
  return (
    <div className='w-full flex items-center justify-center bg-gray-100 min-h-screen'>
      {children}
    </div>
  );
};
