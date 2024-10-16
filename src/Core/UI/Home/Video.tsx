import { forwardRef } from "react";
import clsx from "clsx";
import VideoButton from "@/UI/VideoButton";
import { ImageType, VideoType } from "@/Utils/types";

type TProps = {
  poster: ImageType;
  video: VideoType;
  className?: string;
};

// eslint-disable-next-line react/display-name
const Video02 = forwardRef<HTMLDivElement, TProps>(
  ({ poster, video, className }, ref) => {
    return (
      <div
        className={clsx(
          "relative overflow-hidden group z-20 rounded shadow-xxl shadow-black/[22%]",
          className
        )}
        ref={ref}
      >
        {poster?.src && (
          <img
            className="w-full transition-transform duration-1500 group-hover:scale-110"
            src={poster.src}
            alt={poster?.alt || "video poster"}
            width={poster?.width || 1170}
            height={poster?.height || 620}
            loading={poster?.loading || "lazy"}
          />
        )}
        {video && <VideoButton videoId={video.videoId} />}
      </div>
    );
  }
);

export default Video02;
