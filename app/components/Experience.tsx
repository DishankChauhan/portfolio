import Image from 'next/image'
import Link from 'next/link'

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  logo?: string;
  link?: string;
  description: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Brainer",
      role: "Founder",
      period: "June 2025 - Present",
      link: "https://brainer-six.vercel.app/",
      description: [
        "Engineered Brainer, an AI-powered note-taking platform which generated 100+ users in the first launch, featuring voice transcription, OCR, and multilingual support.",
        "Architected with Next.js 14, TypeScript, and PostgreSQL, integrating AWS Transcribe and OpenAI for intelligent processing and also published a system paper on zenodo: Link",
        "Implemented real-time voice assistant with 95% accuracy, reducing note-taking time by 60%, while handling concurrent file processing and semantic search across 1000+ notes using custom-built embedding system."
      ]
    },
    {
      company: "SneakSupp",
      role: "Co-Founder and Full Stack Developer",
      period: "July 2024 - March 2025",
      description: [
        "Co-founded startup and led the end-to-end development of a sneaker marketplace platform using Next.js, Node.js, and Firebase.",
        "Implemented Firebase Auth & Firestore for dynamic product listings, enabling 50+ uploads and 70+ beta users."
      ]
    },
    {
      company: "Unique Data Solution",
      role: "Full Stack Dev Intern",
      period: "Feb 2024 - June 2024",
      logo: "/logos/4.png",
      description: [
        "Wrote unit/integration tests (Jest, Postman) and deployed apps on AWS EC2/S3/CloudFront, achieving 99.9% uptime and 45% faster load times.",
        "Deployed and managed applications through AWS EC2, S3, and CloudFront, which resulted in 99.9% uptime and reduced average content load time by 45%.",
        "Built Node.js microservices and integrated REST APIs with real-time dashboards, improving data access by 60%."
      ]
    }
  ];

  return (
    <section className="mb-16">
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative flex-shrink-0 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
                {exp.logo ? (
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 dark:text-gray-300 dark:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-xl font-medium">
                  {exp.link ? (
                    <Link href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                      {exp.company}
                    </Link>
                  ) : (
                    exp.company
                  )}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.role}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">{exp.period}</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              {exp.description.map((item, i) => (
                <li key={i} className="text-base">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 