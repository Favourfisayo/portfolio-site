import { navLinks } from "@/data/header/navlinks";
import Button from "../Button";
import { ArrowRight, X } from "lucide-react";
import ThemeToggle from "@/Components/ThemeToggle";
export default function MobileNav({toggleMobileMenu}: {
    toggleMobileMenu: () => void
}) {
    return (
        <>
         <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={toggleMobileMenu}>
            <div
              className={` fixed top-0 left-0 right-0 shadow-lg z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium text-neutral-900 dark:text-neutral-100">Menu</h2>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 hover:text-[#EC1552] transition-colors rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

                <div className="inline-flex px-6 pb-2">
                  <ThemeToggle />
                </div>

              <nav className="py-2">
                <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {navLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="flex items-center gap-4 px-6 py-4 text-neutral-800 dark:text-neutral-200 hover:text-[#EC1552] hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 active:bg-neutral-200/60 dark:active:bg-neutral-700"
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

              <div className="p-6">
                <Button
                  text="Connect"
                  icon={ArrowRight}
                  iconProps={{
                    size: 18,
                    strokeWidth: 2,
                    color: "white",
                  }}
                  textColor="white"
                  borderColor="white"
                  btnHeight="48px"
                  btnRadius="12px"
                  hover={[
                    "scale-105",
                  ]}
                  href={"https://linkedin.com/in/favour-seriki-631151286"}
                />
              </div>
            </div>
          </div>
        </>
    )
}