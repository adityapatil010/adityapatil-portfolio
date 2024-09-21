import imgCricauction from './assets/images/projects/cricauction.png'; 
import imgTrackmaster from './assets/images/projects/trackmaster.png'; 
import imgHabbinson from './assets/images/projects/habbinsons.png'; 
import imgGrowmore from './assets/images/projects/growmore.png'; 
import profile from './assets/images/profile.png'
const logotext = "Aditya Patil";
const meta = {
    title: "Aditya Patil",
    description: "I’m a Full Stack Developer (React, Node.js, Express, TypeScript, MongoDB, PostgreSQL, Wordpress) with strong skills in DSA (Java), focused on building innovative web solutions.",
};

const introdata = {
    title: "I’m Aditya Patil",
    animated: {
        first: "I build scalable web applications",
        second: "I specialize in full-stack development (React, Node.js, PostgreSQL)",
        third: "I craft efficient solutions with DSA expertise in Java",
    },
    description: "I’m a Full Stack Developer (React, Node.js, Express, TypeScript, MongoDB, PostgreSQL) with strong skills in DSA (Java), focused on building innovative web solutions.",
    your_img_url: profile,
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I’m a Full Stack Developer with expertise in building robust web applications using modern technologies like Wordpress,React, Node.js, Express, TypeScript, MongoDB, and PostgreSQL. I also have strong problem-solving skills with Data Structures and Algorithms in Java. Currently leveraging my technical skills to develop innovative solutions.",
};
const worktimeline = [{
        jobtitle: "Full Stack Developer Intern",
        where: "Growmore Technoline India Pvt.ltd",
        date: "Aug’24 - Present",
    },
    {
        jobtitle: " Frontend Developer Intern",
        where: "Habbinsons International",
        date: "Jun’24 - Jul’24",
    },
    {
        jobtitle: "Full Stack Developer Intern",
        where: "Abstract Tech Solutions",
        date: "Dec’22 - Jul’23",
    },
];

const skills = [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Java", "Python", "PHP", "JavaScript", "TypeScript"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Node.js", "Prisma", "Bootstrap", "Tailwind CSS"],
    },
    {
      category: "Tools & Databases",
      items: ["MySQL", "MongoDB", "PostgreSQL", "Git", "GitHub", "WordPress","Canva"],
    },
  ];
  

  const services = [
    {
      title: "Web Development",
      description:
        "Build responsive, high-performance websites using modern technologies like React, Node.js, and PostgreSQL.",
    },
    {
      title: "WordPress Development",
      description:
        "Customize WordPress themes, plugins, and build full-featured websites tailored to your business needs.",
    },
    {
      title: "UI/UX Design",
      description:
        "Design intuitive and visually appealing user interfaces that provide seamless user experiences across all devices.",
    },
  ];
  

  
const dataportfolio = [
    {
      img: imgCricauction,
      description: "Cricauction is an online auction platform for cricket enthusiasts. It provides a seamless experience for users to create and participate in virtual cricket auctions.",
      link: "http://cricauction.abstracttechsolution.com/",
    },
    {
      img: imgTrackmaster,
      description: "TrackMaster is a web application designed to facilitate seamless academic progress tracking for students, educators, and administrators, built with HTML, CSS, JavaScript, and PHP.",
      link: "https://github.com/adityapatil010/TrackMaster",
    },
    {
      img: imgHabbinson,
      description: "Developed a fully responsive portfolio website for Habbinson International, leveraging WordPress themes and plugins to meet specific client needs, enhancing user experience and functionality.",
      link: "https://habbinson.com/",
    },
    {
      img: imgGrowmore,
      description: "Built a course-selling platform for Growmore Technoline using Bootstrap, PHP, and MySQL, featuring payment integration, OTP verification, Google reviews, and automated email services.",
      link: "https://growmoretechnoline.com/",
    },
  ];
  
  

  const contactConfig = {
    YOUR_EMAIL: "adipatil10.2004@gmail.com",
    YOUR_FONE: "+91 9325909094",
    description: "Get in touch! I'm here to assist you with your queries and provide solutions tailored to your needs.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};


const socialprofils = {
    github: "https://github.com/adityapatil010",
    codolio: "https://codolio.com/profile/adityapatil10",
    linkedin: "https://www.linkedin.com/in/aditya-patil10/",
    twitter: "https://x.com/Dev_AdityaPatil",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};