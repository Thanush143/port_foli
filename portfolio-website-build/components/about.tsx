'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export default function About() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative" id="about">
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
            <p className="text-indigo-400 uppercase text-xs sm:text-sm font-semibold tracking-widest">About</p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-indigo-500/50"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              The Journey
            </span>
          </h2>
        </motion.div>

        {/* About content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Every great innovation begins with curiosity.
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm sm:text-base text-gray-400 leading-relaxed space-y-4">
            <span className="block">
              My journey started with understanding how users experience technology through design. It evolved into developing interactive web applications and now expands into the world of Artificial Intelligence and intelligent systems.
            </span>
            <span className="block">
              From crafting interfaces in Figma to developing full-stack applications and exploring machine learning, my goal is simple:
            </span>
          </motion.p>

          <motion.div variants={itemVariants} className="py-4 sm:py-6 px-4 sm:px-6 rounded-lg glass glow-sm border border-indigo-500/20">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Create technology that feels human.
            </p>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 space-y-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-12">My Timeline</h3>

          {[
            {
              year: '2021',
              title: 'Foundation',
              description: 'Diploma in Computer Engineering at Sri Venkateshwara Government Polytechnic, Tirupati. Built core fundamentals in programming and systems design.',
              gradient: 'from-blue-500 to-indigo-500',
            },
            {
              year: '2023',
              title: 'Design & Development',
              description: 'UI/UX Designer and Web Developer Intern at CODEON Technologies. Worked on user research, interface design, Figma prototypes, and full-stack development.',
              gradient: 'from-indigo-500 to-purple-500',
            },
            {
              year: '2024',
              title: 'Present - AI & Innovation',
              description: 'B.Tech in Computer Science Engineering (AI Specialization) with 7.55 CGPA. Exploring Machine Learning, Generative AI, and intelligent systems.',
              gradient: 'from-purple-500 to-cyan-500',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4 sm:gap-6 relative"
            >
              {/* Timeline dot */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-gradient-to-r ${item.gradient} glow-sm`}></div>
                {i !== 2 && <div className="w-0.5 sm:w-1 h-16 sm:h-20 bg-gradient-to-b from-gray-700 to-transparent mt-2"></div>}
              </div>

              {/* Content */}
              <div className="pb-6 sm:pb-8 pt-1">
                <p className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.year}
                </p>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-2">{item.title}</h4>
                <p className="text-sm sm:text-base text-gray-400 mt-2 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
