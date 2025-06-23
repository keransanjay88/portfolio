'use client'
import { motion } from 'framer-motion'

const ProjectsSection = () => {
  const projects = [
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
          My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
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

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection