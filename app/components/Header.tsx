import Image from 'next/image'

export default function Header() {
  return (
    <section className="flex flex-col items-center text-center md:flex-row md:text-left md:justify-between mb-16">
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I&apos;m Dishank Chauhan <span className="text-yellow-400">👋</span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          Electronics student turned Tech enthusiast. I love
          building things and helping people. Very active on
          Twitter.
        </p>
      </div>
      <div className="mt-8 md:mt-0">
        <div className="w-48 h-48 relative rounded-full overflow-hidden">
          <Image 
            src="/logos/profile photo.jpg" 
            alt="Profile picture" 
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
} 