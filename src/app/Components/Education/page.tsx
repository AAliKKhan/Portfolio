"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import SocialMediaCard from "../navigator";

const FloatingOrbs = dynamic(() => import("../FloatingOrbs"), { ssr: false });

const images = ["/Ali2.png", "/Ali1.png", "/Ali2.png", "/Ali1.png"];

const Education = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <section className="relative  text-white py-20 px-6 overflow-hidden flex flex-col items-center  bg-gradient-to-b from-darkBg to-[#2d2f31] mt-[70px] md:mt-[120px] lg:mt-[200px]" id="Learning">
       <SocialMediaCard></SocialMediaCard>
      {/* Floating Background */}
      <FloatingOrbs />

         <motion.h2
  className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  🚀 My Learning Journey
</motion.h2>

      {/* Education Cards */}
      <motion.div
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 p-6 bg-white/10 rounded-xl shadow-lg backdrop-blur-md border border-white/15"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {[
          {
            icon: "📚",
            title: "Schooling",
            description:
              "Studied at St. Paul’s English High School, Karachi (Class 1 - Matriculation), where I built my academic foundation.",
          },
          {
            icon: "🎓",
            title: "College",
            description:
              "Currently in 1st year at PECHS Foundation College, expanding my knowledge and skills.",
          },
          {
            icon: "💻",
            title: "Technical Training",
            description:
              "Enrolled in GIAIC & PIAIC, advancing in Generative & Agentic AI, Full-Stack Development, and Modern Web Technologies.",
          },
          {
            icon: "💼",
            title: "Internship",
            description:
              "Intern at Code Alpha, gaining hands-on experience in Frontend Development.",
          },
          {
            icon: "🚀",
            title: "Self-Learning",
            description:
              "Constantly refining my skills with projects in React, Next.js, TypeScript, and Backend Integrations.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/5 rounded-lg backdrop-blur-xl hover:bg-white/15 transition duration-300 shadow-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-4xl">{item.icon}</span>
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-300 text-base">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Slider */}
      <div className="relative w-full max-w-4xl mt-14">
        <motion.div
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0f1d] via-transparent h-1/3 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <motion.div key={index} className="p-2" whileHover={{ scale: 1.05 }}>
              <Image
                src={src}
                alt={`Education ${index + 1}`}
                width={700}
                height={400}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Education;
