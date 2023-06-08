import { FC, ReactNode } from 'react';

/*
 * width must be in pixels
 */
type Card = {
  children: ReactNode;
  width: number;
};

export const Card: FC<Card> = ({ children, width }) => {
  return (
    <div
      className={`flex flex-col items-center w-[${width}px] bg-white p-6 shadow-md rounded-md `}
    >
      {children}
    </div>
  );
};
