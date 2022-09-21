import React from "react";

import { workouts } from "../data/data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "../css/workoutSlider.css";

import { Navigation } from "swiper";

const WorkoutSlider = () => {
  const { programs } = workouts;

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
      modules={[Navigation]}
      className='workoutSlider'
    >
      {programs.map((item, index) => {
        const { image, name } = item;
        return (
          <SwiperSlide
            key={index}
            className="max-w-[320px] max-h-[320px] relative"
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover hover:scale-110 transition duration-300 overflow-hidden"
            />
            <div
              className="absolute left-[20px] bottom-[20px] text-neutral-500 font-semibold 
            shadow-sm bg-white h-[26px] px-[14px] flex items-center rounded-[1px]"
            >
              <div className="text-sm">{name}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
