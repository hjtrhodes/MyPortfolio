import emoji from "react-easy-emoji";

export const greetings = {
  name: "Harry Rhodes",
  title: "Welcome to my Portfolio",
  intro: "Hi, I'm Harry. I'm a Software Developer learning Full Stack Web Development with Makers. I love understanding how things work, problem-solving and learning! I'm a proud father, a lover of cycling and I'm addicted to chocolate digestives!",
  technologies: "So far on my journey I have experience building applications with Vanilla JavaScript, React, Node, Python and Flask. I also have experience with SQL, Postgres and MongoDB as well as Jest, Cypress and Pytest for testing.",
  CVLink: "https://docs.google.com/document/d/1WDQ-0gyIWZ4Quz8XPf9fVCJSYeT4G6iH9QUZh5Qx7nI/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "hjtrhodes",
};

export const contact = {};

export const socialLinks = {
  gmail: "gmail link",
  github: "https://github.com/hjtrhodes",
  linkedin: "https://linkedin.com/in/harry-rhodes-851b3663",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/webdev.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications.",
        ),
        emoji(
          "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks.",
        ),
        emoji(
          "⚡ Cyber Security, HackTheBox Globally Ranked 534, Top 2% in PicoCTF 2022",
        ),
      ],
      softwareSkills: [
        {
          skillName: "python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "cpp",
          fontAwesomeClassname: "logos:c-plusplus",
        },
        {
          skillName: "reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "vuejs",
          fontAwesomeClassname: "logos:vue",
        },
        {
          skillName: "nodejs",
          fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
          skillName: "astro",
          fontAwesomeClassname: "vscode-icons:file-type-astro",
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "php",
          fontAwesomeClassname: "logos:php",
        },
        {
          skillName: "yarn",
          fontAwesomeClassname: "logos:yarn",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "MySQL-icon",
          fontAwesomeClassname: "logos:mysql-icon",
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "logos:vercel-icon",
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "logos:nextjs-icon",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb-icon",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
        },
        {
          skillName: "spring-boot",
          fontAwesomeClassname: "logos:spring-icon",
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
    schoolName: "Akron University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "August 2021 - Present",
    grade: "3.8 GPA",
    desc: "Programming CIS degree",
    descBullets: [
      "The Bachelor of Science in Computer Information Systems (CIS) - Programming degree option allows students to attain knowledge of effective software application development, client/server application development, and database application development and management for businesses.",
      "The CIS - Programming degree option is designed to prepare students for careers in the field of software engineering and development.",
    ],
    github: "https://github.com/BrendanGlancy/akron/",
  },
  {
    schoolName: "Tech Elevator",
    subHeader: "Full Stack Development",
    duration: "September 2020 - December 2020",
    desc: "Programming Bootcamp to learn Full Stack Development",
    descBullets: [
      "  Object-Oriented Programming: Java",
      "  Web Application Development: HTML, CSS, JavaScript, Vue.js, APIs using Spring Boot, Tomcat",
      "  Database Programming: Spring JDBC/DAO, Table Design, SQL, PostgreSQL, E/R diagrams",
      "  Completed 1000+ hours of Java, Spring, SQL, and JavaScript training",
      "  Completed 100+ hours of pair programming on group projects",
    ],
    github: "https://github.com/BrendanGlancy/BreweryLocater",
  },
];

export const experience = [
  {
    role: "Information Technology",
    company: "Chamber of Commerce",
    companylogo: "/img/icons/common/chamber.jpeg",
    date: "June 2019 – Present",
    desc:
      "Communicate with managers to set up computers used on in the office, Assess and troubleshoot computer problems brought by managers, faculty a. Maintain upkeep of computers, servers, and 20+ websites used by the Chamber and local businesses",
  },
  {
    role: "Software Developer Intern",
    company: "OVS Knife Co.",
    companylogo: "/img/icons/common/ovs.png",
    date: "December 2022",
    descBullets: [
      "  As a Software Developer Intern at OVS Knife Co, I am responsible for the development and maintenance of the company's web application. Utilizing my skills in Next.js, React, MongoDB, Node.js, Django, and Express.js.",
      "  I work independently to implement new features, improve the overall user experience and make sure the platform is reliable and fast for our customers.",
    ],
  },
];

export const projects = [
  {
    name: "Ronis Hair Forum",
    desc:
      "Custom website for a local hair salon, Responsive Ready, Powered by Bootstrap 4, Dedicated portfolio and blog page, Easy Customization",
    link: "https://ronishair.com/",
    tags: ["Java", "VueJS", "PostgreSQL"],
  },
  {
    name: "Empyrial",
    desc:
      "Contributor on Empyrial, Empyrial is a Python-based open-source quantitative investment library dedicated to financial institutions and retail investors, officially released in March 2021. Already used by thousands of people working in the finance industry, Empyrial aims to become an all-in-one platform for portfolio management, analysis, and optimization.",
    github: "https://github.com/ssantoshp/Empyrial",
    link: "https://ssantoshp.github.io/Empyrial/",
    tags: ["python", "finace", "machine learning"],
  },
  {
    name: "Knifely",
    desc:
      "Professional Knife Sharpening site for our company. Made with Tailwind CSS, Gatsby v3, and NextJS. Looking for a reliable and professional residential knife sharpening service in Akron? Look no further than Knifely!",
    github: "https://github.com/OVS-Knife",
    link: "https://www.knifely.com/",
    tags: ["NextJS", "Gatsby", "JavaScript"],
  },
  {
    name: "OVS Knife Co.",
    desc:
      "As a Software Developer Intern at OVS Knife Co, I am responsible for the development and maintenance of the company's web application. Utilizing my skills in Next.js, React, MongoDB, Node.js, Django, and Express.js, I work independently to implement new features, improve the overall user experience and make sure the platform is reliable and fast for our customers.",
    link: "https://ovsknife.com/home",
    tags: ["Intern", "Full Stack", "E-Commerce"],
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
  title: "Harry's Portfolio",
  description: "Software Developer showcasing my work.",
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
