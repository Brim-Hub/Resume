"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function SkillsSectionCyber({ id,userData }) {
  // Global tilt motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 120, damping: 14 });
  const rotateY = useSpring(x, { stiffness: 120, damping: 14 });

  const handleMouseMove = (e) => {
    const section = e.currentTarget;
    const { left, top, width, height } = section.getBoundingClientRect();
    const xPercent = (e.clientX - left) / width - 0.5;
    const yPercent = (e.clientY - top) / height - 0.5;
    x.set(xPercent * 12); // stronger tilt for cyber effect
    y.set(-yPercent * 12);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // For generating random micro-particles
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 25; i++) {
      temp.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 2,
        speed: Math.random() * 10 + 5,
      });
    }
    setParticles(temp);
  }, []);

  return (
    <section
      id={id}
      className="relative py-32 md:py-44 px-6 md:px-20 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1500 }}
    >
      {/* ===== Background Blobs & Mesh ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.15),transparent_40%)] animate-pulse" />
      <div className="absolute -top-60 -left-60 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full animate-[spin_40s_linear_infinite]" />
      <div className="absolute -bottom-60 -right-60 w-[700px] h-[700px] bg-pink-600/20 blur-[180px] rounded-full animate-[spin_50s_linear_infinite_reverse]" />

      {/* ===== Section Title ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-24 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent tracking-tight"
      >
        Technical Skills
      </motion.h2>

      {/* ===== Skill Cards Grid ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
      >
        {userData.skills.map((skill, i) => {
          const IconComponent = skill.icon;

          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 80, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{
                rotateX: 12,
                rotateY: -12,
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/40 via-pink-500/30 to-indigo-500/40 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 transition-all duration-500"
              style={{ perspective: 1200 }}
            >
              {/* Glass Card */}
              <motion.div
                style={{ rotateX, rotateY }}
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 160, damping: 12 }}
                className="relative bg-black/60 backdrop-blur-3xl rounded-3xl p-8 md:p-10 h-full border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden"
              >
                {/* Shimmer Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute -left-40 top-0 w-32 h-full bg-white/10 rotate-12 translate-x-0 group-hover:translate-x-[300%] transition-all duration-1000" />
                </div>

                {/* Floating Orbit Rings */}
                {[24, 36, 48].map((size, idx) => (
                  <motion.div
                    key={idx}
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 15 + idx * 5,
                      ease: "linear",
                      repeatType: "loop",
                    }}
                    className={`absolute w-[${size}px] h-[${size}px] border border-purple-500/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                  />
                ))}

                {/* Floating Micro-Particles */}
                {particles.map((p) => (
                  <motion.div
                    key={p.id}
                    animate={{
                      x: [p.x, p.x + Math.random() * 5, p.x],
                      y: [p.y, p.y + Math.random() * 5, p.y],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: p.speed,
                      delay: p.delay,
                      repeatType: "loop",
                    }}
                    className="absolute bg-pink-400 rounded-full"
                    style={{
                      width: p.size,
                      height: p.size,
                      top: `${p.y}%`,
                      left: `${p.x}%`,
                    }}
                  />
                ))}

                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -14, 0], rotateZ: [0, 4, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className={`text-6xl md:text-7xl mb-6 ${skill.color} flex justify-center relative z-10`}
                >
                  <IconComponent />
                </motion.div>

                {/* Skill Name */}
                <motion.h3
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-lg md:text-xl font-semibold text-white text-center relative z-10 tracking-wide group-hover:text-pink-400 transition duration-300"
                >
                  {skill.name}
                </motion.h3>

                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl" />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
