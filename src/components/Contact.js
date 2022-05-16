import React from 'react';

// import contact data
import { contact } from '../data';

// import logo
import Logo from '../assets/img/logo.svg';

// import social
import Social from './Social';

const Contact = () => {
  return (
    <section
      className='section before:content-ornament before:flex before:justify-center before:items-center lg:before:mb-44'
      id='contact'
    >
      <div className='container mx-auto'>
        <h2 className='section-title text-accent'>{contact.title}</h2>
        <p className='section-subtitle'>{contact.subtitle}</p>
        <div className='max-w-[200px] lg:max-w-xs mx-auto mb-28'>
          <img className='w-full' src={Logo} alt='' />
        </div>
        <div className='flex justify-center'>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Contact;
