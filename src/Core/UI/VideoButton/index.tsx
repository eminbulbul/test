import { useState } from "react";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { VideoType } from "@/Utils/types";

const ModalVideo = dynamic(() => import("../VideoModal"), { ssr: false });

type TProps = VideoType & {
  label?: string;
  className?: string;
};

const VideoButton = ({ label, className, videoId }: TProps) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        aria-label={label}
        className={clsx(
          "absolute z-30 inset-0 w-full flex justify-center items-center",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <img
          className="icon w-16 md:w-auto"
          src="/img/icon-youtube-play.png"
          alt="youtube play"
          loading="lazy"
          width={100}
          height={70}
        />
      </button>
      <ModalVideo
        show={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

VideoButton.defaultProps = {
  label: "Play video",
};

export default VideoButton;
