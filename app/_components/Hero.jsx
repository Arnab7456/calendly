"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'

import React from 'react'

function Hero() {
    const buttonStyle = {
        backgroundColor: '#0B3558',
        color: 'white', // Text color
      };
  return (
    <div className='flex flex-col justify-center items-center my-20'>
      
        <div className='text-center max-w-3xl'>
        <h2 className='font-bold text-[60px] text-slate-700'>Want to Plan your Interview calls ?</h2>
        <h2 className='text-xl mt-5 text-slate-500'>Scheduly is your scheduling automation platform for eliminating the back-and-forth emails to find the perfect time — and so much more.</h2>
        <div className='flex gap-4 flex-col mt-5'>
            <h3 className='text-sm'>Sign Up free with Google and Facebook</h3>
            <div className='flex justify-center gap-8'>
              <Button className="p-7 flex gap-4">
                    <Image src='/google.png' alt='google'
                    width={40} height={40}/>
                    Sign up with Google</Button>
                   
                  <Button  style={buttonStyle} className="p-7 flex gap-4">
                    <Image src='/facebook.png' alt='google'
                    width={40} height={40}/>
                    Sign up with Facebook</Button>
            </div>
            <hr></hr>
           <h2><span className='text-primary'>Sign up Free with Email.</span> No Credit card required</h2> 
        </div>
        </div>
    </div>
  )
}

export default Hero