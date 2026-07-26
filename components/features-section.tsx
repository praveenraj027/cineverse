'use client'

import { motion } from 'framer-motion'
import { Zap, Download, Brain, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '4K Streaming',
    description: 'Experience movies in stunning 4K Ultra HD quality with HDR support for the ultimate visual experience.',
  },
  {
    icon: Download,
    title: 'Offline Download',
    description: 'Download your favorite movies and watch them anywhere, anytime, even without an internet connection.',
  },
  {
    icon: Brain,
    title: 'AI Recommendations',
    description: 'Our intelligent algorithm learns your preferences and suggests content you&apos;ll love.',
  },
  {
    icon: Smartphone,
    title: 'Multi-device Support',
    description: 'Watch on your phone, tablet, or smart TV. Your progress syncs seamlessly across all devices.',
  },
]

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.section
      className="py-12 md:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      {/* Section Title */}
      <motion.div className="mb-12 text-center" variants={itemVariants}>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Why Choose CineVerse?</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Experience premium streaming with features designed for the modern cinephile.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-accent/50 transition-all hover:bg-accent/5"
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: '#E50914' }}
            >
              <motion.div
                className="mb-4 p-3 rounded-lg bg-accent/10 w-fit"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Icon className="w-6 h-6 text-accent" />
              </motion.div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/70 text-sm">{feature.description}</p>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
