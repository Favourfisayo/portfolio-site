import { ArrowRight, Mail, User, MessageSquare } from "lucide-react"
import { ovo, outfit } from "@/fonts"
import toast from "react-hot-toast"
import { handleSubmit } from "@/utils/handleSubmit"
import { useState } from "react"
import { BeatLoader } from "react-spinners"
import { motion } from "framer-motion"

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  
  const submitFunction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await handleSubmit(e)
      if(res && res.ok) {
        toast.success("Message sent successfully, I'll get back soon :)")
      }
    } catch (error) {
      toast.error("Failed to send message :(")
      console.error(error)
      e.currentTarget.reset()
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section
      className={`${ovo.className} flex flex-col items-center gap-10 px-4 py-12 bg-cover bg-center`}
      style={{ backgroundImage: "url(/contact-bg.png)" }}
      id="contact"
    >
      <motion.div 
        className="flex flex-col items-center gap-4 text-center max-w-[90%] md:max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h4 
          className="text-xl sm:text-2xl text-[#242424]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Connect with me
        </motion.h4>
        <motion.h1 
          className="text-4xl sm:text-6xl text-[#242424] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get in touch
        </motion.h1>
        <motion.p 
          className="text-[#565656] text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I would love to hear from you! If you have any questions, comments or <br className="hidden md:block" />
          feedback, please use the form below.
        </motion.p>
      </motion.div>

      <motion.form
        className={`${outfit.className} flex flex-col items-center gap-8 w-full max-w-[727px]`}
        aria-label="Contact form"
        onSubmit={(e) => submitFunction(e)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <motion.div 
          className="grid md:grid-cols-2 gap-6 w-full"
          variants={itemVariants}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="relative w-full"
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="name" className="sr-only">Name</label>
            <motion.span 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B3B3B3]"
              animate={{ 
                color: focusedField === 'name' ? '#EC1552' : '#B3B3B3',
                scale: focusedField === 'name' ? 1.1 : 1
              }}
              transition={{ duration: 0.2 }}
            >
              <User size={20} aria-hidden="true" />
            </motion.span>
            <motion.input
              id="name"
              name="name"
              className="w-full md:w-[348px] h-[56px] bg-white border border-[#A4A4A4] rounded-lg text-base sm:text-lg text-[#242424] pl-11 pr-4 transition-all duration-300 focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#ffb4c9] hover:shadow-sm"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              required
              aria-required="true"
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              whileFocus={{ 
                boxShadow: "0 0 0 2px rgba(236, 21, 82, 0.2)",
                borderColor: "#EC1552"
              }}
            />
          </motion.div>
          
          <motion.div 
            className="relative w-full"
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="email" className="sr-only">Email</label>
            <motion.span 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B3B3B3]"
              animate={{ 
                color: focusedField === 'email' ? '#EC1552' : '#B3B3B3',
                scale: focusedField === 'email' ? 1.1 : 1
              }}
              transition={{ duration: 0.2 }}
            >
              <Mail size={20} aria-hidden="true" />
            </motion.span>
            <motion.input
              id="email"
              name="email"
              className="w-full md:w-[348px] h-[56px] bg-white border border-[#A4A4A4] rounded-lg text-base sm:text-lg text-[#242424] pl-11 pr-4 transition-all duration-300 focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#ffb4c9] hover:shadow-sm"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              aria-required="true"
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              whileFocus={{ 
                boxShadow: "0 0 0 2px rgba(236, 21, 82, 0.2)",
                borderColor: "#EC1552"
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative w-full"
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
          whileFocus={{ scale: 1.01 }}
        >
          <label htmlFor="message" className="sr-only">Message</label>
          <motion.span 
            className="absolute left-4 top-6 text-[#B3B3B3]"
            animate={{ 
              color: focusedField === 'message' ? '#EC1552' : '#B3B3B3',
              scale: focusedField === 'message' ? 1.1 : 1
            }}
            transition={{ duration: 0.2 }}
          >
            <MessageSquare size={20} aria-hidden="true" />
          </motion.span>
          <motion.textarea
            id="message"
            name="message"
            className="w-full md:w-[727px] h-[180px] bg-white border border-[#A4A4A4] rounded-lg text-base sm:text-lg text-[#242424] pl-11 pr-4 py-3 transition-all duration-300 focus:outline-none focus:border-0 focus:ring-2 focus:ring-[#ffb4c9] hover:shadow-sm resize-none"
            placeholder="Enter your message"
            required
            aria-required="true"
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField(null)}
            whileFocus={{ 
              boxShadow: "0 0 0 2px rgba(236, 21, 82, 0.2)",
              borderColor: "#EC1552"
            }}
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6}}
        >
          <button
            type="submit"
            aria-label="Send Mail"
            className="flex items-center justify-center gap-2 w-full md:w-auto h-[64px] px-8 rounded-[50px] bg-[#202020] border border-[#202020] text-white text-lg font-medium transition-all duration-200 hover:bg-[#111] hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#ffb4c9]"
          >
            
           {loading ? <BeatLoader color="#d1ff4a"/> : "Send Mail"}
            <ArrowRight size={20} strokeWidth={1} color="white" />
          </button>
        </motion.div>
      </motion.form>
    </section>
  )
}

export default Contact