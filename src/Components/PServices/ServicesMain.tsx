import { servicesData } from "@/data/services/services"
import { outfit } from "@/fonts"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function ServicesMain({expandedCards, toggleExpanded}: {
    expandedCards: boolean[],
    toggleExpanded: (index: number) => void
}) {
    return (
        <>
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
        {servicesData.map((service, index) => {
          const Icon = service.icon
          return (
          <motion.div
            key={index}
            className=" border-2 rounded-lg p-6 flex flex-col justify-between gap-4 cursor-pointer"
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
            }}
            style={{
              boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.05)"
            }}
          >
              {/* Icon */}
              <motion.div 
                className="w-[48px] h-[48px] bg-[#FF388B] border-2  rounded-[10px] flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <button>
                 <Icon strokeWidth={1}/>
                </button>
              </motion.div>

              {/* Title */}
              <motion.h2 
                className={`font-semibold  text-lg mt-4 ${expandedCards[index] ? '' : "line-clamp-2"}`}
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
                    className={`text-sm  leading-[26px] ${expandedCards[index] ? '': "line-clamp-3"}`}
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
                className="flex items-center gap-1 text-sm  mt-auto"
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
        )})}
      </motion.div>
        </>
    )
}