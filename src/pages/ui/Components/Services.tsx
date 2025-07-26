import { ovo, outfit } from '../../fonts'
import Button from "../Button"
import {motion, AnimatePresence} from "framer-motion"
import {Globe, Server, BookText, Rocket, ArrowDown, ArrowUp} from "lucide-react"
import { useState } from "react"

const Services = () => {
    const servicesData = [
    {
      title: "Web Application Development",
      description: "I build modern, responsive, and scalable web applications using technologies like React, Next.js, and Tailwind CSS. Whether it's a landing page, dashboard, or full-stack SaaS product, I deliver fast-loading, SEO-friendly, and user-centric solutions tailored to your business needs.",
      icon: <Globe strokeWidth={1}/>
    },
    {
      title: "Custom API & Backend Integration",
      description: "Need more than just a frontend? I can develop robust backends using Node.js and integrate them with powerful databases like Supabase or Firebase. From user authentication to custom REST APIs, I ensure secure and scalable server-side logic that supports your app's functionality.",
      icon: <Server strokeWidth={1}/>
    },
    {
      title: "Technical Documentation & Code Optimization",
      description: "I help development teams or solo founders create clear and concise technical documentation for their projects. I can also refactor legacy codebases, improve performance, or debug tricky issues in frontend or backend projects for better maintainability and scalability.",
      icon: <BookText strokeWidth={1}/>
    },
    {
      title: " Freelance Collaboration & MVP Prototyping",
      description: "Got a startup idea? I work with early-stage founders and solo entrepreneurs to bring MVPs (Minimum Viable Products) to life. From brainstorming to building the first version of your product, I help turn ideas into usable prototypes that can attract users or investors.",
      icon: <Rocket strokeWidth={1}/>
    }
  ]
  const [expandedCards, setExpandedCards] = useState(
    Array(servicesData.length).fill(false)
  )

  const toggleExpanded = (index: number) => {
    setExpandedCards(prev => {
      return prev.map((preVal, i) => i === index ? !preVal : preVal)
    }
    )
  }



  return (
    <motion.section 
    id='services'
      className={`${ovo.className} flex flex-col items-center gap-10 px-4 py-12`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="flex flex-col items-center gap-4 text-center max-w-[90%] md:max-w-2xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h5 
          className="text-xl sm:text-2xl text-[#242424] font-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What I Offer
        </motion.h5>
        <motion.h1 
          className="text-4xl sm:text-6xl font-normal text-[#242424]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h1>
        <motion.p 
          className="text-[#565656] font-normal text-base sm:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
         These are the services I have to offer.
        </motion.p>
      </motion.div>

      <motion.div 
        className={`${outfit.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-lg auto-rows-auto items-start`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6,
          delayChildren: 0.3,
          staggerChildren: 0.2
        }}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white border-2 border-[#EFEFEF] rounded-lg p-6 flex flex-col justify-between gap-4 cursor-pointer"
            initial={{ 
              y: 60, 
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1
            }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut"
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0px 8px 25px 0px rgba(0,0,0,0.15)",
              backgroundColor: "#FCF4FF",
              borderColor: "#DCDCDC",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{
              boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.05)"
            }}
          >
              {/* Icon */}
              <motion.div 
                className="w-[48px] h-[48px] bg-[#FF388B] border-2 border-white text-white rounded-[10px] flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <button>
                  {service.icon}
                </button>
              </motion.div>

              {/* Title */}
              <motion.h2 
                className={`font-semibold text-[#282828] text-lg mt-4 ${expandedCards[index] ? '' : "line-clamp-2"}`}
                layout
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h2>

              {/* Description */}
              <motion.div
                layout
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={expandedCards[index] ? 'expanded' : 'collapsed'}
                    className={`text-sm text-[#797979] leading-[26px] ${expandedCards[index] ? '': "line-clamp-3"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      duration: 0.4,
                      ease: "easeInOut"
                    }}
                  >
                    {service.description}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* Read More */}
              <motion.button
                onClick={() => toggleExpanded(index)}
                className="flex items-center gap-1 text-sm text-[#797979] mt-auto"
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                layout
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {expandedCards[index] ? "Read less" : "Read more"}
                </motion.span>
                <motion.div
                  animate={{ rotate: expandedCards[index] ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ArrowDown strokeWidth={1} />
                </motion.div>
              </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Services