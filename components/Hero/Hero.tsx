import { motion } from "framer-motion";
import NextImage from "next/image";
import { Image, RichText } from "types/graphcms";

interface HeroProps {
  heroText: string;
  description: RichText;
  image: Image;
}

const Hero = ({ heroText, description, image }: HeroProps): JSX.Element => {
  return (
    <main className="flex flex-row space-x-16 mx-16">
      <div className="flex flex-col justify-center mt-32 space-y-4">
        <motion.h1
          initial={{ scaleY: 1, scaleX: 1 }}
          animate={{ scaleY: [1.2, 1, 0.6, 1], scaleX: [0.6, 1, 1.2, 1] }}
          className="text-5xl"
        >
          {heroText}
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          dangerouslySetInnerHTML={{ __html: description.html }}
        />
      </div>
      <div className="w-8 h-8 relative">
        <NextImage src={image.url} className="rounded-full" layout="fill" />
      </div>
    </main>
  );
};

export default Hero;
