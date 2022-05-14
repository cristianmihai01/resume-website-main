import React, { useEffect, useState } from 'react';

// import nav data
import { nav } from '../data';

// import logo
import Logo from '../assets/img/logo.svg';

// import react scroll link
import { Link } from 'react-scroll';

// import icons
import { RiBarChartHorizontalLine, RiCloseFill } from 'react-icons/ri';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // window scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // if window scrollY is bigger than 100px setBg to true else setBg to false
      if (window.scrollY > 40) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-white shadow-lg py-6' : 'py-9'
      }  fixed w-full z-50 transition-all`}
      id='home'
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          <ul
            className={`${
              showNav ? 'left-0' : '-left-full'
            } flex flex-col justify-center items-center fixed top-0 bg-fuchsia-300 w-96 h-full duration-200 transition-all`}
          >
            {nav.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.name}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          <div onClick={() => setShowNav(!showNav)} className='cursor-pointer'>
            {showNav ? (
              <RiCloseFill className='w-8 h-8' />
            ) : (
              <RiBarChartHorizontalLine className='w-8 h-8' />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
