import React from 'react';
import {nav} from '../data/data'


const Nav = () => {

  return <nav className='hidden lg:flex'>
      <ul className='flex lg:gap-x-8 md:gap-x-6 text-white'>
        {nav.map((item,index) => (
          <li className='hover:text-primary-200' key={index}><a href={item.href}>{item.name}</a></li>
        ))}
      </ul>
  </nav>;
};

export default Nav;
