"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function ProjectsSection({ userData,id }) {
  const [activeTab, setActiveTab] = useState("Frontend");
  const sectionRef = useRef(null);

  // Cursor-following spotlight
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top } = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--x", `${clientX - left}px`);
    sectionRef.current.style.setProperty("--y", `${clientY - top}px`);
  };

  return (
    <section
     id={id}
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-36 px-6 md:px-20 relative overflow-hidden"
      style={{
        background: `radial-gradient(600px at var(--x) var(--y), rgba(168,85,247,0.05), transparent 40%)`,
      }}
    >
      {/* Floating background blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 blur-[150px] rounded-full animate-pulse-slow" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-600/20 blur-[150px] rounded-full animate-pulse-slow" />

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold 
                     bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 
                     bg-clip-text text-transparent 
                     bg-[length:200%_200%] animate-gradient-x"
        >
          My Projects
        </motion.h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-16 relative z-10">
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
          .filter((p) => p.type.toLowerCase() === activeTab.toLowerCase())
          .map((proj, index) => (
            <motion.a
              layout
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.07,
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
              className="group relative bg-white/5 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 
                         hover:border-pink-500/40 transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 
                              opacity-0 group-hover:opacity-25 blur-xl animate-spin-slow transition duration-500" />

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
  );
}
