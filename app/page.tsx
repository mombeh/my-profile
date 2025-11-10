import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="scroll-smooth bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <section
          id="home"
          className="min-h-screen flex flex-col md:flex-row items-center justify-center"
        >
          <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img
              src="/path-to-your-profile.jpg"
              alt="Profile image"
              className="rounded-full w-48 h-48 object-cover border-4 border-blue-600"
            />
          </div>
          <div className="md:w-2/3 md:pl-12 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
            <h3 className="text-lg leading-relaxed mb-6">
              Full Stack Developer from Cameroon. Building applications and
              websites, specializing in modern web technology, and contributing
              to the developer community through open source.
            </h3>
            <div className="flex justify-center md:justify-start space-x-6 text-blue-500 text-2xl">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-16">
          <h2 className="text-4xl mb-8 font-semibold text-white">Portfolio</h2>
          <Portfolio />
        </section>

        <section id="skills" className="py-16 bg-gray-800">
          <h2 className="text-4xl mb-8 font-semibold text-white">Stacks</h2>
          <Skills />
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-4xl mb-8 font-semibold text-white">Contact</h2>
          <Contact />
        </section>
      </main>
    </div>
  );
}
