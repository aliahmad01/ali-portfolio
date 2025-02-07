import {
  mobile,
  backend,
  MERN,
  web,
  javascript,
  typescript,
  express,
  restaurant,
  next,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  yorfy,
  gamica,
  eg_solutions,
  shopify,
  covidImage,
  expenseTracker,
  coinflip,
  todoJS,
  threejs,
  netflix,
  ecom
} from "../assets";
import nestjs from "../assets/tech/nestjs.svg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Design",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer (React,Laravel, Magento 2)",
    icon: backend,
  },
  {
    title: "MERN Developer",
    icon: MERN,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Nextjs",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "NestJs",
  //   icon: nestjs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "ExpressJs",
    icon: express,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Junior Developer Intern",
    company_name: "GamicaCloud",
    icon: gamica,
    iconBg: "#383E56",
    date: "February 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed many designs using tailwind, material UI, Bootstrap etc",
      "Learnt Nodejs, Express, Mongodb",
    ],
  },
  {
    title: "Assiatant Software Engineer",
    company_name: "EG Solutions Pvt Ltd",
    icon: eg_solutions,
    iconBg: "rgb(29, 24, 54)",
    date: "October 2024 - Present",
    points: [
      "Worked on multiple frameworks like Nextjs, Reactjs, Laravel and Magento 2 etc",
      "Lead the Skillmatch Website (A platform for the recruitment Process)",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Covid 19 Tracker",
    description:
      "Get in-depth information about the total cases, recovered cases, and unfortunate deaths for each selected country in specific timeframes.Dynamic Bar graph display how the virus spread, the recovery trends, and the unfortunate loss of lives over time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
    ],
    image: covidImage,
    liveUrl: "https://covid19trracker.surge.sh/",
    source_code_link: "https://github.com/ehtashamtoor/covid19tracker/",
  },
  {
    name: "Expense Tracker",
    description:
      "Monitor your balance, track your expenses and income effortlessly, and achieve financial clarity. Add transactions with ease using intuitive input fields. Take charge of your financial journey today and use our Expense Tracker App for a smarter approach to managing your money.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: expenseTracker,
    liveUrl: "https://exxpense-manageer.surge.sh/",
    source_code_link: "https://github.com/ehtashamtoor/expense-manager",
  },
  {
    name: "Coin Flip Design",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: coinflip,
    liveUrl: "https://coin-flip-jade.vercel.app/",
    source_code_link: "https://github.com/ehtashamtoor/CoinFLip",
  },
  {
    name: "TodoApp(JS)",
    description:
      "A simple todo app built using javascript to test the javascript logic. In it you can read  your todos, add them from the fields and even edit and delete them.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todoJS,
    liveUrl: "https://todo-appjs.surge.sh/",
    source_code_link: "https://github.com/ehtashamtoor/Todo-app-Vanilla-JS",
  },

  {
    name: "Yorfy",
    description:
      "A Yorfy Responsive website design made using MATERIAL UI. MUI is from the top most css styling frameworks in the world today. This project gives an insight about the styling made using MUI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: yorfy,
    liveUrl: "https://yorrfy.vercel.app/",
    source_code_link: "https://github.com/ehtashamtoor/Yorfy/",
  },
  {
    name: "Ecom Design",
    description:
      "A eCommerce Responsive website design made using HTML5 CSS3 and JavaScript. It ensures a seamless user experience across different devices with modern styling and interactive features.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      }

    ],
    image: ecom,
    liveUrl: "https://shiny-begonia-1e0d20.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
