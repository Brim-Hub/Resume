"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact({ userData, id  }) {
  const sectionRef = useRef(null);

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
      className="relative py-32 px-6 md:px-20 bg-black overflow-hidden flex flex-col items-center"
    >
      {/* Mouse Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px at var(--x) var(--y), rgba(168,85,247,0.15), transparent 40%)",
        }}
      />

      {/* Floating Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full -top-40 -left-40 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-pink-600/20 blur-[150px] rounded-full bottom-0 right-0 animate-pulse" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-24 text-center 
        bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 
        bg-[length:200%_200%] animate-gradient-x 
        bg-clip-text text-transparent"
      >
        Let’s Work Together
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl z-10">
        {[
          {
            icon: <FaWhatsapp />,
            label: "WhatsApp",
            desc: "Instant connection",
            color: "from-green-500 to-emerald-400",
            link: userData.contact.whatsapp,
          },
          {
            icon: <FaEnvelope />,
            label: "Email",
            desc: "Detailed conversation",
            color: "from-blue-500 to-indigo-400",
            link: `mailto:${userData.contact.email}`,
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
            className="relative group perspective"
          >
            {/* Animated Gradient Border */}
            <div className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br ${item.color} animate-spin-slow`} />

            {/* Card */}
            <div className="relative flex flex-col items-center justify-center text-center p-14 rounded-3xl 
            bg-black/60 backdrop-blur-2xl border border-white/10 
            shadow-[0_20px_80px_rgba(0,0,0,0.6)] 
            transition duration-500 group-hover:shadow-purple-500/20">

              <div className="text-6xl mb-6 text-white group-hover:scale-125 transition duration-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {item.label}
              </h3>

              <p className="text-gray-400 mt-3 text-sm">
                {item.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex gap-10 mt-24 z-10">
        {[{
          icon: <FaLinkedin />,
          link: userData.contact.linkedin
        },{
          icon: <FaGithub />,
          link: userData.contact.github
        }].map((item,i)=>(
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            whileHover={{ y: -6, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-4xl text-gray-400 hover:text-white transition"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
