import { motion } from "framer-motion";
import NextImage from "next/image";
import { DirectusImage } from "types/directus";

interface HeroProps {
  heroHeading: string;
  heroText: string;
  image: DirectusImage;
}

const Hero = ({ heroHeading, heroText, image }: HeroProps): JSX.Element => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="relative h-32 w-32 overflow-hidden rounded-full">
        <NextImage
          src={image.url}
          layout="fill"
          placeholder="blur"
          blurDataURL={image.previewURL}
        />
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-bold"
        >
          {heroHeading}
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {heroText}
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
