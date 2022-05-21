import { motion, Variants } from "framer-motion";
import NextImage from "next/image";

import AvatarJPG from "public/static/images/avatar.jpg";

const fadeInVariant: Variants = {
  offscreen: {
    opacity: 0.01,
    y: -20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
  },
};

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <motion.h1
          className="text-5xl font-bold will-change-transform will-change-opacity"
          variants={fadeInVariant}
          initial="offscreen"
          animate="onscreen"
          transition={{ delay: 0.3 }}
        >
          Anish De
        </motion.h1>
        <motion.h2
          className="text-lg font-medium text-gray-400 will-change-transform will-change-opacity"
          variants={fadeInVariant}
          initial="offscreen"
          animate="onscreen"
          transition={{ delay: 0.4 }}
        >
          10th grader • Fullstack Web Developer • Blogger • Tech Enthusiast
        </motion.h2>
        <motion.p
          className="text-md text-lg text-gray-300 will-change-transform will-change-opacity"
          variants={fadeInVariant}
          initial="offscreen"
          animate="onscreen"
          transition={{ delay: 0.6 }}
        >
          I am a fullstack web developer, currently looking into learning new
          things (three.js, Rust, Go, Web3 and backend technologies). Whenever I
          feel like I should share my knowledge with others, I like to do it via
          blog posts and social media.
        </motion.p>
      </div>
      <motion.div
        className="relative h-32 w-32 overflow-hidden rounded-full will-change-transform will-change-opacity"
        variants={fadeInVariant}
        initial="offscreen"
        animate="onscreen"
        transition={{ delay: 0.1 }}
      >
        <NextImage src={AvatarJPG} layout="fill" placeholder="blur" />
      </motion.div>
    </div>
  );
};

export default Hero;
