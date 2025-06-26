'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

const HeroSection = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Image positioning and zoom values - modify these to adjust the image
  const imageZoom = 2.1        // Change this value (0.5 to 3) to zoom in/out
  const imagePositionX = 4.5     // Change this value (-50 to 50) to move left/right
  const imagePositionY = 45  // Change this value (-50 to 50) to move up/down
  const imageRotation = -2      // Change this value (-180 to 180) to rotate the image

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section 
      id="home" 
      className="h-screen md:h-[60vh] lg:h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-16 md:pt-16 lg:pt-0"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4 sm:px-6 lg:px-8 w-full"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 sm:mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 sm:mb-8 overflow-hidden border-4 border-white/20 shadow-2xl relative">
            <motion.img
              src="/profile.jpg"
              alt="Profile"
              className="absolute w-full h-full object-contain"
              initial={{
                scale: imageZoom,
                x: imagePositionX,
                y: imagePositionY,
                rotate: imageRotation
              }}
              animate={{
                scale: imageZoom,
                x: imagePositionX,
                y: imagePositionY,
                rotate: imageRotation
              }}
              whileHover={{ 
                scale: imageZoom * 1.1, 
                rotate: imageRotation + 5,
                x: imagePositionX,
                y: imagePositionY
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight"
        >
          Hi, I&apos;m <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Keran Sanjay</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2"
        >
          Computer & Communication Engineering graduate passionate about{' '}
          <span className="text-purple-300 font-semibold">software development</span> and{' '}
          <span className="text-pink-300 font-semibold">machine learning</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg transition-all duration-300 font-semibold text-center"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-purple-400 text-purple-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-center"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection