interface Publication {
  title: string;
  description: string;
  link: string;
}

export default function Achievements() {
  const publications: Publication[] = [
    {
      title: "Brainer System Paper",
      description: "Published system paper detailing the architecture and impact of Brainer, an AI-powered note-taking platform.",
      link: "https://doi.org/10.5281/zenodo.15765178"
    },
    {
      title: "Sage.AI System Paper",
      description: "Published system paper on the architecture and effectiveness of Sage.AI in transforming academic paper comprehension.",
      link: "https://doi.org/10.5281/zenodo.15768080"
    }
  ];

  return (
    <section className="mb-16">
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Publications</h3>
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-lg font-medium mb-2">
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {pub.title}
                  </a>
                </h4>
                <p className="text-gray-300">{pub.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 