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
        <div className='flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:px-[136px]'>
          {services.skills.map((service, index) => {
            return (
              <div
                className='p-[30px] w-full max-w-[417px] flex flex-col hover:bg-white hover:shadow-2xl cursor-crosshair transition-all text-center lg:text-left'
                key={index}
              >
                <div className='w-20 h-20 mb-12 mx-auto lg:mx-0'>
                  <img src={service.icon} alt='' />
                </div>
                <h3 className='text-2xl mb-3 font-semibold'>{service.name}</h3>
                <p className='text-grey text-lg lg:mb-16'>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
