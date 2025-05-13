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
  learning_design,
  gamica,
  eg_solutions,
  shopify,
  covidImage,
  expenseTracker,
  wacom,
  bakeplus_image,
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
  },
  {
    name: "Wacom",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "magento",
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
      {
        name: "XML",
        color: "yellow-text-gradient",
      },
      {
        name: "jquery",
        color: "dualpink-text-gradient",
      },
    ],
    image: wacom,
    liveUrl: "https://estore.wacom.kr/",
  },
  {
    name: "Bakeplus",
    description:
      "BakePlus is an online store offering a wide range of baking and cooking ingredients like powdered eggs, cocoa, and milk powders. It caters to both retail and industrial customers with customizable packaging and ready-made mixes. The site features a clean layout, organized categories, and support for bulk orders..",
    tags: [
      {
        name: "magento",
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
      {
        name: "XML",
        color: "yellow-text-gradient",
      },
      {
        name: "jquery",
        color: "dualpink-text-gradient",
      },
    ],
    image: bakeplus_image,
    liveUrl: "https://shop.mcstaging.bakeplus.com/",
  },

  {
    name: "Learning Design",
    description:
      "Learning Design.ai is a platform designed to streamline and democratize the learning design process, making it accessible to individuals and organizations regardless of their Learning and Development (L&D) background. It leverages advanced AI technology to assist users in creating effective training programs efficiently.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
      {
        name: "jquery",
        color: "dualpink-text-gradient",
      },
    ],
    image: learning_design,
    liveUrl: "https://learningdesign.ai/",
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
