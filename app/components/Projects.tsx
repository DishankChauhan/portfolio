import Image from 'next/image'

interface ProjectItem {
  name: string;
  description: string;
  period: string;
  image: string;
  technologies: string[];
  links: {
    website?: string;
    source?: string;
  }
}

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      name: "Ethereum based Decentralized Voting System",
      description: "With the release of the OpenAI GPT Store, I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      period: "Jan 2024 - Feb 2024",
      image: "/projects/eth dao.png",
      technologies: ["reactJS", "TypeScript", "firestoreDB", "Solidity", "TailwindCSS", "firebase Storage", "wagmi"],
      links: {
        website: "https://eth-governance.netlify.app/"
      }
    },
    {
      name: "Kirana Kart",
      description: "Designed, developed and sold animated UI components for developers.",
      period: "June 2023 - Present",
      image: "/projects/kiranakart.png",
      technologies: ["reactJS", "TypeScript", "Firestore", "TailwindCSS", "Razorpay", "Shadcn UI", "firebase Storage", "firebase Auth"],
      links: {
        website: "https://kirana-kart.netlify.app/",
        source: "https://github.com/DishankChauhan/KiranaKart"
      }
    },
    {
      name: "insta Chat",
      description: "Developed an open-source LLM analytics platform for OpenAI.",
      period: "April 2023 - September 2023",
      image: "/projects/instaChat.png",
      technologies: ["Next.js", "TypeScript", "firestoreDB", "websockets", "Shadcn UI"],
      links: {
        website: "https://tradepro-3dc88.web.app/",
        source: "https://github.com/DishankChauhan/insta-Chat"
      }
    },
    {
      name: "SneaksUpp",
      description: "Customer Support Chatbot which uses AI to automate responses to common support questions.",
      period: "January 2023 - March 2024",
      image: "/projects/sneaksUpp.png",
      technologies: ["Next.js", "TypeScript", "firestoreDB", "TailwindCSS", "Shadcn UI"],
      links: {
        website: "https://sneaksupp.netlify.app/"
      }
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <span className="ml-4 px-3 py-1 text-sm bg-gray-800 text-white rounded-full">
          Some of my Projects
        </span>
      </div>
      <p className="text-gray-400 mb-8">
        I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-64 relative">
              <Image 
                src={project.image} 
                alt={project.name} 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.period}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span key={i} className="px-2 py-1 text-xs bg-gray-800 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.links.website && (
                  <a 
                    href={project.links.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white"
                  >
                    <span className="i-lucide-globe w-4 h-4"></span>
                    Website
                  </a>
                )}
                {project.links.source && (
                  <a 
                    href={project.links.source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white"
                  >
                    <span className="i-lucide-github w-4 h-4"></span>
                    Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 