"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow py-12">
        <motion.div 
          className="max-w-7xl mx-auto p-8 text-white rounded-lg shadow-xl h-full"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-12 h-full">
            {/* Profile Section */}
            <motion.div className="md:w-1/3 flex flex-col items-center" variants={itemVariants}>
              <motion.div
                className="relative h-96 w-96 rounded-xl overflow-hidden shadow-2xl border-2 border-green-500 mb-8 transform hover:rotate-2 transition-all duration-300"
                whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 255, 128, 0.25)" }}
              >
                <Image
                  src="/me.png"
                  alt="Himran AI Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <motion.div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border-l-4 border-blue-500 shadow-lg w-full" 
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
              >
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Tech Skills</h3>
                <div className="space-y-5">
                  {[
                    { skill: "JavaScript", percent: 90 },
                    { skill: "React", percent: 85 },
                    { skill: "Node.js", percent: 80 },
                    { skill: "IoT", percent: 75 }
                  ].map((item, index) => (
                    <div key={item.skill} className="relative">
                      <div className="flex justify-between mb-2 text-sm font-medium">
                        <span className="text-white">{item.skill}</span>
                        <span className="text-green-400">{item.percent}%</span>
                      </div>
                      <motion.div className="h-3 bg-gray-700 rounded-full w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <motion.div 
                          className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full relative"
                          initial={{ width: 0 }} 
                          animate={{ width: `${item.percent}%` }} 
                          transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }} 
                        >
                          <motion.div 
                            className="absolute right-0 w-3 h-3 rounded-full bg-white shadow-md border border-blue-500 top-1/2 transform -translate-y-1/2 translate-x-1/2"
                            animate={{ 
                              boxShadow: ["0 0 0 rgba(59, 130, 246, 0.4)", "0 0 15px rgba(59, 130, 246, 0.7)", "0 0 0 rgba(59, 130, 246, 0.4)"] 
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse"
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* About Content */}
            <motion.div className="md:w-2/3" variants={itemVariants}>
              <motion.div 
                className="mb-8 p-6 bg-gradient-to-r from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-xl border-b-2 border-green-500/50 shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">HIMRAN .P.E</h2>
                <p className="text-xl text-blue-300 mb-4 italic">Electronics Enthusiast & MERN-Stack Developer</p>
              </motion.div>

              <motion.div 
                className="text-gray-300 space-y-6 leading-relaxed p-6 bg-gray-800/40 backdrop-blur-sm rounded-xl shadow-lg"
                variants={itemVariants}
              >
                <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-green-400 first-letter:mr-1 first-letter:float-left">
                  I am a highly motivated creative technologist with expertise in <span className="text-green-400 font-medium">electronics, web development, and art</span>. 
                  With a BSc in Electronics and hands-on experience as a MERN Stack Developer, I specialize in building dynamic applications using <span className="text-green-400 font-medium">MongoDB, Express.js, React, and Node.js</span>.
                </p>
                <p>
                  My background in electronics provides a strong foundation in both hardware and software, enabling me to tackle complex challenges. 
                  I leverage my artistic skills to design intuitive interfaces and explore innovative applications of technology.
                </p>
                <p>
                  My strengths include <span className="text-green-400 font-medium">problem-solving, cross-functional collaboration, and a passion for continuous learning</span>. 
                  I am seeking opportunities to grow as a developer and creator, contributing my expertise to projects that bridge technology and creativity.
                </p>
              </motion.div>

              {/* Contact Section */}
              <motion.div 
                className="mt-10 p-6 bg-gray-800/80 rounded-xl border-l-4 border-green-500 shadow-lg backdrop-blur-sm" 
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-400">Contact</h3>
                <div className="flex flex-col md:flex-row md:justify-between items-center">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <motion.div 
                        className="mr-3 w-8 h-8 flex items-center justify-center bg-green-500/20 rounded-full text-green-400"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </motion.div>
                      <p className="text-white">+918848609372</p>
                    </div>
                    <div className="flex items-center">
                      <motion.div 
                        className="mr-3 w-8 h-8 flex items-center justify-center bg-blue-500/20 rounded-full text-blue-400"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </motion.div>
                      <p className="text-white">hello@himruzz.me</p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="flex space-x-6">
                      <motion.a 
                        href="https://github.com/your-github" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-2 text-green-500 hover:text-green-400 text-lg bg-green-500/10 px-4 py-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                      </motion.a>
                      <motion.a 
                        href="https://linkedin.com/in/your-linkedin" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 text-lg bg-blue-500/10 px-4 py-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span>LinkedIn</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}