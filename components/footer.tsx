'use client'

import { motion } from 'framer-motion'
import { Heart, Send, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Support: ['Help Center', 'Contact Us', 'System Status', 'FAQ'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Accessibility'],
    Connect: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'],
  }

  const socialIcons = [
    { icon: Heart, href: '#', label: 'Facebook' },
    { icon: Send, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Instagram' },
    { icon: Mail, href: '#', label: 'LinkedIn' },
  ]

  return (
    <motion.footer
      className="bg-card/30 backdrop-blur-md border-t border-border/50 mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Logo Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-accent mb-4">CineVerse</h3>
            <p className="text-foreground/60 text-sm">
              Your gateway to premium cinema. Stream, discover, and enjoy unlimited entertainment.
            </p>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold mb-4 text-sm">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-foreground/60 hover:text-accent text-sm transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div className="border-t border-border/30 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            className="text-foreground/50 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2024 CineVerse. All rights reserved.
          </motion.p>

          {/* Social Icons */}
          <motion.div className="flex gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
