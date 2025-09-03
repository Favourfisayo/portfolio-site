import { PortfolioProject } from "@/data/portfolio/projects"
import { cardVariants, techItemVariants, techVariants } from "@/data/portfolio/variants"
import { outfit } from "@/fonts"
import clsx from "clsx"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function Porject({project, index}: {
    project: PortfolioProject,
    index: number
}) {
    return (
        <>
        <motion.div
            key={index}
            variants={cardVariants}
            className='group w-full max-w-[270px] border rounded-lg overflow-hidden shadow-md flex flex-col cursor-pointer'
            whileHover={{ 
              scale: 1.05,
              y: -10,
              boxShadow: "0 10px 10px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className='relative border-b h-[180px] w-full overflow-hidden'
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
                  <h3 className='font-semibold text-base '>{project.name}</h3>
                </motion.div>
                <motion.p 
                  className=' text-xs break-words'
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
                  {project.tech.map((tech, i: number) => {
                    const Icon = tech.icon
                    return (
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
                        <Icon title={tech.name} className={tech.className} /> 
                      </motion.div>
                      <motion.span 
                        className="absolute top-[-2.2rem] left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black text-white text-xs  pointer-events-none whitespace-nowrap z-30"
                        initial={{ opacity: 0, y: 5 }}
                        whileHover={{ opacity: 1, y: 0 }}
                      >
                        {tech.name}
                      </motion.span>
                    </motion.div>
                  )})}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
    )
}