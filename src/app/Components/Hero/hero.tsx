"use client";
import React, { useMemo, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SocialMediaCard from "../navigator";
import Link from "next/link";

const Hero = () => {
  // Floating animation - reduced complexity
  const floatingVariants = useMemo(() => ({
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }), []);

  // Text Animation (Memoized)
  const textVariants = useCallback((i: number) => ({
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08, // Faster appearance
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }), []);

  // Background Grid (CSS instead of animation for performance)
  const letters = "ALI".split("");

  // Memoized Floating Particles
  const floatingParticles = useMemo(() => (
    [...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-teal-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
        animate={{
          y: [0, -30],
          opacity: [0.7, 0],
          scale: [1, 1.5]
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))
  ), []);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 lg:px-20 py-20 min-h-screen bg-darkBg text-white overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-darkBg">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        {floatingParticles}
      </div>


      {/* Left Section - Text */}
      <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left z-10">
        <motion.div className="overflow-hidden" initial="hidden" animate="visible">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter">
            <span className="text-gray-300 block mb-4">Hello, I'm </span>
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent"
                variants={textVariants(i)}
                initial="hidden"
                animate="visible"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        <motion.p className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
          Crafting next-gen digital experiences through{" "}
          <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent font-medium">
            innovative design
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-teal-600 bg-clip-text text-transparent font-medium">
            cutting-edge development
          </span>
        </motion.p>

        <div className="flex gap-4 justify-center lg:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full font-medium shadow-lg"
          >
            <Link href="#Projects">
            View Work
            </Link>
            
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-teal-500/50 rounded-full font-medium hover:bg-teal-500/10 transition-colors"
          >
              <Link href="/Chat">
             Contact
            </Link>
          </motion.button>
        </div>
      </div>

      {/* Right Section - Holographic Photo */}
      <motion.div
        className="relative w-72 h-72 lg:w-96 lg:h-96 mt-16 lg:mt-0 z-10"
        variants={floatingVariants}
        animate="float"
      >
        {/* Glowing Core */}
        <motion.div
          className="absolute inset-0 bg-teal-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Profile Image with Optimized Quality */}
        <motion.div className="relative w-full h-full rounded-3xl overflow-hidden">
          <Image
            src="/Ali2.png"
            alt="Profile"
            fill
            quality={80}
            priority={false}
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Background Gradient (CSS-based) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[500px] bg-gradient-to-l from-teal-500/10 to-transparent -skew-x-12 blur-3xl" />
    </section>
  );
};

export default Hero;
