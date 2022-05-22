import { Variants } from "framer-motion";

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

export {fadeInVariant}
