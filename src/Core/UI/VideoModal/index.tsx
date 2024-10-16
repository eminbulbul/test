import { useState } from "react";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn02 } from "@/Utils/variants";
import Spinner from "../Spinner";

const Portal = dynamic(() => import("../../../Utils/portal"), {
  ssr: false,
});

type TModal = {
  /**
   * Youtube video ID
   */
  videoId?: string;
  /**
   * When `true` The modal will show itself.
   */
  show: boolean;
  /**
   * Callback function for close modal
   */
  onClose: () => void;
  /**
   * Pass extra classes
   */
  className?: string;
};

const VideoModal = ({ videoId, show, onClose, className }: TModal) => {
  const [videoLoading, setVideoLoading] = useState(true);

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <Portal>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {show && (
          <>
            <motion.div
              className="backdrop fixed top-0 left-0 w-screen h-screen bg-black/60 transition-opacity z-50 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
                type: "spring",
              }}
              tabIndex={-1}
            />

            <motion.div
              className={clsx(
                "fixed inset-0 overflow-hidden outline-0 transition-opacity z-[999]",
                className
              )}
              role="button"
              tabIndex={-1}
              onClick={onClose}
              onKeyPress={(e) => e}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeIn02}
            >
              <div className="modal-dialog relative z-50 w-auto m-3 pointer-events-none sm:my-5 sm:mx-auto flex items-center min-h-[calc(100vh_-_1rem)] sm:min-h-[calc(100vh_-_3.5rem)] sm:max-w-[500px] lg:max-w-[1000px]">
                <div
                  className="modal-content relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded"
                  onClick={(e) => e.stopPropagation()}
                  onKeyPress={(e) => e.stopPropagation()}
                  role="button"
                  tabIndex={-1}
                >
                  {videoLoading && (
                    <div className="absolute inset-0 flex justify-center items-center">
                      <Spinner />
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-0 -top-9 w-9 h-9 text-white bg-black flex items-center justify-center"
                  >
                    <i className="linea-arrows-circle-remove" />
                  </button>
                  {/* <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />*/}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default VideoModal;
