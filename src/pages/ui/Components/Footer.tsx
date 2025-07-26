import { outfit } from "@/pages/fonts"
import {Phone } from "lucide-react"
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa"
import Link from "next/link"
import { motion } from "framer-motion"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.footer 
      id="others"
      className="flex flex-col items-center w-full gap-10 px-4 py-8 bg-white"
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
        <motion.h1 
          className={`${outfit.className} font-semibold text-[28px] sm:text-[35px] lg:text-[45px] text-[#1E1E1E] tracking-tighter leading-[100%] flex gap-2.5`}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          FAVOUR
          <motion.span 
            className="w-2.5 h-2.5 relative bg-[#EC1552] rounded-full self-end"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="w-2.5 h-2.5 absolute animate-ping bg-[#EC1552] top-0 left-0 right-0 bottom-0 rounded-full self-end"></span>
          </motion.span>
        </motion.h1>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Phone size={24} strokeWidth={1}/>
          </motion.div>
          <motion.p className="text-[#797979] text-base sm:text-lg">+234-909312175</motion.p>
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

      <motion.nav 
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-md gap-4 text-center md:text-left"
        variants={itemVariants}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="text-[#626262] text-sm sm:text-base"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Made with <div className="animate-bounce inline-block">❤️</div> by Favour.
        </motion.div>
        <motion.ul 
          className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-[#626262] text-sm sm:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delay: 0.4
              }
            }
          }}
        >
          <motion.li variants={socialVariants}>
            <motion.a
              href="https://twitter.com/favour_devs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
              aria-label="Twitter"
              whileHover={{ 
                scale: 1.05,
                x: 5,
                color: "#1DA1F2"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaTwitter size={18} color="#1DA1F2" />
              </motion.div>
              Twitter
            </motion.a>
          </motion.li>
          <motion.li variants={socialVariants}>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                x: 5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="https://www.instagram.com/favour__4x"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
                aria-label="Instagram"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaInstagram size={18} color="red" />
                </motion.div>
                Instagram
              </Link>
            </motion.div>
          </motion.li>
          <motion.li variants={socialVariants}>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                x: 5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="https://github.com/Favourfisayo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline"
                aria-label="Github"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaGithub size={18} color="black" />
                </motion.div>
                Github
              </Link>
            </motion.div>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </motion.footer>
  )
}

export default Footer