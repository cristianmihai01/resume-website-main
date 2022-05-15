import React from 'react';

// import about data
import { about } from '../data';

// import Images
import Image from '../assets/img/man_about.png';

const About = () => {
  return (
    <section
      className='section relative lg:before:content-pattern lg:before:absolute lg:before:top-[332px] lg:before:left-[180px]'
      id='about'
    >
      <div className='container mx-auto'>
        <h2 className='section-title'>
          {about.title}
          <span className='dot'></span>
        </h2>
        <p className='section-subtitle'>{about.subtitle}</p>
        <div>
          <img className='mx-auto' src={Image} alt='' />
        </div>
        <div className='hidden lg:flex lg:absolute lg:left-0 lg:right-0 lg:w-full lg:h-[1000px] lg:bg-rope lg:bg-no-repeat lg:bg-bottom lg:bg-cover z-20'></div>
      </div>
    </section>
  );
};

export default About;
