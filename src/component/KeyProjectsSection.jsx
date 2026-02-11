"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function KeyProjectsElegant3D({ userData }) {
  const sectionRef = useRef(null);

  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();

    const xPercent = (clientX - left) / width - 0.5;
    const yPercent = (clientY - top) / height - 0.5;

    x.set(xPercent * 10); // Softer tilt
    y.set(-yPercent * 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Subtle shadow movement
  const shadowX = useTransform(x, [-10, 10], [10, -10]);
  const shadowY = useTransform(y, [-10, 10], [10, -10]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="projects"
      className="py-20 md:py-32 px-6 md:px-20 relative bg-black overflow-hidden perspective-[1200px]"
    >
      {/* Floating Background Blobs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/15 blur-[160px] rounded-full animate-float-slow" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-600/15 blur-[160px] rounded-full animate-float-slow" />

      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 md:mb-20 text-center 
                     bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 
                     bg-clip-text text-transparent 
                     bg-[length:200%_200%] animate-gradient-x">
        Key Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
        {userData.projects.map((proj, i) => (
          <motion.div
            key={i}
            style={{ rotateX: y, rotateY: x, boxShadow: `${shadowX.get()}px ${shadowY.get()}px 40px rgba(255,255,255,0.05)` }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 18,
              delay: i * 0.1,
            }}
            className="group relative bg-white/3 backdrop-blur-3xl p-8 md:p-10 rounded-3xl border border-white/10 
                       overflow-hidden shadow-xl transition-all duration-500 hover:shadow-[0_30px_80px_rgba(255,192,203,0.1)]"
          >
            {/* Subtle Gradient Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 
                            opacity-0 group-hover:opacity-20 blur-xl animate-spin-slow transition duration-700" />

            {/* Project Info */}
            <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-pink-400 group-hover:text-pink-300 transition duration-500">
              {proj.name}
            </h3>
            <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">{proj.description}</p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {proj.tech?.map((tech, idx) => (
                <motion.span
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  key={idx}
                  className="px-3 py-1 bg-purple-500/10 text-purple-200 rounded-full text-xs backdrop-blur-md hover:bg-pink-500/25 transition"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
