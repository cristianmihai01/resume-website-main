// remix icons
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinFill,
} from 'react-icons/ri';

// services icons
import Service1Icon from './assets/img/services/uiux_design.svg';
import Service2Icon from './assets/img/services/uiux_design.svg';
import Service3Icon from './assets/img/services/uiux_design.svg';

// brands images
import Brand1Image from './assets/img/brands/behance.svg';
import Brand2Image from './assets/img/brands/google.svg';
import Brand3Image from './assets/img/brands/dribbble.svg';
import Brand4Image from './assets/img/brands/uplabs.svg';
import Brand5Image from './assets/img/brands/99designs.svg';

// portfolio images
import PortfolioImage1 from './assets/img/portfolio/p1.jpg';
import PortfolioImage2 from './assets/img/portfolio/p2.jpg';
import PortfolioImage3 from './assets/img/portfolio/p3.jpg';
import PortfolioImage4 from './assets/img/portfolio/p4.jpg';
import PortfolioImage5 from './assets/img/portfolio/p5.jpg';

// ornament
import OrnamentImage from './assets/img/cord-1.svg';

// nav
export const nav = [
  {
    name: 'home',
  },
  {
    name: 'contributors',
  },
  {
    name: 'about me',
  },
  {
    name: 'services',
  },
  {
    name: 'portfolio',
  },
  {
    name: 'contact',
  },
];

// social
export const social = [
  {
    icon: <RiYoutubeFill />,
    href: '',
  },
  {
    icon: <RiInstagramFill />,
    href: '',
  },
  {
    icon: <RiGithubFill />,
    href: '',
  },
  {
    icon: <RiLinkedinFill />,
    href: '',
  },
];

// about
export const about = {
  title: 'About me',
  subtitle:
    "I'm Justin Vaccaro and i do web design, Graphic Design, User Experiences. habitant et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.",
};

// services
export const services = {
  title: 'Services',
  subtitle:
    'Our team members are experts in all facets of the design industry including: print design, illustration, branding, identity and more.',
  skills: [
    {
      icon: Service1Icon,
      name: 'UI/UX Design',
      description:
        "Why money's in that office, right If she start giving me some bullshit about it ain't there someplace or anywhere.",
    },
    {
      icon: Service2Icon,
      name: 'Web Design',
      description:
        "Why money's in that office, right If she start giving me some bullshit about it ain't there someplace or anywhere.",
    },
    {
      icon: Service3Icon,
      name: 'WP Developing',
      description:
        "Why money's in that office, right If she start giving me some bullshit about it ain't there someplace or anywhere.",
    },
  ],
};

// contributors
export const contributors = {
  title: 'Contributors',
  subtitle:
    'They support products that simplify and automate decent mechanic processes saving time for activities.',
  brands: [
    {
      image: Brand1Image,
    },
    {
      image: Brand2Image,
    },
    {
      image: Brand3Image,
    },
    {
      image: Brand4Image,
    },
    {
      image: Brand5Image,
    },
  ],
};

// portfolio
export const portfolio = {
  preTitle: 'Our Regular Updated',
  title: 'Portfolio.',
  images: [
    {
      image: PortfolioImage1,
    },
    {
      image: PortfolioImage2,
    },
    {
      image: PortfolioImage3,
    },
    {
      image: PortfolioImage4,
    },
    {
      image: PortfolioImage5,
    },
  ],
};

// contact
export const contact = {
  ornamentImage: OrnamentImage,
  title: 'Contact.',
  subtitle:
    'Truth is a deep kindness that teaches us to be content in our everyday life and share with the people the same happiness. the feeling of sunday is the same everywhere: heavy, melancholy, standing still..',
};
