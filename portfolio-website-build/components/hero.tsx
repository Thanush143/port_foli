'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: 0.3,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <FloatingParticles />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-indigo-400 uppercase tracking-widest text-xs sm:text-sm font-semibold letter-spacing-2"
          >
            Creative Developer
          </motion.p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent block py-2">
              ANKIREDDYPALLI
            </span>
            <span className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent block py-2">
              THANUSH
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-2 font-light"
          >
            {"AI-Driven Solutions. Thoughtful Design. Elegant Code."}
          </motion.p>

          {/* Role badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2"
          >
            {['AI Developer', 'UI/UX Designer', 'Tech Lead'].map((role, i) => (
              <span
                key={i}
                className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-indigo-500/30 text-xs sm:text-sm font-medium text-gray-100 backdrop-blur-sm hover:border-indigo-400/60 hover:bg-indigo-500/5 transition-all duration-300"
              >
                {role}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 pt-10 sm:pt-14 px-4"
        >
          <a
            href="#projects"
            className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold text-sm sm:text-base hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg border border-indigo-500/40 text-white font-semibold text-sm sm:text-base backdrop-blur-sm hover:border-indigo-400/80 hover:bg-indigo-500/10 transition-all duration-300 text-center"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pt-16 sm:pt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <div className="w-5 h-9 border border-indigo-400/50 rounded-full flex items-start justify-center p-1.5">
              <motion.div className="w-0.5 h-1.5 bg-indigo-400 rounded-full" animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
