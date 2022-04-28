import { Toaster, ToastIcon, toast } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import { cloneElement, ReactNode } from "react";
import { X } from "react-feather";

const CustomToaster = (): JSX.Element => (
  <Toaster position="bottom-right">
    {t => {
      const icon = <ToastIcon toast={t} />;

      return (
        <AnimatePresence>
          {t.visible && (
            <motion.div
              className="bg-tertiary shadow-lg rounded-lg px-6 py-4 flex"
              initial={{ scale: 0.6, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.6, opacity: 0, y: 20 }}
            >
              <>
                {cloneElement(icon, { className: "w-4 h-4 !mr-2" })}
                <span className="ml-2">{t.message as ReactNode}</span>
                {t.type !== "loading" && (
                  <button
                    className="ml-2 hover:opacity-60 transition duration-200"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </>
            </motion.div>
          )}
        </AnimatePresence>
      );
    }}
  </Toaster>
);

export default CustomToaster;
