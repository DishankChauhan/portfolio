import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'header', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'projects', label: 'Projects' },
  { id: 'activities', label: 'Activities' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Hide/show based on scroll direction
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);

      // Update active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      setActiveSection(currentSection?.id || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 100
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gray-900/80 backdrop-blur-sm rounded-full p-2 border border-gray-800">
        <ul className="space-y-2">
          {sections.map(({ id, label }) => (
            <motion.li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`w-3 h-3 rounded-full transition-all duration-300 relative group ${
                  activeSection === id ? 'bg-primary scale-125' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                title={label}
              >
                <span className="absolute right-full mr-2 py-1 px-2 bg-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {label}
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
} 