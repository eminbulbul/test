import { forwardRef } from "react";
import Anchor from "@/UI/Anchor";
import { FaArrowRight } from "react-icons/fa";

export type IconBoxProps = {
  icon: string;
  title: string;
  description: string;
  path: string;
  pathText: string;
};

const IconBox = forwardRef<HTMLDivElement, IconBoxProps>(
  ({ icon, title, description, path, pathText }, ref) => {
    return (
      <div
        ref={ref}
        className="icon-box text-center relative transition pt-10 pb-7.5 px-[19px] rounded group before:absolute before:content-['']  before:inset-0 before:shadow-lg before:shadow-dark/10 before:opacity-0 before:transition hover:bg-white hover:before:opacity-100"
      >
        <img
          src={`svgs/${icon}.svg`}
          alt="courses icons"
          className="w-[60px] h-[60px] mx-auto"
        />
        <div className="content h-96 mt-7 relative z-10 flex flex-col justify-between items-center">
          <h3 className="text-secondary m-0">{title}</h3>
          <p className="leading-normal px-2.5 mt-3">{description}</p>
          <span className="text-md font-bold leading-none inline-flex items-center mt-5 text-secondary-light p-1.3 group-hover:text-primary">
            {pathText}
            <FaArrowRight className="inline-flex ml-3.5 text-[16px]" />
          </span>
        </div>
      </div>
    );
  }
);

IconBox.displayName = "IconBox";

export default IconBox;
