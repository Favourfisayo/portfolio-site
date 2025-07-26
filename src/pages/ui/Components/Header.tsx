"use client";
import { outfit, ovo } from "@/fonts";
import Button from "@/Button";
import { useState } from "react";
import { Menu, X, ArrowRight, Home, User, Briefcase, FolderOpen, Mail, MoreHorizontal } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

const navVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.4
    }
  }
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.6
    }
  }
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { linkName: "Home", href: "#home", icon: Home },
    { linkName: "About me", href: "#about", icon: User },
    { linkName: "Services", href: "#services", icon: Briefcase },
    { linkName: "Portfolio", href: "#portfolio", icon: FolderOpen },
    { linkName: "Contact", href: "#contact", icon: Mail },
    { linkName: "Others", href: "#others", icon: MoreHorizontal },
  ];

  return (
    <>
      <motion.header
        className={`${outfit.className} flex justify-between lg:justify-around items-center px-4 py-6 lg:py-0 sticky top-0 backdrop-blur-3xl z-10`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-semibold text-[28px] sm:text-[35px] lg:text-[45px] text-[#1E1E1E] tracking-tighter leading-[100%] flex gap-2.5"
          variants={logoVariants}
        >
          FAVOUR
          <span className="w-2.5 h-2.5 relative bg-[#EC1552] rounded-full self-end">
           <span className="w-2.5 h-2.5 absolute animate-ping bg-[#EC1552] top-0 left-0 right-0 bottom-0 rounded-full self-end">
          </span>
          </span>
        </motion.h1>

        <motion.nav 
          className={`${ovo.className} hidden lg:block`}
          variants={navVariants}
        >
          <ul className="flex w-[733px] h-[70px] items-center backdrop-blur-3xl justify-around border bg-[#FFFFFF80] border-[#FFFFFF] rounded-[100px] shadow-[0px_10px_35px_0px_#00000005] text-xl font-normal leading-[100%]">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="cursor-pointer hover:text-[#EC1552] transition-colors"
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
          className="flex items-center gap-4"
          variants={buttonVariants}
        >
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-[#1E1E1E] hover:text-[#EC1552] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center gap-4">
              <Button
                text="Connect"
                textColor="#4D4D4D"
                icon={FaLinkedin}
                iconProps={{ size: 20, color: "#0077B5" }}
                btnHeight="48px"
                btnRadius="100px"
                bgColor="#FFFFFF80"
                borderColor="#A7A7A7"
                hover={[
                  "scale-105",
                  "shadow-md",
                  "bg-white/90",
                  "border-[#888]",
                ]}
                href={"https://linkedin.com/in/favour-seriki-631151286"}
              />
          </div>
        </motion.div>
      </motion.header>

        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={toggleMobileMenu}>
            <div
              className={`${ovo.className} fixed top-0 left-0 right-0 bg-white shadow-lg z-50`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium text-[#1E1E1E]">Menu</h2>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 text-gray-500 hover:text-[#EC1552] transition-colors rounded-lg hover:bg-gray-50"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <nav className="py-2">
                <ul className="divide-y divide-gray-50">
                  {navLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="flex items-center gap-4 px-6 py-4 text-gray-700 hover:text-[#EC1552] hover:bg-gray-50 transition-all duration-200 active:bg-gray-100"
                          onClick={toggleMobileMenu}
                        >
                          <IconComponent size={20} strokeWidth={1.5} />
                          <span className="text-base font-normal">{link.linkName}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <Button
                  text="Connect"
                  textColor="#FFFFFF"
                  icon={ArrowRight}
                  iconProps={{
                    size: 18,
                    strokeWidth: 2,
                    color: "white",
                  }}
                  btnHeight="48px"
                  btnRadius="12px"
                  bgColor="#EC1552"
                  borderColor="#EC1552"
                  hover={[
                    "scale-105",
                    "shadow-lg",
                    "bg-[#d11347]",
                  ]}
                  href={"https://linkedin.com/in/favour-seriki-631151286"}
                />
              </div>
            </div>
          </div>
        )}
    </>
  );
}