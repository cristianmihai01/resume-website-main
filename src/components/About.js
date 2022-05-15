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
          <div className='absolute left-[42%] top-[38%] md:left-[50%] md:top-[35%] w-32 h-32 bg-accent z-30 rounded-full mix-blend-hue blur-[30px]'></div>
          <img className='mx-auto z-20 relative' src={Image} alt='' />
        </div>
        <div className='hidden lg:block lg:absolute xl:top-0 lg:left-0 lg:right-0 lg:h-full lg:bg-rope lg:bg-no-repeat lg:bg-bottom lg:bg-contain z-10'></div>
      </div>
    </section>
  );
};

export default About;
