'use client'

import { motion } from 'framer-motion'
import { categories } from '@/lib/movies'

export default function CategoriesSection() {
  return (
    <motion.section
      className="py-12 md:py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Browse by Category
      </motion.h2>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-3 md:gap-4">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className="px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-foreground/30 hover:border-accent text-foreground hover:text-accent hover:bg-accent/10 transition-all font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, borderColor: '#E50914' }}
            whileTap={{ scale: 0.95 }}
            transition={{
              delay: index * 0.05,
            }}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </motion.section>
  )
}
