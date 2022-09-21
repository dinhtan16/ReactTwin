import React from "react";

import { about } from "../data/data";

import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  const { icon, link, subtitle1, subtitle2, title } = about;

  return (
    <section>
      <div className="container mx-auto py-[80px] md:py-[110px] lg:py-[140px] 
      lg:pb-[180px]">
        <div className="section-title-group" data-aos='fade-up' data-aos-delay='100'>
          <img src={icon} alt="" />
          <h2 className="h2 section-title text-center">
            {title}
            <span className="text-primary-200">.</span>
          </h2>
        </div>
        <div
          className="subtitle-section text-center
         px-[50px] lg:text-center md:text-center font-semibold
         lg:text-lg md:text-md" data-aos='fade-up' data-aos-delay='200'
        >
          <p>{subtitle1}</p>
          <p>{subtitle2}</p>
        </div>
        <div
          className="link flex text-center px-[50px] mt-5 items-center
         hover:text-primary-200 transition ease-in justify-center underline" data-aos='fade-up' data-aos-delay='300'
        >
          <a href="#">{link}</a>
          <IoIosArrowDroprightCircle className="text-xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
