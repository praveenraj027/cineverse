'use client'

import { motion } from 'framer-motion'
import { Play, Bookmark } from 'lucide-react'
import Image from 'next/image'
import type { Movie } from '@/lib/movies'

interface MovieCardProps {
  movie: Movie
  variant?: 'default' | 'compact' | 'featured'
}

export default function MovieCard({ movie, variant = 'default' }: MovieCardProps) {
  if (variant === 'featured') {
    return (
      <motion.div
        className="relative rounded-lg overflow-hidden group h-64 md:h-80"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-full h-full">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-4 md:p-6"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-lg md:text-2xl font-bold mb-2">{movie.title}</h3>
          <p className="text-sm text-foreground/70 mb-3 line-clamp-2">{movie.description}</p>
          <div className="flex gap-2">
            <motion.button
              className="flex-1 bg-accent hover:bg-accent/90 text-white py-2 rounded-lg flex items-center justify-center gap-2 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-4 h-4" />
              Play
            </motion.button>
            <motion.button
              className="px-3 py-2 border border-foreground/30 hover:border-accent hover:bg-accent/10 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bookmark className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  if (variant === 'compact') {
    return (
      <motion.div
        className="relative rounded-md overflow-hidden group h-40 md:h-48 flex-shrink-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-end items-center p-3 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
        >
          <motion.button
            className="w-12 h-12 rounded-full bg-accent hover:bg-accent/90 text-background flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-6 h-6 fill-current" />
          </motion.button>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-background to-transparent">
          <p className="text-xs font-semibold truncate">{movie.title}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="rounded-lg overflow-hidden group cursor-pointer h-72 md:h-80"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full">
        <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />

        {/* Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            {/* Top Rating */}
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-accent bg-background/80 px-2 py-1 rounded">{movie.year}</span>
              <span className="flex items-center gap-1 text-yellow-400 bg-background/80 px-2 py-1 rounded text-sm">
                ★ {movie.rating}
              </span>
            </div>

            {/* Bottom Info */}
            <div>
              <h3 className="text-lg font-bold mb-2 line-clamp-2">{movie.title}</h3>
              <p className="text-xs text-foreground/70 mb-3 line-clamp-2">{movie.genre.join(', ')}</p>

              <div className="flex gap-2">
                <motion.button
                  className="flex-1 bg-accent hover:bg-accent/90 text-white py-2 rounded flex items-center justify-center gap-2 font-semibold text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-3 h-3" />
                  Play
                </motion.button>
                <motion.button
                  className="px-2 py-2 border border-foreground/30 hover:border-accent hover:bg-accent/10 rounded transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bookmark className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
