export interface Movie {
  id: number
  title: string
  genre: string[]
  rating: number
  year: number
  duration: string
  description: string
  image: string
  featured?: boolean
}

export const moviesData: Movie[] = [
  {
    id: 1,
    title: 'Cosmic Odyssey',
    genre: ['Sci-Fi', 'Adventure'],
    rating: 8.9,
    year: 2024,
    duration: '148 min',
    description: 'A breathtaking journey through space and time as humanity reaches for the stars.',
    image: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=500&h=750&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Echoes of Tomorrow',
    genre: ['Drama', 'Thriller'],
    rating: 8.6,
    year: 2024,
    duration: '132 min',
    description: 'A gripping tale of survival and redemption in a dystopian future.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=750&fit=crop',
    featured: true,
  },
  {
    id: 3,
    title: 'Neon Dreams',
    genre: ['Sci-Fi', 'Action'],
    rating: 8.4,
    year: 2024,
    duration: '145 min',
    description: 'In a neon-lit metropolis, a hacker must save humanity from digital annihilation.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=750&fit=crop',
  },
  {
    id: 4,
    title: 'Mountain Peak',
    genre: ['Adventure', 'Documentary'],
    rating: 8.2,
    year: 2024,
    duration: '95 min',
    description: 'An epic expedition to conquer the world\'s most treacherous peaks.',
    image: 'https://images.unsplash.com/photo-1523225335684-37898b6baf30?w=500&h=750&fit=crop',
  },
  {
    id: 5,
    title: 'Silent Echo',
    genre: ['Thriller', 'Mystery'],
    rating: 8.1,
    year: 2024,
    duration: '125 min',
    description: 'A detective hunts a killer who leaves no trace but whispers of truth.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=750&fit=crop',
  },
  {
    id: 6,
    title: 'Love in Paris',
    genre: ['Romance', 'Drama'],
    rating: 7.9,
    year: 2024,
    duration: '118 min',
    description: 'Two souls find love in the City of Light under impossible circumstances.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop',
  },
  {
    id: 7,
    title: 'Quantum Rise',
    genre: ['Sci-Fi', 'Thriller'],
    rating: 8.3,
    year: 2024,
    duration: '140 min',
    description: 'Scientists discover they can bend reality. The question is, should they?',
    image: 'https://images.unsplash.com/photo-1495257904857-aab4ffd67c0d?w=500&h=750&fit=crop',
  },
  {
    id: 8,
    title: 'Desert Knights',
    genre: ['Action', 'Adventure'],
    rating: 8.0,
    year: 2024,
    duration: '152 min',
    description: 'Warriors fight for freedom across endless dunes of sand and time.',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=750&fit=crop',
  },
]

export const categories = [
  'Action',
  'Sci-Fi',
  'Comedy',
  'Thriller',
  'Romance',
  'Horror',
  'Drama',
]

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Movie Enthusiast',
    text: 'CineVerse offers the best selection of premium content I\'ve ever seen. Worth every penny.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Marcus Johnson',
    role: 'Tech Professional',
    text: 'The streaming quality is incredible. 4K without buffering is finally a reality.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Emma Wilson',
    role: 'Filmmaker',
    text: 'As a filmmaker, I appreciate the careful curation and beautiful presentation of each film.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    name: 'David Kim',
    role: 'Entertainment Critic',
    text: 'CineVerse brings back the magic of cinema into the comfort of your home.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
]

export const faqItems = [
  {
    question: 'What video quality does CineVerse offer?',
    answer:
      'CineVerse supports streaming up to 4K (Ultra HD) with HDR. Quality depends on your internet connection and device capabilities.',
  },
  {
    question: 'Can I download movies for offline viewing?',
    answer:
      'Yes! With CineVerse Premium, you can download up to 20 titles at a time and watch them offline for up to 30 days.',
  },
  {
    question: 'How many devices can I stream on simultaneously?',
    answer:
      'Standard plans allow 2 simultaneous streams, while Premium plans support 4 simultaneous streams on different devices.',
  },
  {
    question: 'Does CineVerse offer a free trial?',
    answer:
      'Yes, we offer a 7-day free trial for new users. No credit card required to start enjoying our content.',
  },
  {
    question: 'Is there parental control available?',
    answer:
      'Yes, CineVerse includes advanced parental controls with PIN protection and content rating filters for every profile.',
  },
  {
    question: 'Can I share my account?',
    answer:
      'Each account holder can create up to 4 individual profiles for family members. Profiles can be personalized separately.',
  },
]
