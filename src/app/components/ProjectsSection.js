'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ProjectsSection = () => {
  // Only "Works" section, no tabs
  const works = [
    {
      title: "Voice-Enabled Chatbot",
      description: "An AI-powered voice assistant that converts speech to text, generates dynamic responses, and can open specific URLs for users.",
      tech: ["JavaScript", "AI API", "Speech Recognition", "Web APIs"],
      github: "https://github.com/keransanjay88/chatbot",
      demo: "https://keransanjay88.github.io/chatbot",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "TODO App",
      description: "A Flutter-based task management app with Hive local storage and GitHub Actions for automated APK releases.",
      tech: ["Flutter", "Hive", "GitHub Actions", "Dart"],
      github: "https://github.com/keransanjay88/todo_flutter",
      demo: "https://github.com/keransanjay88/todo_flutter/releases",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sleep Quality Prediction",
      description: "Machine learning model using Support Vector Machine (SVM) to predict sleep quality in osteoporosis patients for personalized healthcare.",
      tech: ["Python", "Machine Learning", "SVM", "Data Analysis"],
      github: "#",
      demo: "#",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Hotstar Clone",
      description: "A responsive streaming platform clone built during Microsoft Student Ambassador bootcamp, featuring modern UI design.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "#",
      demo: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Works</span>
        </motion.h2>

        {/* Works Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[400px]"
        >
          {works.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {works.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}

                  className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => window.open(`/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, '-'))}`, '_self')}
                >
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white/10 text-white/90 px-3 py-1 rounded-full text-sm border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Card is now clickable for project brief */}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
              <p className="text-white/60 max-w-md mx-auto">
                New works are in development. Stay tuned for updates!
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection