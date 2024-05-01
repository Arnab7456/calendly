import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <div>
      <div>
        <div className='flex items-center justify-between m-5 p-5 shadow-sm'>
          <Image src='/vercel.svg' width={200} height={100} alt="Vercel Logo" 
          className=' w-[150px] md:w-[200px]'/>
          <ul className=' hidden md:flex gap-14 font-medium text-lg'>
            <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Product</li>
            <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Priceing</li>
            <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Contact Us</li>
            <li className='hover:text-primary transition-all duration-300 cursor-pointer'>About US</li>
          </ul>
          <div className='flex gap-5'>
            <Button variant="ghost">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
