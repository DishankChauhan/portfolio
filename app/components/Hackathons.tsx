import Image from 'next/image'
import Link from 'next/link'

interface ActivityItem {
  title: string;
  category: 'achievement' | 'certification' | 'extracurricular' | 'volunteering';
  organization: string;
  date: string;
  description: string;
  logo: string;
  certificateLink?: string;
}

export default function Activities() {
  const activities: ActivityItem[] = [
    {
      title: "DeepLearning.AI TensorFlow Developer",
      category: "certification",
      organization: "Coursera",
      date: "Oct 12, 2024",
      description: "Earned the DeepLearning.AI TensorFlow Developer certification, demonstrating fundamental knowledge of Machine Learning , TensorFlow and Natural Language Processing.",
      logo: "/logos/1.png",
      certificateLink: "https://www.coursera.org/account/accomplishments/specialization/certificate/L3VNWELNK7QE"
    },
    
    {
      title: "Vice President - Society of Photo-Optical Instrumentation Engineers",
      category: "extracurricular",
      organization: "Society of Photo-Optical Instrumentation Engineers",
      date: "Nov 2022 - Dec 2023",
      description: "Appointed as Vice President of the Society of Photo-Optical Instrumentation Engineers, MUJ Chapter, responsible for organizing Electronics Experimentation and Seminars.",
      logo: "/logos/2.svg"
    },
    {
      title: "Head of Logistics",
      category: "extracurricular",
      organization: "Entrepreneurship Cell, MUJ",
      date: "Sept 2021 - Nov 2022",
      description: "Responsible for organizing Entrepreneurship events and and handle logistics.",
      logo: "/logos/3.png"
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex items-center mb-6">
        <h2 className="text-3xl font-bold"></h2>
        <span className="ml-4 px-3 py-1 text-sm bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 rounded-full">
          
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-400 mb-8">
        Beyond software development, I'm passionate about continuous learning, sharing knowledge, 
        and giving back to the community. Here are some of my notable activities, certifications, 
        and volunteer work.
      </p>
      <div className="space-y-12">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 relative rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
                {activity.logo ? (
                  <Image
                    src={activity.logo}
                    alt={`${activity.organization} logo`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-4xl text-gray-400 bg-gray-100 dark:text-gray-300 dark:bg-gray-700">
                    {activity.category === 'achievement' && '🏆'}
                    {activity.category === 'certification' && '🎓'}
                    {activity.category === 'extracurricular' && '🤝'}
                    {activity.category === 'volunteering' && '❤️'}
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                  {activity.category === 'achievement' && 'Achievement'}
                  {activity.category === 'certification' && 'Certification'}
                  {activity.category === 'extracurricular' && 'Extracurricular'}
                  {activity.category === 'volunteering' && 'Volunteering'}
                </span>
                <div className="text-gray-600 dark:text-gray-500 text-sm">{activity.date}</div>
              </div>
              <h3 className="text-xl font-semibold mt-1">{activity.title}</h3>
              <div className="text-gray-600 dark:text-gray-400">{activity.organization}</div>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{activity.description}</p>
              {activity.certificateLink && (
                <a 
                  href={activity.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="mb-0.5">
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                  </svg>
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 