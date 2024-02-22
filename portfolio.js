import emoji from "react-easy-emoji";


export const greetings = {
  name: "Harry Rhodes",
  title: "Welcome to my Portfolio.",
  intro: "I'm a Software Developer and graduate from Makers' Full Stack Software Development course. I love understanding how things work, problem-solving and learning.",
  technologies: "I'm a proud father, a lover of cycling and I'm addicted to chocolate digestives!",
  CVLink: "https://docs.google.com/document/d/1WDQ-0gyIWZ4Quz8XPf9fVCJSYeT4G6iH9QUZh5Qx7nI/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "hjtrhodes",
};

export const contact = {};

export const socialLinks = {
  gmail: "gmail link",
  github: "https://github.com/hjtrhodes",
  linkedin: "https://www.linkedin.com/in/hjtrhodes",
};

export const skillsSection = {
  title: "Technologies and Skills",
  subTitle: "Below are some of my skills and the technologies I have experience with so far, but I always want to learn more! Currently I'm deepening my knowledge of React and experimenting with Typescript.",
  data: [
    {
      title: "",
      lottieAnimationFile: "/lottie/webdev.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Adept problem-solver."
        ),
        emoji(
          "⚡ Excellent communicator.",
        ),
        emoji(
          "⚡ Collaborative team worker.",
        ),
        emoji(
          "⚡ Highly resourceful.",
        ),
        emoji(
          "⚡ Consistently proactive.",
        ),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "React",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nodejs",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql-icon",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "vscode-icons:file-type-git",
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "vscode-icons:file-type-tailwind",
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "vscode-icons:file-type-jest",
        },
        {
          skillName: "Cypress",
          fontAwesomeClassname: "vscode-icons:file-type-cypress",
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Programming",
  },
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
  },
  {
    Stack: "Backend",
  },
  {
    Stack: "Security",
  },
];

export const educationInfo = [
  {
    schoolName: "Professional:",
    subHeader: "",
    duration: "",
    grade: "",
    desc: "",
    descBullets: [
      "As an aspiring tech professional with a background as a primary teacher and year group leader, I have a proven track record of effective collaboration and communication when leading teams and maintaining positive relationships with a plethora of stakeholders; strong adaptation and problem solving skills when helping individuals to make progress, regardless of their needs; and a budding passion for all things technological after utilising technology to inspire young people.",
      "After taking time to expose myself to basic programming in HTML, CSS and Python I realised how much I enjoyed the challenge of solving coding problems and mastering new ideas. As a result I made the exciting decision to pursue a career in Tech and completed the Makers Software Development bootcamp. It was there I was pleased to discover that abilities honed in my previous career, such as simplifying and breaking down concepts, collaborating with a team to pursue a shared goal and my desire to learn, have served me well when mastering the new technologies, programming languages, and development tools I have been exposed to.",
      "In my new career I am looking for an opportunity to add value to a collaborative and innovative environment. I am excited to progress my skills by deepening my current knowledge base and challenging myself to learn even more new technologies."    ],
    github: "https://github.com/hjtrhodes",
  },
  {
    schoolName: "Personal:",
    subHeader: "",
    duration: "",
    grade: "",
    desc: "",
    descBullets: [
      "I am a father to my adorable one year old son, Freddie, and husband to Madeleine. I moved to a small town just outside Reading last year but previously lived in Central London for ten years.", 
      "Originally, I am from Jersey in the Channel Islands. I lived there for 21 years before I moved to London. I still have family and friends there who I try to visit as much as possible.",
      "I went to the University of Exeter for my Bachelors Degree and UEL for my Masters. My wife and I met during our time at Exeter University and love going back to visit the city.",
      "I love sports: running, cycling, Formula 1, rugby, weightlifting and American football all find a place on my list of interests. I am a cyclist myself and love exploring the countryside on my bike.",
      "I have always enjoyed unraveling and understanding the workings of things, be it hardware or software. Whether it's DIY around the house or fixing motorbikes during my teenage years; I have always been a tinkerer, taking things apart, working out the problems and fixing them.", 
      "This pleasure now extends to coding. I enjoy consistently expanding my knowledge to meet the challenge infront of me, deepening my understanding of the logic and syntax along the way. I am incredibly excited to continue my professional journey and see how much more I can learn!"
    ],
    github: "https://github.com/hjtrhodes",
  }
];

export const experience = [
  {
    role: "",
    company: "Makers Academy",
    companylogo: "/img/icons/common/Makers.jpeg",
    date: "September 2023 – January 2024",
    desc:
      "Software Development Graduate",
  },
  {
    role: "",
    company: "University of East London",
    companylogo: "/img/icons/common/ovs.png",
    date: "September 2016 – August 2018",
    desc:
    "Master of Arts in Education, Pass with Distinction",
  },
  {
    role: "",
    company: "University of East London",
    companylogo: "/img/icons/common/ovs.png",
    date: "September 2014 – August 2015",
    desc:
    "Postgraduate Certificate of Education",
  },
  {
    role: "",
    company: "University of Exeter",
    companylogo: "/img/icons/common/chamber.jpeg",
    date: "September 2008 – August 2011",
    desc:
      "Bachelor of Arts with Honours in Sociology, 2:1"  },
];

export const projects = [
  {
    name: "Bald Bible",
    img: "/img/icons/common/BaldBible.jpeg",
    mov: "RZVKPn00WF8",
    desc:
      "Pinterest style, hair loss positivity website. Javascript. Tech Stack: React, Express, Node.js, MongoDB. Testing: Jest. Other Tech: Cloudinary, Bcrypt. Functionality includes login, signup, Cloudinary image feed/upload, responsive feed page, likes, comments, password security using Bcrypt, test suite. Built in a collaborative team in 2 weeks using AGILE methodology.",
    github: "https://github.com/hjtrhodes/baldbibleHR",
    link: "https://baldbible-s8q0.onrender.com/",
    tags: ["MERN", "MongoDB", "React", "Node", "Express"],
  },
  {
    name: "Acebook",
    img: "/img/icons/common/Acebook.jpeg",
    mov: "t2ITyMQkPe0",
    desc:
      "Facebook clone. Javascript, Typescript. Tech Stack: React, Express, Node.js, MongoDB, TailwindCSS. Testing: Cypress, Jest. Other Tech: TailwindCSS, Multer, PostCSS, Vite, Bcrypt. Functionality includes login, signup, posts, newsfeed, profile page, likes, comments, search, navbar, image uploads. Built in a collaborative team in 2 weeks using AGILE methodology.",
    github: "https://github.com/hjtrhodes/Acebook-my-version",
    link: "https://acebook-mo3r.onrender.com/",
    tags: ["MERN", "MongoDB", "React", "Node", "Express"],
  },
  {
    name: "HomeStay",
    img: "/img/icons/common/HomeStay.jpeg",
    mov: "",
    desc:
      "AirBnB clone. Tech Stack: Python, Flask, PostgreSQL. Testing: Pytest. Functionality includes login, signup, sessions, user spaces, book a space with calendar, approve/reject a space. Built in a collaborative team in 1 week using AGILE methodology.",
    github: "https://github.com/hjtrhodes/MakersBNBPersonal",
    link: "",
    tags: ["Python", "Flask", "SQL", "Postgres", "Pytest"],
  },
  {
    name: "Rock, Paper, Scissors",
    img: "/img/icons/common/RPS.jpeg",
    mov: "",
    desc:
      "Rock, Paper, Scissors Game. Javascript. Tech: Vite, React. Personal project and deployment made to practise using components, state, props, rules matrixes, conditional rendering and deployment to a web host. The base of this project was Vite.",
      github: "https://github.com/hjtrhodes/RockPaperScissorReact",
      link: "",
    tags: ["React", "Props", "State"],
  },
];


export const feedbacks = [
  {
    name: "Austin Coontz",
    feedback:
      "I was trying to make a website that is blazingly fast. I had no idea where to start. What did I do? Called my friend Brendan. I had no Idea what i Was doing! He fixed it. Website? Fast. Blazingly. Done.",
  },
  {
    name: "Andrew Rose",
    feedback:
      "Brendan Glancy, the website developer I worked with was exceptional. He took the time to understand my needs and goals, and created a website that not only met, but exceeded my expectations. Their communication was clear and timely throughout the process, and I would highly recommend them to anyone in need of an exceptional website.",
  },
];

export const seoData = {
  title: "Harry Rhodes' Portfolio",
  description: "Software Developer showcasing my projects and skills.",
  url: "https://hrhodes.co.uk/",
  keywords: [
    "Harry Rhodes",
    "Portfolio",
    "Full Stack Developer",
    "Software Developer",
    "Open to work",
    "Developer",
    "web developer",
  ],
};
