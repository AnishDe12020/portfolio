import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

const MotionContent = motion(TooltipPrimitive.Content);

interface TooltipProps {
  children: ReactNode;
  content: string;
}

const Tooltip = ({ children, content }: TooltipProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TooltipPrimitive.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      delayDuration={100}
    >
      <TooltipPrimitive.Trigger tabIndex={-1}>
        {children}
      </TooltipPrimitive.Trigger>
      <AnimatePresence>
        {isOpen && (
          <MotionContent
            side="top"
            sideOffset={4}
            className="rounded-md bg-tertiary px-3 py-1 text-sm shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            forceMount
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-current text-tertiary" />
          </MotionContent>
        )}
      </AnimatePresence>
    </TooltipPrimitive.Root>
  );
};

export default Tooltip;
