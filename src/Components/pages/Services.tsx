import {motion} from "framer-motion"
import { useState } from "react"
import { servicesData } from '@/data/services/services'
import { Header } from '../PServices/Header'
import ServicesMain from '../PServices/ServicesMain'
const Services = () => {
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
      className={`flex flex-col items-center gap-10 px-4 py-12`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
     <Header/>
     <ServicesMain
     expandedCards = {expandedCards}
     toggleExpanded = {toggleExpanded}
     />
    </motion.section>
  )
}

export default Services