'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import type { Movie } from '@/lib/movies'

interface ContinueWatchingProps {
  movies: Movie[]
}

export default function ContinueWatching({ movies }: ContinueWatchingProps) {
  const watchingMovies = movies.slice(0, 5).map((movie, index) => ({
    ...movie,
    progress: (index + 1) * 20, // 20%, 40%, 60%, 80%, 100%
    remaining: `${(6 - index) * 30}m`,
  }))

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
        Continue Watching
      </motion.h2>

      {/* Watching Items */}
      <div className="space-y-4">
        {watchingMovies.map((movie, index) => (
          <motion.div
            key={movie.id}
            className="group rounded-lg overflow-hidden bg-card/50 border border-border/50 hover:border-accent/50 transition-all backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: '#E50914', backgroundColor: 'rgba(229, 9, 20, 0.05)' }}
            transition={{
              delay: index * 0.05,
            }}
          >
            <div className="flex gap-4 p-4">
              {/* Poster */}
              <div className="relative flex-shrink-0 w-24 md:w-32 h-32 md:h-44 rounded-lg overflow-hidden group">
                <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                <motion.div
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    className="w-14 h-14 rounded-full bg-accent hover:bg-accent/90 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <h3 className="font-bold text-base md:text-lg mb-1 line-clamp-1">{movie.title}</h3>
                  <p className="text-xs md:text-sm text-foreground/60 mb-4 line-clamp-1">
                    {movie.genre.join(' • ')}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${movie.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-foreground/50">
                    {movie.progress}% watched • {movie.remaining} remaining
                  </p>
                </div>
              </div>

              {/* Resume Button */}
              <motion.button
                className="hidden md:flex items-center gap-2 px-6 py-2 rounded-lg bg-accent hover:bg-accent/90 text-white font-semibold text-sm self-center flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4" />
                Resume
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
