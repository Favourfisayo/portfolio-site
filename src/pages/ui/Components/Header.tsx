"use client";
import { outfit, ovo } from "@/fonts";
import Button from "@/Button";
import { useState } from "react";
import { Menu, X,  ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
// import { useTheme } from "next-themes";
import { motion,  Variants } from "framer-motion";
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

const menuItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    x: -10
  },
  visible: { 
    opacity: 1, 
    y: 0,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
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
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // const toggleTheme = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };

  const navLinks = [
    { linkName: "Home", href: "#home" },
    { linkName: "About me", href: "#about" },
    { linkName: "Services", href: "#services" },
    { linkName: "Portfolio", href: "#portfolio" },
    { linkName: "Contact", href: "#contact" },
    { linkName: "Others", href: "#others" },
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
          <span className="w-2.5 h-2.5 relative  bg-[#EC1552]  rounded-full self-end">
           <span className="w-2.5 h-2.5 absolute animate-ping bg-[#EC1552] top-0 left-0 right-0 bottom-0  rounded-full self-end">
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
            {/* {mounted && (
              <button onClick={toggleTheme} aria-label="Toggle Theme">
                {theme === "dark" ? (
                  <Sun size={30} strokeWidth={1} className="cursor-pointer" />
                ) : (
                  <Moon size={30} strokeWidth={1} className="cursor-pointer" />
                )}
              </button>
            )} */}
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
          <motion.header
            className="lg:hidden fixed inset-0 bg-black/20 z-40"
            onClick={toggleMobileMenu}
          >
            <motion.div
              className={`${ovo.className} fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-b border-white/10 transform transition-all duration-500 ease-out z-50 max-h-[75vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <motion.div 
                  className="flex justify-between items-center mb-10"
                >
                  <h2 className="text-2xl font-light text-white">Menu</h2>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-3 text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </motion.div>

                <nav className="space-y-2">
                  {navLinks.map((item, index) => (
                    <motion.div
                      key={index}
                      className="group cursor-pointer py-4 px-6 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20"
                      variants={menuItemVariants}
                    >
                      <span className="text-white/90 group-hover:text-white text-lg font-light tracking-wide transition-all duration-300">
                        {item.linkName}
                      </span>
                    </motion.div>
                  ))}
                </nav>

                <motion.div 
                  className="mt-12 pt-8 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex flex-col gap-6">
                    {/* {mounted && (
                      <button
                        onClick={toggleTheme}
                        className="flex items-center gap-4 py-3 px-6 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      >
                        {theme === "dark" ? (
                          <Sun size={30} strokeWidth={1} color="white" />
                        ) : (
                          <Moon size={30} strokeWidth={1} color="white" />
                        )}
                        <span className="text-white/90 text-base font-light">
                          {theme === "dark" ? "Light Mode" : "Dark Mode"}
                        </span>
                      </button>
                    )} */}

                    <div className="px-6">
                      <Button
                        text="Connect "
                        textColor="#FFFFFF"
                        icon={ArrowRight}
                        iconProps={{
                          size: 20,
                          strokeWidth: 1,
                          color: "white",
                        }}
                        btnHeight="56px"
                        btnRadius="28px"
                        bgColor="rgba(255, 255, 255, 0.15)"
                        borderColor="rgba(255, 255, 255, 0.2)"
                        hover={[
                          "scale-105",
                          "shadow-2xl",
                          "bg-white/25",
                          "border-white/30",
                        ]}
                        href={"https://linkedin.com/in/favour-seriki-631151286"}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.header>
        )}
    </>
  );
}