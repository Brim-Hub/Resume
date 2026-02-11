"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSection3D({ userData,id }) {
  const sectionRef = useRef(null);

  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring effect for natural wobble
  const springConfig = { damping: 15, stiffness: 120 };
  const rotateX = useSpring(y, springConfig);
  const rotateY = useSpring(x, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    const xPercent = (clientX - left) / width - 0.5;
    const yPercent = (clientY - top) / height - 0.5;

    x.set(xPercent * 6); // subtle tilt
    y.set(-yPercent * 6);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
     id = {id}
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
     
      className="relative py-32 md:py-44 px-6 md:px-20 bg-black overflow-hidden w-full perspective-[1500px]"
    >
      {/* Ambient Floating Background Blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(99,102,241,0.08),transparent_60%)] animate-float-slow" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[200px] rounded-full animate-float-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/10 blur-[200px] rounded-full animate-float-slow" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-28 text-center
                   bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500
                   bg-clip-text text-transparent tracking-tight
                   bg-[length:200%_200%] animate-gradient-x"
      >
        Experience
      </motion.h2>

      {/* Full-width Cards */}
      <div className="relative z-10 space-y-20">
        {userData.experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.96, rotateZ: -1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 25, delay: i * 0.12 }}
            className="w-full flex justify-center"
          >
            <motion.div
              style={{ rotateX, rotateY }}
              whileHover={{
                scale: 1.05,
                rotateX: 3,
                rotateY: -3,
                rotateZ: [0, 0.5, -0.5, 0],
              }}
              transition={{ type: "spring", stiffness: 160, damping: 12 }}
              className="w-full max-w-4xl p-[2px] rounded-3xl
                         bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-indigo-500/20"
            >
              <div className="relative bg-black/60 backdrop-blur-3xl rounded-3xl p-8 md:p-10 border border-white/10 
                              shadow-[0_0_50px_rgba(99,102,241,0.15)] overflow-hidden
                              transition-all duration-500 hover:shadow-[0_0_70px_rgba(236,72,153,0.35)]">

                {/* Soft Hover Glow */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500
                                bg-gradient-to-br from-purple-500/15 to-pink-500/15 blur-2xl rounded-3xl" />

                {/* Company */}
                <h3 className="text-2xl font-semibold text-indigo-400 mb-1 tracking-wide">
                  {exp.company}
                </h3>

                {/* Role */}
                <p className="text-white font-medium mb-1">{exp.role}</p>

                {/* Duration */}
                <p className="text-gray-400 text-sm mb-6">{exp.duration}</p>

                {/* Bullet Points with Micro Shake */}
                <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                  {exp.bullets.map((b, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{
                        x: [0, 4, -4, 2, -2, 0],
                        scale: 1.03,
                        rotateZ: [0, 1, -1, 0],
                      }}
                      transition={{ type: "spring", stiffness: 250, damping: 15 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-2 h-2 mt-2 rounded-full bg-pink-400
                                       shadow-[0_0_14px_rgba(236,72,153,0.85)]" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
