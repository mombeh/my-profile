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
    // Add more projects here
  ];
  
  export default function Portfolio() {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div key={i} className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="my-2 text-gray-600">{project.description}</p>
            <div className="flex space-x-4">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                Live Demo
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
  