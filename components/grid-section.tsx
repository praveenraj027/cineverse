'use client'

import { motion } from 'framer-motion'
import MovieCard from '@/components/movie-card'
import type { Movie } from '@/lib/movies'

interface GridSectionProps {
  title: string
  movies: Movie[]
}

export default function GridSection({ title, movies }: GridSectionProps) {
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
        {title}
      </motion.h2>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {movies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
          >
            <MovieCard movie={movie} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
