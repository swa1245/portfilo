'use client';

import { WavesIcon as Wave, Github, Twitter, Linkedin, Mail, Globe, Code2, Braces, Database, FileCode2, GitBranch, MonitorSmartphone, 
  FileCode, Hash, Paintbrush, CircuitBoard, Box, Boxes, Wrench, Webhook, Server, Settings2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { GradientBorder } from "@/components/ui/gradient-border"
import { Reveal } from "@/components/ui/reveal-animation"
import StaggerText from "@/components/ui/stagger-text"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-20 relative">
        {/* Header */}
        <Reveal>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold flex items-center gap-2">
                Hi, I'm Swaraj <Wave className="w-8 h-8 text-yellow-400" />
              </h1>
              <StaggerText className="mt-2 text-gray-400 max-w-xl">
                Computer Science student at Kolhapur Institute of Technology with a passion for web development. 
                I love building innovative solutions using modern technologies.
              </StaggerText>
              <div className="mt-4 flex gap-4">
                <Link href="mailto:swarajpatil644@gmail.com" className="text-gray-400 hover:text-white">
                  <Mail className="w-6 h-6" />
                </Link>
                <Link href="https://github.com/swa1245" className="text-gray-400 hover:text-white">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="https://linkedin.com/in/swaraj-patil-a60aa9315" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <Image
              src="/profile.png"
              alt="Swaraj Patil"
              width={120}
              height={120}
              className="rounded-full object-cover border-2 border-gray-700 shadow-xl"
              priority
            />
          </div>
        </Reveal>

        {/* About */}
        <Reveal delay={0.2}>
          <section>
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <StaggerText className="text-gray-400" delay={0.3}>
              I'm a Computer Science student with hands-on experience in web development. My expertise lies in building responsive web applications
              and implementing efficient backend systems. I have a proven track record of improving operational efficiency and user satisfaction
              through innovative technical solutions.
            </StaggerText>
          </section>
        </Reveal>

        {/* Skills */}
        <Reveal delay={0.3}>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-yellow-400" />
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "JavaScript", icon: <FileCode className="w-4 h-4" /> },
                    { name: "HTML", icon: <Code2 className="w-4 h-4" /> },
                    { name: "CSS", icon: <Paintbrush className="w-4 h-4" /> },
                    { name: "Java (OOP)", icon: <CircuitBoard className="w-4 h-4" /> }
                  ].map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="bg-gray-800 hover:bg-gray-700 flex items-center gap-1">
                      {skill.icon}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Braces className="w-5 h-5 text-yellow-400" />
                  Web Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "React.js", icon: <Box className="w-4 h-4" /> },
                    { name: "Node.js", icon: <Server className="w-4 h-4" /> },
                    { name: "Express.js", icon: <Webhook className="w-4 h-4" /> },
                    { name: "Tailwind CSS", icon: <Paintbrush className="w-4 h-4" /> },
                    { name: "GSAP", icon: <FileCode className="w-4 h-4" /> },
                    { name: "Material-UI", icon: <Boxes className="w-4 h-4" /> },
                    { name: "Framer Motion", icon: <Box className="w-4 h-4" /> }
                  ].map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="bg-gray-800 hover:bg-gray-700 flex items-center gap-1">
                      {skill.icon}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <MonitorSmartphone className="w-5 h-5 text-yellow-400" />
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
                    { name: "GitHub", icon: <Github className="w-4 h-4" /> },
                    { name: "VS Code", icon: <Code2 className="w-4 h-4" /> },
                    { name: "Docker", icon: <Box className="w-4 h-4" /> },
                    { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
                    { name: "MySQL", icon: <Database className="w-4 h-4" /> },
                    { name: "Postman", icon: <Settings2 className="w-4 h-4" /> }
                  ].map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="bg-gray-800 hover:bg-gray-700 flex items-center gap-1">
                      {skill.icon}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Experience */}
        <Reveal delay={0.4}>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <Card className="p-6 card-gradient border-gray-800">
              <h3 className="font-semibold text-xl">Cafe Operations Streamlining Project</h3>
              <p className="text-gray-400 mt-1">Intern | June 2024 - September 2024 | Kolhapur, Maharashtra</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  • Streamlined cafe operations with intuitive UI and robust backend, reducing order processing time by 30%
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  • Developed Admin Panel for menu and order management, improving user satisfaction by 20%
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  • Implemented JWT authentication with 99% uptime and enhanced security
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  • Utilized Postman, Git, and MongoDB Atlas for efficient project deployment
                </motion.li>
              </ul>
            </Card>
          </section>
        </Reveal>

        {/* Projects */}
        <Reveal delay={0.5}>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-6">
              <GradientBorder>
                <Card className="p-6 card-gradient border-gray-800 relative">
                  <div className="grid-bg"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-xl">E-commerce Website</h3>
                      <Link href="https://copycaredigitals.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <Globe className="w-5 h-5" />
                      </Link>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        { name: "React.js", icon: <Box className="w-4 h-4" /> },
                        { name: "Context API", icon: <Braces className="w-4 h-4" /> },
                        { name: "Framer Motion", icon: <Box className="w-4 h-4" /> }
                      ].map((tech) => (
                        <Badge key={tech.name} variant="secondary" className="bg-gray-800 hover:bg-gray-700 flex items-center gap-1">
                          {tech.icon}
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        • Developed a fully responsive e-commerce platform with advanced search filters
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                      >
                        • Implemented product listing, shopping cart, and payment gateway integration
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        • Ensured seamless user experience with optimized performance
                      </motion.li>
                    </ul>
                  </div>
                </Card>
              </GradientBorder>

              <GradientBorder>
                <Card className="p-6 card-gradient border-gray-800 relative">
                  <div className="grid-bg"></div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-xl">Second Brain</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        { name: "React.js", icon: <Box className="w-4 h-4" /> },
                        { name: "Node.js", icon: <Server className="w-4 h-4" /> },
                        { name: "Express.js", icon: <Webhook className="w-4 h-4" /> },
                        { name: "MongoDB", icon: <Database className="w-4 h-4" /> }
                      ].map((tech) => (
                        <Badge key={tech.name} variant="secondary" className="bg-gray-800 hover:bg-gray-700 flex items-center gap-1">
                          {tech.icon}
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                      >
                        • Built a workspace for storing and managing important YouTube and Twitter links
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >
                        • Added collaborative features for group management and viewing
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                      >
                        • Optimized data storage using MongoDB for efficient user experience
                      </motion.li>
                    </ul>
                  </div>
                </Card>
              </GradientBorder>

              <GradientBorder>
                <Card className="p-6 card-gradient border-gray-800 relative">
                  <div className="grid-bg"></div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-xl">Awwwards Winning Website</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        { name: "React.js", icon: <Box className="w-4 h-4" /> },
                        { name: "Tailwind CSS", icon: <Paintbrush className="w-4 h-4" /> },
                        { name: "GSAP", icon: <FileCode className="w-4 h-4" /> }
                      ].map((tech) => (
                        <Badge key={tech.name} variant="secondary" className="bg-gray-800 hover:bg-gray-700 flex items-center gap-1">
                          {tech.icon}
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                    <ul className="mt-4 space-y-2 text-gray-300">
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                      >
                        • Created a visually stunning website with scroll-triggered animations
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                      >
                        • Implemented dynamic 3D hover effects and video transitions
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                      >
                        • Developed fully responsive design for all devices
                      </motion.li>
                    </ul>
                  </div>
                </Card>
              </GradientBorder>
            </div>
          </section>
        </Reveal>

        {/* Education */}
        <Reveal delay={0.6}>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <Card className="p-6 card-gradient border-gray-800">
                <h3 className="font-semibold text-xl">Kolhapur Institute of Technology</h3>
                <p className="text-gray-400">Bachelor of Technology in Computer Science</p>
                <p className="text-gray-400">2021 - 2025 | CGPA: 7.8/10</p>
              </Card>
              <Card className="p-6 card-gradient border-gray-800">
                <h3 className="font-semibold text-xl">R.K Junior College</h3>
                <p className="text-gray-400">Gadhinglaj, Maharashtra</p>
                <p className="text-gray-400">2019 - 2021 | Percentage: 90.33%</p>
              </Card>
              <Card className="p-6 card-gradient border-gray-800">
                <h3 className="font-semibold text-xl">Sadhana High School</h3>
                <p className="text-gray-400">Gadhinglaj, Maharashtra</p>
                <p className="text-gray-400">2018 - 2019 | Percentage: 83%</p>
              </Card>
            </div>
          </section>
        </Reveal>

        {/* Achievements */}
        <Reveal delay={0.7}>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
            <div className="space-y-3 text-gray-300">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                • Runner-up in No-Code WordPress Development Competition
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                • Secured 3rd place in Farm Automation System Project
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                • Managed a 15+ member technical team and conducted workshops for over 30 participants
              </motion.p>
            </div>
          </section>
        </Reveal>

        {/* Contact */}
        <Reveal delay={0.8}>
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <StaggerText className="text-gray-400 mb-6" delay={0.9}>
              Feel free to reach out for collaborations or just a friendly chat
            </StaggerText>
            <div className="flex justify-center gap-4">
              <Link href="mailto:swarajpatil644@gmail.com" className="text-gray-400 hover:text-white">
                <Mail className="w-6 h-6" />
              </Link>
              <Link href="https://github.com/swa1245" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/in/swaraj-patil-a60aa9315" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </section>
        </Reveal>
      </main>
    </div>
  )
}
