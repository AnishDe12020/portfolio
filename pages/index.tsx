import type { NextPage } from "next";
import { motion } from "framer-motion";

const HomePage: NextPage = () => {
  return (
    <main className="flex items-center justify-center flex-col h-screen overflow-y-hidden">
      <motion.h1
        initial={{ y: -50, opacity: 0.6 }}
        transition={{
          duration: 0.2,
        }}
        animate={{ y: 0, opacity: 1 }}
        className="text-9xl"
      >
        Hey, I am Anish De
      </motion.h1>
    </main>
  );
};

export default HomePage;
