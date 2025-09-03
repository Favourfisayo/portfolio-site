"use client";
import { outfit, ovo } from "@/fonts";
import Button from "@/Components/Button";
import { useState } from "react";
import { Menu, X, } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { navLinks } from "@/data/header/navlinks";
import MobileNav from "@/Components/Header/MobileNav"
import { headerVariants, navVariants, buttonVariants } from "@/data/header/variants";
import Logo from "@/Components/Logo";
import ThemeToggle from "@/Components/ThemeToggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        className={`${outfit.className} sticky top-0 z-20 text-neutral-900 dark:text-neutral-100 bg-white/60 dark:bg-neutral-950/50 backdrop-blur-md border-b border-black/5 dark:border-white/10`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-7xl mx-auto flex items-center h-16 sm:h-20 px-4">
          <Logo/>
          <motion.nav 
            className={`${ovo.className} hidden lg:flex flex-1 justify-center`}
            variants={navVariants}
          >
            <ul className="flex items-center gap-8 px-6 h-12 rounded-full text-base font-normal leading-[100%]">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="cursor-pointer text-neutral-700 dark:text-neutral-300 hover:text-[#EC1552] transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.6 + (index * 0.1),
                    ease: "easeOut"
                  }}
                >
                  {link.linkName}
                </motion.a>
              ))}
            </ul>
          </motion.nav>

          <motion.div 
            className="ml-auto flex items-center gap-3"
            variants={buttonVariants}
          >
            <div className="hidden sm:flex">
              <ThemeToggle />
            </div>
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 hover:text-[#EC1552] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden lg:flex items-center gap-4">
                <Button
                  text="Connect"
                  icon={FaLinkedin}
                  iconProps={{ size: 20, color: "#0077B5" }}
                  btnHeight="48px"
                  btnRadius="100px"
                  hover={[
                    "scale-105",
                  ]}
                  href={"https://linkedin.com/in/favour-seriki-631151286"}
                />
            </div>
          </motion.div>
        </div>
      </motion.header>

        {isMobileMenuOpen && (
          <MobileNav toggleMobileMenu = {toggleMobileMenu}/>
        )}
    </>
  );
}