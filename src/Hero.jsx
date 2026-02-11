import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef } from "react";

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
    // <section
    //   ref={heroRef}
    //   className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-gray-900"
    // >
    //   {/* 🌈 Dynamic Gradient Background */}
    //   <motion.div
    //     className="absolute inset-0 -z-20 opacity-50 blur-3xl"
    //     animate={{ rotate: [0, 15, -15, 0] }}
    //     transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
    //     style={{
    //       background:
    //         "radial-gradient(circle at 25% 25%,#6d28d9,#db2777), radial-gradient(circle at 75% 75%,#f43f5e,#6366f1)",
    //     }}
    //   />

    //   {/* 🎈 Floating Parallax Circles */}
    //   <motion.div
    //     className="absolute w-72 h-72 rounded-full bg-purple-600 opacity-20 blur-2xl -top-28 -left-28"
    //     style={{ x: xParallax, y: yParallax }}
    //   />
    //   <motion.div
    //     className="absolute w-52 h-52 rounded-full bg-pink-500 opacity-20 blur-2xl -bottom-28 -right-20"
    //     style={{ x: xParallax, y: yParallax }}
    //   />

    //   {/* ✨ Particle Dots */}
    //   <motion.div
    //     animate={{ x: [0, 40, -40, 0], y: [0, -20, 20, 0] }}
    //     transition={{ duration: 8, repeat: Infinity }}
    //     className="absolute w-3 h-3 bg-white rounded-full top-32 left-16 opacity-50"
    //   />
    //   <motion.div
    //     animate={{ x: [0, -50, 50, 0], y: [0, 30, -30, 0] }}
    //     transition={{ duration: 10, repeat: Infinity }}
    //     className="absolute w-2 h-2 bg-pink-400 rounded-full top-60 right-32 opacity-60"
    //   />

    //   {/* 💻 Animated Typing Heading */}
    //   <motion.h1
    //     initial={{ opacity: 0, y: 120 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 1.5 }}
    //     className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent"
    //   >
    //     <TypeAnimation
    //       sequence={[
    //         "MERN Stack Developer", 2500,
    //         "Full Stack Engineer", 2500,
    //         "React & Node Specialist", 2500,
    //         "UI/UX Enthusiast", 2500,
    //       ]}
    //       wrapper="span"
    //       cursor={true}
    //       repeat={Infinity}
    //     />
    //   </motion.h1>

    //   {/* 🌟 Gradient Divider */}
    //   <motion.div
    //     initial={{ width: 0 }}
    //     animate={{ width: "240px" }}
    //     transition={{ delay: 1, duration: 1.2 }}
    //     className="h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 mt-6 rounded-full"
    //   />

    //   {/* 📝 Fading Intro Paragraph */}
    //   <motion.p
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ delay: 1.3, duration: 1.5 }}
    //     className="text-gray-300 mt-6 max-w-2xl"
    //   >
    //     Crafting elegant and scalable web applications with React, Node.js, and modern design patterns. Passionate about seamless UI and high-performance architecture.
    //   </motion.p>

 

    //   {/* ⬇ Scroll Indicator */}
    //   <motion.div
    //     animate={{ y: [0, -18, 0] }}
    //     transition={{ duration: 2, repeat: Infinity }}
    //     className="absolute bottom-8 flex flex-col items-center gap-1"
    //   >
    //     <div className="w-1 h-4 bg-white rounded-full animate-bounce"></div>
    //     <span className="text-white text-sm">Scroll</span>
    //   </motion.div>

    //   {/* 🌌 Glow Highlights */}
    //   <motion.div
    //     animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
    //     transition={{ duration: 4, repeat: Infinity }}
    //     className="absolute w-8 h-8 bg-pink-400 rounded-full top-1/3 left-1/4 blur-2xl opacity-50"
    //   />
    //   <motion.div
    //     animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.9, 0.3] }}
    //     transition={{ duration: 5, repeat: Infinity }}
    //     className="absolute w-6 h-6 bg-purple-400 rounded-full top-1/2 right-1/3 blur-xl opacity-40"
    //   />
    // </section>
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
    className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -top-40 -left-40"
    style={{ x: xParallax, y: yParallax }}
  />
  <motion.div
    className="absolute w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-3xl -bottom-40 -right-40"
    style={{ x: xParallax, y: yParallax }}
  />

  {/* 👤 Your Name – Main Character Energy */}
  <motion.h1
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.4 }}
    className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl"
  >
    {props.name}
  </motion.h1>

  {/* ✨ Animated Subtitle Role */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 1.2 }}
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
    animate={{ width: "300px" }}
    transition={{ delay: 1, duration: 1.2 }}
    className="h-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mt-8 rounded-full shadow-lg"
  />

  {/* 📝 Description */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.3, duration: 1.5 }}
    className="text-gray-300 mt-8 max-w-2xl text-lg leading-relaxed"
  >
   {props.tagline}
  </motion.p>

  {/* 🚀 CTA Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.6, duration: 1 }}
    className="flex gap-6 mt-12"
  >
    <a
      href="#projects-categorized"
      className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
    >
      View Projects
    </a>

    <a
      href="#contact"
      className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
    >
      Contact Me
    </a>
  </motion.div>

  {/* 🌌 Floating Particles */}
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute w-3 h-3 bg-white rounded-full top-32 left-24 opacity-40"
  />
  <motion.div
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute w-2 h-2 bg-pink-400 rounded-full bottom-32 right-24 opacity-50"
  />

  {/* ⬇ Scroll Indicator */}
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="absolute bottom-8 flex flex-col items-center text-gray-400"
  >
    <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mb-2"></div>
    Scroll
  </motion.div>
</section>

  );
};

export default Hero;
