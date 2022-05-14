import React from 'react';

// import social data
import { social } from '../data';

const Social = () => {
  return (
    <div className='flex justify-center lg:justify-start gap-10 mb-[35px]'>
      {social.map((item, index) => {
        return (
          <a className='text-3xl' href={item.href} key={index}>
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
