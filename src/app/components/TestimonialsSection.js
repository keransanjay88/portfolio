'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ravi | Portfolio Auditor",
      role: "Founder & Business Owner",
      image: "/api/placeholder/80/80",
      quote: "Keran and his team made my first business website journey smooth and rewarding. They understood every requirement, offered great suggestions, and delivered with technical clarity. From choosing the right tech stack to setting up deployment on Render and AWS, everything was handled professionally. They even added features like live chat and supported extra requirements without hesitation. Their transparency, patience, and willingness to go the extra mile truly stood out. I’m grateful and will definitely work with them again.",
      rating: 5
    },
    {
      name: "Ayush | Ciffly",
      role: "Founder & Business Owner",
      image: "/api/placeholder/80/80",
      quote: "It was a great experience working with Keran and his team. They delivered high-quality work in redesigning over 14 dashboard screens, making them significantly more attractive and fully responsive across devices. Their expertise in Figma, frontend development using Tailwind CSS, and hands-on skills with JavaScript were clearly evident throughout the project. I appreciate their attention to detail, creativity, and timely delivery. I would highly recommend them for any UI/UX and frontend development work.",
      rating: 5
    },
    {
      name: "Raja L",
      role: "Professor | SECE",
      image: "/api/placeholder/80/80",
      quote: "Your poster design is awesome and reflects your dedication and innovation. keep doing good work",
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlay || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlay, isPaused, testimonials.length])

  // Pause auto-rotation when user interacts
  const handleUserInteraction = () => {
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume after 10 seconds
  }

  const nextTestimonial = () => {
    handleUserInteraction()
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    handleUserInteraction()
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    handleUserInteraction()
    setCurrentIndex(index)
  }

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>
    )
  }

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          What People <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Say</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="text-center">
              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white/20"
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
              </motion.div>

              {/* Star Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <StarRating rating={testimonials[currentIndex].rating} />
              </motion.div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed italic"
              >
                &quot;{testimonials[currentIndex].quote}&quot;
              </motion.blockquote>

              {/* Name and Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-xl font-semibold text-white mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-purple-300">
                  {testimonials[currentIndex].role}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {[0, 1, 2].map((index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Testimonial Cards Preview */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 cursor-pointer"
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-white font-semibold text-sm">{testimonial.name}</h5>
                    <p className="text-white/60 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm line-clamp-3">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-3">
                  <StarRating rating={testimonial.rating} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection