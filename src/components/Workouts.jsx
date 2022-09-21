import React from 'react';

import {workouts} from '../data/data'

import WorkoutSlider from '../components/WorkoutSlider'

const Workouts = () => {
  const {icon,title} = workouts
  return (
  <section>
    <div className="section-title-group px-4 lg:px-0 max-w-[540px] mx-auto" data-aos='fade-up' data-aos-delay='100'>
      <img src={icon} alt="" />
      <h2 className='h2 section-title'>{title}</h2>
    </div>
    <div className='pb-20 px-4' data-aos='fade-up' data-aos-delay='200'>
      <WorkoutSlider />
    </div>
  </section>
  
  )
};

export default Workouts;
