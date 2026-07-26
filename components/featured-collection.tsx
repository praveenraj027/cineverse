'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export default function FeaturedCollection() {
  return (
    <motion.section
      className="py-12 md:py-16 relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=1200&h=600&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent rounded-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background rounded-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-8 py-12 md:py-16 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-accent font-bold text-sm mb-3 px-3 py-1 bg-accent/10 rounded-full">
            FEATURED COLLECTION
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ultimate Sci-Fi Masterpieces</h2>

          <p className="text-lg text-foreground/70 mb-6 max-w-xl">
            Explore a curated collection of the most innovative and mind-bending science fiction films ever made. From dystopian futures to cosmic adventures, discover your next favorite.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold rounded-lg flex items-center gap-2">
              <Play className="w-5 h-5" />
              Explore Collection
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
