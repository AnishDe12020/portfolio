import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <AnimatePresence>
        {isOpen && (
          <MotionContent
            side="top"
            sideOffset={4}
            className="rounded-md px-3 py-1 text-sm bg-tertiary shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            forceMount
          >
            {content}
            <TooltipPrimitive.Arrow className="text-tertiary fill-current" />
          </MotionContent>
        )}
      </AnimatePresence>
    </TooltipPrimitive.Root>
  );
};

export default Tooltip;
