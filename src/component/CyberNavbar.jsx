"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function CyberNavbar({
  userData,
  navLinks,
  scrollToHero,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  if (!userData) return null;

  /* 3D Logo Tilt */
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

  /* Active Section Highlight */
  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        if (link.href.startsWith("#")) {
          const section = document.querySelector(link.href);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActive(link.href);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
   <nav
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  style={{ perspective: 1000 }}
  className="fixed top-0 left-0 w-full z-[1000]
  bg-black
  border-b border-gray-900
  flex justify-between items-center
  px-6 md:px-16
  h-[75px]
  transition-all duration-300"
>
  {/* Subtle Bottom Glow Line */}
  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-40" />

  {/* Logo */}
  <motion.div
    style={{ rotateX, rotateY }}
    whileHover={{ scale: 1.06 }}
    transition={{ type: "spring", stiffness: 200 }}
    onClick={() => {
      scrollToHero();
      setIsMenuOpen(false);
    }}
    className="cursor-pointer select-none"
  >
    <span
      className="text-2xl md:text-3xl font-extrabold tracking-wide 
      bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 
      bg-clip-text text-transparent"
    >
      {userData.name}
    </span>
  </motion.div>

  {/* Desktop Links */}
  <div className="hidden md:flex items-center space-x-10 font-medium">
    {navLinks.map((link) => (
      <div key={link.name} className="relative group">
        <a
          href={link.href}
          onClick={(e) => handleLinkClick(e, link.href)}
          className={`text-[15px] tracking-wide transition-colors duration-300 ${
            active === link.href
              ? "text-purple-400"
              : "text-gray-400 group-hover:text-white"
          }`}
        >
          {link.name}
        </a>

        {/* Animated Underline */}
        <motion.div
          layoutId="active-line"
          className={`absolute -bottom-2 left-0 h-[2px] bg-purple-500 transition-all duration-300 ${
            active === link.href
              ? "w-full"
              : "w-0 group-hover:w-full"
          }`}
        />
      </div>
    ))}

    {/* CV Button */}
    <motion.a
      href="/Resume.pdf"
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="ml-4 px-5 py-2 rounded-full 
      bg-purple-600 text-white text-sm font-semibold
      hover:bg-purple-700 transition-all duration-300
      shadow-lg shadow-purple-600/20"
    >
      Download CV
    </motion.a>
  </div>

  {/* Mobile Toggle */}
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="md:hidden text-2xl text-white transition hover:text-purple-400"
  >
    {isMenuOpen ? <FaTimes /> : <FaBars />}
  </button>
</nav>


      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-[2000]
            flex flex-col items-center justify-center
            space-y-10 md:hidden"
          >
            {/* Close Button Top Right */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-3xl text-white"
            >
              <FaTimes />
            </button>

            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-4xl font-semibold text-gray-300 
                hover:text-purple-400 transition"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href="/Resume.pdf"
              download
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="mt-6 px-10 py-4 rounded-full 
              bg-purple-600 text-white text-2xl
              hover:bg-purple-700 transition"
            >
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
