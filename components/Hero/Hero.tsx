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
    <main className="flex flex-col space-y-8">
      <div className="w-32 h-32 relative">
        <NextImage src={image.url} className="rounded-full" layout="fill" />
      </div>
      <div className="flex flex-col justify-center space-y-4">
        <motion.h1
          initial={{ scaleY: 1, scaleX: 1 }}
          animate={{ scaleY: [1.2, 1, 0.6, 1], scaleX: [0.6, 1, 1.2, 1] }}
          className="text-5xl font-bold"
        >
          {heroText}
        </motion.h1>
        <motion.div
          className="text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          dangerouslySetInnerHTML={{ __html: description.html }}
        />
      </div>
    </main>
  );
};

export default Hero;
