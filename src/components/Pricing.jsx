import React from 'react';

import {pricing} from '../data/data'

import PlanList from '../components/PlanList'

const Pricing = () => {
  const {icon,plans,title} = pricing
  return (
    <section>
      <div className="section-title-group">
        <img src={icon} alt="" />
        <h2 className='h2'>{title}<span className='text-primary-200'>.</span></h2>
      </div>
      <PlanList plans={plans}/>
    </section>
    );
};

export default Pricing;
