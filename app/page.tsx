"use client"

import { motion } from "framer-motion"
import {
  ArrowDown,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  ExternalLink,
  Code,
  Database,
  Wrench,
  User,
  GraduationCap,
  Briefcase,
  FolderOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skillVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
}

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-orange-500/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
            >
              RVSS
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Education", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-orange-200 hover:text-orange-100 transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 animate-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-orange-400 to-red-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <User className="w-16 h-16 text-orange-300" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              RAMANADAM
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              VENKATA SIVA SAI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-orange-200 mb-8 max-w-3xl mx-auto"
          >
            Computer Science Graduate | Full Stack Developer | Problem Solver
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-orange-50 px-8 py-3 rounded-full"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="border-orange-400/50 text-orange-200 hover:bg-orange-500/20 px-8 py-3 rounded-full"
            >
              <FolderOpen className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="animate-bounce"
          >
            <ArrowDown
              className="w-8 h-8 text-orange-300 mx-auto cursor-pointer"
              onClick={() => scrollToSection("about")}
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-orange-950/30 backdrop-blur-md border-orange-500/20">
              <CardContent className="p-8">
                <p className="text-lg text-orange-100 leading-relaxed">
                  A highly motivated and self-driven Computer Science graduate with a strong foundation in Java, Python,
                  HTML, and CSS. Passionate about learning new technologies and applying problem-solving skills to
                  real-world challenges. Seeking an opportunity to contribute to innovative projects and enhance my
                  technical expertise.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <p className="text-orange-200">Ipurupalem, Chirala</p>
                    <p className="text-orange-300">Andhra Pradesh</p>
                  </div>
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <p className="text-orange-200">+91 9908881764</p>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                    <p className="text-orange-200">sairamandam143@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {[
                {
                  degree: "Master of Computer Applications (MCA)",
                  institution: "Mohan Babu University",
                  year: "2024 - 2026",
                  status: "Pursuing",
                  icon: GraduationCap,
                },
                {
                  degree: "B.Sc. in Computer Science",
                  institution: "Chaitanya Bharathi Degree College",
                  year: "2021 - 2024",
                  grade: "CGPA: 9.02",
                  icon: GraduationCap,
                },
                {
                  degree: "Intermediate (MPC)",
                  institution: "Sri Medhavi Junior College",
                  year: "2019 - 2021",
                  grade: "Percentage: 70.6%",
                  icon: GraduationCap,
                },
                {
                  degree: "SSC (10th Grade)",
                  institution: "Teja High School",
                  year: "2018 - 2019",
                  grade: "CGPA: 8.3",
                  icon: GraduationCap,
                },
              ].map((edu, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-gradient-to-r from-orange-950/30 to-red-950/30 backdrop-blur-md border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-full">
                          <edu.icon className="w-6 h-6 text-orange-50" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-orange-100 mb-2">{edu.degree}</h3>
                          <p className="text-orange-400 mb-1">{edu.institution}</p>
                          <div className="flex items-center space-x-4 text-orange-300">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {edu.year}
                            </div>
                            {edu.grade && <span>{edu.grade}</span>}
                            {edu.status && (
                              <Badge className="bg-red-500/20 text-red-300 border-red-500/30">{edu.status}</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-orange-800/50 to-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={skillVariants}>
                <Card className="bg-slate-800/80 backdrop-blur-md border-orange-400/30 h-full hover:border-orange-400/60 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Code className="w-8 h-8 text-orange-400 mr-3" />
                      <h3 className="text-xl font-bold text-orange-100">Programming</h3>
                    </div>
                    <div className="space-y-3">
                      {["Python", "Java", "JavaScript"].map((skill) => (
                        <div key={skill} className="flex items-center">
                          <Badge className="bg-orange-600/80 text-orange-100 border-orange-400/50 font-medium">
                            {skill}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={skillVariants}>
                <Card className="bg-slate-800/80 backdrop-blur-md border-red-400/30 h-full hover:border-red-400/60 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Wrench className="w-8 h-8 text-red-400 mr-3" />
                      <h3 className="text-xl font-bold text-orange-100">Web Technologies</h3>
                    </div>
                    <div className="space-y-3">
                      {["HTML", "CSS", "React", "Node.js", "UX & UI"].map((skill) => (
                        <div key={skill} className="flex items-center">
                          <Badge className="bg-red-600/80 text-red-100 border-red-400/50 font-medium">{skill}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={skillVariants}>
                <Card className="bg-slate-800/80 backdrop-blur-md border-yellow-400/30 h-full hover:border-yellow-400/60 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Database className="w-8 h-8 text-yellow-400 mr-3" />
                      <h3 className="text-xl font-bold text-orange-100">Tools & Others</h3>
                    </div>
                    <div className="space-y-3">
                      {["MySQL", "Git", "VS Code", "DSA"].map((skill) => (
                        <div key={skill} className="flex items-center">
                          <Badge className="bg-yellow-600/80 text-yellow-100 border-yellow-400/50 font-medium">
                            {skill}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-orange-950/30 to-red-950/30 backdrop-blur-md border-orange-500/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-full">
                    <Briefcase className="w-6 h-6 text-orange-50" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-orange-100 mb-2">Python Developer Intern</h3>
                    <p className="text-orange-400 text-lg mb-2">Sri Sathya Sai Organisations</p>
                    <div className="flex items-center space-x-4 text-orange-300 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Feb 2024 – Apr 2024
                      </div>
                    </div>
                    <div className="bg-orange-950/40 rounded-lg p-4">
                      <h4 className="text-orange-100 font-semibold mb-2">Project: Advanced Python</h4>
                      <p className="text-orange-200">
                        Worked on advanced Python development projects, enhancing programming skills and gaining
                        practical experience in software development.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-orange-950/30 to-red-950/30 backdrop-blur-md border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-100 mb-2 group-hover:text-orange-400 transition-colors">
                      Rock-Paper-Scissors Game
                    </h3>
                    <p className="text-orange-200 mb-4">
                      An interactive web-based game built with modern web technologies, featuring responsive design and
                      smooth user interactions.
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-full"
                  >
                    <FolderOpen className="w-6 h-6 text-orange-50" />
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["HTML", "CSS", "JavaScript", "React.js"].map((tech) => (
                    <Badge key={tech} className="bg-red-500/20 text-red-300 border-red-500/30">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-orange-50"
                >
                  <a href="https://github.com/RVSS2002/GAME-RPS" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Soft Skills
            </h2>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { skill: "Self-Motivated", description: "Always eager to learn and improve", icon: "🚀" },
              { skill: "Problem-Solving", description: "Analyze and resolve challenges efficiently", icon: "🧩" },
              { skill: "Teamwork", description: "Works well in collaborative environments", icon: "🤝" },
              { skill: "Time Management", description: "Prioritizes tasks effectively to meet deadlines", icon: "⏰" },
              { skill: "Communication", description: "Strong verbal and written communication abilities", icon: "💬" },
              {
                skill: "Critical Thinking",
                description: "Evaluates problems and develops logical solutions",
                icon: "🧠",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={skillVariants}>
                <Card className="bg-gradient-to-br from-orange-950/30 to-red-950/30 backdrop-blur-md border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-orange-100 mb-2">{item.skill}</h3>
                    <p className="text-orange-300 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-800/50 to-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-orange-200 max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities? Let's connect!
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={skillVariants}>
              <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-md border-orange-500/20 text-center">
                <CardContent className="p-6">
                  <Mail className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-orange-100 mb-2">Email</h3>
                  <p className="text-orange-200">sairamandam143@gmail.com</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={skillVariants}>
              <Card className="bg-gradient-to-br from-red-500/10 to-pink-600/10 backdrop-blur-md border-red-500/20 text-center">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-orange-100 mb-2">Phone</h3>
                  <p className="text-orange-200">+91 9908881764</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={skillVariants}>
              <Card className="bg-gradient-to-br from-pink-500/10 to-rose-600/10 backdrop-blur-md border-pink-500/20 text-center">
                <CardContent className="p-6">
                  <Linkedin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-orange-100 mb-2">LinkedIn</h3>
                  <Button asChild variant="ghost" className="text-orange-200 hover:text-orange-100 p-0 h-auto">
                    <a
                      href="https://linkedin.com/in/venkata-siva-sai-ramanadam"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect with me
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-orange-500/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-orange-300">
            © 2024 Ramanadam Venkata Siva Sai. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  )
}
