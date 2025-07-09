import Image from 'next/image'

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  logo: string;
}

export default function Education() {
  const education: EducationItem[] = [
    {
      institution: "Manipal University, Jaipur",
      degree: "Bachelor's  of Technology in Electronics and Communication Engineering",
      period: "2020 - 2024",
      logo: "/logos/Manipal Logo.png"
    },
  ];

  return (
    <section className="mb-16">
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src={edu.logo}
                alt={`${edu.institution} logo`}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium">{edu.institution}</h3>
              <p className="text-gray-400">{edu.degree}</p>
              <p className="text-gray-500 text-sm">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 