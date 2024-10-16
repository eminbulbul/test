import clsx from "clsx";
import useScrollTop from "@/Hooks/useScrollTop";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { stick, onClickHandler } = useScrollTop();
  if (stick) {
    return (
      <button
        aria-label="Scroll to top"
        type="button"
        className="group overflow-hidden fixed right-7.5 bottom-15 z-50 shadow-3xl shadow-black/30 p-0 w-15 h-15 rounded-full text-center text-h3 inline-flex justify-center items-center bg-primary text-white"
        onClick={onClickHandler}
      >
        <FaArrowUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-transorm duration-300 group-hover:-translate-y-20" />
        <FaArrowUp className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 text-white transition-transorm duration-300 group-hover:-translate-y-1/2" />
      </button>
    );
  }
  return null;
};

export default ScrollToTop;
