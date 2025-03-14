"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SocialMediaCard from "../navigator";
import { useInView } from "react-intersection-observer";

const testimonials = [

  {
    name: "Asim Khan",
    review:
      "Highly professional and creative. The project was delivered on time with great attention to detail.",
    company: "Founder, John Liquor",
    image: "/R2.png",
  },
  {
    name: "Adeel Khan",
    review:
      "I loved working with Ali! The UI/UX was stunning, and the performance was top-notch.",
    company: "Founder, Scholar Learning",
    image: "/R1.png",
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      className="relative bg-gradient-to-b from-darkBg to-[#2d2f31] text-white py-24 px-6 overflow-hidden mt-12"
      id="Reviews"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8 }}
    >
      <SocialMediaCard />
      <div className="max-w-6xl mx-auto text-center relative z-10">
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-100 mb-3 md:mb-4">
          What Clients Say
          </h2>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-teal-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          className="relative mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6"
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/15 transition duration-300 hover:bg-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-teal-400"
                  />
                  <p className="text-lg text-gray-300">{testimonial.review}</p>
                  <h3 className="mt-4 text-xl font-semibold text-teal-400">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </motion.div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
