export default function Skills() {
    const skills = [
      "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
      "React Native", "NestJS", "Tailwind CSS", "Docker", "Git"
    ];
  
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-5 py-2 bg-blue-600 rounded-full text-white font-mono font-semibold cursor-default select-none transition-colors hover:bg-blue-700"
          >
            {skill}
          </span>
        ))}
      </div>
    );
  }
  