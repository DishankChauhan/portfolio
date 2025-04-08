import Image from 'next/image'

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  logo?: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Unique Data Solution",
      role: "Full Stack Developer Intern",
      period: "Feb 2024 - June 2024",
      logo: "/logos/4.png"
    }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center gap-4">
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
              <h3 className="text-xl font-medium">{exp.company}</h3>
              <p className="text-gray-600 dark:text-gray-400">{exp.role}</p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">{exp.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 