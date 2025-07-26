import Button from "../Button";
import Image from "next/image";
import { ovo } from "../../fonts";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Main = () => {

  return (
    <main id="home" className={`${ovo.className} relative flex flex-col items-center px-4 py-8 gap-4`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        {/* <Image
          src="/user-logo-rounded.png"
          alt="User's Image"
          width={120}
          height={120}
          className="w-[100px] h-[100px] md:w-[158px] md:h-[158px] rounded-full"
        /> */}
        <div className=" w-[100px] h-[100px] md:w-[158px] md:h-[158px] rounded-full flex items-center justify-center text-4xl md:text-6xl font-bold text-white shadow-lg mb-2"
          style={{
            background: "linear-gradient(135deg, #EC1552 0%, #e0ff85 100%)"
          }}
        >
          SF
        </div>

        <h3 className="text-center leading-8  text-[#242424] text-4xl font-extrabold lg:text-6xl">
          Hi! I'm Seriki Favour.
        </h3>
        </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-4 max-w-[90%] sm:max-w-[80%] md:max-w-[70%]"
        ></motion.div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center text-[#565656] mt-2">
          I’m a Fullstack Developer based in Lagos, Nigeria, with 2–3 years of experience <br/> building fast, scalable, and user-friendly web applications.

          </p>
      <motion.div/>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: "all" }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
      >
      {/* <Button
        text="Connect with me"
        textColor="#FFFFFF"
        icon={ArrowRight}
        iconProps={{size: 20, strokeWidth: 1, color:"white"}}
        btnHeight="64px"
        btnRadius="50px"
        bgColor="#202020"
        borderColor="#202020"
        hover={[
          "bg-[#111]",
          "scale-105",
          "shadow-md"
        ]}
      /> */}

        {/* <Button
          text="Download my Resume"
          textColor="#242424"
          icon={Download}
          iconProps={{size: 20, strokeWidth: 1}}
          btnHeight="64px"
          btnRadius="50px"
          bgColor="#FFFFFF"
          borderColor="#A7A7A7"
          hover={[
          "bg-gray-100",
          "scale-105",
          "shadow"
          ]}
        /> */}
      </motion.div>
    </main>
  );
};

export default Main;
