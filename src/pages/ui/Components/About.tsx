import { outfit, ovo } from "@/fonts"
import {motion} from "framer-motion"
import {
siHtml5, siCss, siTypescript, siJavascript,
siReact, siNextdotjs, siTailwindcss, siGit,
siGithub,siOpenai, siSupabase, siMysql, siPostgresql,
siC,
siPython
} from "simple-icons"
import { CodeXml, GraduationCap, Book } from "lucide-react"

const About = () => {
  const aboutMeData = [
    {
      icon: <CodeXml strokeWidth={1}/>,
      section: "Languages",
      details: "HTML, CSS, JavaScript, C, SQL, Python, TypeScript",
      width: 22,
      height: 20.83
    },
    {
      icon: <GraduationCap strokeWidth={1}/>,
      section: "Education",
      details: "B.Tech in Computer Science (2027).",
      width: 28,
      height: 24
    },
    {
      icon: <Book strokeWidth={1}/>,
      section: "Projects",
      details: "Built 5+ projects including AI-Integrated Projects.",
      width: 24,
      height: 21.8
    }
  ]

  const tools = [
    {
      category: "Languages",
      tools: [
        {
          name: "HTML",
          icon: siHtml5
        },
        {
          name: "CSS",
          icon: siCss
        },
        {
          name: "Python",
          icon: siPython
        },
        {
          name: "TypeScript",
          icon: siTypescript
        },
        {
          name: "Javascript",
          icon: siJavascript
        },
        {
          name: "C",
          icon: siC
        },
        
      ]
    },

    {
      category: "Frameworks",
      tools: [
        {
          name: "React",
          icon: siReact
        },
        {
          name: "Nextjs",
          icon: siNextdotjs
        },
        {
          name: "TailwindCSS",
          icon: siTailwindcss
        },
      ]
    },

    {
      category: "Tools",
      tools: [
        {
          name: "Git",
          icon: siGit
        },
        {
          name: "Github",
          icon: siGithub
        },
        {
          name: "OpenAI",
          icon: siOpenai
        },
      ]
    },
    {
      category: "Databases",
      tools: [
        {
          name: "Supabase",
          icon: siSupabase
        },
        {
          name: "MySQL",
          icon: siMysql
        },
        {
          name: "PostgreSQL",
          icon: siPostgresql
        },
      ]
    }
  ]

  return (
    <section id="about" className={`${ovo.className} flex flex-col items-center gap-10 px-4 py-12`}>
        <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h4 className="text-xl sm:text-2xl text-[#242424]">Introduction</h4>
        <h2 className="text-4xl sm:text-6xl text-[#242424] mt-2">About me</h2>
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
        className="text-base sm:text-lg md:text-xl text-[#565656] leading-relaxed"
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
            {aboutMeData.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 p-4 w-[160px] sm:w-[180px] h-[160px] sm:h-[170px] border border-[#D8D8D8] bg-[#FFFFFF80] rounded-lg  cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <button>
                {item.icon}
                </button>
                <h2 className="font-semibold text-base sm:text-lg text-[#242424]">
                  {item.section}
                </h2>
                <p className="text-xs sm:text-sm text-[#797979] leading-[20px]">
                  {item.details}
                </p>
              </div>
            ))}
          </motion.div>

        <motion.div
        className="flex flex-col gap-10 mt-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
            <div>
            <h2 className="font-semibold text-xl text-[#868686]">Skills i have</h2>
            <p>Technologies and tools I have worked with and enjoy using.</p>
            </div>
            <div className="flex flex-col w-full gap-5">
              {tools.map((tool, index) => 
              <div className="flex flex-col gap-2" key={index}>
                <h1 className="text-lg font-semibold text-[#08090a] flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-[#08090a]"></span>
                  {tool.category}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {
                    tool.tools.map((tech, index) => 
                    <div key={index} className="flex items-center border border-[#D8D8D8] hover:bg-gray-50 hover:border-gray-900/30  px-3 py-1.5 rounded-sm gap-2 transition-all duration-300 cursor-pointer">
                      <span className=" flex items-center justify-center size-6 p-1 rounded-sm bg-gray-100 text-xs font-medium text-[#08090a] dark:text-slate-200">
                      <svg  role="img" viewBox="0 0 24 24" width="1em" height="1em" fill={`#${tech.icon.hex}`}>
                        <title>{tech.name}</title>
                        <path d={tech.icon.path} />
                      </svg>
                      </span>
                      <h3 className="font-medium text-[#08090a]">{tech.name}</h3>
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
