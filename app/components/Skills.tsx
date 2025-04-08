export default function Skills() {
  const skills = [
    "React", 
    "Next.js", 
    "TypeScript", 
    "Node.js", 
    "Solidity", 
    "Rust", 
    "Postgres", 
    "Docker",
    "Kubernetes",
    "websockets",
    "Kubernetes",
    "AWS",
    "CI/CD",
    "Git",
    "Github",
    "Gitlab CI/CD",
    "TailwindCSS",
    "Shadcn UI",
    "Magic UI",
    "NextUI",
    "Chakra UI",
    "MUI",
    "Express",
    "GCP",
    "vercel",
    "Redis",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "MariaDB",
    "Firebase",
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
} 