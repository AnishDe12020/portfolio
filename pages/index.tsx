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
        className="text-9xl font-bold"
      >
        Hey, I am{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-pink-600">
          Anish De
        </span>
      </motion.h1>
    </main>
  );
};

export default HomePage;
