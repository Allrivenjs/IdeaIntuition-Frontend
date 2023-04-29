'use client';
import { Logo } from './Logo';
import { NavbarButton } from './NavbarButton';
import { Sign } from '@/components/ui/Sign';
import React, { useEffect } from 'react';
import { Button } from './Button';

export const Navbar = () => {
  return (
    <div className='max-w-screen-2xl px-4 sm:px-4 lg:px-4 mx-auto grid grid-flow-col py-3 sm:py-4'>
      <div className='flex items-center col-start-auto col-end-1  gap-x-16 '>
        <Logo />
        <ul className='hidden lg:flex col-start-4 col-end-8 text-black-500  items-center ml-5'>
          <NavbarButton href='#about'>About</NavbarButton>
          <NavbarButton href='#feature'>Feature</NavbarButton>
          <NavbarButton href='#pricing'>Pricing</NavbarButton>
          <NavbarButton href='#testimonial'>Testimonial</NavbarButton>
        </ul>
      </div>
      <div className='col-start-10 col-end-12 font-medium flex justify-end items-center'>
        <ul className='flex'>
          <Sign>
            <Button variant='outlined' color='primary' size='base' rounded='full'>
              Sign In
            </Button>
            <Button color='primary' rounded='full' variant='contained'>
              Sign Up
            </Button>
          </Sign>
        </ul>
      </div>
    </div>
  );
};
