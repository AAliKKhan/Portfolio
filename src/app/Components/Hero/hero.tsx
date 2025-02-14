"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SocialMediaCard from "../navigator";


const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 lg:px-20 py-20 min-h-screen bg-darkBg text-white overflow-hidden  bg-gradient-to-b from-darkBg to-[#2d2f31]">
       <SocialMediaCard></SocialMediaCard>
      {/* Floating Background Elements */}
      <motion.div
        className="absolute w-32 h-32 bg-teal-600 rounded-full top-10 left-10 opacity-20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-green-600 rounded-full bottom-10 right-10 opacity-20 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      {/* Left Section - Text */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <motion.h1
          className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-b from-gray-600 to-teal-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gray-300">Hello, I Am </span>ALI
        </motion.h1>

        <motion.p
          className="text-lg text-gray-400 max-w-md mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Crafting inovative and elegant digital experiences through clean design and scalable code.
        </motion.p>


      </div>

      {/* Right Section - Futuristic Photo Frame */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mt-12 lg:mt-0 border-2 border-gray-800 rounded-2xl flex items-center justify-center shadow-xl">
        {/* Animated Border Frame */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-teal-500 opacity-50 animate-pulse"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
        <Image
          src="/Ali2.png"
          alt="Profile"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

    </section>
  );
};

export default Hero;
