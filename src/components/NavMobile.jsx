import React from "react";
import { nav } from "../data/data";
const NavMobile = ({ open }) => {
  return (
    <nav
      className={`${open ? "min-h-screen" : "min-h-0"} 
  lg:hidden w-full bg-neutral-500
   fixed top-0 right-0 -bottom-12 -z-10 
  overflow-hidden transition-all h-0
  `}
    >
      <ul
        className="text-white flex items-center
     flex-col absolute left-[50%] top-[50%] font-medium
      -translate-y-1/2 -translate-x-1/2 text-xl gap-y-8"
      >
        {nav.map((item, index) => (
          <li key={index} className=" hover:text-primary-200">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className=" absolute bottom-20 right-[10px] text-white flex">
        <button className="underline hover:text-primary-200 btn btn-sm">Log in</button>
        <button className="underline hover:text-primary-200 btn btn-sm pl-0">Sign up</button>
      </div>
    </nav>
  );
};

export default NavMobile;
