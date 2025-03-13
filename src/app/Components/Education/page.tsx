"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SocialMediaCard from "../navigator";

const FloatingOrbs = dynamic(() => import("../FloatingOrbs"), { ssr: false });

const images = ["/Ali2.png", "/Ali1.png", "/Ali2.png", "/Ali1.png"];

const Education = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
  };

  const educationItems = [
    {
      icon: "📚",
      title: "Schooling",
      description: "Studied at St. Paul’s English High School, Karachi (Class 1 - Matriculation), where I built my academic foundation. Currently in 1st year at PECHS Foundation College, expanding my knowledge and skills.",
    },
   
    {
      icon: "💻",
      title: "Technical Training",
      description: "Enrolled in GIAIC & PIAIC, advancing in Generative & Agentic AI, Full-Stack Development, and Modern Web Technologies.",
    },
    
    {
      icon: "🚀",
      title: "Self-Learning",
      description: "Constantly refining my skills with projects in React, Next.js, TypeScript, and Backend Integrations.",
    },
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        bounce: 0.4, 
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  return (
    <section className="relative text-white py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-[#1a1d21] to-darkBg" id="Learning">
      <FloatingOrbs />
      <SocialMediaCard />


     

<motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-100 mb-3 md:mb-4">
            Learning Journey
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-teal-400 mx-auto rounded-full" />
        </motion.div>

      {/* Education Cards Grid */}
      <motion.div
        className="w-full max-w-6xl mx-auto px-4"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-lg border border-white/10 hover:border-teal-400/20 transition-all duration-300 shadow-2xl shadow-black/30"
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.span
                  className="text-4xl mb-4 opacity-90"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.span>
                <h3 className="text-xl font-semibold mb-3 text-teal-400">{item.title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Premium Image Slider */}
      <motion.div
        className="w-full max-w-5xl mt-20 mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-400/10">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/5 to-transparent z-10" />
          <Slider {...sliderSettings}>
            {images.map((src, index) => (
              <div key={index} className="relative aspect-[16/9]">
                <Image
                  src={src}
                  alt={`Education ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            ))}
          </Slider>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;