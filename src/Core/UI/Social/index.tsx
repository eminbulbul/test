import { Children, FunctionComponent, ReactChild, ReactText } from "react";
import cn from "clsx";
import SocialLink from "./SocialLink";

type TProps = {
  children: React.ReactNode;
  className?: string;
  flyout?: boolean;
  color?: "light" | "white" | "dark";
  variant?: "contained" | "outlined" | "texted";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "square" | "rounded" | "circle";
  hover?: boolean;
  tooltip?: boolean;
};

type IChild = Exclude<ReactChild, ReactText>;

const Social = ({
  children,
  className,
  color,
  variant,
  size,
  shape,
  hover,
  tooltip,
  flyout,
}: TProps) => {
  const RenderChild = Children.map(children, (el) => {
    const child = el as IChild;
    if (child !== null) {
      const childType = child.type as FunctionComponent;
      const name = childType.displayName || childType.name;
      if (name === "SocialLink") {
        return (
          <child.type
            {...child.props}
            color={color}
            variant={variant}
            size={size}
            shape={shape}
            hover={hover}
            tooltip={tooltip}
          />
        );
      }
    }
    return null;
  });
  const flyoutClass =
    "absolute bottom-full right-0 -translate-y-2.5 w-auto whitespace-nowrap px-1 bg-white rounded shadow-3sm shadow-black/[.06] drop-shadow-[0_2px_20px_rgba(0,0,0,0.06)] z-10 select-none transition-all duration-300 ease-[cubic-bezier(.71,1.7,.77,1.24)] invisible opacity-0";
  const flyoutBeforeClass =
    "before:absolute before:content-[''] before:top-full before:right-5 before:border-t-8 before:border-t-white before:border-x-[9px] before:border-x-transparent before:invisible before:opacity-0";
  const flyoutAfterClass =
    "after:absolute after:content-[''] after:left-0 after:-bottom-6 after:w-full after:h-7";
  const flyoutHoverClass =
    "group-hover:visible group-hover:opacity-100 group-hover:-translate-y-5 group-hover:before:visible group-hover:before:opacity-100";
  return (
    <div
      className={cn(
        "social flex",
        flyout && [
          flyoutClass,
          flyoutBeforeClass,
          flyoutAfterClass,
          flyoutHoverClass,
        ],
        className
      )}
    >
      {RenderChild}
    </div>
  );
};

Social.defaultProps = {
  size: "md",
  shape: "square",
  variant: "texted",
  hover: true,
};

export { SocialLink };
export default Social;
