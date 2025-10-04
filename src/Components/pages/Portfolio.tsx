import Button from '@/Components/Button'
import { ArrowRight } from 'lucide-react'
import {motion} from "framer-motion"
import { portfolioProjects, type PortfolioProject } from '@/data/portfolio/projects'
import Project from '../Portfolio/Project'
import { containerVariants } from '@/data/portfolio/variants'
import Header from '../Portfolio/Header'

const Portfolio = () => {

  return (
    <section id="portfolio" className={`flex flex-col items-center gap-10 px-4 py-12`}>
      <Header/>
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg justify-items-center'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {portfolioProjects.map((project: PortfolioProject, index: number) => (
          <Project key={index} project={project} index={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          text='Show more'
          btnHeight="64px"
          btnRadius="50px"
          icon={ArrowRight}
          iconProps={{ size: 24, strokeWidth: 1 }}
          hover={[
            "scale-105",
          ]}
          href={"https://github.com/Favourfisayo?tab=repositories"}
        />
      </motion.div>
    </section>
  )
}
export default Portfolio