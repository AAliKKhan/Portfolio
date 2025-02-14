"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SocialMediaCard from "../navigator";

const CTASection = () => {
  return (
    <section className="relative text-white py-16 px-6 sm:px-12 text-center mx-auto max-w-4xl  overflow-hidden">
       <SocialMediaCard></SocialMediaCard>
      {/* Subtle Floating Glow Effects */}
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-teal-500 opacity-20 blur-[100px] rounded-full"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-8 w-28 h-28 bg-teal-500 opacity-20 blur-[80px] rounded-full"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Heading with Smooth Fade-in */}
      <motion.h2
        className="text-2xl sm:text-2xl font-extrabold tracking-tight leading-tight text-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Loved what you see?
      </motion.h2>

      {/* Subtext */}
      <motion.p
        className="mt-4 text-lg sm:text-xl font-light text-gray-400 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Let’s craft something extraordinary together. Your vision, my expertise—let’s make it happen!
      </motion.p>

      {/* Call to Action Button */}
      <motion.div className="mt-8 inline-block relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
        <Link href="/Build">
          <button className="relative px-8 py-3 text-lg font-semibold bg-gray-900 text-white rounded-full shadow-md transition-all duration-300 hover:bg-gray-800 flex items-center gap-2 overflow-hidden border border-gray-700">
            <span className="relative z-10">Let’s Discuss</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            
            {/* Soft Glow Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-teal-700 opacity-10 rounded-full blur-lg"></span>
          </button>
        </Link>
      </motion.div>
      
    </section>
  );
};

export default CTASection;



