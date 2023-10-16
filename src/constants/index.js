import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  figma,
  threejs,
  redux,
  tailwind,
  nextjs,
  reactjs,
  nodejs,
  mongodb,
  git,
  meta,
  datacomm,
  myCasa,
  myStore,
  ecommadmin,
  yelpcamp,
  shopper,
  portfolio,
  promptopia,
  threejsai,
  threads,
  nike,
  pricewise,
  summarize,
  travel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "JavaScript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "html",
    icon: html,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Threejs",
    icon: threejs,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Network Engineer",
    company_name: "Datacomm Express",
    icon: datacomm,
    iconBg: "#fff",
    date: "Jan 2017 - Oct 2021",
    points: [
      "Building and maintaining network connections.",
      "Troubleshooting and configuring of routers.",
      "Assembling,configuring and installation of CCTV cameras.",
      "Monitoring check in and out process for each worker.",
    ],
  },

  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but you proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like He does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After You optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Pricewise",
    description:
      "A web scraping app that scrapes data such as product image, prices, ratings, and descriptions from amazon website and displays it in a user-friendly interface. Also a track option where you can provide email and it will track the product for you using cron job.",
    tags: [
      {
        name: "nextjs13",
        color: "blue-text-gradient",
      },
      {
        name: "brightdata",
        color: "green-text-gradient",
      },
      {
        name: "cronjob",
        color: "pink-text-gradient",
      },
      {
        name: "webscraping",
        color: "blue-text-gradient",
      },
    ],
    image: pricewise,
    source_code_link: "https://github.com/namodynamic/pricewise_project",
    see_live_link: "https://pricewise-pro.vercel.app/",
  },
  {
    name: "Summarizer",
    description:
      "An open-source article summarizer that transforms lengthy articles into clear and concise summaries.",
    tags: [
      {
        name: "rapidai",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "react-redux",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
    ],
    image: summarize,
    source_code_link: "https://github.com/namodynamic/ai-summarizer",
    see_live_link: "https://ai-sumarize.netlify.app/",
  },
  {
    name: "Travel App UI/UX",
    description:
      "A full responsive modern UI/UX landing page built with Tailwindcss, Nextjs13 and TypeScript.",
    tags: [
      {
        name: "nextjs13",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/namodynamic/travel-app",
    see_live_link: "https://travelapp-n.vercel.app/",
  },
  {
    name: "Nike Landing Page",
    description:
      " A fully responsive Nike landing page, works smoothly on any device thanks to Tailwindcss. Discover the perfect blend of style and practicality on my Nike landing page, where great design meets full responsiveness. ",
    tags: [
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/namodynamic/nike-landing-page",
    see_live_link: "https://nike-land-page.vercel.app/",
  },
  {
    name: "myCasa",
    description:
      "Real Estate web application dashboard that serves as a platform for managing real estate properties. It provides a user-friendly interface for real estate agents, property managers, and clients to interact and manage property listings.Built using MERN stack,REFINE and other technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "refine",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: myCasa,
    source_code_link:
      "https://github.com/namodynamic/Refine_Realestate_Dashboard",
    see_live_link: "https://mycasa-dashboard.netlify.app/",
  },
  {
    name: "Threads Clone",
    description:
      "A clone of Threads app built using the cutting-edge technology stack of Next.js 13.4 and Clerk for seamless authentication. With the power of Next.js 13.4, the user experience is taken to a whole new level of speed and responsiveness.",
    tags: [
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/namodynamic/threads_app-project",
    see_live_link: "https://threads-app-project.vercel.app/",
  },
  {
    name: "AI-Powered 3D Shirt Website",
    description:
      "Create unique & exclusive shirt with 3D customization tool,upload your own logo,change color or even write a customized prompt to ask AI to generate logo & texture for you.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "dalle-ai",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "white-text-gradient",
      },
    ],
    image: threejsai,
    source_code_link: "https://github.com/namodynamic/threejs_ai_project",
    see_live_link: "https://three-ai.netlify.app",
  },

  {
    name: "Promptopia",
    description:
      "Promptopia is an open-source AI prompting tool for modern world to discover,create and share creative prompts.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "white-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/namodynamic/promptopia",
    see_live_link: "https://promptopia-n.vercel.app/",
  },
  {
    name: "myStore",
    description:
      "E-commerce web application that incorporates various key features and functionalities that are essential for an e-commerce platform using MERN(MongoDB,Express.js,React.js and Node.js) stack with other frameworks and libraries.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
    ],
    image: myStore,
    source_code_link: "https://github.com/namodynamic/MERN-Ecomm-website",
    see_live_link: "https://mermecomm.netlify.app/",
  },
  {
    name: "myStore admin dashboard",
    description:
      "Ecommerce admin Dashboard where admin can efficiently handle products, categories, orders, users, and other essential entities within the e-commerce system.Default login:admin@gmail.com,password:admin",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "restAPI",
        color: "blue-text-gradient",
      },
    ],
    image: ecommadmin,
    source_code_link: "https://github.com/namodynamic/MERN-Ecomm-admin",
    see_live_link: "https://mernecomm-admin.netlify.app",
  },
  {
    name: "3D Portfolio",
    description:
      "A portfolio website that showcase my skills and works as a web developer. It uses 3D graphics and animation to create a visually appealing and interactive experience.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "white-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/namodynamic/3D_Portfolio",
    see_live_link: "https://nnamdiekechi.netlify.app",
  },
  {
    name: "Yelpcamp",
    description:
      "Web app used as campground directory and review platform.Users can add,edit,delete their own campgrounds and reviews and also view other people's camground and reviews.It's my first web app project at the web developer bootcamp by Colt Steele.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "passportjs",
        color: "pink-text-gradient",
      },
    ],
    image: yelpcamp,
    source_code_link: "https://github.com/namodynamic/YelpCamp-",
    see_live_link: "https://namo-tftf.onrender.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
