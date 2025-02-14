"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiStripe, SiCanva, SiSanity } from "react-icons/si";
import SocialMediaCard from "../navigator";

// Dynamically import motion for animations
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });
const MotionH2 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h2), { ssr: false });
const MotionP = dynamic(() => import("framer-motion").then((mod) => mod.motion.p), { ssr: false });

const About = () => {
  return (
    <section  className="relative bg-gradient-to-b from-[#2d2f31] to-darkBg text-white py-20 px-6 md:px-12 lg:px-24">
       <SocialMediaCard></SocialMediaCard>
      <div className="max-w-5xl mx-auto text-center " id="AboutMe">
        <MotionH2
          className="text-4xl font-bold text-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          I'm a Frontend Developer. Pleasure to meet you.
        </MotionH2>
        <MotionP
          className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I’m a Frontend Developer with experience in backend technologies as well, allowing me to build complete web applications with seamless integrations. My expertise lies in crafting dynamic and scalable user interfaces. My goal is to create high-performance, scalable, and user-centric web applications that deliver a seamless experience. Following are my skils and tools which I use to craft my websites.
        </MotionP>
      </div>

      {/* Skills Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-6 bg-white/10 rounded-xl shadow-xl"  id="Skills">
        {[
          {
            title: "Frontend Development",
            description: "Building fast and scalable user interfaces with modern web technologies.",
            items: [
              { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
              { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
              { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
              { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
              { name: "React", icon: <FaReact className="text-blue-400" /> },
              { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
              { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
            ],
          },
          {
            title: "Backend Authentication",
            description: "Handling authentication and backend logic for secure and dynamic applications.",
            items: [
              { name: "NextAuth", icon: <SiNextdotjs className="text-black dark:text-white" /> },
              { name: "Clerk", icon: <SiNextdotjs className="text-black dark:text-white" /> },
              { name: "Stripe", icon: <SiStripe className="text-purple-500" /> },
              { name: "Sanity", icon: <SiSanity className="text-red-500" /> },
            ],
          },
          {
            title: "Design & UI/UX",
            description: "Creating visually appealing designs with industry-standard tools.",
            items: [
              { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
              { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
            ],
          },
        ].map((category, index) => (
          <MotionDiv
            key={index}
            className="p-6 bg-white/5 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            <h3 className="text-xl font-semibold text-gray-200 flex items-center gap-2">
              {category.title}
            </h3>
            <p className="mt-3 text-gray-400">{category.description}</p>
            <ul className="mt-3 space-y-2 text-gray-300">
              {category.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  {item.icon} {item.name}
                </li>
              ))}
            </ul>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};

export default About;