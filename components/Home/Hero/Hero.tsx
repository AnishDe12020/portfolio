import { motion } from "framer-motion";
import NextImage from "next/image";

import AvararJPG from "public/static/images/avatar.jpg";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="relative h-32 w-32 overflow-hidden rounded-full">
        <NextImage src={AvararJPG} layout="fill" placeholder="blur" />
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-bold"
        >
          Anish De
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {"// Todo"}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
