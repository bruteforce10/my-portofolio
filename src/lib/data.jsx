import { icons } from "react-icons";
import html from "../../public/skill-icon/html.svg";
import css from "../../public/skill-icon/css.svg";
import javascript from "../../public/skill-icon/javascript.svg";
import sass from "../../public/skill-icon/sass.svg";
import react from "../../public/skill-icon/react.svg";
import bootstrap from "../../public/skill-icon/bootstrap.svg";
import tailwind from "../../public/skill-icon/tailwind.svg";
import firebase from "../../public/skill-icon/firebase.svg";
import vue from "../../public/skill-icon/vue.svg";
import next from "../../public/skill-icon/next.svg";
import redux from "../../public/skill-icon/redux.svg";
import jquery from "../../public/skill-icon/jquery.svg";
import git from "../../public/skill-icon/git.svg";
import github from "../../public/skill-icon/github.svg";
import npm from "../../public/skill-icon/npm.svg";
import figma from "../../public/skill-icon/figma.svg";
import wordpress from "../../public/skill-icon/wordpress.svg";
import vercel from "../../public/skill-icon/vercel.svg";
import xampp from "../../public/skill-icon/xampp.svg";
import nodejs from "../../public/skill-icon/nodejs.svg";

import show1 from "../../public/projects/sipilku/1.png";
import show2 from "../../public/projects/sipilku/2.png";
import show3 from "../../public/projects/sipilku/3.png";
import show4 from "../../public/projects/sipilku/4.png";
import show5 from "../../public/projects/portofolio/1.png";
import show6 from "../../public/projects/portofolio/2.png";
import show7 from "../../public/projects/portofolio/3.png";
import show8 from "../../public/projects/portofolio/4.png";
import show9 from "../../public/projects/portofolio/5.png";
import show10 from "../../public/projects/connectic/1.png";
import show11 from "../../public/projects/connectic/2.png";
import show12 from "../../public/projects/connectic/3.png";
import show13 from "../../public/projects/connectic/4.png";
import show14 from "../../public/projects/connectic/5.png";
import show15 from "../../public/projects/connectic/6.png";
import logoSipilku from "../../public/projects/sipilku/logo.png";
import logoPortofolio from "../../public/projects/portofolio/logo.png";
import logoConnectic from "../../public/projects/connectic/logo.png";
import logoRemax from "../../public/company/remax.png";
import logoStarmas from "../../public/company/starmas.png";
import lisence1 from "../../public/certificate/bootstrap.png";
import lisence2 from "../../public/certificate/dom.png";
import lisence3 from "../../public/certificate/front-end-bootcamp.png";
import lisence4 from "../../public/certificate/front-end-pemula.png";
import lisence5 from "../../public/certificate/git.png";
import lisence6 from "../../public/certificate/jquery.png";
import lisence7 from "../../public/certificate/react-js-bootcamp.png";
import lisence8 from "../../public/certificate/Sertifikat Wordpress.png";
import lisence9 from "../../public/certificate/ui-design-app.png";

export const LisenceResult = [
  {
    img: lisence1,
    name: "Class Framework Boostrap with CodePolitan",
    date: "Juli 2022",
    link: "https://www.codepolitan.com/c/DBPY2IF",
  },
  {
    img: lisence2,
    name: "Class Javascript DOM with CodePolitan",
    date: "Januari 2022",
    link: "https://www.codepolitan.com/c/SR3FNKT",
  },
  {
    img: lisence3,
    name: "Lukananakit 6.0 Frontend Fundamentals Bootcamp",
    date: "December 2022",
    link: "",
  },
  {
    img: lisence4,
    name: "Front-End Basic with Dicoding",
    date: "Maret 2023",
    link: "https://dicoding.com/certificates/QLZ92WL39X5D",
  },
  {
    img: lisence5,
    name: "Class GIT with CodePolitan",
    date: "Januari 2022",
    link: "https://www.codepolitan.com/c/OUEWH56",
  },
  {
    img: lisence6,
    name: "Class JQuery with CodePolitan",
    date: "Januari 2022",
    link: "https://www.codepolitan.com/c/XNZHBG3",
  },
  {
    img: lisence7,
    name: "Bootcamp React JS with PKS Digital School",
    date: "June 2023",
    link: "https://member.pksdigitalschool.id/sertifikat/generate/552d5aff-c353-4e31-88e0-38a22e801245",
  },
  {
    img: lisence8,
    name: "Class Wordpress with KELASWORDPRESS.MY.ID",
    date: "Agustus 2021",
    link: "",
  },
  {
    img: lisence9,
    name: "Class UI Design Mobile App with Rubrik Grafis",
    date: "April 2021",
    link: "",
  },
];

export const WorkExperienceResult = [
  {
    logo: logoRemax,
    job: "Graphic Designer & Video Editor",
    date: "April 2022 – Present",
    jobList: [
      "Search, create. revise and propose design and promotion concepts",
      "Perform task distribution in teams",
      "Create instagram content design (Reels, Carousel & Story) for pudlish along with creating captions",
      "Helping the support team to compile and tidy up presentation materials",
      "Conducting discussions with the team related to the design that is being worked on and looking for solutions if there are problems",
      "Taking photos of events conducted by the company",
      "Create video shooting or motion graphics (if needed) for RE/MAX offices",
    ],
  },
  {
    logo: logoStarmas,
    job: "Drafter",
    date: "September 2021 – April 2022",
    jobList: [
      "Designing and crafting various types of doors, windows, and sliding doors from planning to hardware implementation, achieving high design standards, and enhancing production efficiency.",
      "Developing efficient and reliable hardware systems to support the products",
      "Regularly monitoring on-site conditions in the factory, improving production efficiency, and ensuring the production of high-quality products.",
      "Successfully contributing to furniture expo events by creating promotional materials such as posters, landing pages, and booth designs, increasing the company's visibility and attracting potential customers",
    ],
  },
];

export const projectsResult = [
  {
    logo: logoSipilku,
    descOne:
      "Sipilku Estimate is your go-to online calculator for construction pros! Plan your <b>projects easily and quickly ✨</b><br/><br/>This calculator helps you determine <b>building material requirements and volumes </b> based on user input.",
    descSecond:
      "It includes 17 construction calculations aligned with Indonesian National Standards (SNI), ensuring precise results.<br /><br />Plus, you can export data to Excel. Sipilku Estimate makes project planning a breeze! 💪",
    image: [show1, show2, show3, show4],
    link: "sipilkuestimate.dev",
    github: "sipilku",
    skills: ["HTML", "JavaScript", "CSS", "BootS"],
  },
  {
    logo: logoPortofolio,
    descOne:
      "Welcome to my creative portfolio, where design and video editing come together to create stunning visual experiences.<br/><br/>Here, you'll discover a variety of projects encompassing logo design, posters, brochures, and captivating videos.",
    descSecond:
      "Explore my works that blend imagination and expertise in the realms of design and video editing  🎨🎥",
    image: [show5, show6, show7, show8, show9],
    link: "firdiaudi.xyz",
    github: "myPortofolio",
    skills: ["HTML", "JavaScript", "SASS", "BootS", "Firebase"],
  },
  {
    logo: logoConnectic,
    descOne:
      "Introducing Connectic - Discover thousands of job openings according to your preferences, track applications, and set notifications. Achieving your dream career just got easier!",
    descSecond:
      "Connectic was created by designing a Minimum Viable Product (MVP) system by harnessing APIs from the courses I undertook. <br/><br/> It comes equipped with various CRUD, account authentication, as well as filtering and searching capabilities, making it user-friendly. 🚀",
    image: [show10, show11, show12, show13, show14, show15],
    link: "connectic.vercel.app",
    github: "connectic",
    skills: ["React", "Vercel", "SASS", "TailW", ""],
  },
];

export const navList = [
  {
    name: "Why me",
    href: "#why",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Work Experience",
    href: "#work",
  },
  {
    name: "Blog ✨",
    href: "#blog",
  },
];

export const navListSecond = [
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Work Experience",
    href: "#work",
  },
  {
    name: "Lisence",
    href: "#lisence",
  },
  {
    name: "Contact Me",
    href: "#contact",
  },
  {
    name: "Blog ✨",
    href: "#blog",
  },
];

export const mySkills = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "BootS",
    icon: bootstrap,
  },
  {
    name: "TailW",
    icon: tailwind,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Jquery",
    icon: jquery,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "NPM",
    icon: npm,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "XAMPP",
    icon: xampp,
  },
];
