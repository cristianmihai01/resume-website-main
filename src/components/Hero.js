import React from 'react';

// import Images
import Man from '../assets/img/man_banner.png';

const Hero = () => {
  return (
    <section className='section bg-heroText bg-contain bg-no-repeat bg-center'>
      <div className='container mx-auto'>
        <div className='lg:flex text-center lg:text-left'>
          <div className='flex-1 lg:max-w-[558px]'>
            <h3 className='text-[18px] lg:text-xl font-semibold mb-2 lg:mb-[50px]'>
              Hola! I'm
            </h3>
            <h2 className='text-[24px] lg:text-[32px] font-semibold text-accent mb-4 lg:mb-5'>
              Justin Vaccaro
            </h2>
            <h1 className='text-[60px] md:text-[80px] lg:text-[100px] leading-none font-semibold mb-6'>
              Creative <br />
              <span className='lg:pl-[70px]'>Designer</span>
              <span className='w-3 h-3 md:w-5 md:h-5 inline-block bg-accent rounded-full ml-2'></span>
            </h1>
            <p className='section-subtitle'>
              Since creative designers often interact with creative teams,
              managers and clients, they need strong communication skills.
            </p>
          </div>
          <div className='flex-1 flex justify-end'>
            <img src={Man} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
