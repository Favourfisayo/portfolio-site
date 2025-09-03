import { motion } from "framer-motion";

export function Header() {
    return (
        <>
    <motion.div 
        className="flex flex-col items-center gap-4 text-center max-w-[90%] md:max-w-2xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h5 
          className="text-xl sm:text-2xl font-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What I Offer
        </motion.h5>
        <motion.h1 
          className="text-4xl sm:text-6xl font-normal "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h1>
        <motion.p 
          className=" font-normal text-base sm:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
         These are the services I have to offer.
        </motion.p>
      </motion.div>

        </>
    )
}