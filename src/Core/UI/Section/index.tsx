import clsx from "clsx";
import { TSection } from "@/Utils/types";

type TProps = Exclude<TSection, "titleSize"> & {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Section = ({ space,  className, style, children }: TProps) => {
  return (
    <section
      className={clsx(
        className,
        space === "top-bottom" && "py-5 md:py-5 lg:py-[20px]",
        space === "top-bottom-2" && "py-5 md:py-5 lg:pt-[20px] lg:pb-40",
        space === "top-bottom-3" &&
          "pt-[150px] pb-15 md:pt-[170px] md:pb-20 lg:pt-[190px] lg:pb-[100px]",
        space === "top" && "pt-15 md:pt-20 lg:pt-[100px]",
        space === "top-2" && "pt-[150px] md:pt-[170px] lg:pt-[320px]",
        space === "bottom" && "pb-15 md:pb-20 lg:pb-[100px]",
        space === "bottom-2" && "mb-[70px]",
        space === "bottom-3" && "pb-15 md:pb-20 lg:pb-[100px] xl:pb-[160px]",
        
      )}
      style={style}
    >
      {children}
    </section>
  );
};

Section.defaultProps = {
  space: "top-bottom",
};

export default Section;
