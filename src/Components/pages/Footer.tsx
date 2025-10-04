import {Phone } from "lucide-react"
import { motion } from "framer-motion"
import { containerVariants } from "@/data/footer/variants"
import { itemVariants } from "@/data/contact/variants"
import FooterNav from "@/Components/Footer/FooterNav"
import Logo from "@/Components/Logo"

const Footer = () => {

  return (
    <motion.footer 
      id="others"
      className="flex flex-col items-center w-full gap-10 px-4 py-8 "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div 
        className="flex flex-col items-center gap-2.5 text-center"
        variants={itemVariants}
        transition={{ duration: 0.6 }}
      >
        <Logo/>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.a href="tel:08050702092" className="text-base sm:text-lg">Give me a Call</motion.a>
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Phone size={24} strokeWidth={1}/>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.hr 
        className="w-full max-w-screen-md border-t border-[#969696]"
        variants={itemVariants}
        transition={{ duration: 0.8 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
      />

      <FooterNav/>
    </motion.footer>
  )
}

export default Footer