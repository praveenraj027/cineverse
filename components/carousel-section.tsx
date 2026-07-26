'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MovieCard from '@/components/movie-card'
import type { Movie } from '@/lib/movies'

interface CarouselSectionProps {
  title: string
  movies: Movie[]
  variant?: 'default' | 'compact'
}

export default function CarouselSection({ title, movies, variant = 'default' }: CarouselSectionProps) {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainer.current
    if (!container) return

    const scrollAmount = 400
    const targetScroll = direction === 'left' ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    })

    setTimeout(updateScrollButtons, 500)
  }

  const updateScrollButtons = () => {
    const container = scrollContainer.current
    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
  }

  return (
    <motion.section
      className="py-12 md:py-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Title */}
      <motion.div
        className="mb-8 flex items-center justify-between px-4 md:px-0"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
        <div className="flex gap-2 md:gap-3">
          <motion.button
            className={`p-2 rounded-full transition-all ${
              canScrollLeft
                ? 'bg-accent/10 hover:bg-accent/20 text-accent'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            }`}
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            whileHover={canScrollLeft ? { scale: 1.1 } : {}}
            whileTap={canScrollLeft ? { scale: 0.9 } : {}}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            className={`p-2 rounded-full transition-all ${
              canScrollRight
                ? 'bg-accent/10 hover:bg-accent/20 text-accent'
                : 'bg-muted text-muted-foreground cursor-not-allowed'
            }`}
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            whileHover={canScrollRight ? { scale: 1.1 } : {}}
            whileTap={canScrollRight ? { scale: 0.9 } : {}}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative group">
        <div
          ref={scrollContainer}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          onScroll={updateScrollButtons}
        >
          {movies.map((movie, index) => (
            <motion.div
              key={movie.id}
              className={variant === 'compact' ? 'flex-shrink-0 w-48 md:w-56' : 'flex-shrink-0 w-64 md:w-72'}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <MovieCard movie={movie} variant={variant} />
            </motion.div>
          ))}
        </div>

        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>
    </motion.section>
  )
}
