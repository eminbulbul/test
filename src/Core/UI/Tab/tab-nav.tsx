import clsx from "clsx";
import { motion } from "framer-motion";
import { TabProps } from "./types";

const TabNav = ({
  id,
  children,
  onClick,
  isActive,
  variant,
  className,
  section,
}: TabProps) => {
  return (
    <button
      className={clsx(
        "tab-nav",
        variant === "underline" &&
          "relative text-base font-semibold sm:text-xl sm:font-semibold leading-snug py-[9px] px-[14px] lg:py-[9px] lg:px-6.1",
        !isActive && "text-[#8A8C8C]",
        isActive && section === 0
          ? "text-cardPrimaryColor"
          : section === 1
          ? "text-cardSecondaryColor"
          : section === 2
          ? "text-cardThirdColor"
          : "",
        className
      )}
      type="button"
      role="tab"
      id={id && `${id}-tab`}
      aria-controls={isActive ? id && `${id}-panel` : undefined}
      aria-selected={isActive}
      onClick={onClick}
    >
      {children}
      {isActive && variant === "underline" ? (
        <motion.span
          className={clsx(
            "absolute block w-full h-[5px] -bottom-1 left-0  z-1",
            section === 0
              ? "bg-cardPrimaryColor"
              : section === 1
              ? "bg-cardSecondaryColor"
              : section === 2
              ? "bg-cardThirdColor"
              : ""
          )}
          layoutId="underline"
        />
      ) : null}
    </button>
  );
};

TabNav.displayName = "TabNav";

export default TabNav;
