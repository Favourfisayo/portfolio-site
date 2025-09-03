import { outfit, ovo } from "@/fonts"
import {motion} from "framer-motion"
import { tools } from "@/data/about/tools"
import { aboutMeData } from "@/data/about/about"

const About = () => {
  return (
    <section id="about" className={`${ovo.className} flex flex-col items-center gap-10 px-4 py-12`}>
        <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h4 className="text-xl sm:text-2xl ">Introduction</h4>
        <h2 className="text-4xl sm:text-6xl mt-2">About me</h2>
      </motion.div>

      <motion.div
        className="w-full max-w-screen-lg flex flex-col md:flex-row justify-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
      <div className="flex flex-col gap-8 max-w-xl">
      <motion.p
        className="text-base sm:text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        I am an aspiring Software Engineer and a student at Bells University, Ota, Ogun State, Nigeria. I am  currently focused on improving my problem-solving skills 
        by practicing Data Structures and Algorithms and grinding through LeetCode challenges. 
        My goal is to grow into a well-rounded developer who can build impactful, scalable software
    </motion.p>

      {/* About Cards */}
      <motion.div
        className={`${outfit.className} flex flex-wrap gap-4`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
            {aboutMeData.map((item, i) => {
              const Icon = item.icon
              return (
              <div
                key={i}
                className="flex flex-col gap-2 p-4 w-[160px] sm:w-[180px] h-[160px] sm:h-[170px] border  rounded-lg  cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <button>
                <Icon strokeWidth={1} />
                </button>
                <h2 className="font-semibold text-base sm:text-lg ">
                  {item.section}
                </h2>
                <p className="text-xs sm:text-sm  leading-[20px]">
                  {item.details}
                </p>
              </div>
            )})}
          </motion.div>

        <motion.div
        className="flex flex-col gap-10 mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
            <div>
            <h2 className="font-semibold text-xl ">Skills i have</h2>
            <p>Technologies and tools I have worked with and enjoy using.</p>
            </div>
            <div className="flex flex-col w-full gap-5">
              {tools.map((tool, index) => 
              <div className="flex flex-col gap-2" key={index}>
                <h1 className="text-lg font-semibold flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full "></span>
                  {tool.category}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {
                    tool.tools.map((tech, index) => 
                    <div key={index} className="flex items-center border  px-3 py-1.5 rounded-sm gap-2 transition-all duration-300 cursor-pointer">
                      <span className=" flex items-center justify-center size-6 p-1 rounded-sm bg-gray-100 text-xs font-medium ">
                      <svg  role="img" viewBox="0 0 24 24" width="1em" height="1em" fill={`#${tech.icon.hex}`}>
                        <title>{tech.name}</title>
                        <path d={tech.icon.path} />
                      </svg>
                      </span>
                      <h3 className="font-medium">{tech.name}</h3>
                    </div>
                    )
                  }
                </div>
              </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
