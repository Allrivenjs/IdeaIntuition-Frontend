import { Logo } from './Logo';
import { NavbarButton } from './NavbarButton';
import { Sign } from '@/components/ui/Sign';
import React from 'react';
import { Button } from './Button';

export const Navbar = () => {
  return (
    <div className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4'>
      <div className='flex items-center col-start-1 col-end-2   '>
        <Logo />
        <ul className='hidden lg:flex col-start-4 col-end-8 text-black-500  items-center ml-5'>
          <NavbarButton href='about'>About</NavbarButton>
          <NavbarButton href='about'>Feature</NavbarButton>
          <NavbarButton href='about'>Pricing</NavbarButton>
          <NavbarButton href='about'>Testimonial</NavbarButton>
        </ul>
      </div>
      <div className='col-start-10 col-end-12 font-medium flex justify-end items-center'>
        <ul className='flex'>
          <Sign>
            <Button
              variant='contained'
              color='danger'
              size='base'
              rounded='full'
            >
              Contained
            </Button>
            <Button variant='outlined'>Outlined</Button>
            <Button variant='text'>Text</Button>
            {/*

            <Button variant={'outlined'}>Sign Up</Button>
            */}
          </Sign>
        </ul>
      </div>
    </div>
  );
};
