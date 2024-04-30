import {
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  project_1,
  project_2,
  project_3,
  project_4,
  user1,
  user2,
  user3,
  user4,
} from "./images";
import {
  aws,
  chatgpt,
  css,
  docker,
  express,
  firebase,
  git,
  html,
  javaScript,
  mongoDB,
  node,
  postgres,
  react,
} from "./images/icons";

export const projects = [
  {
    title: "React Reserve",
    subtitle: "MERN Stack",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: project_1,
    link: "https://reactbootcamp.com",
  },
  {
    title: "React Tracks",
    subtitle: "React and Python",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: project_2,
    link: "https://reedbarger.com",
  },
  {
    title: "DevChat",
    subtitle: "React and Firebase",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: project_3,
    link: "https://jsbootcamp.com",
  },
  {
    title: "Epic Todo App",
    subtitle: "React Hooks",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
    image: project_4,
    link: "https://pythonbootcamp.com",
  },
];

export const skills = [
  "React + Node + Express",
  "MongoDB & PostgreSQL",
  "Mongoose + Sequalize",
  "Firebase",
  "Next.js",
  "HTML5 + CSS3 + JavaScript ES5/ES6/ES7",
  "JSON",
  "GIT",
  "Developer Tools",
  "Docker",
  "AWS",
];

export const skillsData = [
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript ES5/ES6/ES7", icon: javaScript },
  { name: "React", icon: react },
  { name: "Node", icon: node },
  { name: "Express", icon: express },
  { name: "MongoDB", icon: mongoDB },
  { name: "PostgreSQL", icon: postgres },
  { name: "Firebase", icon: firebase },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "AWS", icon: aws },
  { name: "ChatGPT", icon: chatgpt },
];

export const testimonials = [
  {
    image: user1,
    name: "Batman",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset she",
    company: "DC",
  },
  {
    image: user2,
    name: "Aquaman",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset she",
    company: "WB",
  },
];

export const timelineData = [
  {
    text: "Completed Matriculation SSC ",
    date: "March 01 2016",
    category: {
      tag: "I.G.P. School",
      color: "#018f69",
    },
    // link: {
    //     url:
    //         'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
    //     text: 'Read more'
    // }
  },
  {
    text: "Completed Senior Secondary HSC",
    date: "February 01 2018",
    category: {
      tag: "L.B.S College",
      color: "#018f69",
    },
    // link: {
    //     url:
    //         'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
    //     text: 'Read more'
    // }
  },
  {
    text: "Created a Tech Startup",
    date: "September 08 2021",
    category: {
      tag: "Service Finder Web App",
      color: "#018f69",
    },
    // link: {
    //     url:
    //         'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
    //     text: 'Read more'
    // }
  },
  {
    text: "Completed Bachlor's Degree B.Sc Computer Science ",
    date: "August 13 2022",
    category: {
      tag: "S.R.T.M.U.N",
      color: "#018f69",
    },
    // link: {
    //     url:
    //         'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
    //     text: 'Read more'
    // }
  },
  {
    text: "Web Development Intern",
    date: "August 13 2022",
    category: {
      tag: "Tekisky Pvt Ltd",
      color: "#018f69",
    },
    // link: {
    //     url:
    //         'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
    //     text: 'Read more'
    // }
  },
];

export const certificationsData = [
  { image: cert1, name: "Legacy JavaScript Algorithms and Data Structures" },
  { image: cert2, name: "Responsive Web Design" },
  { image: cert5, name: "Front End Development Libraries" },

  { image: cert3, name: "Back End Development and APIs" },
  { image: cert4, name: "Relational Database" },
];
