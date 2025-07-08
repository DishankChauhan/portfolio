"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollAnimation from './ScrollAnimation'
import Card3D from './Card3D'

interface ProjectItem {
  name: string;
  description: string;
  period: string;
  image?: string;
  imageUrl?: string;
  displayText?: string;
  driveLink?: string;
  technologies: string[];
  links: {
    website?: string;
    source?: string;
    paper?: string;
  }
}

interface AdditionalProject {
  name: string;
  link: string;
  description: string;
}

export default function Projects() {
  const additionalProjects: AdditionalProject[] = [
    {
      name: "Cody",
      link: "https://github.com/DishankChauhan/Cody",
      description: "AI-powered code assistant and VS Code extension for intelligent programming"
    },
    {
      name: "Dexly",
      link: "https://github.com/DishankChauhan/Dexly",
      description: "High-performance decentralized perpetual futures trading platform on Solana"
    },
    {
      name: "Zipp",
      link: "https://github.com/DishankChauhan/Zipp",
      description: "Modern platform for instant website deployment with one click"
    },
    {
      name: "Believe Screener",
      link: "https://github.com/DishankChauhan/believe_screener",
      description: "Stock market screening and analysis tool"
    },
    {
      name: "SOL Audit",
      link: "https://github.com/DishankChauhan/SOL-audit",
      description: "Smart contract security auditing tool for Solana"
    }
  ];

  const projects: ProjectItem[] = [
    {
      name: "Sage.ai - AI-Powered Research Explainer",
      description: "Developed Sage.AI, an intelligent research assistant that transforms dense academic papers into interactive, easy-to-understand summaries with concept graphs and Q&A generation. Engineered a full-stack solution using React, D3.js, and a Python (FastAPI) backend, leveraging OpenAI GPT-4 for core analysis and deploying on a scalable microservices architecture. Achieved a 70% reduction in time-to-comprehension for complex papers and improved learning retention by 40% during user testing.",
      period: "2024",
      displayText: "Sage.ai",
      driveLink: "https://drive.google.com/file/d/1eD0jYOAm0KOtr_4nVIVrhvkjT8lhw-Az/view?usp=sharing",
      technologies: ["React", "D3.js", "Python", "FastAPI", "OpenAI GPT-4", "Microservices"],
      links: {
        source: "https://github.com/DishankChauhan/Sage.ai"
      }
    },
    {
      name: "Vectron",
      description: "Built a Rust-based vector database supporting multi-model embeddings from Python ML services (Sentence Transformers, scikit-learn, OpenAI/Cohere), boosting throughput by 60–133% and cutting storage by 60% with WAL + zstd compression. Designed a fast vector search engine (sub-ms queries on 10K+ vectors) with seamless Rust–Python integration. Implemented crash recovery and fault-tolerant storage with CRC32-verified WAL, achieving 99.9% data durability and zero-downtime recovery under concurrent ML workloads.",
      period: "2024",
      imageUrl: "https://www.pngitem.com/pimgs/m/19-199505_rust-programming-language-logo-hd-png-download.png",
      technologies: ["Rust", "Python", "ML", "Vector Database", "WAL", "zstd"],
      links: {
        source: "https://github.com/DishankChauhan/Vectron"
      }
    },
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
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section>
      <ScrollAnimation>
        <div className="flex items-center mb-6">
          <span className="ml-4 px-3 py-1 text-sm bg-gray-800 text-white rounded-full">
            
          </span>
        </div>
        <p className="text-gray-400 mb-8">
          Here are some of my notable projects that showcase my technical skills and problem-solving abilities.
        </p>
      </ScrollAnimation>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <Card3D key={index} className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl border border-gray-800 hover:border-primary/50">
            <div className="h-64 relative overflow-hidden">
              {project.displayText ? (
                <div className="flex items-center justify-center h-full group-hover:scale-110 transition-transform duration-500">
                  <a 
                    href={project.driveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent hover:text-blue-500 transition-colors"
                  >
                    {project.displayText}
                  </a>
                </div>
              ) : project.imageUrl ? (
                <div className="flex items-center justify-center h-full group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={project.imageUrl} 
                    alt={project.name}
                    className="max-h-full max-w-full p-8 object-contain"
                  />
                </div>
              ) : project.image ? (
                <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500">
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                </div>
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.period}</p>
              <p className="text-gray-300 mb-4 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 text-xs bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.links.website && (
                  <a 
                    href={project.links.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.links.source && (
                  <a 
                    href={project.links.source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </Card3D>
        ))}
      </motion.div>

      <ScrollAnimation>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h3 className="text-2xl font-semibold">More Projects</h3>
            <div className="flex flex-wrap gap-2">
              {additionalProjects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700 rounded-lg text-sm font-medium text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-primary/50"
                  title={project.description}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {project.name}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
} 