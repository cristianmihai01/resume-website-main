import React from 'react';
import { contributors } from '../data';

// import contributors

const Contributors = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <h2 className='section-title'>
          {contributors.title}
          <span className='dot'></span>
        </h2>
        <p className='section-subtitle lg:mb-[164px]'>
          {contributors.subtitle}
        </p>
        <div className='flex flex-col gap-8 items-center lg:flex-row lg:gap-20 lg:flex-wrap lg:justify-center lg:px-[204px]'>
          {contributors.brands.map((brand, index) => {
            return (
              <div key={index}>
                <img src={brand.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
