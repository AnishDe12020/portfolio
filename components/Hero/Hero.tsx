import { motion } from "framer-motion";

const Hero = (): JSX.Element => {
  return (
    <main className="flex flex-col justify-center items-center mt-32">
      <motion.h1
        initial={{ scaleY: 1, scaleX: 1 }}
        animate={{ scaleY: [1.2, 1, 0.6, 1], scaleX: [0.6, 1, 1.2, 1] }}
        className="text-5xl"
      >
        Anish De
      </motion.h1>
    </main>
  );
};

export default Hero;
