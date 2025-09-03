import { motion } from "framer-motion";

export default function Header() {
    return (
        <>
    <motion.div 
        className="flex flex-col items-center gap-4 text-center max-w-[90%] md:max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h4 
          className="text-xl sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Connect with me
        </motion.h4>
        <motion.h1 
          className="text-4xl sm:text-6xl  leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get in touch
        </motion.h1>
        <motion.p 
          className=" text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I would love to hear from you! If you have any questions, comments or <br className="hidden md:block" />
          feedback, please use the form below.
        </motion.p>
      </motion.div>
        </>
    )
}