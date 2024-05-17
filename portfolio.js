import emoji from "react-easy-emoji";

export const greetings = {
  name: "Harry Rhodes",
  title: "Welcome to my portfolio.",
  intro:
    "I'm Harry, a Software Engineer at Abstract Leap in Oxford. I specialise in C#, .NET, ASP.NET and Azure. I'm a graduate from Makers' Full Stack Software Development course who loves problem-solving, learning and understanding how things work!",
  CVLink:
    "",
};

export const greetingsSkills = {
  data: [
    {
      softwareSkills1: [
        // {
        //   skillName: "CSharp",
        //   fontAwesomeClassname: "logos:csharp",
        // // },
        // {
        //   skillName: "NET",
        //   fontAwesomeClassname: "logos:react",
        // },
        // {
        //   skillName: "ASPNET",
        //   fontAwesomeClassname: "devicon:express",
        // },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "logos:azure",
        // },
      ],

      softwareSkills2: [
      ],
    },
  ],
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
  subTitle:
    "Below are some of my skills and the technologies I have experience with so far, but I code everyday and am constantly upskilling. Currently I'm deepening my knowledge of effective React development and working with Redux.",
  data: [
    {
      title: "",
      lottieAnimationFile: "/lottie/webdev.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Adept problem-solver."),
        emoji("⚡ Excellent communicator."),
        emoji("⚡ Collaborative team worker."),
        emoji("⚡ Highly resourceful."),
        emoji("⚡ Consistently proactive."),
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
          fontAwesomeClassname: "logos:react",
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
      "As a tech professional with a background as a primary teacher and year group leader, I have a proven track record of effective collaboration and communication when leading teams and maintaining positive relationships with a plethora of stakeholders; strong adaptation and problem solving skills when helping individuals to make progress, regardless of their needs; and a budding passion for all things technological after utilising technology to inspire young people.",
      "After taking time to expose myself to basic programming in HTML, CSS and Python I realised how much I enjoyed the challenge of solving coding problems and mastering new ideas. As a result I made the exciting decision to pursue a career in Tech and completed the Makers Software Development bootcamp. It was there I was pleased to discover that abilities honed in my previous career, such as simplifying and breaking down concepts, collaborating with a team to pursue a shared goal and my desire to learn, have served me well when mastering the new technologies, programming languages, and development tools I have been exposed to.",
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
    desc: "Software Development Graduate",
  },
  {
    role: "",
    company: "University of East London",
    companylogo: "/img/icons/common/ovs.png",
    date: "September 2016 – August 2018",
    desc: "Master of Arts in Education, Pass with Distinction",
  },
  {
    role: "",
    company: "University of East London",
    companylogo: "/img/icons/common/ovs.png",
    date: "September 2014 – August 2015",
    desc: "Postgraduate Certificate of Education",
  },
  {
    role: "",
    company: "University of Exeter",
    companylogo: "/img/icons/common/chamber.jpeg",
    date: "September 2008 – August 2011",
    desc: "Bachelor of Arts with Honours in Sociology, 2:1",
  },
];

export const projects = [
  {
    name: "Bald Bible - Makers Project",
    img: "/img/icons/common/BaldBible.jpeg",
    mov: "RZVKPn00WF8",
    desc: "Pinterest style, hair loss positivity website built in a team using AGILE methodology. Timeline was 2 weeks.",
    languages: "Languages: Javascript",
    tech: "Tech Stack: React, Express, Node.js, MongoDB",
    testing: "Testing: Jest",
    other: "Other Tech: Cloudinary, Bcrypt",
    functionality:
      "Functionality: login, signup, image feed/upload, likes, comments, password security",
    github: "https://github.com/hjtrhodes/baldbibleHR",
    link: "",
    tags: ["MERN", "MongoDB", "React", "Node", "Express"],
  },
  {
    name: "Acebook - Makers Project",
    img: "/img/icons/common/Acebook.jpeg",
    mov: "t2ITyMQkPe0",
    desc: "Facebook clone built in a team using AGILE methodology. Timeline was 2 weeks.",
    languages: "Languages: Javascript, Typescript",
    tech: "Tech Stack: React, Express, Node.js, MongoDB",
    testing: "Testing: Cypress, Jest",
    other: "Other Tech: TailwindCSS, Multer, PostCSS, Vite, Bcrypt",
    functionality:
      "Functionality: login, signup, posts, newsfeed, profile page, likes, comments, search, navbar, image uploads",
    github: "https://github.com/hjtrhodes/Acebook-my-version",
    link: "",
    tags: ["MERN", "MongoDB", "React", "Node", "Express"],
  },
  {
    name: "HomeStay - Makers Project",
    img: "/img/icons/common/HomeStay.jpeg",
    mov: "pBcMyL0oLbo",
    desc: "AirBnB clone built in a collaborative team using AGILE methodology. Timeline was 1 week.",
    languages: "Languages: Python, SQL, Javascript",
    tech: "Tech Stack: Flask, PostgreSQL",
    testing: "Testing: Pytest",
    other: "",
    functionality:
      "Functionality: login, signup, sessions, user spaces, book a space with calendar, approve/reject a space",
    github: "https://github.com/hjtrhodes/MakersBNBPersonal",
    link: "",
    tags: ["Python", "Flask", "SQL", "Postgres", "Pytest"],
  },
  {
    name: "Rock, Paper, Scissors",
    img: "/img/icons/common/RPS.jpeg",
    mov: "JbLGVsDVAZo",
    desc: "Rock, Paper, Scissors Game. This is a small personal project I created when first learning React to practise using components, managing and passing state and functions as props, rules matrixes and later, my first deployment.",
    languages: "Languages: Javascript",
    tech: "Tech Stack: Vite, React",
    testing: "",
    other: "",
    functionality:
      "Functionality: game logic, win/loss conditional rendering, username display",
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
  description: "Software Engineer showcasing my projects and skills.",
  url: "https://hrhodes.co.uk/",
  keywords: [
    "Harry Rhodes",
    "Portfolio",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Javascript Developer",
    "Python Developer",
    "Software Developer",
    "Open to work",
    "Developer",
    "web developer",
  ],
};
