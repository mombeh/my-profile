"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / height) * 100;
      setScrollProgress(progress);

      const sections = ["home", "portfolio", "skills", "contact"];
      let current = "home";

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div
        className="h-[3px] bg-blue-500 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-3xl font-bold select-none tracking-wide animate-slideIn">
          MyLogo
        </div>

        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {["home", "portfolio", "skills", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`relative group transition ${
                activeSection === item ? "text-blue-400" : "text-white"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300
                ${activeSection === item ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
