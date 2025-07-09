import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <section className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-between">
      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Hi, I&apos;m Dishank Chauhan
          </h1>
          <div className="flex items-center justify-center md:justify-start mb-6">
            <span className="text-2xl animate-wave">👋</span>
            <motion.div 
              className="ml-4 px-4 py-2 bg-gray-800 rounded-full"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-xl text-gray-300">Builder</span>
            </motion.div>
          </div>
        </motion.div>
        <motion.p 
          className="text-xl text-gray-400 mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          A Tech stack independent Tech enthusiast. I love
          building things and helping people. Very active on
          Twitter.
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a 
            href="https://github.com/DishankChauhan" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary hover:bg-primary/80 rounded-full font-medium transition-colors"
          >
            View GitHub
          </a>
          <a 
            href="https://x.com/Dishank0029" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-colors"
          >
            Follow on X
          </a>
          <a 
            href="https://drive.google.com/file/d/1tOtsPiXplg1l6m6W4OqA7Df9t7ry7pGI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-colors"
          >
            My Resume
          </a>
        </motion.div>
      </motion.div>
      <motion.div 
        className="mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="relative">
          <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-primary/20">
            <Image 
              src="/my pic.jpeg" 
              alt="Profile picture" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-gray-800 rounded-full p-4">
            <span className="text-2xl">💻</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 
