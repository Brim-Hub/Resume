"use client";

import { motion, useMotionValue, useTransform } from "framer-motion"; 
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";

const Hero = ({ id, name, tagline }) => {
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

  // Parallax transforms
  const xParallaxSlow = useTransform(mouseX, (x) => (x - window.innerWidth / 2) / 80);
  const yParallaxSlow = useTransform(mouseY, (y) => (y - window.innerHeight / 2) / 80);
  const xParallaxFast = useTransform(mouseX, (x) => (x - window.innerWidth / 2) / 30);
  const yParallaxFast = useTransform(mouseY, (y) => (y - window.innerHeight / 2) / 30);

  return (
    <section
      id={id}
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-black"
    >
      {/* 🌌 Aurora Rotating Background Layers */}
      <motion.div
        className="absolute inset-0 -z-30 opacity-40 blur-3xl"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 40, repeat: Infinity, repeatType: "mirror" }}
        style={{
          background:
            "radial-gradient(circle at 20% 30%, #7c3aed, transparent 60%), radial-gradient(circle at 80% 70%, #ec4899, transparent 60%), radial-gradient(circle at 50% 50%, #6366f1, transparent 70%)",
        }}
      />

      {/* 🌠 Floating Parallax Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -top-40 -left-40"
        style={{ x: xParallaxSlow, y: yParallaxSlow }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl -bottom-40 -right-40"
        style={{ x: xParallaxFast, y: yParallaxFast }}
      />

      {/* 👤 Name with 3D Gradient Glow */}
      <motion.h1
        initial={{ opacity: 0, y: 120, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
      >
        {name}
      </motion.h1>

      {/* ✨ Animated Role Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="mt-6 text-2xl md:text-3xl font-semibold text-white"
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
        animate={{ width: "350px" }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="h-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mt-8 rounded-full shadow-xl"
      />

      {/* 📝 Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="text-gray-300 mt-8 max-w-2xl text-lg md:text-xl leading-relaxed"
      >
        {tagline}
      </motion.p>

      {/* 🚀 CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="flex gap-6 mt-12"
      >
        <a
          href="#projects-categorized"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
        >
          View Projects1
        </a>

        <a
          href="#contact"
          className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all"
        >
          Contact Me
        </a>
      </motion.div>

      {/* 🌌 Floating Cyber Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, Math.random() * 40 - 20, 0], y: [0, Math.random() * 40 - 20, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, repeatType: "mirror" }}
          className={`absolute w-[${2 + i}px] h-[${2 + i}px] bg-white rounded-full opacity-${30 + i * 10}`}
          style={{
            top: `${10 + i * 15}%`,
            left: `${15 + i * 10}%`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* ⬇ Scroll Indicator */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 flex flex-col items-center text-gray-400"
      >
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mb-2 shadow-lg"></div>
        Scroll
      </motion.div>
    </section>
  );
};

export default Hero;
