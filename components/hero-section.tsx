'use client'

import { motion } from 'framer-motion'
import { Play, Bookmark } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=1200&h=800&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Floating Play Button */}
          <motion.div
            className="mb-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center backdrop-blur-sm">
              <Play className="w-8 h-8 text-accent fill-accent" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-4 text-white text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Cosmic Odyssey
          </motion.h1>

          {/* Metadata */}
          <motion.div
            className="flex items-center gap-4 mb-6 text-lg text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="flex items-center gap-2">
              <span className="text-accent">★</span>
              <span>8.9</span>
            </span>
            <span>•</span>
            <span>2024</span>
            <span>•</span>
            <span>148 min</span>
            <span>•</span>
            <span>Sci-Fi, Adventure</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A breathtaking journey through space and time as humanity reaches for the stars. Experience an epic adventure
            that challenges the limits of imagination.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold rounded-lg flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Now
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-foreground/30 hover:border-accent hover:bg-accent/10 text-foreground px-8 py-6 text-lg font-semibold rounded-lg flex items-center gap-2"
              >
                <Bookmark className="w-5 h-5" />
                Add to Watchlist
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-foreground/50">Scroll for more</span>
          <svg className="w-6 h-6 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  )
}
