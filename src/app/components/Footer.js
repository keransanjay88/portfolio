'use client'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
   
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className=" pt-6 space-y-4"
            >
              <p className="text-white/70">
                &copy; {currentYear} Keran Sanjay B S. All rights reserved.
              </p>
              <p className="text-white/50 text-sm">
                Built with Next.js, Tailwind CSS, and Framer Motion
              </p>
              <div className="flex justify-center items-center space-x-4 text-xs text-white/40">
                <span>Made with ❤️ in India</span>
                <span>•</span>
                <span>Open to opportunities</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer