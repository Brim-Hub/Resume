"use client";

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function CyberNavbar({ userData, navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Tilt motion for logo and nav items
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(y, { stiffness: 120, damping: 14 });
  const rotateY = useSpring(x, { stiffness: 120, damping: 14 });

  const handleMouseMove = (e) => {
    const nav = e.currentTarget;
    const { left, top, width, height } = nav.getBoundingClientRect();
    const xPercent = (e.clientX - left) / width - 0.5;
    const yPercent = (e.clientY - top) / height - 0.5;
    x.set(xPercent * 6);
    y.set(-yPercent * 6);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Floating cyber particles
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 18; i++) {
      temp.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 2,
        speed: Math.random() * 6 + 3,
      });
    }
    setParticles(temp);
  }, []);

  // Smooth scroll to hero
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) hero.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 backdrop-blur-lg bg-black/40 shadow-lg rounded-b-xl overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      {/* Neon Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-purple-400/30 blur-[140px] animate-[spin_45s_linear_infinite]" />
        <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-pink-400/30 blur-[140px] animate-[spin_50s_linear_infinite_reverse]" />
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              x: [p.x, p.x + Math.random() * 6, p.x],
              y: [p.y, p.y + Math.random() * 6, p.y],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: p.speed,
              delay: p.delay,
              repeatType: "loop",
            }}
            className="absolute rounded-full bg-gradient-to-tr from-pink-500 to-purple-500"
            style={{
              width: p.size,
              height: p.size,
              top: `${p.y}%`,
              left: `${p.x}%`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <motion.div
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.07 }}
        transition={{ type: "spring", stiffness: 160, damping: 12 }}
        className="cursor-pointer"
        onClick={scrollToHero}
      >
        <span className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">
          {userData.name}
        </span>
      </motion.div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(255,255,255,0.4)" }}
            transition={{ type: "spring", stiffness: 160, damping: 12 }}
            className="hover:text-purple-400 transition-all"
          >
            {link.name}
          </motion.a>
        ))}
        <motion.a
          href="/Resume.pdf"
          download
          whileHover={{ scale: 1.05, textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
          className="hover:text-purple-400 transition-all"
        >
          Download CV
        </motion.a>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className="md:hidden text-2xl text-white cursor-pointer z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="fixed inset-0 h-screen bg-black/95 flex flex-col items-center justify-center space-y-10 text-2xl z-[60] md:hidden"
          >
            <div
              className="absolute top-6 right-6 text-3xl hover:text-pink-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes />
            </div>
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.1, textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
                transition={{ type: "spring", stiffness: 160, damping: 12 }}
                className="hover:text-purple-400 transition"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/Resume.pdf"
              download
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              className="px-10 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-2xl transition-all"
            >
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
