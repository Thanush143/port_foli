'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming',
    icon: '⚙️',
    skills: ['Python (Core & Advanced)', 'JavaScript', 'PHP', 'TypeScript'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['HTML', 'CSS', 'Responsive UI', 'React (Learning)'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI & Machine Learning',
    icon: '🧠',
    skills: ['ML Fundamentals', 'Generative AI', 'Neural Networks', 'Data Analysis'],
    gradient: 'from-pink-500 to-red-500',
  },
  {
    title: 'Backend & Database',
    icon: '🗄️',
    skills: ['MySQL', 'PHP', 'XAMPP', 'Server-side Logic'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Design & Prototyping',
    icon: '✨',
    skills: ['Figma', 'Canva', 'UI/UX Design', 'Prototyping'],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Tools & Environment',
    icon: '🛠️',
    skills: ['VS Code', 'XAMPP', 'Cisco Packet Tracer', 'Git'],
    gradient: 'from-teal-500 to-green-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function TechStack() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden" id="tech">
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
            <p className="text-indigo-400 uppercase text-xs sm:text-sm font-semibold tracking-widest">Skills</p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-indigo-500/50"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className={`group relative overflow-hidden rounded-lg sm:rounded-xl glass border border-gray-800 hover:border-gray-700 transition-all duration-300 p-4 sm:p-6 h-full hover:shadow-2xl`}>
                {/* Gradient background */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-2xl`}></div>

                <div className="relative z-10">
                  {/* Icon and title */}
                  <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl">{category.icon}</span>
                    <h3 className="text-base sm:text-lg font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-2 sm:space-y-3">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIdx * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 group/item"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} group-hover/item:scale-150 transition-transform flex-shrink-0`}></div>
                        <span className="text-xs sm:text-sm text-gray-300 group-hover/item:text-white transition-colors">{skill}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Specialization badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full glass border border-indigo-500/30 glow-md">
            <p className="text-gray-400 uppercase tracking-wider text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Specialization</p>
            <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Artificial Intelligence & Machine Learning
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
