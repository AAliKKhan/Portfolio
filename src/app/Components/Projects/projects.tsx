"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SocialMediaCard from "../navigator";

const projects = [
  {
    id: 1,
    title: "ScentCraft",
    image: "/2.jpg",
    link: "https://scentcraft-tan.vercel.app/",
  },
  {
    id: 2,
    title: "Fit Blog",
    image: "/fitblog.webp",
    link: "https://fit-blog-livid.vercel.app/",
  },
  {
    id: 3,
    title: "Free Hit Indoor Cricket",
    image: "/indoor.webp",
    link: "https://indoor-cricket-website.vercel.app/",
  },
  {
    id: 4,
    title: "Blogaly 2.0",
    image: "/blogaly2.0.webp",
    link: "https://blog-website-plum-pi.vercel.app/",
  },
  {
    id: 5,
    title: "Zikkar Allah",
    image: "/zikar.webp",
    link: "https://zikarallah.vercel.app/",
  },
  {
    id: 6,
    title: "Photographers Portfolio",
    image: "/photo.webp",
    link: "https://photographes-portfolio-website.vercel.app/",
  },
  {
    id: 7,
    title: "Blogaly",
    image: "/5.png",
    link: "https://blogali-tau.vercel.app/",
  },
  {
    id: 8,
    title: "EME Services",
    image: "/eme.webp",
    link: "https://emeservices.vercel.app/",
  },
];


const cardVariants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.6,
    },
  },
};

export default function MyProjects() {
  return (
    <section className="py-12 md:py-24 bg-darkBg " id="Projects">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-100 mb-3 md:mb-4">
            Selected Works
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-teal-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-neutral-800 shadow-lg md:shadow-2xl shadow-black/30">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 md:h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                  priority={index < 2}
                />

                {/* Mobile-only title overlay */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-lg font-medium text-neutral-100">
                    {project.title}
                  </h3>
                </div>

                {/* Desktop hover overlay */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full">
                      <h3 className="text-xl font-medium text-neutral-100 mb-2">
                        {project.title}
                      </h3>
                      <Link
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors px-4 py-2"
                      >
                        <span className="text-sm md:text-base font-medium">
                          View
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 md:h-5 md:w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile link button */}
              <Link
                href={project.link}
                target="_blank"
                className="md:hidden absolute bottom-4 right-4 bg-teal-600/90 hover:bg-teal-700/90 text-neutral-100 rounded-lg px-3 py-1.5 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-20"
        >
          <SocialMediaCard />
        </motion.div>
      </div>
    </section>
  );
}
