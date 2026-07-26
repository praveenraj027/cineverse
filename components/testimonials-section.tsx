'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/movies'
import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  return (
    <motion.section
      className="py-12 md:py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Title */}
      <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-foreground/70">Join thousands of satisfied viewers enjoying premium streaming.</p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: '#E50914' }}
            transition={{
              delay: index * 0.1,
            }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} whileHover={{ scale: 1.2 }}>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-foreground/80 mb-4 italic text-sm leading-relaxed">"{testimonial.text}"</p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-foreground/60 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
