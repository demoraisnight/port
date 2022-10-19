import profilePicture from '../assets/profile.png';

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export const colors = {
  first: '#232122',
  second: '#836FFF', //ficou legal
  third: '#87CEEB',
  fourth: '#363636', //#363636
}; 

export const headData = {
  title: 'Name | Web developer',
  description: 'Welcome to my website',
};

export const mainData = {
  title: 'Hi, my name is ',
  name: 'Vinícius de Morais',
  subtitle: 'I am a web developer',
  cta: 'Know more',
};

export const aboutData = {
  sectionTitle: 'About',
  img: { src: profilePicture },
  p1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit 
  vehicula lectus. Suspendisse potenti. Ut eget odio eget dolor maximus pharetra 
  eu a risus. Cras elit leo, commodo nec risus in.`,
  p2: `Vivamus nec mattis eros, eget gravida mauris. Nam a turpis vel dui fermentum 
  ultrices. Mauris nec lorem ut nulla placerat bibendum quis et tortor. Phasellus 
  ac pellentesque leo. Donec eu lorem vehicula, ultrices enim ut, convallis nibh. 
  Sed blandit ultricies leo, vel porta ante suscipit a.`,
  p3: `Integer velit nulla, imperdiet suscipit dui non, sodales tincidunt odio. 
  In hac habitasse platea dictumst. Cras ornare feugiat odio, at pharetra ante 
  elementum sit amet. In aliquet purus ut mauris auctor, quis commodo libero 
  dignissim. In tristique mi ut mi vulputate convallis.`,
};

export const projectSectionTitle = 'Projects';

export const projectData = [
  {
    title: 'Project 1',
    description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse rhoncus lectus vitae pulvinar scelerisque.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse rhoncus lectus vitae pulvinar scelerisque. Donec sed
    gravida elit. Duis vel placerat sem, ac condimentum orci. Ut
    scelerisque magna sit amet ex condimentum varius.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/guvarallo/selfolio',
    sourceText: 'Source Code',
    img: { src: project1 },
  },
  {
    title: 'Project 2',
    description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse rhoncus lectus vitae pulvinar scelerisque.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse rhoncus lectus vitae pulvinar scelerisque. Donec sed
    gravida elit. Duis vel placerat sem, ac condimentum orci. Ut
    scelerisque magna sit amet ex condimentum varius.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/guvarallo/selfolio',
    sourceText: 'Source Code',
    img: { src: project2 },
  },
  {
    title: 'Project 3',
    description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse rhoncus lectus vitae pulvinar scelerisque.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Suspendisse rhoncus lectus vitae pulvinar scelerisque. Donec sed
    gravida elit. Duis vel placerat sem, ac condimentum orci. Ut
    scelerisque magna sit amet ex condimentum varius.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/guvarallo/selfolio',
    sourceText: 'Source Code',
    img: { src: project3 },
  },
];

export const contactData = {
  title: 'Contact',
  description: 'Send me an e-mail!',
  mailTo: 'mailto:viniciusdemoraisrosa@gmail.com',
};

export const FooterData = {
  githubUrl: 'https://github.com/demoraisnight',
  linkedinUrl: 'https://br.linkedin.com/in/vin%C3%ADcius-de-morais-rosa-21bb32234',
};
