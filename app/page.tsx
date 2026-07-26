import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import CarouselSection from '@/components/carousel-section'
import ContinueWatching from '@/components/continue-watching'
import GridSection from '@/components/grid-section'
import CategoriesSection from '@/components/categories-section'
import FeaturedCollection from '@/components/featured-collection'
import FeaturesSection from '@/components/features-section'
import TestimonialsSection from '@/components/testimonials-section'
import FAQSection from '@/components/faq-section'
import NewsletterSection from '@/components/newsletter-section'
import Footer from '@/components/footer'
import ScrollHelpers from '@/components/scroll-helpers'
import { moviesData } from '@/lib/movies'

export default function Home() {
  // Duplicate movies for more items in carousel
  const allMovies = [...moviesData, ...moviesData, ...moviesData]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ScrollHelpers />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trending Now */}
        <CarouselSection title="Trending Now" movies={allMovies.slice(0, 12)} variant="compact" />

        {/* Continue Watching */}
        <ContinueWatching movies={moviesData} />

        {/* Popular Movies Grid */}
        <GridSection title="Popular Movies" movies={moviesData} />

        {/* Categories */}
        <CategoriesSection />

        {/* Featured Collection */}
        <FeaturedCollection />

        {/* Carousel: Top Rated */}
        <CarouselSection title="Top Rated" movies={allMovies.slice(8, 20)} />

        {/* Why Choose CineVerse */}
        <FeaturesSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* FAQ */}
        <FAQSection />

        {/* Newsletter */}
        <NewsletterSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
