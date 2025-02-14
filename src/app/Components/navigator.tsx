import React from "react";

const SocialMediaCard = () => {
  const socialLinks = [
    { name: "AboutMe", icon: "💻", link: "#AboutMe" },
    { name: "Skills", icon: "🛠️", link: "#Skills" },
    { name: "Learning", icon: "🚀", link: "#Learning" },
    { name: "Projects", icon: "📂", link: "#Projects" },
    { name: "Reviews", icon: "⭐", link: "#Reviews" },
    { name: "Chat", icon: "📧", link: "/Chat" }
  ];

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-0.5 p-0.5 bg-transparent rounded-r-sm shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-md sm:p-0.5 sm:gap-0.5 sm:w-8 md:w-10 lg:w-12">
      <ul className="flex flex-col gap-0.25 sm:gap-0.25">
        {socialLinks.map((social, index) => (
          <li key={index} className="relative group cursor-pointer">
            <a href={social.link} className="flex items-center justify-center p-0.5 w-6 h-6 bg-teal-500 text-white rounded-full shadow-sm transition-all duration-300 ease-in-out group-hover:scale-110 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-xs sm:text-[10px] md:text-xs lg:text-sm">
              {social.icon}
            </a>
            <span className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-0.5 py-0.25 rounded shadow-sm transition-all duration-300 ease-in-out text-[8px] group-hover:translate-x-1 sm:text-[7px] md:text-[8px] lg:text-[9px]">
              {social.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaCard;
