"use client";
import { motion } from "framer-motion";

const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-16 h-16 bg-purple-500 rounded-full opacity-30 blur-3xl"
          animate={{
            x: [Math.random() * 200, Math.random() * -200],
            y: [Math.random() * 200, Math.random() * -200],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
