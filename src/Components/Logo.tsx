import { logoVariants } from "@/data/header/variants";
import { motion } from "framer-motion";

export default function Logo() {
    return (
        <>
        <motion.h1 
            className="font-semibold text-[28px] sm:text-[35px] lg:text-[45px] tracking-tighter leading-[100%] flex gap-2.5"
            variants={logoVariants}
          >
            FAVOUR
          </motion.h1>
        </>
    )
}