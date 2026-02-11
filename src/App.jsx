


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
  FaBars, // Added for mobile menu
  FaTimes, // Added for mobile menu
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiAntdesign,
} from "react-icons/si";
// import Hero from "./Hero";
import { userData } from "./constants/userData";

const Hero = (props) => {
  const heroRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const xParallax = useTransform(mouseX, (x) => (x - window.innerWidth / 2) / 40);
  const yParallax = useTransform(mouseY, (y) => (y - window.innerHeight / 2) / 40);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black"
    >
      {/* 🌌 Animated Aurora Background */}
      <motion.div
        className="absolute inset-0 -z-30 opacity-50 blur-3xl"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 35, repeat: Infinity, repeatType: "mirror" }}
        style={{
          background:
            "radial-gradient(circle at 20% 30%, #7c3aed, transparent 60%), radial-gradient(circle at 80% 70%, #ec4899, transparent 60%), radial-gradient(circle at 50% 50%, #6366f1, transparent 70%)",
        }}
      />

      {/* 🌠 Parallax Glow Orbs */}
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-600/20 rounded-full blur-3xl -top-20 -left-20 md:-top-40 md:-left-40"
        style={{ x: xParallax, y: yParallax }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-pink-500/20 rounded-full blur-3xl -bottom-20 -right-20 md:-bottom-40 md:-right-40"
        style={{ x: xParallax, y: yParallax }}
      />

      {/* 👤 Your Name – Main Character Energy */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="text-5xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl"
      >
        {props.name}
      </motion.h1>

      {/* ✨ Animated Subtitle Role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="mt-6 text-xl md:text-3xl font-semibold text-white"
      >
        <TypeAnimation
          sequence={[
            "MERN Stack Developer", 2500,
            "Full Stack Engineer", 2500,
            "React & Node Specialist", 2500,
            "UI/UX Enthusiast", 2500,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
      </motion.div>

      {/* 🌟 Cinematic Divider Beam */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        whileInView={{ width: "300px" }}
        transition={{ delay: 1, duration: 1.2 }}
        className="h-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mt-8 rounded-full shadow-lg"
      />

      {/* 📝 Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1.5 }}
        className="text-gray-300 mt-8 max-w-2xl text-base md:text-lg leading-relaxed"
      >
        {props.tagline}
      </motion.p>

      {/* 🚀 CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="flex flex-col md:flex-row gap-4 md:gap-6 mt-12 w-full md:w-auto"
      >
        <a
          href="#projects-categorized"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition text-center"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition text-center"
        >
          Contact Me
        </a>
      </motion.div>

      {/* ⬇ Scroll Indicator */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 flex flex-col items-center text-gray-400"
      >
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mb-2"></div>
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div ref={ref} className="relative bg-black text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-5 bg-black/60 backdrop-blur-md">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          {userData.name}
        </motion.h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-gray-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-purple-400 transition">
              {link.name}
            </a>
          ))}
          <a href="/Resume.pdf" download className="hover:text-purple-400 transition">
            Download CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              className="fixed inset-0 h-screen bg-black/95 flex flex-col items-center justify-center space-y-8 text-2xl z-[60] md:hidden"
            >
              <div className="absolute top-6 right-6 text-3xl" onClick={() => setIsMenuOpen(false)}>
                <FaTimes />
              </div>
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="hover:text-purple-400 transition">
                  {link.name}
                </a>
              ))}
              <a href="/Resume.pdf" download onClick={() => setIsMenuOpen(false)} className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <Hero name={userData.name} tagline={userData.tagline} />
 {/* SKILLS */}
<section
  id="skills"
  className="py-28 md:py-40 px-6 md:px-20 relative bg-black overflow-hidden"
>
  {/* Animated Background Blobs */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full animate-pulse" />
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-600/20 blur-[140px] rounded-full animate-pulse" />

  <motion.h2
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl md:text-6xl font-extrabold mb-20 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent"
  >
    Technical Skills
  </motion.h2>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.15 },
      },
    }}
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10"
  >
    {userData.skills.map((skill, i) => {
      const IconComponent = skill.icon;

      return (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{
            scale: 1.08,
            rotateX: 8,
            rotateY: -8,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="group relative bg-white/5 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 shadow-2xl cursor-pointer overflow-hidden"
          style={{ perspective: 1000 }}
        >
          {/* Glow Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-xl transition duration-500" />

          {/* Floating Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className={`text-7xl mb-6 ${skill.color} flex justify-center relative z-10`}
          >
            <IconComponent />
          </motion.div>

          <h3 className="text-xl font-semibold text-white text-center relative z-10 group-hover:text-pink-400 transition">
            {skill.name}
          </h3>
        </motion.div>
      );
    })}
  </motion.div>
</section>

{/* EXPERIENCE */}
<section
  id="experience"
  className="py-28 md:py-40 px-6 md:px-20 relative overflow-hidden bg-black"
>
  {/* Background Glow */}
  <div className="absolute left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full animate-pulse" />

  <motion.h2
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl md:text-6xl font-bold mb-24 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
  >
    Experience
  </motion.h2>

  {/* Vertical Timeline Line */}
  <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 opacity-30" />

  <div className="space-y-24 relative z-10">
    {userData.experiences.map((exp, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className={`relative w-full md:w-1/2 ${
          i % 2 === 0
            ? "md:pr-12 md:ml-0"
            : "md:pl-12 md:ml-auto"
        }`}
      >
        {/* Timeline Dot */}
        

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative bg-white/5 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-20 blur-xl transition duration-500 rounded-3xl" />

          <h3 className="text-2xl font-bold mb-2 text-purple-400">
            {exp.company}
          </h3>

          <p className="text-white font-semibold mb-1">
            {exp.role}
          </p>

          <p className="text-gray-400 mb-6 text-sm">
            {exp.duration}
          </p>

          <ul className="space-y-3 text-gray-300 text-sm md:text-base">
            {exp.bullets.map((b, idx) => (
              <motion.li
                key={idx}
                whileHover={{ x: 8 }}
                className="flex items-start gap-3"
              >
                <span className="text-pink-400 mt-1">▹</span>
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    ))}
  </div>
</section>

      {/* PROJECTS GRID */}
      <section id="projects" className="py-20 md:py-32 px-6 md:px-20 relative bg-black overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 md:mb-20 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
          Key Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {userData.projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-pink-500">{proj.name}</h3>
              <p className="text-gray-300 mb-4 text-sm md:text-base">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech?.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>




          {/* CATEGORIZED PROJECTS */}
<section
  id="projects-categorized"
  className="py-24 md:py-36 px-6 md:px-20 relative overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-600/20 blur-[120px] rounded-full animate-pulse" />

  <div className="text-center mb-16 relative z-10">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent"
    >
      My Projects
    </motion.h2>
    <p className="text-gray-400 mt-4 tracking-wider">Filter by category</p>
  </div>

  {/* Tabs */}
  <div className="flex justify-center mb-16">
    <div className="flex bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full p-2 shadow-xl">
      {["Frontend", "Backend"].map((tab) => (
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-500 ${
            activeTab === tab
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-pink-500/40"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  </div>

  {/* Projects Grid */}
  <motion.div
    layout
    className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10"
  >
    {userData.Myprojects
      .filter((p) => p.type === activeTab.toLowerCase())
      .map((proj, index) => (
        <motion.a
          layout
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            rotateX: 5,
            rotateY: -5,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: index * 0.1,
          }}
          key={proj.name}
          href={proj.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-white/5 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 hover:border-pink-500/40 transition-all duration-500 overflow-hidden shadow-2xl"
        >
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />

          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-pink-400 transition duration-500">
            {proj.name}
          </h3>

          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            {proj.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {proj.tech?.map((tech, idx) => (
              <motion.span
                whileHover={{ scale: 1.2 }}
                key={idx}
                className="px-3 py-1 bg-white/10 rounded-full text-xs backdrop-blur-md hover:bg-pink-500/30 transition"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="text-pink-400 font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
            View Source →
          </div>
        </motion.a>
      ))}
  </motion.div>
</section>
{/* CONTACT */}
<section
  id="contact"
  className="py-24 md:py-36 px-6 md:px-20 flex flex-col items-center relative overflow-hidden"
>
  {/* Background Animated Glow */}
  <div className="absolute w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full animate-pulse -top-32 left-20" />
  <div className="absolute w-96 h-96 bg-pink-600/20 blur-[120px] rounded-full animate-pulse -bottom-32 right-20" />

  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl md:text-6xl font-extrabold mb-16 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent"
  >
    Contact Me
  </motion.h2>

  <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl z-10">
    <motion.a
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      href={userData.contact.whatsapp}
      target="_blank"
      className="flex flex-col items-center p-10 w-full bg-green-500/10 border border-green-500/30 rounded-3xl backdrop-blur-xl shadow-xl hover:shadow-green-500/40 transition duration-500"
    >
      <FaWhatsapp className="text-5xl text-green-400 mb-6 animate-bounce" />
      <h3 className="text-2xl font-semibold text-green-400">
        WhatsApp
      </h3>
    </motion.a>

    <motion.div
      whileHover={{ scale: 1.1, rotate: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() =>
        (window.location.href = `mailto:${userData.contact.email}`)
      }
      className="flex flex-col items-center p-10 w-full bg-blue-500/10 border border-blue-500/30 rounded-3xl backdrop-blur-xl shadow-xl hover:shadow-blue-500/40 transition duration-500 cursor-pointer"
    >
      <FaEnvelope className="text-5xl text-blue-400 mb-6 animate-pulse" />
      <h3 className="text-2xl font-semibold text-blue-400">
        Email Me
      </h3>
    </motion.div>
  </div>

  {/* Social Links */}
  <div className="flex flex-col md:flex-row gap-6 mt-16 w-full max-w-4xl z-10">
    <motion.a
      whileHover={{ scale: 1.05, x: 10 }}
      href={userData.contact.linkedin}
      target="_blank"
      className="flex items-center gap-6 p-6 bg-blue-700/20 border border-blue-700/30 rounded-2xl w-full backdrop-blur-xl hover:shadow-blue-500/40 transition"
    >
      <FaLinkedin className="text-3xl text-blue-400" />
      <span className="text-lg">LinkedIn</span>
    </motion.a>

    <motion.a
      whileHover={{ scale: 1.05, x: -10 }}
      href={userData.contact.github}
      target="_blank"
      className="flex items-center gap-6 p-6 bg-gray-700/20 border border-gray-500/30 rounded-2xl w-full backdrop-blur-xl hover:shadow-white/20 transition"
    >
      <FaGithub className="text-3xl text-white" />
      <span className="text-lg">GitHub</span>
    </motion.a>
  </div>
</section>

    </div>
  );
}

export default App;