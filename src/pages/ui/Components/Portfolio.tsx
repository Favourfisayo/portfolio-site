import { useState } from "react"
import { ovo, outfit } from '../../fonts'
import Button from '../Button'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import {motion} from "framer-motion"
import { 
  SiReact, 
  SiNextdotjs, 
  SiSupabase, 
  SiTypescript, 
  SiTailwindcss, 
  SiOpenai, 
  SiReactrouter,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiFramer
} from "react-icons/si"
import clsx from 'clsx'

const Portfolio = () => {
  const portfolioProjects = [
    {
      name: "Markdown Magic",
      category: "A web app for markdown lovers with real-time collaboration!",
      status: "completed",
      image: "https://res.cloudinary.com/dnyiepskw/image/upload/v1753536744/1_wcwutn.png",
      github: "https://github.com/Favourfisayo/markdown-magic",
      live: "https://markdown-magic-sigma.vercel.app/",
      tech: [
        { icon: <SiReact title="React" className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiSupabase title="Supabase" className="text-[#3ECF8E]" />, name: "Supabase" },
        { icon: <SiTypescript title="TypeScript" className="text-[#3178C6]" />, name: "TypeScript" },
        { icon: <SiTailwindcss title="Tailwind CSS" className="text-[#38BDF8]" />, name: "Tailwind CSS" },
        { icon: <SiReactrouter title="React Router" className="text-[#CA4245]" />, name: "React Router" }
      ]
    },
    {
      name: "Blog Hub",
      category: "A simple blog project built using Next.js fundamentals (Tutorial Project).",
      status: "completed",
      image: "https://res.cloudinary.com/dnyiepskw/image/upload/v1753537418/2_m9k4mq.png",
      github: "https://github.com/Favourfisayo/nextjs-project-blog-hub",
      live: "https://github.com/Favourfisayo/nextjs-project-blog-hub",
      tech: [
        { icon: <SiNextdotjs title="Next Js" className="text-[#000000]" />, name: "Next js" },
        { icon: <SiTypescript title="TypeScript" className="text-[#3178C6]" />, name: "TypeScript" },
        { icon: <SiTailwindcss title="Tailwind CSS" className="text-[#38BDF8]" />, name: "Tailwind CSS" },
      ]
    },
    {
      name: "Photo Gallery App",
      category: "Supabase-powered app for uploading and deleting user images.",
      status: "paused",
      image: "https://res.cloudinary.com/dnyiepskw/image/upload/v1753540349/5_fa7igr.jpg",
      github: "https://github.com/example/photo-gallery",
      live: "https://photo-gallery-demo.com",
      tech: [
        { icon: <SiReact title="React" className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiSupabase title="Supabase" className="text-[#3ECF8E]" />, name: "Supabase" },
        { icon: <SiTypescript title="TypeScript" className="text-[#3178C6]" />, name: "TypeScript" },
        { icon: <SiTailwindcss title="Tailwind CSS" className="text-[#38BDF8]" />, name: "Tailwind CSS" }
      ]
    },
    {
      name: "Pharma Landing page",
      category: "Figma AI-designed page recreated from scratch with React.",
      status: "completed",
      image: "https://res.cloudinary.com/dnyiepskw/image/upload/v1753539037/3_mmzjpu.png",
      github: "https://github.com/Favourfisayo/pharma-landing-page",
      live: "https://pharma-landing-page.vercel.app/",
      tech: [
        { icon: <SiReact title="React" className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiTypescript title="TypeScript" className="text-[#3178C6]" />, name: "TypeScript" },
        { icon: <SiTailwindcss title="Tailwind CSS" className="text-[#38BDF8]" />, name: "Tailwind CSS" },
        { icon: <SiFigma title="Figma" className="text-[#F24E1E]" />, name: "Figma" },
        { icon: <SiFramer title="Framer" className="text-[#0055FF]" />, name: "Framer" },
        
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  }

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const techItemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 }
  }

  return (
    <section id="portfolio" className={`${ovo.className} flex flex-col items-center gap-10 px-4 py-12`}>
      <motion.div 
        className='flex flex-col items-center gap-4 text-center max-w-[90%] md:max-w-2xl'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className='text-[#242424] text-xl sm:text-2xl font-normal'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          My portfolio
        </motion.h3>
        <motion.h1 
          className='text-[#242424] text-4xl sm:text-6xl font-normal leading-tight'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My latest work
        </motion.h1>
        <motion.p 
          className='text-[#565656] text-base sm:text-xl leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Welcome to my web development portfolio! Explore a collection of projects showcasing <br className="hidden md:block" />
          my expertise in Full-stack & font-end development and design.
        </motion.p>
      </motion.div>

      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-lg justify-items-center'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {portfolioProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className='group w-full max-w-[270px] bg-white rounded-lg overflow-hidden shadow-md flex flex-col cursor-pointer'
            whileHover={{ 
              scale: 1.05,
              y: -10,
              boxShadow: "0 10px 10px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className='relative h-[180px] w-full overflow-hidden'
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-0"></div>
              <motion.div 
                className='absolute top-3 right-3 px-3 py-1 flex items-center gap-2 z-10'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <span className="relative flex size-3">
                  <span className={clsx(
                    "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                    {
                      "bg-green-400": project.status === "completed",
                      "bg-red-400": project.status === "paused",
                      "bg-yellow-400": project.status === "in-progress",
                    }
                  )
                  }
                  >
                  </span>
                  <span className={clsx("relative inline-flex size-3 rounded-full",
                    {
                      "bg-green-400": project.status === "completed",
                      "bg-red-400": project.status === "paused",
                      "bg-yellow-400": project.status === "in-progress",
                    }
                  )}>
                  </span>
                </span>
              </motion.div>
              
              {project.status === "completed" && 
              <motion.div 
                className="absolute top-3 left-3 flex gap-2 z-10 lg:hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                
              >
                <motion.a
                  href={project.github}
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 1.1 }}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow transition"
                  aria-label="GitHub Repository"
                >
                  <Github size={16} />
                </motion.a>
                <motion.a
                  href={project.live}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 1.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-[#e0ff85] hover:bg-[#d1ff4a] rounded-full shadow transition"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={16} />
                </motion.a>
              </motion.div>
              }

              {project.status === "completed" && 
              <motion.div
                className={clsx(
                  "absolute inset-0 flex flex-col items-center justify-center bg-black/70 transition-opacity duration-300 z-20",
                  "opacity-0 group-hover:opacity-100",
                  "hidden lg:flex"
                )}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.a
                  href={project.github}
                  target="_blank"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 1.1 }}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/90 hover:bg-white px-4 py-2 rounded-full mb-2 text-sm font-medium text-gray-800 shadow transition"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Github size={18} /> GitHub
                </motion.a>
                <motion.a
                  href={project.live}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 1.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#e0ff85] hover:bg-[#d1ff4a] px-4 py-2 rounded-full text-sm font-medium text-gray-900 shadow transition"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <ExternalLink size={18} /> Live Demo
                </motion.a>
              </motion.div>
              }
            </motion.div>
            <motion.div 
              className='flex flex-col gap-2 px-4 py-4 min-h-[80px]'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              <div className={`${outfit.className} flex flex-col gap-1`}>
                <motion.div 
                  className='flex items-center gap-2'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  <h3 className='font-semibold text-base text-[#2A2A2A]'>{project.name}</h3>
                  {project.status === "paused" && 
                    <motion.div 
                      className='bg-red-400 text-white px-1.5 py-1'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.7, type: "spring" }}
                    >
                      Paused
                    </motion.div>
                  }
                </motion.div>
                <motion.p 
                  className='text-[#5E5E5E] text-xs break-words'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
                  {project.category}
                </motion.p>
              </div>
              <motion.div 
                className="relative mt-3"
                variants={techVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 + 0.8 }}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <motion.div
                      key={i}
                      variants={techItemVariants}
                      className="group/tech relative flex flex-col items-center justify-center"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 10,
                        y: -3
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div 
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#e0ff85] transition"
  
                      >
                        {tech.icon}
                      </motion.div>
                      <motion.span 
                        className="absolute top-[-2.2rem] left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs  pointer-events-none whitespace-nowrap z-30"
                        initial={{ opacity: 0, y: 5 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        {tech.name}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          text='Show more'
          btnHeight="64px"
          btnRadius="50px"
          bgColor='white'
          borderColor='#A7A7A7'
          textColor='#6F6F6F'
          icon={ArrowRight}
          iconProps={{ size: 24, strokeWidth: 1 }}
          hover={[
            "bg-gray-100",
            "scale-105",
            "shadow-sm",
            "border-[#999]"
          ]}
          href={"https://github.com/Favourfisayo?tab=repositories"}
        />
      </motion.div>
    </section>
  )
}
export default Portfolio