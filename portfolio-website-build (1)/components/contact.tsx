'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactLinks = [
    {
      label: 'Email',
      value: 'ankireddypallithanush@gmail.com',
      href: 'mailto:ankireddypallithanush@gmail.com',
      icon: '✉️',
    },
    {
      label: 'Phone',
      value: '+91 7816012919',
      href: 'tel:+917816012919',
      icon: '📱',
    },
    {
      label: 'LinkedIn',
      value: 'Ankireddypalli Thanush',
      href: 'https://linkedin.com',
      icon: '💼',
    },
    {
      label: 'GitHub',
      value: 'ankireddypalli',
      href: 'https://github.com',
      icon: '💻',
    },
  ]

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background relative" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Have a project in mind? Let&apos;s talk.</p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Contact Information</h3>

            {contactLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target={link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? undefined : '_blank'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group block"
              >
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg glass border border-gray-800 hover:border-indigo-500/30 transition-all duration-300 hover:glow-sm">
                  <span className="text-xl sm:text-2xl flex-shrink-0">{link.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">{link.label}</p>
                    <p className="text-white font-semibold text-sm sm:text-base group-hover:text-indigo-400 transition-colors break-all">
                      {link.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div className="pt-6 sm:pt-8">
              <p className="text-gray-400 uppercase text-xs sm:text-sm tracking-wider mb-3 sm:mb-4">Follow</p>
              <div className="flex gap-3 sm:gap-4">
                {[
                  { icon: '🔗', label: 'LinkedIn' },
                  { icon: '⚙️', label: 'GitHub' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (contactLinks.length + idx) * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 rounded-lg glass border border-gray-800 flex items-center justify-center text-lg hover:border-indigo-500/50 hover:glow-sm transition-all duration-300 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Name input */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-1.5 sm:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-sm sm:text-base text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email input */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-1.5 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-sm sm:text-base text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message input */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm uppercase tracking-wider text-gray-400 mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-sm sm:text-base text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:glow-md hover:from-indigo-600 hover:to-indigo-700'
                }`}
              >
                {submitted ? '✓ Message Sent' : 'Send Message'}
              </motion.button>

              {/* Form note */}
              <p className="text-xs text-gray-500 text-center pt-1.5 sm:pt-2">
                This is a demo form. In production, this would be connected to an email service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
