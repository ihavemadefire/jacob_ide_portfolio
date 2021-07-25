import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jacob Ide', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jacob Ide',
  subtitle: 'Web Developer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpg',
  paragraphOne: 'I’m a web developer. I am equally comfortable implementing a front end design as I am working with frameworks, middleware, and databases.  I am presently employed as a Gatsby React developer intern for a marketing and branding firm. I am most comfortable working in Python and Python frameworks (Django or Flask). I am also adept at SQL queries, Data analysis in Python or R. I also have a knack for Product and Project management.',
  paragraphTwo: 'I’ve had an atypical background for a developer. My academic background is in the humanities, achieving a B.A. in Philosophy with a minor in Classics. My love of and natural skill in both languages and symbolic logic at university made my transition into software a natural choice. The impetus for me to become a full stack software engineer came in my time working in the Energy sector, surrounded by opportunities for improvement. When the opportunity to retool my career with Holberton came, it jumped at it.',
  paragraphThree: 'I am motivated by a desire to continuously improve products and processes to more quickly, and more efficiently deliver on strategy. That might sound like boilerplate MBA student mumbo jumbo, but in my case it’s true. I bring that enthusiasm for continuous improvement to any team I’m part of.  Plus, I bring the best dad jokes.',
  resume: 'https://jacobmeide.s3.amazonaws.com/Jacob_Ide_Product_Manager_2021.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'garyavegold.png',
    title: "Ide's Gary Ave Gold",
    info: 'Commercial site for local honey Company',
    info2: 'HTML/bootstrap Application acting as an extended digital business card',
    url: 'www.garyavegold.com',
    repo: 'https://github.com/ihavemadefire/garyavegold.com',
  },
  {
    id: nanoid(),
    img: 'byy.png',
    title: 'Best Year Yet',
    info: 'Personal improvement application to track progress on New years resolutions',
    info2: 'This is a flask application with a html/bootstrap front end. The long term plan for this project is to deploy it as a social site where people can encourage each other to meet and exceed their goals. Ass of now, it is only deployed on a Heroku test server',
    url: 'https://best-year-yet.herokuapp.com/',
    repo: 'https://github.com/ihavemadefire/BestYearYet',
  },
  {
    id: nanoid(),
    img: 'cicero.png',
    title: 'Cicero',
    info: 'This program automates much of the Dead Meter Back Billing process for the City of Tulsa',
    info2: 'This program was developed before studying at Holberton. It was built on the job as a way to autmoate the boring stuff and save work hours for the city. It is entirely written in VBA and Excel. Dummy information is provided in order to make the demo the software.',
    url: '',
    repo: 'https://github.com/ihavemadefire/Cicero',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Jacobei6',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/JacobIde',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jacobide/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ihavemadefire',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://jacobmeide.medium.com/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
