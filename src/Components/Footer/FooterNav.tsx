import { itemVariants } from "@/data/contact/variants";
import { socialVariants } from "@/data/footer/variants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function FooterNav() {
    return (
        <>
    <motion.nav 
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-md gap-4 text-center md:text-left"
        variants={itemVariants}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className=" text-sm sm:text-base"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Made with <div className="animate-bounce inline-block">❤️</div> by Favour.
        </motion.div>
        <motion.ul 
          className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm sm:text-base"
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
                  <FaGithub size={18} />
                </motion.div>
                Github
              </Link>
            </motion.div>
          </motion.li>
        </motion.ul>
      </motion.nav>
        </>
    )
}