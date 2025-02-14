
"use client";

import React, { useState, useEffect } from "react";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/about";
import Education from "./Components/Education/page";
import MyProjects from "./Components/Projects/projects";
import Testimonials from "./Components/Reviews/reviews";
import CTASection from "./Components/CTA/page";
import Footer from "./Components/Footer/footer";
import Loader from "./Components/loader"; // Import Loader Component

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-darkBg">
      <Hero />
      <About />
      <Education />
      <MyProjects />
      <CTASection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Page;
