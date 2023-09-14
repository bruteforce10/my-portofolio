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
import logoSipilku from "../../public/projects/sipilku/logo.png";
import logoPortofolio from "../../public/projects/portofolio/logo.png";

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
