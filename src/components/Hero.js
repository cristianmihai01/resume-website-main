import React from 'react';

// import Images
import Man from '../assets/img/man_banner.png';

const Hero = () => {
  return (
    <section className='section bg-heroText bg-cover'>
      <div className='container mx-auto'>
        <div className='lg:flex'>
          <div className='flex-1'>
            <h3>Hola! I'm</h3>
            <h2>Justin Vaccaro</h2>
            <h1 className='text-[60px] md:text-[80px] lg:text-[100px] leading-none font-semibold mb-[12px]'>
              Creative <br />
              Designer{' '}
              <span className='w-5 h-5 inline-block bg-accent rounded-full'></span>
            </h1>
            <p className='section-subtitle'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus harum totam eaque quasi voluptatibus, dolorem quas
              repudiandae aut recusandae nobis.
            </p>
          </div>
          <div className='flex-1'>
            <img src={Man} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
