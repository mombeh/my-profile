export default function Skills() {
    const skills = [
      "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
      "React Native", "NestJS", "Tailwind CSS", "Docker", "Git"
    ];
  
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-blue-600 rounded-md text-white font-mono text-sm cursor-default select-none"
          >
            {skill}
          </span>
        ))}
      </div>
    );
  }
  