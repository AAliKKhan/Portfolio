"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SocialMediaCard from "../navigator";

const testimonials = [
  {
    name: "Ali Adnan",
    review:
      "Exceptional work! The design was sleek, and the functionality was beyond expectations.",
    company: "CEO, Pika Pick",
    image: "/Ali3.jpg",
  },
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

  return (
    <section className="relative  bg-gradient-to-b from-darkBg to-[#2d2f31]  text-white py-24 px-6 overflow-hidden" id="Reviews">
       <SocialMediaCard></SocialMediaCard>
      <div className="max-w-6xl mx-auto text-center relative z-10">
      <motion.h2
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
 What Clients Say
</motion.h2>


        <div className="relative mt-12 max-w-4xl mx-auto">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6"
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <div className=" bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/15 transition duration-300 hover:bg-white/20">
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
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;




