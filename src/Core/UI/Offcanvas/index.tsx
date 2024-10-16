import { memo } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import useKeyboardFocus from "@/Hooks/useKeyboardFocus";

const Portal = dynamic(() => import("@/Utils/portal"), {
  ssr: false,
});

type TProps = {
  className?: string;
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

const wrapVariant = {
  hidden: { opacity: 0 },
  show: {
    transition: {
      staggerChildren: 0.1,
    },
    opacity: 1,
  },
  close: { opacity: 0 },
};

const innerVariant = {
  hidden: {
    opacity: 0,
    x: 420,
    transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
  },
  close: {
    opacity: 0,
    x: 420,
    transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const Offcanvas = memo(({ className, onClose, isOpen, children }: TProps) => {
  const offcanvasRef = useKeyboardFocus<HTMLDivElement>(isOpen, onClose);
  return (
    <Portal>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={clsx(
              "fixed inset-0 bg-black z-50 bg-black/70 overflow-hidden"
            )}
            onClick={onClose}
            onKeyUp={onClose}
            tabIndex={-1}
            role="button"
            variants={wrapVariant}
            initial="hidden"
            animate="show"
            exit="close"
          >
            <motion.div
              className={clsx(
                "relative z-30 w-[300px] ml-auto sm:w-[360px] h-full bg-secondary  bg-no-repeat bg-top bg-cover",
                "before:absolute before:content-[''] before:-z-1 before:inset-0 before:bg-secondary/90",
                className
              )}
              onClick={(e) => e.stopPropagation()}
              onKeyUp={(e) => e.stopPropagation()}
              tabIndex={-1}
              ref={offcanvasRef}
              role="button"
              variants={innerVariant}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
});

Offcanvas.displayName = "Offcanvas";

export default Offcanvas;
