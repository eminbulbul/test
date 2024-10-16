import { forwardRef } from "react";
import Anchor from "@/UI/Anchor";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";

type TProps = {
  text?: string;
  path: string;
  pathText: string;
  className?: string;
  size?: "md" | "lg";
};

// eslint-disable-next-line react/display-name
const MottoText = forwardRef<HTMLParagraphElement, TProps>(
  ({ text, pathText, path, className, size }, ref) => (
    <p
      className={clsx(
        "font-medium text-secondary-light leading-relaxed",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
        className
      )}
      ref={ref}
    >
      {text}{" "}
      <Anchor
        path={path}
        className={clsx(
          "font-bold leading-none relative py-[3px] text-primary",
          "before:absolute before:content-[''] before:w-full before:scale-x-100 before:origin-right before:bg-gray-350 before:transition-transform before:duration-600 before:delay-300 before:ease-in-expo before:bottom-0 before:left-0 before:h-px",
          "after:absolute after:content-[''] after:w-full after:scale-x-0 after:origin-left after:bg-primary after:transition-transform after:duration-600 after:delay-75 after:ease-in-expo after:bottom-0 after:left-0 after:h-px",
          "hover:before:scale-x-0 hover:after:scale-x-100 hover:after:delay-300 hover:before:delay-75"
        )}
      >
        {pathText}
        <FaArrowRight className="inline-flex ml-1" />
      </Anchor>
    </p>
  )
);

MottoText.defaultProps = {
  size: "lg",
};

export default MottoText;
