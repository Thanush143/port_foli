'use client'

import { motion } from 'framer-motion'

export default function Philosophy() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background relative overflow-hidden" id="philosophy">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Quote card */}
          <div className="relative rounded-2xl overflow-hidden glass border border-gray-800 p-8 sm:p-16 group glow-md hover:glow-lg transition-all duration-300">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            ></motion.div>

            <div className="relative z-10 space-y-8">
              {/* Quote mark */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-6xl text-indigo-400/30 font-serif">&ldquo;</span>
              </motion.div>

              {/* Main quote */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white"
              >
                <span className="bg-gradient-to-r from-white via-gray-200 to-indigo-300 bg-clip-text text-transparent">
                  Technology is at its best when it becomes invisible and the experience becomes{' '}
                  <span className="italic">unforgettable</span>.
                </span>
              </motion.h2>

              {/* Closing quote mark */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-end"
              >
                <span className="text-6xl text-indigo-400/30 font-serif">&rdquo;</span>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 origin-left"
              ></motion.div>

              {/* Supporting text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                My philosophy is rooted in the belief that great technology transcends technical complexity. Every line of code, every design decision, and every user interaction should contribute to creating moments that delight and inspire. It&apos;s about building solutions that feel so natural, so intuitive, that users forget they&apos;re interacting with technology—they&apos;re simply living a better experience.
              </motion.p>
            </div>

            {/* Bottom gradient line */}
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5,
              }}
            ></motion.div>
          </div>

          {/* Accent elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center gap-2"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              ></motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
