import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"
import ProjectsSection from "./ProjectsSection"
import ContactSection from "./ContactSection"
import Footer from "./Footer"
import Navbar from "./Navbar"
import MyImage from "../assets/image_2024-01-04_16-04-48.png"

export default function Home() {
  const profileImage = {
    image: MyImage
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar/>
      <main>
        <section id="home" className="pt-24 pb-16 bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <motion.div
                className="w-full md:w-1/3 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-emerald-500"
                  animate={{
                    boxShadow: [
                      "0 0 0px #10b981",
                      "0 0 10px #10b981",
                      "0 0 20px #10b981",
                      "0 0 10px #10b981",
                      "0 0 0px #10b981"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img src={profileImage.image} alt="Profile" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>

              <motion.div
                className="w-full md:w-2/3 text-center md:text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Hello, I'm <span className="text-emerald-600">Yun Moun Sothearith</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-slate-400 mb-6">Web Developer | Seeking Internship</h2>
                <p className="text-slate-400 mb-8 max-w-2xl">
                  "I'm an aspiring web developer with foundational skills in HTML, CSS, Bootstrap, JavaScript, React, PHP, and Laravel. I'm eager to gain hands-on experience through an internship where I can apply what I’ve learned, contribute to real projects, and continue growing as a developer
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="#contact"
                    className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#projects"
                    className="px-6 py-2 border border-emerald-600 text-emerald-600 rounded-md hover:bg-emerald-50 transition-colors"
                  >
                    View Projects
                  </a>
                </div>

                <div className="flex mt-8 gap-4 justify-center md:justify-start">
                  <a
                    href="https://github.com/Thearith2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-200 rounded-full hover:bg-slate-300 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="mailto:yunmounsothearith@gmail.com"
                    className="p-2 bg-slate-200 rounded-full hover:bg-slate-300 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer/>
    </div>
  )
}