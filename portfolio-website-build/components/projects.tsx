'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'E-LEARN PLATFORM',
    subtitle: 'A student-centered digital learning ecosystem',
    description: 'Interactive learning platform designed to make web technologies easier to understand. Featured interactive learning modules, quiz system, and responsive design.',
    role: 'UI/UX Designer, Frontend Developer, Backend Developer, Team Lead',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'XAMPP'],
    features: ['Interactive learning modules', 'Quiz system', 'Clean user experience', 'Responsive design'],
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
  },
]

export default function Projects() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative" id="projects">
      <div className="max-w-6xl mx-auto">
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
            <p className="text-indigo-400 uppercase text-xs sm:text-sm font-semibold tracking-widest">Works</p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-indigo-500/50"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Selected Works
            </span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl glass border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 p-6 sm:p-8 md:p-12`}>
                {/* Background gradient */}
                <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl`}></div>

                <div className="relative z-10">
                  {/* Project header */}
                  <div className="mb-8">
                    <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-0 mb-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-base sm:text-lg text-indigo-400">{project.subtitle}</p>
                      </div>
                      <span className="text-3xl sm:text-4xl opacity-10 font-bold text-white flex-shrink-0">0{project.id}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8">{project.description}</p>

                  {/* Role */}
                  <div className="mb-8">
                    <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-2">Role</p>
                    <p className="text-white">{project.role}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold mb-3 sm:mb-4">Features</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mb-6 sm:mb-8">
                    <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-semibold mb-3 sm:mb-4">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 hover:border-indigo-500/60 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Lab section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl glass border border-cyan-500/30 p-6 sm:p-8 md:p-12 glow-cyan">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-500 opacity-5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  AI Lab
                </span>
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">Future Innovations & Research</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 sm:mb-8">
                {[
                  'Machine Learning',
                  'Generative AI',
                  'Intelligent Assistants',
                  'Predictive Analytics',
                  'Data-driven Applications',
                  'Neural Networks',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-center text-base sm:text-lg md:text-xl italic text-cyan-400 font-semibold">
                {'"The future belongs to those who build it."'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
