// Import images
import WebImage1 from "../images/web-project-1.jpg";

import WebImage2 from "../images/web-project-2.jpg";
import MobileImage1 from "../images/mobile-project-1.jpg";
import MobileImage2 from "../images/mobile-project-2.jpg";

import UIImage1 from "../images/ui-project-1.jpg";
import UIImage2 from "../images/ui-project-2.jpg";

import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiGithub,
} from "react-icons/fi";
import { SiNetlify } from "react-icons/si";

// Import images
import Image1 from "../images/ui-project-1.jpg";
import Image2 from "../images/web-project-2.jpg";
import Image3 from "../images/mobile-project-2.jpg";
import Image4 from "../images/mobile-project-1.jpg";
import Image5 from "../images/web-project-1.jpg";
import Image6 from "../images/ui-project-2.jpg";

import WebImage3 from "../images/web-project-3.png";

import Img1 from "../images/web-project-ui-1.png";
import Img2 from "../images/web-project-ui-2.png";
import Img3 from "../images/web-project-ui-3.png";
import Img4 from "../images/web-project-ui-4.png";

import UIImage3 from "../images/ui-project-3.png";
import UiImg1 from "../images/ui-project-ui-1.png";
import UiImg2 from "../images/ui-project-ui-2.png";
import UiImg3 from "../images/ui-project-ui-3.png";
import UiImg4 from "../images/ui-project-ui-4.png";
import UiImg5 from "../images/ui-project-ui-5.png";

import Form1 from "../images/form1.png";
import FormUi1 from "../images/form-ui-1.png";
import FormUi2 from "../images/form-ui-2.png";

import Tribute from "../images/tribute-page.png";
import TributeUi1 from "../images/tribute-ui-1.png";
import TributeUi2 from "../images/tribute-ui-2.png";

import TechDoc from "../images/tech-doc.png";
import TechDocUI1 from "../images/tech-doc-ui1.png";
import TechDocUI2 from "../images/tech-doc-ui2.png";
import TechDocUI3 from "../images/tech-doc-ui3.png";

import ProductLandingPage from "../images/product-landing-page.png";
import ProductUI1 from "../images/productl-ui1.png";
import ProductUI2 from "../images/productl-ui2.png";
import ProductUI3 from "../images/product-ui3.png";
import ProductUI4 from "../images/productl-ui4.png";
import ProductUI5 from "../images/productl-ui5.png";

import Portfolio1 from "../images/portfolio1.png";
import Portfolio2 from "../images/portfolio2.png";
import Portfolio3 from "../images/portfolio3.png";
import Portfolio4 from "../images/portfolio4.png";
import Portfolio5 from "../images/portfolio5.png";
import Portfolio6 from "../images/portfolio6.png";
import Portfolio7 from "../images/portfolio7.png";

import RandomUi from "../images/randomui1.png";
import Markdown from "../images/markdownui1.png";
import Drum from "../images/drumui1.png";
import Calculatorui from "../images/calculatorui1.png";
import clockui from "../images/clockui1.png";

export const projectsData = [
  //   {
  //     id: 1,
  //     title: "Google Health Platform",
  //     category: "Web Application",
  //     img: WebImage2,
  //     ProjectHeader: {
  //       title: "Project Management UI - From Context",
  //       publishDate: "Jul 26, 2021",
  //       tags: "UI / Frontend",
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: "Phoenix Digital Agency",
  //     category: "Mobile Application",
  //     img: MobileImage2,
  //     ProjectHeader: {
  //       title: "Project Management UI - From Context",
  //       publishDate: "Jul 26, 2021",
  //       tags: "UI / Frontend",
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: "Project Management UI",
  //     category: "UI/UX Design",
  //     img: UIImage1,
  //   },
  //   {
  //     id: 4,
  //     title: "Cloud Storage Platform",
  //     category: "UI/UX Design",
  //     img: UIImage2,
  //   },
  //   {
  //     id: 5,
  //     title: "React Social App",
  //     category: "Mobile Application",
  //     img: MobileImage1,
  //   },
  //   {
  //     id: 6,
  //     title: "Apple Design System",
  //     category: "Web Application",
  //     img: WebImage1,
  //   },
  {
    id: 7,
    title: "E-Commerce Web App",
    category: "Web Application",
    img: WebImage3,
    ProjectHeader: {
      title: "E-Commerce Web App",
      publishDate: "Jul 26, 2021",
      tags: "UI/UX & MERN Full Stack",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Img1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: Img2,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: Img3,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: Img4,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Tekisky Pvt Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design, Backend & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "www.tekisky.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "+91 6281 017 334",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "To develop and showcase proficiency in MERN stack development, I created an ecommerce project with a focus on learning and mastering key concepts and technologies. This project encompasses three distinct user flows: buyer, seller/merchant, and admin, each with its unique functionalities. Leveraging Node.js for backend development, Express middleware for request handling, and Mongoose schemas for data modeling, the project utilizes React for dynamic UI rendering, Redux for state management, and Redux Thunk middleware for handling asynchronous actions. Through this project, I aim to demonstrate my ability to architect and implement complex web applications while deepening my understanding of modern web development practices.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Node",
            "Express",
            "Mongoose",
            "React",
            "Jwt",
            "TailwindCSS",
            "Docker",
          ],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: 1,
          details:
            "An ecommerce store built with MERN stack, and utilizes third party API's.",
        },
        {
          id: 2,
          details:
            "This ecommerce store enable three main different flows or implementations-",
        },
        {
          id: 3,
          details: "* Buyers browse the store categories, products and brands,",
        },
        {
          id: 4,
          details: "* Sellers or Merchants manage their own brand component,",
        },
        {
          id: 5,
          details: "* Admins manage and control the entire store components,",
        },

        {
          id: 6,
          details: "features-",
        },
        {
          id: 7,
          details:
            "* Node provides the backend environment for this application,",
        },
        {
          id: 8,
          details: "* Express middleware is used to handle requests, routes",
        },
        {
          id: 9,
          details: "* Mongoose schemas to model the application data",
        },
        {
          id: 10,
          details: "* React for displaying UI components",
        },
        {
          id: 11,
          details: "* Redux to manage application's state",
        },
        {
          id: 12,
          details:
            "* Redux Thunk middleware to handle asynchronous redux actions",
        },
        {
          id: 13,
          details:
            "* Socket for real time communication between seller and buyer",
        },
      ],
      SocialSharingHeading: "Source Code",
      SocialSharing: [
        {
          id: 1,
          name: "Github",
          icon: <FiGithub />,
          url: "https://github.com/Mohammad-Shoaib-1999/multi-vendor-e-shop",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 8,
    title: "Nike Landing Page",
    category: "UI/UX Design",
    img: UIImage3,
    ProjectHeader: {
      title: "UI/UX Landing Page",
      publishDate: "Jul 26, 2021",
      tags: "Frontend & Tailwind Css",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: UiImg1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: UiImg2,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: UiImg3,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: UiImg4,
      },
      {
        id: 5,
        title: "Kabul Project Management UI",
        img: UiImg5,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "Tekisky Pvt Ltd",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: 3,
          title: "Website",
          details: "www.tekisky.com",
        },
        {
          id: 4,
          title: "Phone",
          details: "+91 6281 017 334",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:"The objective of this project is to deepen my understanding of Tailwind CSS and its practical application in frontend development by building a Nike website. Through hands-on experience, I aim to solidify my knowledge of Tailwind's features and best practices, ultimately honing my skills as a frontend developer. By completing this project, I seek to demonstrate my ability to create visually appealing and responsive web applications, thereby enhancing my portfolio and positioning myself for success in the competitive field of web development.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React.js", "TailwindCSS", "Vite"],
        },
      ],
      ProjectDetailsHeading: "Description",
      ProjectDetails: [
        {
          id: 1,
          details:"Embark on a journey into the world of Tailwind CSS as I undertake the development of a captivating Nike website project. In this hands-on endeavor, I'll explore the nuances of Tailwind CSS, fully grasping its utility-first approach and mastering best practices along the way. Joining the ranks of esteemed organizations such as OpenAI, Shopify, and NASA, I'll craft a visually striking and responsive web application that showcases the power and versatility of Tailwind CSS."
        },
        {
          id: 2,
          details:"Guided by comprehensive tutorials and resources, I'll dive into the project setup, meticulously crafting each component of the Nike website. From the dynamic NavBar to the compelling Customer Reviews section, every aspect of the website will reflect the newfound proficiency in Tailwind CSS. Through this project, I'll not only enhance my frontend development skills but also gain practical experience in building modern, user-centric web applications."
        },
       
      ],
      SocialSharingHeading: "Source Code & Demo Link",
      SocialSharing: [
        {
          id: 1,
          name: "Netlify",
          icon: <SiNetlify />,
          url: "https://gregarious-semolina-6913a5.netlify.app/",
        },
        {
          id: 2,
          name: "Github",
          icon: <FiGithub />,
          url: "https://github.com/Mohammad-Shoaib-1999/nike-landingpage-clone",
        },
      
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 9,
    title: "Survey Form",
    category: "UI/UX Design",
    img: Form1,
    ProjectHeader: {
      title: "UI/UX Survey Form",
      publishDate: "Jul 26, 2021",
      tags: "Frontend & Tailwind Css",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Form1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: FormUi1,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: FormUi2,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "freeCodeCamp",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Responsive Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.freecodecamp.org/",
        },
        {
          id: 4,
          title: "Phone",
          details: "*** **** ***",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:"Build a Survey Form project as part of my MERN Full Stack Development journey with freeCodeCamp! 🚀 This project helped me deepen my understanding of HTML forms, CSS styling, and JavaScript validation techniques. Excited to apply these skills to create more interactive and user-friendly web applications in the future! #freeCodeCamp #FullStackDevelopment #WebDevelopment #HTML #CSS #JavaScript",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
           
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:"As part of my MERN Full Stack Development journey with freeCodeCamp, I embarked on the creation of a Survey Form project, a pivotal step in honing my frontend development skills. Through this project, I delved into the intricacies of HTML forms, refined my CSS styling techniques, and mastered JavaScript validation methods, laying a solid foundation for my journey as a web developer."
        },
        {
          id: 2,
          details:"Guided by the principles of user-centric design, I meticulously crafted each aspect of the Survey Form, ensuring an intuitive and seamless user experience. From the layout and styling to the validation of user inputs, every detail was meticulously implemented to showcase my proficiency in frontend development."
        },
        {
          id: 3,
          details:"This project served as a catalyst for my growth as a developer, enabling me to apply theoretical knowledge to practical scenarios and gain hands-on experience in building interactive and user-friendly web applications. As I look forward to the future, I am excited to leverage the skills acquired through this project to create even more dynamic and impactful web applications."
        },
        {
          id: 4,
          details:"Join me on this journey as I continue to explore the realms of Full Stack Development, fueled by the passion to innovate and create meaningful digital experiences. Together, let's push the boundaries of what's possible in the ever-evolving landscape of web development."
        },
      ],
      SocialSharingHeading: "Demo & Source Code",
      SocialSharing: [
        {
          id: 1,
          name: "Netlify",
          icon: <SiNetlify />,
          url: "https://lighthearted-flan-29cf7c.netlify.app/",
        },
        {
          id: 2,
          name: "Github",
          icon: <FiGithub />,
          url: "https://github.com/Mohammad-Shoaib-1999/survey_form",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 10,
    title: "Tribute Landing Page",
    category: "UI/UX Design",
    img: Tribute,
    ProjectHeader: {
      title: "Tribute Landing Page",
      publishDate: "Jul 26, 2021",
      tags: "Frontend & Tailwind Css",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Tribute,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: TributeUi1,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: TributeUi2,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "freeCodeCamp",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Responsive Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.freecodecamp.org/",
        },
        {
          id: 4,
          title: "Phone",
          details: "*** **** ***",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:" Delighted to share my completion of the 'Build a Tribute Page' project! 🎉 Through this project, I honed my skills in structuring web content with HTML and enhancing its visual appeal with CSS. It was inspiring to create a tribute page dedicated to a notable figure, and I learned the importance of storytelling in web design. Can't wait to apply these principles to future projects! #freeCodeCamp #WebDesign #HTML #CSS"
      ,Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
           
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:"Dive into the realm of web development with the Tribute Page Challenge! 🚀 Your mission is to build an application that mirrors the functionality of the FreeCodeCamp Tribute Page demo, but with your unique twist."
        },
        {
          id: 2,
          details:"Your task is to fulfill the following user stories:"
        },
        {
          id: 3,
          details:"Create a main element with an id of 'main' that encapsulates all other elements. *Include an element with an id of 'title' containing a string describing the subject of the tribute page.* Within an element with an id of 'img-div', display an image with an id of 'image' and a corresponding caption with an id of 'img-caption'. * Incorporate an element with an id of 'tribute-info' containing textual content describing the subject of the tribute page. * Integrate an anchor element with an id of 'tribute-link' linking to an external site with additional information about the subject."
        },
        {
          id: 4,
          details:"Ensure that your application passes all the provided tests and adheres to the specified styling requirements. Additionally, infuse your personal style and creativity into the design to make your Tribute Page stand out!"
        },
      ],
      SocialSharingHeading: "Demo & Source Code",
      SocialSharing: [
        {
          id: 1,
          name: "Netlify",
          icon: <SiNetlify />,
          url: "https://willowy-muffin-d2cc4e.netlify.app/",
        },
        {
          id: 2,
          name: "Github",
          icon: <FiGithub />,
          url: "https://github.com/Mohammad-Shoaib-1999/tribute_page",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 11,
    title: "Technical Documentation Page",
    category: "UI/UX Design",
    img: TechDoc,
    ProjectHeader: {
      title: "Technical Documentation Page",
      publishDate: "Jul 26, 2021",
      tags: "Frontend & Tailwind Css",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: TechDoc,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: TechDocUI1,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: TechDocUI2,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: TechDocUI3,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "freeCodeCamp",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Responsive Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.freecodecamp.org/",
        },
        {
          id: 4,
          title: "Phone",
          details: "*** **** ***",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:"Just wrapped up the 'Build a Technical Documentation Page' project! 💻 This project challenged me to organize technical information effectively using HTML structure and CSS styling. I gained hands-on experience in creating clear and concise documentation layouts, which are essential skills for any developer. Excited to continue refining my technical communication skills as I progress in my journey! #freeCodeCamp #TechnicalDocumentation #HTML #CSS"
      ,Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:"The Technical Documentation Page Challenge build an application akin to the FreeCodeCamp Technical Documentation Page demo, but with my own creative touch!"
        },
        {
          id: 2,
          details:"Mission involves fulfilling the following user stories:"
        },
        {
          id: 3,
          details:"Created a main element with an id of 'main-doc' containing the technical documentation content.* Within the #main-doc element, included at least five section elements with a class of 'main-section'.* Ensured each .main-section element begins with a header element describing the topic, with corresponding ids and content.* Populated each .main-section with at least ten paragraphs, five code elements, and five list items.* Integrated a nav element with an id of 'navbar', including headers and link elements corresponding to the main sections.*  Implemented navigation functionality, allowing users to navigate to the relevant section by clicking on navbar links.* Ensured the #navbar remains visible on the left side of the screen for regular-sized devices using media queries."
        },
        {
          id: 4,
          details:
            "Conquered this challenge by demonstrating proficiency in HTML, CSS, and JavaScript while delivering a polished and user-friendly Technical Documentation Page. Creativity shine as i personalize the design and layout to make it unique!",
        },
      ],
      SocialSharingHeading: "Demo & Source Code",
      SocialSharing: [
        {
          id: 1,
          name: "Netlify",
          icon: <SiNetlify />,
          url: "https://lucky-wisp-073d4f.netlify.app/",
        },
        {
          id: 2,
          name: "Github",
          icon: <FiGithub />,
          url: "https://github.com/Mohammad-Shoaib-1999/technical_documentation_page",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 12,
    title: "Product Landing Page",
    category: "UI/UX Design",
    img: ProductLandingPage,
    ProjectHeader: {
      title: "Product Landing Page",
      publishDate: "Jul 26, 2021",
      tags: "Frontend & Tailwind Css",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: ProductLandingPage,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: ProductUI1,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: ProductUI2,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: ProductUI3,
      },
      {
        id: 5,
        title: "Kabul Project Management UI",
        img: ProductUI4,
      },
      {
        id: 6,
        title: "Kabul Project Management UI",
        img: ProductUI5,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "freeCodeCamp",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Responsive Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.freecodecamp.org/",
        },
        {
          id: 4,
          title: "Phone",
          details: "*** **** ***",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:"Build a Product Landing Page project! 🛍️ This project pushed me to think creatively about user experience and conversion optimization. I learned how to design engaging landing pages using HTML, CSS, and JavaScript, and how to integrate multimedia elements to captivate the audience. Can't wait to apply these marketing-oriented skills in future projects! #freeCodeCamp #WebDevelopment #ProductLandingPage #HTML #CSS #JavaScript",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:"The Product Landing Page Challenge! 🚀  objective is to build an application akin to the FreeCodeCamp Product Landing Page demo, but with your unique touch."
        },
        {
          id: 2,
          details:"Here are the user stories that guided me through the challenge:          "
        },
        {
          id: 3,
          details:"Created a header element with an id of 'header'. Within the header element, included an image with an id of 'header-img' (consider using a logo). Inside the #header element, incorporated a nav element with an id of 'nav-bar' containing at least three clickable elements with the class 'nav-link'. Implemented navigation functionality so that clicking a '.nav-link' button takes users to the corresponding section of the landing page. Included an embedded product video with an id of 'video'. Integrated a form element with an id of 'form' containing an input field with an id of 'email' for users to enter their email address. Ensured the #email input field has placeholder text and uses HTML5 validation for email addresses. Added a submit input with an id of 'submit' within the form to allow users to submit their email addresses. Upon clicking the #submit element, direct the email submission to a static page (used this mock URL: https://www.freecodecamp.com/email-submit). Kept the navbar at the top of the viewport for ease of navigation. Utilized at least one media query and CSS flexbox for responsive design."
        },
        {
          id: 4,
          details:"Embarked on this challenge to demonstrate my proficiency in HTML, CSS, and JavaScript while creating a visually appealing and functional Product Landing Page. Let my creativity shine as i personalize the design and layout to make it unique!"
        },
      ],
      SocialSharingHeading: "Demo & Source Code",
      SocialSharing: [
        {
          id: 1,
          name: "Netlify",
          icon: <SiNetlify />,
          url: "https://spiffy-monstera-d1f680.netlify.app/",
        },
        {
          id: 2,
          name: "Github",
          icon: <FiGithub />,
          url: "https://github.com/Mohammad-Shoaib-1999/product_landing_page",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 13,
    title: "Personal Portfolio Webpage",
    category: "UI/UX Design",
    img: Portfolio1,
    ProjectHeader: {
      title: "Personal Portfolio Webpage",
      publishDate: "Jul 26, 2021",
      tags: "Frontend & Tailwind Css",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Portfolio1,
      },
      {
        id: 2,
        title: "Kabul Project Management UI",
        img: Portfolio2,
      },
      {
        id: 3,
        title: "Kabul Project Management UI",
        img: Portfolio3,
      },
      {
        id: 4,
        title: "Kabul Project Management UI",
        img: Portfolio4,
      },
      {
        id: 5,
        title: "Kabul Project Management UI",
        img: Portfolio4,
      },
      {
        id: 6,
        title: "Kabul Project Management UI",
        img: Portfolio5,
      },
      {
        id: 7,
        title: "Kabul Project Management UI",
        img: Portfolio6,
      },
      {
        id: 8,
        title: "Kabul Project Management UI",
        img: Portfolio7,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "freeCodeCamp",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Responsive Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.freecodecamp.org/",
        },
        {
          id: 4,
          title: "Phone",
          details: "*** **** ***",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:"Build a Personal Portfolio Webpage project! 🌟 This project allowed me to showcase my skills, projects, and achievements in a professional and visually appealing manner. I learned valuable lessons in UI/UX design, responsive web development, and creating a cohesive online presence. Looking forward to continuously improving my portfolio as I grow in my career! #freeCodeCamp #Portfolio #WebDevelopment #UIUX #HTML #CSS #JavaScript",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "TailwindCSS",
            "Vite",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:"Build an application similar to the FreeCodeCamp Personal Portfolio demo, but with your unique flair."
        },
        {
          id: 2,
          details:"Here are the user stories that guided me through the challenge:"
        },
        {
          id: 3,
          details:"Created a 'Welcome' section with an id of 'welcome-section'. Within the #welcome-section, included an h1 element containing text to greet visitors. Developed a 'Projects' section with an id of 'projects', featuring at least one element with a class of 'project-tile' to showcase your projects. Ensured the #projects section includes at least one link (a element) to a project. Incorporated a navbar with an id of 'navbar', containing at least one link (a element) to navigate to different sections of the page. Included a link with an id of 'profile-link' that opens your GitHub or freeCodeCamp profile in a new tab. Utilized at least one media query to ensure responsiveness across devices. Ensured the height of the welcome section matches the height of the viewport. Kept the navbar fixed at the top of the viewport for easy navigation."
        },
        {
          id: 4,
          details: "Created a visually appealing and functional Personal Portfolio Webpage that highlights my achievements and projects."
        },
      ],
      SocialSharingHeading: "Demo & Source Code",
      SocialSharing: [
        {
          id: 1,
          name: "Netlify",
          icon: <SiNetlify />,
          url: "/",
        },
        {
          id: 2,
          name: "Github",
          icon: <FiGithub />,
          url: "https://github.com/Mohammad-Shoaib-1999/personal_portfolio",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 14,
    title: "Random Quote Machine",
    category: "UI/UX Design",
    img: RandomUi,
    ProjectHeader: {
      title: "Random Quote Machine",
      publishDate: "Jul 26, 2021",
      tags: "Frontend & Tailwind Css",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: RandomUi,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "freeCodeCamp",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Responsive Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.freecodecamp.org/",
        },
        {
          id: 4,
          title: "Phone",
          details: "*** **** ***",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "The objective behind building the Random Quote Machine project was to gain practical experience in frontend web development, particularly in working with APIs, handling user interactions, and applying styling and layout techniques. By completing this project, the goal was to enhance skills in HTML, CSS, and JavaScript, as well as to gain familiarity with frontend frameworks like React. Additionally, the project aimed to reinforce understanding of core concepts such as DOM manipulation, event handling, and asynchronous programming. Overall, the objective was to build a functional and visually appealing application that meets specific user requirements while also allowing for personal creativity and style.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "TailwindCSS",
            "Vite",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:"API Integration: Integrating with a quote API posed a challenge initially. Understanding how to make API requests, handle responses, and extract the required data required some research and experimentation."
        },
        {
          id: 2,
          details:"Rendering Random Quotes: Implementing the functionality to display random quotes upon page load and when the 'New Quote' button is clicked required careful handling of data fetching and rendering."
        },
        {
          id: 3,
          details:"Tweet Functionality: Incorporating the ability to tweet the current quote presented a challenge due to Twitter's restrictions on iframe loading. Finding a workaround, such as using the target attribute in the anchor tag, was necessary to enable tweeting functionality."
        },
        {
          id: 4,
          details:"Styling and Layout: Ensuring the #quote-box wrapper element was horizontally centered and styling the components to achieve a visually appealing layout required attention to detail and CSS techniques, especially when considering responsiveness across different devices."
        },
        {
          id: 5,
          details:"Testing and Debugging: Running tests provided by FreeCodeCamp to ensure all user stories were fulfilled required thorough testing and debugging. Addressing any failing tests and ensuring all functionality worked as expected was crucial before submitting the project."
        },
        {
          id: 6,
          details:"Overall, overcoming these challenges required a combination of problem-solving skills, research, and persistence. By tackling each obstacle methodically and leveraging available resources, I was able to successfully complete the project and meet all user requirements."
        },
      ],
      SocialSharingHeading: "Demo & Source Code",
      SocialSharing: [
        {
          id: 1,
          name: "Netlify",
          icon: <SiNetlify />,
          url: "https://wonderful-quokka-b229d9.netlify.app/",
        },
        {
          id: 2,
          name: "Github",
          icon: <FiGithub />,
          url: "https://github.com/Mohammad-Shoaib-1999/random-quote-machine",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 15,
    title: "Markdown Previewer",
    category: "UI/UX Design",
    img: Markdown,
    ProjectHeader: {
      title: "Markdown Previewer",
      publishDate: "Jul 26, 2021",
      tags: "Frontend & Tailwind Css",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Markdown,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "freeCodeCamp",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Responsive Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.freecodecamp.org/",
        },
        {
          id: 4,
          title: "Phone",
          details: "*** **** ***",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:"The objective behind building the Markdown Previewer project was to gain practical experience in frontend web development, particularly in working with user input, text rendering, and external libraries. By completing this project, the goal was to enhance skills in HTML, CSS, JavaScript, and frontend frameworks like React. Additionally, the project aimed to reinforce understanding of core concepts such as event handling, DOM manipulation, and integrating third-party libraries.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "TailwindCSS",
            "Vite",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:"Textarea and Preview Integration: Integrating the textarea element (#editor) with the preview element (#preview) posed a challenge initially. Ensuring that the preview updates in real-time as text is entered into the textarea required careful event handling and DOM manipulation."
        },
        {
          id: 2,
          details:"Markdown Rendering: Implementing the functionality to render GitHub flavored markdown as HTML in the preview element presented a challenge. While the Marked library simplifies this task, understanding its usage and integrating it effectively into the project required some experimentation and troubleshooting."
        },
        {
          id: 3,
          details:"Default Markdown Content: Creating default markdown content in the editor field that includes various markdown elements (e.g., headings, links, code blocks) proved to be challenging. Ensuring that the default content is valid markdown and is rendered correctly in the preview element required attention to detail and understanding of markdown syntax."
        },
        {
          id: 4,
          details:"Styling and Layout: Designing the layout and applying styles to achieve a visually appealing and user-friendly interface posed its own set of challenges. Ensuring responsiveness across different devices and browsers required careful consideration and testing."
        },
        {
          id: 5,
          details:"Testing and Debugging: Running tests provided by FreeCodeCamp to ensure all user stories were fulfilled required thorough testing and debugging. Addressing any failing tests and ensuring all functionality worked as expected was crucial before submitting the project."
        },
        {
          id: 6,
          details:"Overcoming these challenges required a combination of problem-solving skills, research, and persistence. By tackling each obstacle methodically and leveraging available resources, I was able to successfully complete the project and meet all user requirements."
        },
      ],
      SocialSharingHeading: "Demo & Source Code",
      SocialSharing: [
        {
          id: 1,
          name: "Netlify",
          icon: <SiNetlify />,
          url: "https://clinquant-kataifi-bcba39.netlify.app/",
        },
        {
          id: 2,
          name: "Github",
          icon: <FiGithub />,
          url: "https://github.com/Mohammad-Shoaib-1999/markdown-previewer",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 16,
    title: "Drum Machine",
    category: "UI/UX Design",
    img: Drum,
    ProjectHeader: {
      title: "Drum Machine",
      publishDate: "Jul 26, 2021",
      tags: "Frontend & Tailwind Css",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Drum,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "freeCodeCamp",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Responsive Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.freecodecamp.org/",
        },
        {
          id: 4,
          title: "Phone",
          details: "*** **** ***",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:"The objective behind building the Drum Machine project was to gain practical experience in frontend web development, particularly in working with user interactions, audio playback, and event handling. By completing this project, the goal was to enhance skills in HTML, CSS, JavaScript, and frontend frameworks like React. Additionally, the project aimed to reinforce understanding of core concepts such as component-based architecture, state management, and user interface design.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "TailwindCSS",
            "Vite",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:"Component Structure: Structuring the components and understanding the relationship between the outer container (#drum-machine), drum pads, and display element required careful planning and organization."
        },
        {
          id: 2,
          details:"Audio Integration: Integrating audio files and ensuring they are played when a drum pad is clicked or a corresponding key is pressed presented a challenge. Handling audio playback and synchronization with user interactions required understanding of HTML5 audio elements and event handling."
        },
        {
          id: 3,
          details:"Keyboard Event Handling: Implementing keyboard event handling to trigger drum pads when associated keys are pressed required understanding of event listeners and key codes. Ensuring consistent behavior across different browsers and keyboard layouts required thorough testing and debugging."
        },
        {
          id: 4,
          details:"Unique Display Text: Generating unique display text for each drum pad when triggered posed a challenge. Ensuring each audio clip is associated with a unique string displayed in the #display element required careful mapping and handling of data."
        },
        {
          id: 5,
          details:"Styling and Layout: Designing the layout and applying styles to create an intuitive and visually appealing drum machine interface required attention to detail and understanding of CSS techniques. Ensuring responsiveness across different devices and browsers added complexity to the styling process."
        },
       
      ],
      SocialSharingHeading: "Demo & Source Code",
      SocialSharing: [
        {
          id: 1,
          name: "Netlify",
          icon: <SiNetlify />,
          url: "https://fabulous-cobbler-31cb84.netlify.app/",
        },
        {
          id: 2,
          name: "Github",
          icon: <FiGithub />,
          url: "https://github.com/Mohammad-Shoaib-1999/drum-machine",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 17,
    title: "JavaScript Calculator",
    category: "UI/UX Design",
    img: Calculatorui,
    ProjectHeader: {
      title: "JavaScript Calculator",
      publishDate: "Jul 26, 2021",
      tags: "Frontend & Tailwind Css",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: Calculatorui,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "freeCodeCamp",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Responsive Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.freecodecamp.org/",
        },
        {
          id: 4,
          title: "Phone",
          details: "*** **** ***",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails: "The objective behind building the JavaScript Calculator project was to gain practical experience in frontend web development, particularly in working with user interactions, input validation, and mathematical operations. By completing this project, the goal was to enhance skills in HTML, CSS, JavaScript, and frontend frameworks like React.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "TypeScript",
            "React.js",
            "TailwindCSS",
            "Vite",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:"Input Handling: Implementing input handling for numbers, operators, and decimal points required careful consideration of user interactions and validation of input sequences. Ensuring that numbers do not begin with multiple zeros and that only one decimal point can be added to a number were specific challenges."
        },
        {
          id: 2,
          details:"Operator Logic: Implementing the logic to handle multiple operators, order of operations, and consecutive operators posed challenges. Ensuring that the calculator performs calculations correctly based on the sequence of operators entered by the user required thorough testing and debugging."
        },
        {
          id: 3,
          details:"Display Management: Managing the display to show input values, intermediate results, and final output required dynamically updating the display element based on user input and calculation results. Handling edge cases such as clearing the display and displaying initial state (0) required careful implementation."
        },
        {
          id: 4,
          details:"Decimal Precision: Ensuring that the calculator provides accurate results with reasonable precision, especially when dealing with decimal calculations, was a challenge. Handling rounding and precision to at least four decimal places required attention to detail and thorough testing."
        },
        {
          id: 5,
          details:"User Interface Design: Designing a user-friendly interface with clickable elements for numbers, operators, and special functions (e.g., clear) while maintaining a visually appealing layout posed design challenges. Ensuring responsiveness and compatibility across different devices and screen sizes added complexity to the UI design process."
        },
      ],
      SocialSharingHeading: "Demo & Source Code",
      SocialSharing: [
        {
          id: 1,
          name: "Netlify",
          icon: <SiNetlify />,
          url: "https://jolly-manatee-ede34c.netlify.app/",
        },
        {
          id: 2,
          name: "Github",
          icon: <FiGithub />,
          url: "https://github.com/Mohammad-Shoaib-1999/javascript-calculator",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
  {
    id: 18,
    title: "25 + 5 Clock",
    category: "UI/UX Design",
    img: clockui,
    ProjectHeader: {
      title: "25 + 5 Clock",
      publishDate: "Jul 26, 2021",
      tags: "Frontend & Tailwind Css",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Kabul Project Management UI",
        img: clockui,
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: 1,
          title: "Name",
          details: "freeCodeCamp",
        },
        {
          id: 2,
          title: "Services",
          details: "UI Responsive Web Design",
        },
        {
          id: 3,
          title: "Website",
          details: "https://www.freecodecamp.org/",
        },
        {
          id: 4,
          title: "Phone",
          details: "*** **** ***",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:"The objective behind building the Pomodoro Clock project was to gain practical experience in frontend web development, particularly in working with time intervals, user interactions, and state management. By completing this project, the goal was to enhance skills in HTML, CSS, JavaScript, and frontend frameworks like React.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "TypeScript",
            "React.js",
            "TailwindCSS",
            "Vite",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: 1,
          details:"Timer Logic: Implementing the timer logic to start, pause, resume, and reset the countdown timer required careful handling of time intervals and state management. Ensuring that the timer accurately counts down and updates the display every second posed a challenge."
        },
        {
          id: 2,
          details:"Session and Break Length: Implementing the logic to handle session and break lengths and ensuring that users cannot set lengths less than or equal to 0 or greater than 60 required input validation and updating the display accordingly."
        },
        {
          id: 3,
          details:"User Interface: Designing and implementing the user interface with clickable elements for adjusting session and break lengths, starting/stopping the timer, and resetting the timer required careful layout planning and styling. Ensuring that the interface remains responsive and visually appealing added complexity."
        },
        {
          id: 4,
          details:"Audio Playback: Integrating HTML5 audio playback for the alarm sound when the timer reaches zero required handling audio playback events and ensuring that the audio element plays correctly and stops when the timer is reset."
        },
        {
          id: 5,
          details:"State Management: Managing the application state, including the current session length, break length, timer status (running/paused), and remaining time, required careful state management to ensure that the application behaves as expected in different scenarios."
        },
      ],
      SocialSharingHeading: "Demo & Source Code",
      SocialSharing: [
        {
          id: 1,
          name: "Netlify",
          icon: <SiNetlify />,
          url: "https://dulcet-yeot-6ecd2d.netlify.app/",
        },
        {
          id: 2,
          name: "Github",
          icon: <FiGithub />,
          url: "https://github.com/Mohammad-Shoaib-1999/twenty-five-plus-five-clock",
        },
      ],
    },
    RelatedProject: {
      title: "Related Projects",
      Projects: [
        {
          id: 1,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 2,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
        {
          id: 4,
          title: "Kabul Mobile App UI",
          img: Image3,
        },
      ],
    },
  },
];
