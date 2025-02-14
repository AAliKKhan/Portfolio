
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const Footer1 = () => {
  return (
    
    <div className="relative  bg-gradient-to-b from-[#2d2f31] to-darkBg ">
  
 

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#2d2f31] via-teal-900 to-teal-600 text-white py-16 px-6 md:px-20  ">
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

export default Footer1;

