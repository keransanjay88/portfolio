'use client'
import { motion } from 'framer-motion'

const AboutSection = () => {
  const skills = [
    { name: "Java", level: 85, icon: "☕" },
    { name: "JavaScript", level: 80, icon: "🚀" },
    { name: "Python", level: 75, icon: "🐍" },
    { name: "Flutter", level: 70, icon: "📱" },
    { name: "HTML/CSS", level: 90, icon: "🎨" },
    { name: "SQL", level: 75, icon: "🗃️" },
    { name: "Machine Learning", level: 65, icon: "🤖" },
    { name: "Git", level: 80, icon: "🔧" }
  ]

  const education = [
    {
      degree: "Computer and Communication Engineering",
      school: "Sri Eshwar College of Engineering",
      year: "2020 - 2024",
      grade: "CGPA: 8.0",
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Rajalakshmi Gengusamy Matric Higher Secondary School",
      year: "2019 - 2020",
      grade: "73.67%",
      icon: "📚"
    }
  ]

  const certifications = [
    { name: "Basic SQL - HackerRank", icon: "🏆" },
    { name: "Microsoft Student Ambassador Bootcamp", icon: "🥇" },
    { name: "Google Developer Certification for Hotstar Clone", icon: "🌟" }
  ]

  return (
    <section id="about" className="pt-8 pb-20 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story & Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                I am a Computer and Communication Engineering graduate from Sri Eshwar College of Engineering with a CGPA of 8.0. 
                I&apos;m passionate about creating innovative solutions that bridge technology and real-world problems.
              </p>
              <p className="text-white/80 leading-relaxed">
                I&apos;m seeking challenging opportunities where I can leverage my skills, expand my expertise, 
                and contribute meaningfully to organizational growth in a dynamic environment that fosters continuous learning.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 border border-white/10"
                  >
                    <span className="text-2xl">{edu.icon}</span>
                    <div>
                      <h4 className="font-semibold text-white">{edu.degree}</h4>
                      <p className="text-purple-300">{edu.school}</p>
                      <p className="text-sm text-white/60">{edu.year} • {edu.grade}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Award */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-6 border border-yellow-500/30"
            >
              <div className="flex items-center space-x-3">
                <span className="text-3xl">🏆</span>
                <div>
                  <h4 className="font-semibold text-white">Project Expo 2022</h4>
                  <p className="text-yellow-300">3rd Place at Sri Eshwar College of Engineering</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="flex items-center space-x-2 text-white">
                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-purple-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 cursor-pointer"
                  >
                    <span className="text-xl">{cert.icon}</span>
                    <span className="text-white/90">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection