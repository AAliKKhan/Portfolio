"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SocialMediaCard from "../navigator";

// Sample Project Data
const projects = [
  {
    id: 1,
    title: "BLOGALI",
    image: "/5.png",
    link: "https://blogali-tau.vercel.app/",
  },
  {
    id: 2,
    title: "Dynamic Resume Builder",
    image: "/2.png",
    link: "https://resume-builder.com",
  },
  {
    id: 3,
    title: "The Scholars Learning Center",
    image: "/3.png",
    link: "https://scholarslearning.com",
  },
  {
    id: 4,
    title: "One-Rep Max Calculator",
    image: "/4.png",
    link: "https://orm-calculator.com",
  },
  {
    id: 5,
    title: "Image Carousel Component",
    image: "/1.png",
    link: "https://carousel-component.com",
  },
  {
    id: 6,
    title: "Horror Flash Game",
    image: "/6.png",
    link: "https://horror-game.com",
  },
];

export default function MyProjects() {
  return (
    <section  className="py-16   bg-gradient-to-b from-[#2d2f31] to-darkBg " id="Projects">
       <SocialMediaCard></SocialMediaCard>
      <div className="container mx-auto px-6 text-center mt-[70px] md:mt-[120px] lg:mt-[200px]">
<motion.h2
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
📂 My Projects
</motion.h2>


        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover transition duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <Link href={project.link} target="_blank">
                  <span className="text-white text-lg font-semibold bg-blue-600 px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition">
                    View Project
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
