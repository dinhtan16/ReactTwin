import React, { useState, useEffect } from "react";

import { header } from "../data/data";

import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

//icons

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const { btnLoginText, btnSignupText, logo } = header;
  //header-state

  const [isActive, setIsActive] = useState(false);

  //nav-mobile state
  const [open, setOpen] = useState(false);

  //scroll effect
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
      });
    };
  });

  return (
    <header
      className={`${isActive ? "bg-neutral-500" : "bg-transparent py-[25px]"}
    fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between
    items-center px-[20px] lg:px-[80px] transition-all duration-300 h-[60px]
  `}
    >
      <a href="#">
        <img className="h-[30px]" src={logo} alt="" />
      </a>
      {/* nav - mac dinh an cho mobile*/}
      <Nav />
      {/* button chuc nang mac dinh an tren mobile */}
      <div className="hidden lg:flex space-x-4">
        <button className="btn btn-sm bg-white text-neutral-500">
          {btnLoginText}
        </button>
        <button className="btn btn-sm bg-primary-200 text-white hover:bg-primary-100">
          {btnSignupText}
        </button>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer lg:hidden absolute right-6 top-4 transition-all"
      >
        {open ? (
          <RiCloseFill className="text-primary-200 text-4xl" />
        ) : (
          <RiMenu4Fill className="text-primary-200 text-3xl" />
        )}
      </div>
      <NavMobile open={open} />
    </header>
  );
};

export default Header;
