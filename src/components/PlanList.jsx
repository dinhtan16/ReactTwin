import React, { useState } from "react";

import { BsCheckCircleFill } from "react-icons/bs";

const PlanList = ({ plans }) => {
  const [index, setIndex] = useState(0);

  return (
    <div
      className="flex flex-col lg:flex-row items-center 
    justify-center max-w-[1280px] mx-auto gap-y-4" data-aos='fade-up' data-aos-delay='200'
    >
      {plans.map((item, currIndex) => {
        const { name, price, list, delay } = item;
        return (
          <div
            key={currIndex}
            className="w-full
           md:max-w-[620px] lg:max-w-[405px] rounded-sm lg:min-h-[550px]
          px-4"
          >
        
          <div
              onClick={() => setIndex(currIndex)}
              className={`${
                currIndex === index
                  ? "bg-neutral-500 text-white"
                  : "bg-neutral-400/10 text-neutral-500"
              }  flex lg:justify-center transition-all ease-in-out items-center py-[40px] px-[30px] lg:min-h-[550px]`}
            >
            <div className="flex flex-row lg:flex-col 
            gap-x-8 gap-y-8 lg:gap-x-0 items-center">
            <div className="wrapper-name-price">
                <div className="name font-bold uppercase bg-neutral-500 text-white inline-block px-4 mb-2">{name}</div>
                <div className="price text-[30px] font-bold">
                  <div>
                    {price}
                    <span>$</span>
                    <span className="text-[18px] font-semibold">/month</span>
                  </div>
                </div>
              </div>
              <div className="wrapper-list-btn">
                <ul className="flex flex-col gap-y-4 mb-8 py-4 flex-1 min-h-[200px] lg:min-h-[230px]">
                  {list.map((item, index) => {
                    const { name } = item;
                    return (
                      <li
                        key={index}
                        className="flex items-center gap-x-[10px]"
                      >
                        <BsCheckCircleFill className="text-lg" />
                        {name}
                      </li>
                    );
                  })}
                </ul>
             <div className="text-center">
             <button
                  className={`${
                    currIndex === index
                      ? "bg-white text-neutral-500"
                      : "border border-neutral-500"
                  }  font-bold text-sm uppercase btn-lg hover:shadow-lg`}
                >
                  Join Now
                </button>
             </div>
              </div>
            </div>
            </div>
          </div>
        
        );
      })}
    </div>
  );
};

export default PlanList;
