import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import  useKeyboardFocus  from "@/Hooks/useKeyboardFocus";
import { flyoutSearch01, flyoutSearch01Inner } from "@/Utils/variants";
import SearchForm from "./SearchForm";

const AnimatedSearch = motion(SearchForm);

type TProps = {
  /**
   * When `true` The modal will show itself.
   */
  show: boolean;
  /**
   * Pass extra classes
   */
  className?: string;
  /**
   * Callback function for close modal
   */
  onClose: () => void;
};

const FlyoutSearchForm = ({ show, onClose, className }: TProps) => {
  const modalRef = useKeyboardFocus<HTMLDivElement>(show, onClose);
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          layout
          key="searchwrapper"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={flyoutSearch01}
          className={clsx(
            "absolute overflow-hidden left-0 top-15 max-w-full min-h-[80px] p-3.8 bg-white border-t border-t-gray-450 w-full",
            className
          )}
          ref={modalRef}
        >
          <AnimatedSearch
            layout
            key="search"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={flyoutSearch01Inner}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlyoutSearchForm;
