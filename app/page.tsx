// import React from "react";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
// import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        </section>
        <section id="portfolio" className="py-16">
          <h2 className="text-4xl mb-8 font-semibold">Portfolio</h2>
          <Portfolio />
        </section>
        <section id="skills" className="py-16 bg-gray-100">
          <h2 className="text-4xl mb-8 font-semibold">Stacks</h2>
          <Skills />
        </section>
        <section id="contact" className="py-16">
          <h2 className="text-4xl mb-8 font-semibold">Contact</h2>
          {/* <Contact /> */}
        </section>
      </main>
    </div>
  );
}
