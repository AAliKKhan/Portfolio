
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    
    <div className="relative  bg-gradient-to-b from-[#2d2f31] to-darkBg ">
  
      {/* Overlapping Box */}
      <div className="relative -bottom-40 left-1/2 transform -translate-x-1/2 bg-[#11162B] text-white w-[90%] md:w-3/4 lg:w-2/3 rounded-xl p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-700">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold">Build a Project</h2>
          <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed">
            Interested in working together? We should queue up a time to chat.
            I'll buy the coffee.
          </p>
        </div>

        {/* Call-to-Action Button */}
        <Link
          href="/Build"
          className="mt-4 md:mt-0 bg-transparent text-white border-2 border-teal-400 px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-teal-400 hover:text-black transition-all duration-300 ease-in-out"
        >
          
          <span className="font-medium">Let's get started</span>
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#2d2f31] via-teal-900 to-teal-600 text-white py-16 px-6 md:px-20 mt-[100px]  ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left mt-[200px] mb-[100px] ">
          {/* About Section */}
          <div>
            <Image src="/logo1.png" alt="Logo" width={80} height={80} className="mx-auto md:mx-0" />
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Crafting inovative and elegant digital experiences through clean design and scalable code.
            </p>
          </div>

    

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg font-semibold">Connect with Me</h3>
            <p className="mt-2 text-sm text-gray-300">email@example.com</p>
            <div className="flex justify-center md:justify-start mt-4 space-x-5">
            <Link
        href="https://linkedin.com"
        target="_blank"
        className="text-teal-500 hover:text-teal-300 transition-all duration-300 transform hover:scale-110"
      >
        <FaLinkedin size={28} />
      </Link>

      <Link
        href="https://github.com"
        target="_blank"
        className="text-teal-500 hover:text-teal-300 transition-all duration-300 transform hover:scale-110"
      >
        <FaGithub size={28} />
      </Link>

      <Link
        href="https://instagram.com"
        target="_blank"
        className="text-teal-500 hover:text-teal-300 transition-all duration-300 transform hover:scale-110"
      >
        <FaInstagram size={28} />
      </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-gray-900 text-sm">
          &copy; {new Date().getFullYear()} Muhammad Ali Adnan. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

