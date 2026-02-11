import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef, useState } from "react";
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
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiAntdesign,
} from "react-icons/si";
import Hero from "./Hero";
import { userData } from "./constants/userData";

// User Data Object - All details consolidated here


function App() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={ref} className="relative bg-black text-white overflow-x-hidden">
      {/* NAVBAR */}
<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-5 bg-black/60 backdrop-blur-md">
  {/* 👤 Stylish Name */}
  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg"
  >
    {userData.name}
  </motion.h1>

  <div className="space-x-6 text-gray-300">
    <a href="#skills" className="hover:text-purple-400 transition">
      Skills
    </a>
    <a href="#experience" className="hover:text-purple-400 transition">
      Experience
    </a>
    <a href="#contact" className="hover:text-purple-400 transition">
      Contact
    </a>
    {/* Download CV Link */}
    <a
     href="/Resume.pdf"
      download
      className="hover:text-purple-400 transition"
    >
      Download CV
    </a>
  </div>
</nav>


      {/* Hero Section - Assuming it uses TypeAnimation for userData.tagline */}
      <Hero
        name={userData.name}
        tagline={userData.tagline}
      />

      {/* SKILLS - ADVANCED CINEMATIC */}
  <section id="skills" className="py-32 px-6 md:px-20 relative bg-black overflow-hidden">
    {/* Floating Background Gradients */}
    <motion.div
      className="absolute top-10 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
      animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-20 right-1/3 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl"
      animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Section Title */}
    <motion.h2
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent"
    >
      Technical Skills
    </motion.h2>

    {/* Skills Grid */}
    <div className="grid md:grid-cols-3 gap-12 relative z-10">
      {userData.skills.map((skill, i) => {
        const IconComponent = skill.icon; // Convert reference to component
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotateY: 90, y: 50 }}
            whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
            whileHover={{
              scale: 1.1,
              rotateX: 10,
              rotateY: -10,
              boxShadow: "0 20px 40px rgba(219,39,119,0.4)",
            }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="relative group bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl overflow-hidden cursor-pointer"
          >
            {/* Rotating Gradient Border */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-pink-500 opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />

            {/* Floating Particles */}
            <motion.div
              className="absolute -top-4 -left-4 w-4 h-4 bg-purple-400/50 rounded-full blur-xl"
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -right-6 w-6 h-6 bg-pink-400/50 rounded-full blur-xl"
              animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Skill Icon */}
            <motion.div
              className={`text-7xl mb-6 ${skill.color} group-hover:text-pink-400 transition-colors flex justify-center`}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <IconComponent />
            </motion.div>

            {/* Skill Name */}
            <h3 className="text-xl font-semibold tracking-wide text-white group-hover:text-purple-400 transition-colors text-center">
              {skill.name}
            </h3>
          </motion.div>
        );
      })}
    </div>

    {/* Additional Background Dots */}
    <motion.div
      className="absolute top-1/3 right-1/4 w-6 h-6 bg-indigo-500/30 rounded-full blur-2xl"
      animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-pink-500/20 rounded-full blur-2xl"
      animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 px-6 md:px-20 relative overflow-hidden">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-24 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Professional Experience
        </motion.h2>

        {/* Floating Background Orbs */}
        <motion.div
          className="absolute top-10 left-1/4 w-24 h-24 bg-purple-500/30 rounded-full blur-3xl animate-float"
          animate={{ y: [0, 20, 0], x: [0, 15, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-32 h-32 bg-pink-500/30 rounded-full blur-3xl animate-float"
          animate={{ y: [0, -25, 0], x: [0, -15, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Experience Cards */}
        <div className="space-y-20">
          {userData.experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -200 : 200, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              whileHover={{
                scale: 1.05,
                rotate: i % 2 === 0 ? 2 : -2,
                boxShadow: "0 20px 40px rgba(219,39,119,0.3)",
              }}
              transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
              className="relative bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Glow Ring Animation */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-pink-500/30 opacity-50"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Corner Floating Particles */}
              <motion.div
                className="absolute -top-4 -left-4 w-6 h-6 bg-purple-400/50 rounded-full blur-xl"
                animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -right-6 w-8 h-8 bg-pink-400/50 rounded-full blur-xl"
                animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
                  {exp.company}
                </h3>
                <p className="text-purple-400 font-semibold mb-2">{exp.role}</p>
                <p className="text-gray-400 mb-6">{exp.duration}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {exp.bullets.map((b, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.2 }}
                    >
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Animated Underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.2 }}
              />
            </motion.div>
          ))}
        </div>
      </section>


      {/* PROJECTS - ADVANCED */}
      <section id="projects" className="py-32 px-6 md:px-20 relative bg-black overflow-hidden">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent"
        >
          Key Projects
        </motion.h2>

        {/* Floating Background Orbs */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Projects Grid (This section will display all projects, or you can tailor it further) */}
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          {userData.projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0 20px 50px rgba(219,39,119,0.3)",
              }}
              transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
              className="relative bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl overflow-hidden group"
            >
              {/* Rotating Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-pink-500/30 opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Floating Corner Particles */}
              <motion.div
                className="absolute -top-4 -left-4 w-5 h-5 bg-purple-400/50 rounded-full blur-xl"
                animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-4 -right-6 w-6 h-6 bg-pink-400/50 rounded-full blur-xl"
                animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Project Content */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
                  {proj.name}
                </h3>

                <motion.div
                  className="h-1 w-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2 }}
                />

                <p className="text-gray-300 mb-4">{proj.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {proj.tech?.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Floating Effects */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-indigo-500/30 rounded-full blur-2xl"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-pink-500/20 rounded-full blur-2xl"
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

   
     {/* ADVANCED PROJECTS WITH FRONTEND / BACKEND TAB */}
<section
  id="projects-categorized"
  className="py-32 px-6 md:px-20 relative overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 pointer-events-none" />

  {/* Section Title */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16 relative z-10"
  >
    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
      My Projects
    </h2>

    <p className="text-gray-400 mt-4 text-lg">
      Click on a project card to explore the source code on GitHub
    </p>
  </motion.div>

  {/* Tabs */}
  <div className="flex justify-center mb-14 relative z-10">
    <div className="relative flex bg-white/5 backdrop-blur-xl border border-white/10 rounded-full p-2">
      {["Frontend", "Backend"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative px-8 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
            activeTab === tab
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -z-10"
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          )}
          {tab}
        </button>
      ))}
    </div>
  </div>

  {/* Projects Grid */}
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="grid md:grid-cols-2 gap-12 relative z-10"
  >
    {userData.Myprojects
      .filter((p) => p.type === activeTab.toLowerCase())
      .map((proj) => (
        <motion.a
          key={proj.name}
          href={proj.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            y: -10,
            boxShadow: "0 25px 50px rgba(168,85,247,0.25)",
          }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative group bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 overflow-hidden cursor-pointer"
        >
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
              {proj.name}
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {proj.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">
              {proj.tech?.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-400/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-pink-400 font-semibold opacity-80 group-hover:opacity-100 transition">
              <span>View on GitHub</span>
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </div>
          </div>
        </motion.a>
      ))}
  </motion.div>
</section>



      {/* CONTACT SECTION - CINEMATIC ADVANCED */}
      <section
        id="contact"
        className="py-32 px-6 md:px-20 flex flex-col items-center relative overflow-hidden bg-black"
      >
        {/* Floating Background Orbs */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-indigo-500/30 rounded-full blur-3xl"
          animate={{ x: [0, 25, -25, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>

        {/* Buttons Cards */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 w-full max-w-3xl justify-center">
          {/* WhatsApp Card */}
          <motion.a
            href={userData.contact.whatsapp}
            target="_blank"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex flex-col items-center justify-center gap-3 p-8 w-full md:w-1/2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-3xl backdrop-blur-xl shadow-xl transition-all"
          >
            <motion.div
              className="text-4xl text-green-400"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <FaWhatsapp />
            </motion.div>
            <h3 className="text-xl font-semibold text-green-400">WhatsApp Me</h3>
            <p className="text-gray-300 text-center text-sm">
              Click to open WhatsApp and send me a message directly. Instant response!
            </p>
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-green-400 opacity-20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          </motion.a>

          {/* Email Card */}
          <motion.div
            onClick={() => {
              const mailtoLink = `mailto:${userData.contact.email}?subject=Portfolio%20Contact&body=Hi there!`;
              const gmailLink = `https://mail.google.com/mail/?view=cm&to=${userData.contact.email}&su=Portfolio Contact&body=Hi there!`;

              window.location.href = mailtoLink;

              setTimeout(() => {
                window.open(gmailLink, "_blank");
              }, 500);
            }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex flex-col items-center justify-center gap-3 p-8 w-full md:w-1/2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-3xl backdrop-blur-xl shadow-xl transition-all cursor-pointer"
          >
            <motion.div
              className="text-4xl text-blue-400"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <FaEnvelope />
            </motion.div>
            <h3 className="text-xl font-semibold text-blue-400">Send an Email</h3>
            <p className="text-gray-300 text-center text-sm">
              Opens your default email client or Gmail with prefilled subject & message.
            </p>
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-blue-400 opacity-20"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>

        {/* Advanced Social Cards */}
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {/* LinkedIn Card */}
          <motion.a
            href={userData.contact.linkedin}
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-4 p-6 bg-blue-700/20 hover:bg-blue-700/40 border border-blue-700/30 rounded-2xl backdrop-blur-lg shadow-lg transition-all"
          >
            <motion.div
              className="text-3xl text-blue-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaLinkedin />
            </motion.div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400">LinkedIn</h4>
              <p className="text-gray-300 text-sm">Connect with me professionally</p>
            </div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-blue-400 opacity-20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href={userData.contact.github}
            target="_blank"
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-4 p-6 bg-gray-700/20 hover:bg-gray-700/40 border border-gray-500/30 rounded-2xl backdrop-blur-lg shadow-lg transition-all"
          >
            <motion.div
              className="text-3xl text-white"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaGithub />
            </motion.div>
            <div>
              <h4 className="text-lg font-semibold text-white">GitHub</h4>
              <p className="text-gray-300 text-sm">Explore my projects & repos</p>
            </div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-white/20 opacity-20"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />
          </motion.a>
        </div>

        {/* Floating Dots & Effects */}
        <motion.div
          className="absolute bottom-10 left-1/2 w-3 h-3 bg-purple-500 rounded-full opacity-40"
          animate={{ y: [0, -20, 0], x: [-15, 15, -15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 right-1/3 w-4 h-4 bg-pink-500 rounded-full opacity-30"
          animate={{ y: [0, 25, 0], x: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>
    </div>
  );
}

export default App;



// import { useRef } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero"; // Your existing Hero component
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import { userData } from "./components/constants/userData";

// function App() {
//   const ref = useRef(null);

//   return (
//     <div ref={ref} className="relative bg-black text-white overflow-x-hidden">
//       <Navbar />
//       <Hero name={userData.name} tagline={userData.tagline} />
//       <Skills />
//       {/* Experience section can be its own component too! */}
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

// export default App;
