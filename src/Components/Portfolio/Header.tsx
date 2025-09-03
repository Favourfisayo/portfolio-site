import { motion } from "framer-motion";

export default function Header() {
    return (
        <>
    <motion.div 
        className='flex flex-col items-center gap-4 text-center max-w-[90%] md:max-w-2xl'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className=' text-xl sm:text-2xl font-normal'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          My portfolio
        </motion.h3>
        <motion.h1 
          className=' text-4xl sm:text-6xl font-normal leading-tight'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My latest work
        </motion.h1>
        <motion.p 
          className=' text-base sm:text-xl leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Welcome to my web development portfolio! Explore a collection of projects showcasing <br className="hidden md:block" />
          my expertise in Full-stack & font-end development and design.
        </motion.p>
      </motion.div>
        </>
    )
}