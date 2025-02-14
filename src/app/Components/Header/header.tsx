
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 bg-gradient-to-b from-teal-900/70 to-darkBg/90 backdrop-blur-lg 
      border-b border-teal-400/30 shadow-md shadow-teal-500/20 py-2 md:py-3 px-5 md:px-10 
      flex items-center justify-between transition-all duration-300 animate-fadeIn"
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">
        <Image
          src="/logo1.png"
          alt="Logo"
          width={60} // Adjusted for better proportions
          height={60}
          className="sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-[0_0_12px_#48D3AD] 
          transform transition-all duration-500 hover:scale-110"
        />
        </Link>
      </div>
     
      {/* Navigation Links */}
      <nav className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <Link
          href="/Build"
          className="px-4 py-1 sm:px-5 sm:py-2 text-white font-semibold rounded-full 
          bg-gradient-to-r from-teal-600 to-teal-500 shadow-md hover:shadow-lg hover:shadow-teal-400/70 
          transition-all duration-300 transform hover:scale-105 animate-slideIn"
        >
          Build Project
        </Link>

        <Link
          href="/Chat"
          className="px-4 py-1 sm:px-5 sm:py-2 text-white font-semibold rounded-full 
          bg-gradient-to-r from-teal-600 to-teal-500 shadow-md hover:shadow-lg hover:shadow-teal-400/70 
          transition-all duration-300 transform hover:scale-105 animate-slideIn"
        >
          Let's Chat
        </Link>
      </nav>
    </header>
  );
};

export default Header;

