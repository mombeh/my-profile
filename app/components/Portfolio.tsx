const projects = [
    {
      title: "Project One",
      description: "A project built with React and Node.js",
      url: "#",
      repo: "#",
    },
    {
      title: "Project Two",
      description: "An e-commerce store using Next.js",
      url: "#",
      repo: "#",
    },
    // Add more projects
  ];
  
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      url: "#",
      date: "June 2024"
    },
    {
      title: "React Developer Certification",
      issuer: "Udemy",
      url: "#",
      date: "Dec 2023"
    },
    // Add more certificates
  ];
  
  const stacks = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "React Native",
    "Tailwind CSS",
    // Add more stacks
  ];
  
  
  export default function Portfolio() {
    return (
      <div className="space-y-16">
        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-4xl mb-8 font-semibold text-white">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <div
                key={i}
                className="border rounded-lg p-6 hover:shadow-lg transition bg-gray-800 text-white"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="my-2 text-gray-300">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Certificates Section */}
        <section id="certificates">
          <h2 className="text-4xl mb-8 font-semibold text-white">Certificates</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="border rounded-lg p-6 hover:shadow-lg transition bg-gray-800 text-white"
              >
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-gray-300 mb-2">{cert.issuer}</p>
                <p className="text-gray-400 mb-4">{cert.date}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </section>
  
        {/* Stacks Section */}
        <section id="stacks">
          <h2 className="text-4xl mb-8 font-semibold text-white">Stacks</h2>
          <div className="flex flex-wrap gap-4">
            {stacks.map((stack, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-blue-600 rounded-md text-white font-mono text-sm cursor-default select-none"
              >
                {stack}
              </span>
            ))}
          </div>
        </section>
      </div>
    );
  }
  