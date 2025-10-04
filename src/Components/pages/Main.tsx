import { motion } from "framer-motion";
import DownloadResume from "@/Components/main/DownloadResume";
import Image from "next/image";

const Main = () => {

  return (
    <main id="home" className={` relative flex flex-col items-center px-4 py-8 gap-4`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <Image
          src="/logo.jpeg"
          alt="User's Image"
          width={120}
          height={120}
          className="w-[100px] h-[100px] md:w-[158px] md:h-[158px] rounded-full"
        />

        <h3 className="text-center leading-8 text-4xl font-extrabold lg:text-6xl">
          Hi! I&apos;m Seriki Favour.
        </h3>
        </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-4 max-w-[90%] sm:max-w-[80%] md:max-w-[70%]"
        ></motion.div>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center  mt-2">
          I&apos;m a full-stack developer focused on building AI-powered, real-time collaborative web apps using <br/> Next.js, Supabase, and LangChain.
          </p>
      <motion.div/>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: "all" }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
      >
        <DownloadResume/>
      </motion.div>
    </main>
  );
};

export default Main;
