'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'UI/UX Designer & Web Developer Intern',
    company: 'CODEON Technologies Pvt. Ltd',
    duration: 'June 2023 - November 2023',
    location: 'Tirupati',
    description: 'Designed web and mobile interfaces, created prototypes, developed responsive pages, collaborated with teams, and improved application usability and performance.',
    highlights: [
      'User research and design',
      'Figma prototypes',
      'HTML/CSS/JavaScript development',
      'Performance optimization',
      'Cross-functional collaboration',
    ],
    gradient: 'from-indigo-500 to-purple-500',
  },
]

const certifications = [
  {
    title: 'UI/UX & Web Development Certification',
    issuer: 'CODEON Technologies Pvt. Ltd',
    year: '2023',
    icon: '🎓',
  },
]

export default function Experience() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative" id="experience">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-indigo-500/50"></div>
            <p className="text-indigo-400 uppercase text-xs sm:text-sm font-semibold tracking-widest">Experience</p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-indigo-500/50"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Experiences */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`relative overflow-hidden rounded-lg sm:rounded-xl glass border border-gray-800 p-5 sm:p-8 group hover:border-indigo-500/30 transition-all duration-300`}>
                {/* Gradient bg */}
                <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${exp.gradient} opacity-5 group-hover:opacity-10 transition-opacity rounded-full blur-3xl`}></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-sm sm:text-base text-indigo-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-left sm:text-right flex-shrink-0">
                      <p className="text-xs sm:text-sm text-gray-400">{exp.duration}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{exp.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} flex-shrink-0`}></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg sm:rounded-xl glass border border-cyan-500/30 p-4 sm:p-6 group hover:border-cyan-500/60 transition-all duration-300 glow-cyan"
              >
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-5 group-hover:opacity-10 transition-opacity rounded-full blur-2xl"></div>

                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{cert.icon}</div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">{cert.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">{cert.issuer}</p>
                  <p className="text-cyan-400 font-semibold text-xs sm:text-sm">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
