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
      description: "Built a secure, transparent, and tamper-proof decentralized voting platform on the Ethereum blockchain. Users can connect their wallets, create proposals, and vote on them in real time. Smart contracts ensure trustless execution, while React and Wagmi provide a seamless Web3 UI. Firebase is used for auxiliary data and storage.",
      period: "Jan 2024 - Feb 2024",
      image: "/projects/eth dao.png",
      technologies: ["reactJS", "TypeScript", "firestoreDB", "Solidity", "TailwindCSS", "firebase Storage", "wagmi"],
      links: {
        website: "https://eth-governance.netlify.app/"
      }
    },
    {
      name: "Kirana Kart",
      description: "A modern grocery inventory management store and shoping app tailored for local grocery stores, enabling users to browse products, manage carts, and make payments via Razorpay. Integrated authentication, animated UI components, and real-time product management using Firebase make it scalable and responsive.",
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
      description: "A real-time messaging app inspired by Instagram’s DM system. Built with Next.js and WebSockets for live communication, and Firestore for message storage. Focused on smooth UI/UX with instant delivery and sync of messages across clients.",
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
      description: "A Web3 sneaker marketplace where users can buy, sell, and invest in fractional ownership of high-value sneakers. Each sneaker is tokenized on the Ethereum blockchain, allowing users to own shares of a sneaker through secure smart contracts. Built with a clean, responsive frontend using Shadcn UI and a scalable Firebase backend for user data and product management.",
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