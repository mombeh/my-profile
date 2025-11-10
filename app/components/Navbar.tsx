"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold select-none tracking-wide">
          MyLogo
        </div>

        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {["home", "portfolio", "skills", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="relative group hover:text-blue-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
