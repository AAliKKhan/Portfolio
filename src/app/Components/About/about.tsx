"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaFigma, FaDatabase, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiStripe, SiCanva, SiSanity, SiGraphql, SiDocker, SiClerk, SiPython, SiShadcnui } from "react-icons/si";
import SocialMediaCard from "../navigator";

const FloatingOrbs = dynamic(() => import("../FloatingOrbs"), { ssr: false });

const About = () => {
  const skills = [
    {
      title: "Full-Stack Foundation",
      description: "End-to-end web development capabilities",
      items: [
        { name: "Python", icon: <SiPython className="text-yellow-300" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-slate-600 dark:text-white" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },

      ],
    },
    {
      title: "UI Engineering",
      description: "Crafting modern user interfaces",
      items: [
       
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Framer Motion", icon: <span className="text-white">⤸</span> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
        { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
        { name: "Shadcn", icon: <SiShadcnui className="text-white" /> },
        
        

      ],
    },
    {
      title: "DevOps & Services",
      description: "Cloud infrastructure & integrations",
      items: [
        { name: "Vercel", icon: <span className="text-white">▲</span> },

        { name: "Stripe", icon: <SiStripe className="text-purple-500" /> },
        { name: "Clerk", icon: <SiClerk className="text-purple-500" /> },
        { name: "Sanity", icon: <SiSanity className="text-red-500" /> },
        { name: "GitHub Actions", icon: <span className="text-white">⚡</span> },

      ],
    },
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-darkBg to-[#1a1d21] text-white py-28 px-4 md:px-8" id="AboutMe">
      <FloatingOrbs />
      <SocialMediaCard />

      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-light mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Full-Stack Engineer
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Building complete digital experiences from concept to deployment. 
            Specializing in modern web architectures with focus on performance, 
            scalability, and maintainability.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-lg border border-white/10 hover:border-teal-400/20 transition-all duration-300 shadow-2xl shadow-black/30"
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-teal-400">{category.title}</h3>
                <p className="text-gray-400 mb-6">{category.description}</p>
                <ul className="grid grid-cols-2 gap-4">
                  {category.items.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 * i }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-200">{item.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Banner */}
        <motion.div
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-teal-500/10 to-teal-600/10 border border-teal-400/20 backdrop-blur-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-teal-400">Full-Cycle Development</h3>
              <p className="text-gray-300">From initial concept through CI/CD to production monitoring</p>
            </div>
            <motion.div 
              className="flex gap-4 text-3xl text-teal-400"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {[<FaReact key="react" />, <SiNextdotjs key="next" />, <FaNode key="node" />].map((Icon, i) => (
                <motion.span
                  key={i}
                  className="hover:text-white transition-colors"
                  whileHover={{ y: -5 }}
                >
                  {Icon}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;