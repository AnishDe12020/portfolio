import { motion } from "framer-motion";
import NextImage from "next/image";

import AvatarJPG from "public/static/images/avatar.jpg";
import { fadeInVariant } from "variants";
const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <motion.h1
          className="will-change-opacity text-5xl font-bold will-change-transform"
          variants={fadeInVariant}
          initial="offscreen"
          animate="onscreen"
          transition={{ delay: 0.3 }}
        >
          Anish De
        </motion.h1>
        <motion.h2
          className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform"
          variants={fadeInVariant}
          initial="offscreen"
          animate="onscreen"
          transition={{ delay: 0.4 }}
        >
          10th grader • Fullstack Web Developer • Blogger • Tech Enthusiast
        </motion.h2>
        <motion.p
          className="text-md will-change-opacity text-lg text-gray-300 will-change-transform"
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
        className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform"
        variants={fadeInVariant}
        initial="offscreen"
        animate="onscreen"
        transition={{ delay: 0.1 }}
      >
        <NextImage
          src={AvatarJPG}
          layout="fill"
          placeholder="blur"
          alt="Anish De"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
