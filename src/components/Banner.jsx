import React from 'react';

import {banner} from '../data/data'

const Banner = () => {

const {titlePart1,titlePart2,subtitle,textBtn} = banner

  return (
  <section className='bg-neutral-500 h-[790px]'>
     <div className="container mx-auto h-full">
      <div className='flex items-center h-full relative -space-x-48 lg:-space-x-24'>
        {/*TODO: text */}
        <div className='text-white flex-1 z-10 pl-6 lg:pl-0' data-aos='fade-down'>
          <h1 className='h1 text-white'>{titlePart1} <br /> 
          <span className='text-primary-200'>{titlePart2}</span></h1>
          <p className='max-w-[415px] text-body-md 
          lg:text-body-lg mt-4 mb-8' data-aos='fade-down' data-aos-delay='600'>
            {subtitle}
            </p>
          <button className='btn btn-sm 
          lg:btn-lg bg-white text-neutral-500 
          hover:-translate-y-1 hover:scale-110 
          ease-in-out transition hover:text-white 
          hover:bg-black hover:shadow-white 
          hover:shadow-lg duration-250'
          data-aos='fade-down' data-aos-delay='700'
          >
            {textBtn}
            </button>
        </div>
        {/* image */}
        <div className='bg-blue-300 w-full 
        h-full bg-banner bg-cover bg-right 
        lg:bg-center bg-no-repeat flex-1'
        data-aos='fade-left'
        data-aos-delay='800'
        >
          
        </div>
      </div>
     </div>
  </section>)
};

export default Banner;
