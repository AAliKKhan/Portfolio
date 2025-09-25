// import React from "react";

// const SocialMediaCard = () => {
//   const socialLinks = [
//     { name: "AboutMe", icon: "💻", link: "#AboutMe" },
//     { name: "Skills", icon: "🛠️", link: "#Skills" },
//     { name: "Learning", icon: "🚀", link: "#Learning" },
//     { name: "Projects", icon: "📂", link: "#Projects" },
//     { name: "Reviews", icon: "⭐", link: "#Reviews" },
//     { name: "Chat", icon: "📧", link: "/Chat" }
//   ];

//   return (
//     <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-0.5 p-0.5 bg-transparent rounded-r-sm shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-md sm:p-0.5 sm:gap-0.5 sm:w-8 md:w-10 lg:w-12">
//       <ul className="flex flex-col gap-0.25 sm:gap-0.25">
//         {socialLinks.map((social, index) => (
//           <li key={index} className="relative group cursor-pointer">
//             <a href={social.link} className="flex items-center justify-center p-0.5 w-6 h-6 bg-teal-500 text-white rounded-full shadow-sm transition-all duration-300 ease-in-out group-hover:scale-110 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-xs sm:text-[10px] md:text-xs lg:text-sm">
//               {social.icon}
//             </a>
//             <span className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-0.5 py-0.25 rounded shadow-sm transition-all duration-300 ease-in-out text-[8px] group-hover:translate-x-1 sm:text-[7px] md:text-[8px] lg:text-[9px]">
//               {social.name}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SocialMediaCard;

import React from "react";
import Link from "next/link";
import {
  FaUser,
  FaTools,
  FaRocket,
  FaFolderOpen,
  FaStar,
  FaEnvelope,
} from "react-icons/fa";

type SocialLink = {
  name: string;
  icon: React.ReactNode;
  href: string;
  label?: string;
};

const socialLinks: SocialLink[] = [
  { name: "About", icon: <FaUser />, href: "#AboutMe", label: "About" },
  { name: "Skills", icon: <FaTools />, href: "#Skills", label: "Skills" },
  { name: "Learning", icon: <FaRocket />, href: "#Learning", label: "Learning" },
  { name: "Projects", icon: <FaFolderOpen />, href: "#Projects", label: "Projects" },
  { name: "Reviews", icon: <FaStar />, href: "#Reviews", label: "Reviews" },
  { name: "Chat", icon: <FaEnvelope />, href: "/Chat", label: "Contact" },
];

export default function SocialMediaCard() {
  return (
    <>
      {/* Desktop / Large screens: Vertical left rail */}
      <nav
        aria-label="Quick navigation"
        className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-3"
      >
        <ul className="flex flex-col gap-3">
          {socialLinks.map((link) => (
            <li key={link.href} className="relative group">
              <Link
                href={link.href}
                aria-label={link.label || link.name}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-lg ring-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400/40 transition-transform transform-gpu hover:-translate-y-1"
              >
                <span className="text-lg">{link.icon}</span>
              </Link>

              {/* Tooltip */}
              <span
                role="note"
                className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-gray-900/95 text-white px-3 py-1 text-xs font-medium opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-2 group-focus-within:opacity-100 group-focus-within:translate-x-2 transition-all duration-200"
              >
                {link.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile / Small screens: Bottom floating bar */}
      <nav
        aria-label="Primary"
        className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-fit px-3 py-2 bg-black/40 backdrop-blur-md rounded-full shadow-lg"
      >
        <ul className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-label={link.label || link.name}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white ring-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400/40 hover:bg-white/10 transition-colors"
              >
                <span className="text-lg">{link.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
