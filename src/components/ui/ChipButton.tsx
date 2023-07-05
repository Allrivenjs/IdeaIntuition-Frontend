import { FC, MouseEvent, useState } from 'react';

type ChipButton = {
  children: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const ChipButton: FC<ChipButton> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='w-fit [word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-full bg-zinc-200 px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-zinc-700 border-2 outline-rose-500 hover:border-rose-500 active:bg-rose-500 active:text-white transition-all hover:-translate-y-[1px] active:translate-y-[1.5px]'
    >
      {children}
    </button>
  );
};
