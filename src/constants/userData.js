import { 
  FaReact, FaNodeJs, FaJs, FaGitAlt, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope,
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiRedux, SiFirebase, SiAntdesign,
} from "react-icons/si";

export const userData = {
  name: import.meta.env.VITE_USER_NAME,
  tagline: [
    "Crafting immersive digital experiences with elegant, scalable interfaces.",
    "MERN Stack Developer | React & Node.js Enthusiast",
    "Building high-performance, user-friendly web applications",
    "Passionate about innovation, clean code, and scalable solutions"
  ],
  contact: {
    whatsapp: import.meta.env.VITE_USER_WHATSAPP,
    email: import.meta.env.VITE_USER_EMAIL,
    linkedin: import.meta.env.VITE_USER_LINKEDIN,
    github: import.meta.env.VITE_USER_GITHUB,
  },
  experiences: [
    {
      company: "IVTREE (Client: Zebra)",
      role: "EMC Device & Cloud Engineer",
      duration: "July 2024 – November 2024",
      bullets: [
        "Led the development of full-stack applications for Zebra.",
        "Designed scalable solutions using React, Express.js, Firebase.",
        "Delivered secure, efficient, and responsive applications.",
        "Collaborated with cross-functional teams to meet deadlines.",
      ],
    },
    {
      company: "L-Tech Solutions",
      role: "Senior Associate (Full-Stack Developer)",
      duration: "July 2020 – June 2024",
      bullets: [
        "Developed and maintained web applications using MERN stack.",
        "Implemented authentication, data handling, and responsive UI.",
        "Integrated database, API design, and frontend/backend development.",
        "Worked closely with product managers and designers.",
      ],
    },
  ],
  Myprojects: [
    {
      name: "Library Management System",
      type: "frontend",
      description: "Interactive dashboard for managing books, students, and borrowing records with secure login.",
      tech: ["React", "Material-UI", "Firebase"],
      github: "https://github.com/Brim-Hub/OmniBuy"
    },
    {
      name: "Library Management System",
      type: "backend",
      description: "Handles book inventory, student data, and borrowing history with RESTful APIs and database encryption.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/Brim-Hub/OmniBuy"
    },
    {
      name: "Online Quiz Platform",
      type: "frontend",
      description: "Responsive interface for students to take quizzes with real-time feedback and scoring.",
      tech: ["Vue.js", "Bootstrap", "Firebase"],
      github: "https://github.com/Brim-Hub/Brim-Hub-Google-Auth/tree/main/client"
    },
    {
      name: "Online Quiz Platform",
      type: "backend",
      description: "Manages quiz questions, scoring logic, and user results with secure authentication and cloud storage.",
      tech: ["Node.js", "Express", "MySQL"],
      github: "https://github.com/Brim-Hub/Brim-Hub-Google-Auth/tree/main/server"
    }
  ],
  projects: [
    {
      name: "Next Gen Stage Now",
      type: "frontend",
      description: "Encrypted profile management system with Firebase Cloud Functions.",
      tech: ["React", "Ant Design", "Firebase"],
    },
    {
      name: "AI Chatbot & File Management",
      type: "backend",
      description: "Real-time AI messaging platform with secure file handling.",
      tech: ["Node.js", "Express", "MongoDB"],
    },
  ],
  
  skills: [
    { icon: FaReact, name: "React.js", color: "text-cyan-400" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-300" },
    { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiRedux, name: "Redux", color: "text-purple-400" },
    { icon: SiFirebase, name: "Firebase", color: "text-orange-400" },
    { icon: SiAntdesign, name: "Ant Design", color: "text-blue-400" },
    { icon: FaGitAlt, name: "Git", color: "text-orange-500" },
  ],
};


