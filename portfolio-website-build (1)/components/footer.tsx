'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-black via-background to-background border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                ANKIREDDYPALLI
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A creative technologist building intelligent digital experiences that inspire and delight.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Tech Stack', href: '#tech' },
                  { name: 'Contact', href: '#contact' },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:ankireddypallithanush@gmail.com"
                    className="text-gray-400 hover:text-indigo-400 transition-colors text-sm break-all"
                  >
                    ankireddypallithanush@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917816012919"
                    className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                  >
                    +91 7816012919
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Ankireddypalli Thanush. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-4 sm:mt-0">
              Crafted with{' '}
              <span className="text-indigo-400">❤️</span> using Next.js, React & Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
