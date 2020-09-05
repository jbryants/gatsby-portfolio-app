import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bryan Thomas | Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Bryan Thomas',
  subtitle: "I'm a Software Engineer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Software engineer who loves to build products, solve problems and add business value
     by writing applications that are useful to people.`,
  paragraphTwo: `Built complex front end single page applications using React and robust backend systems using RESTful APIs with 
  different languages and frameworks such as Django, Nodejs & Spring alongside database technologies such as MySQL, PostgreSQL, SQLite & MongoDB.
  Strong engineering professional with a Bachelor of Engineering focused in CSE from St. Francis Institute Of Technology, Mumbai University.`,
  paragraphThree: 'Looking for work opportunities, I can work on any given popular tech stack.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Purchase Tracker',
    info:
      'A purchase tracker application where users can create their vegetables and fruits grocery list and smartly & efficiently keep track of their expenses being incurred while purchasing them.',
    infoLine2: '',
    infoLine3: '',
    info2:
      'React | Redux | React Router | Material-UI | Redux Form | Lodash | Axios | Django | Django REST framework | PostgreSQL',
    url: '',
    videoUrl: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Streamy.png',
    title: 'Streamy',
    info: 'A simple twitch clone, where users can stream videos and others can view it.',
    infoLine2: '',
    infoLine3: '',
    info2:
      'React | Redux | React Router | Redux Form | Google OAuth | JSON Server | Lodash | Node Media Server',
    url: 'https://flamboyant-sammet-43b265.netlify.app/',
    videoUrl: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'PizzaApp.png',
    title: "Pinocchio's Pizza & Subs",
    info:
      'Web application for handling a pizza restaurant’s online orders. \nUsers will be able to browse the restaurant’s menu, add items to their cart, make payment and submit their orders. \nMeanwhile, the restaurant owners will be able to add and update menu items, and view orders that have been placed.',
    infoLine2: '',
    infoLine3: '',
    info2:
      'HTML | CSS | JavaScript | Bootstrap | Python | Django | SQLite | Stripe API | Celery | RabbitMQ',
    url: '',
    videoUrl: 'https://www.youtube.com/watch?v=Y47KCq8V9AQ',
    repo: 'https://github.com/jbryants/Pizza-Ordering-EComm-Webapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'YoutubeApp.png',
    title: 'Minimalistic Youtube App',
    info: 'A minimalistic youtube player app to search and play videos in a simple focused manner.',
    infoLine2: '',
    infoLine3: '',
    info2: 'React | SemanticUI | Axios | Youtube API',
    url: 'https://videos-hooks-tan-two.vercel.app/',
    videoUrl: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Flack.png',
    title: 'Flack',
    info: 'Flack is an online messaging service similar in spirit to Slack.',
    infoLine2:
      'Users will be able to sign into the site with a display name, create channels (i.e. chatrooms) to communicate in, as well as see and join existing channels.',
    infoLine3:
      'Once a channel is selected, users will be able to send and receive messages with one another in real time.',
    info2: 'HTML | CSS | Bootstrap | JavaScript | Socket.io | Python | Flask',
    url: '',
    videoUrl: 'https://www.youtube.com/watch?v=hZIiivrHbeU',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'BooksApp.png',
    title: 'BooksApp',
    info: 'BooksApp is a book review website where users can register and log in.',
    infoLine2:
      'Once they log in, they will be able to search for books, leave reviews for individual books, and see the reviews made by other people.',
    infoLine3: 'There are also ratings for books provided by Goodreads website.',
    info2: 'HTML | CSS | Bootstrap | JavaScript | Python | Flask | PostgreSQL | Goodreads API',
    url: '',
    videoUrl: 'https://www.youtube.com/watch?v=XNGYUxqZtT0',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CS50_Finance.png',
    title: 'CS50 Finance',
    info: 'C$50 Finance, a web app via which you can manage portfolios of stocks.',
    infoLine2:
      'Not only will this tool allow you to check real stocks’ actual prices and portfolios’ values,',
    infoLine3: 'it will also let you buy and sell stocks by querying IEX for stocks’ prices.',
    info2: 'HTML | CSS | Bootstrap | JavaScript | Python | Flask | IEX API | SQLite',
    url: '',
    videoUrl: '',
    repo: 'https://github.com/jbryants/CS50/tree/master/pset8/finance', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jbryants19d@gmail.com',
  url: 'https://www.linkedin.com/in/bryan-thomas',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jbryants',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bryan-thomas',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
