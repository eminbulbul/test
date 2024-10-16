import React from "react";
import clsx from "clsx";
import Section from "@/UI/Section";
import SectionTitle from "@/UI/SectionTitle";
import BottomShape from "@/UI/BottomShape/Shape02";
import { RootState } from "@/Redux/reducers";
import { motion } from "framer-motion";
import { scrollUpVariants } from "@/Utils/variants";
import { useSelector } from "react-redux";

const AnimatedSectionTitle = motion(SectionTitle);

type VideoAreaProps = {
  url?: string;
  width?: string;
  height?: string;
};

const VideoArea: React.FC<VideoAreaProps> = ({
  width = "100%",
  height = "100%",
}) => {
  const mousePosition = useSelector(
    (state: RootState) => state.cursorMove.mousePosition
  );
  const data = {
    images: [
      {
        src: "/img/about-me-popup-video-poster.jpg",
      },
    ],
    video: {
      videoId: "eS9Qm4AOOBY",
      channel: "youtube",
    },
  };
  return (
    <Section
      className={clsx("video-area relative ")}
      bg="bg-spring"
      style={{
        backgroundImage: `url("/img/background-pattern-grid-line.png")`,
      }}
    >
      <div className="container relative z-10">
        <div className="w-full z-10">
          <video
            width={width}
            height={height}
            className="md:p-15"
            src="https://res.cloudinary.com/dgkk9picj/video/upload/v1720524626/konu-anlatim-videolar/i2fsrshv0mtv9m6cbknv.mp4"
            controls
          ></video>
        </div>

        <motion.div
          className="absolute -z-1 left-0 -top-[90px] w-[120px] h-[130px] md:-top-[120px] md:w-[226px] md:h-[226px]"
          animate={{
            x: (mousePosition.x / 15) * -1,
            y: (mousePosition.y / 15) * -1,
          }}
        >
          <img
            className="w-full h-full fill-putty"
            src="/svgs/shape-2.svg"
            alt="shape"
          />
        </motion.div>
        <motion.div
          className="absolute -z-1 top-0 left-5 w-[90px] h-[90px] md:w-auto md:h-auto"
          animate={{
            x: mousePosition.x / 15,
            y: mousePosition.y / 15,
          }}
        >
          <img
            src="/img/shape-3.png"
            alt="shape"
            loading="lazy"
            width={178}
            height={178}
          />
        </motion.div>
        <motion.div
          className="absolute -z-10 top-10 right-0"
          animate={{
            x: (mousePosition.x / 15) * -1,
            y: (mousePosition.y / 15) * -1,
          }}
        >
          <span className="block -indent-[99999px] border-desert rounded-full border-[6px] w-[45px] h-[45px] md:border-[12px] md:w-[90px] md:h-[90px]">
            shape 3
          </span>
        </motion.div>
        <motion.div
          className="absolute -z-1 -bottom-[45px] right-5 w-[85px] md:w-auto"
          animate={{
            x: (mousePosition.x / 15) * -1,
            y: (mousePosition.y / 15) * -1,
          }}
        >
          <img
            src="/img/shape-1.png"
            alt="shape"
            loading="lazy"
            width={136}
            height={136}
          />
        </motion.div>
      </div>
      <BottomShape />
    </Section>
  );
};

export default VideoArea;
