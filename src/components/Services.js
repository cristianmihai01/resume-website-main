import React from 'react';

// import services data
import { services } from '../data';

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <h2 className='section-title'>
          {services.title}
          <span className='dot'></span>
        </h2>
        <p className='section-subtitle'>{services.subtitle}</p>
        <div className='grid grid-cols-3 gap-[84px]'>
          {services.skills.map((service, index) => {
            return (
              <div
                className='bg-grey p-[30px] max-w-[417px] flex justify-center'
                key={index}
              >
                <div className='w-[124px] h-[124px]'>
                  <img src={service.icon} alt='' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
