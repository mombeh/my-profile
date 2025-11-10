"use client";

import { useState } from "react";

const projects = [
  { title: "Project One", description: "A project built with React and Node.js", url: "#", repo: "#" },
  { title: "Project Two", description: "An e-commerce store using Next.js", url: "#", repo: "#" },
];

const certificates = [
  { title: "Full Stack Web Development", issuer: "Coursera", url: "#", date: "June 2024" },
  { title: "React Developer Certification", issuer: "Udemy", url: "#", date: "Dec 2023" },
];

const stacks = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "NestJS", "React Native", "Tailwind CSS",
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>("projects");

  const headers = [
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "stacks", label: "Stacks" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">
      {/* Header Buttons in a Row */}
      <div className="flex space-x-6 border-b border-gray-700 mb-6">
        {headers.map((header) => (
          <button
            key={header.id}
            onClick={() => setActiveSection(header.id)}
            className={`px-6 py-3 font-semibold text-lg border-b-4 ${
              activeSection === header.id
                ? "border-blue-500 text-blue-400"
                : "border-transparent hover:text-blue-400"
            } transition`}
          >
            {header.label}
          </button>
        ))}
      </div>

      {/* Content Sections: show only active section */}
      {activeSection === "projects" && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div key={i} className="border rounded-lg p-6 hover:shadow-lg transition bg-gray-800 text-white">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live Demo</a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeSection === "certificates" && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <div key={i} className="border rounded-lg p-6 hover:shadow-lg transition bg-gray-800 text-white">
              <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
              <p className="text-gray-400 mb-1">{cert.issuer}</p>
              <p className="text-gray-500 mb-3">{cert.date}</p>
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Certificate</a>
            </div>
          ))}
        </div>
      )}

      {activeSection === "stacks" && (
        <div className="flex flex-wrap gap-4">
          {stacks.map((stack, i) => (
            <span key={i} className="px-4 py-2 bg-blue-600 rounded-md text-white font-mono text-sm select-none cursor-default">
              {stack}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
