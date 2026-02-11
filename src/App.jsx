"use client";

import { motion, useMotionValue, useScroll, useTransform, AnimatePresence } from "framer-motion"; 
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
  FaHtml5,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiAntdesign,
} from "react-icons/si";

import { userData } from "./constants/userData";
import Contact from "./component/Contact";
import ProjectsSection from "./component/ProjectsSection";
import KeyProjectsSection from "./component/KeyProjectsSection";
import ExperienceSection from "./component/ExperienceSection";
import SkillsSection3D from "./component/SkillsSection3D";
import CyberNavbar from "./component/CyberNavbar";
import Hero from "./component/Hero";

function App() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    hero?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div ref={ref} className="relative bg-black text-white overflow-x-hidden">
      {/* NAVBAR */}
      <CyberNavbar scrollToHero={scrollToHero} userData={userData} navLinks={navLinks} />

      {/* HERO SECTION */}
      <Hero id="hero" name={userData.name} tagline={userData.tagline} />

      {/* SKILLS SECTION */}
      <SkillsSection3D id="skills" userData={userData} />

      {/* EXPERIENCE SECTION */}
      <ExperienceSection id="experience" userData={userData} />

      {/* KEY PROJECTS */}
      <KeyProjectsSection id="projects" userData={userData} />

      {/* CATEGORIZED PROJECTS */}
      <ProjectsSection id="projects-categorized" userData={userData} />

      {/* CONTACT SECTION */}
      <Contact id="contact" userData={userData} />
    </div>
  );
}

export default App;
