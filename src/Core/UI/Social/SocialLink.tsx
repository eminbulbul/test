import clsx from "clsx";

type TProps = {
  children: React.ReactNode;
  className?: string;
  color?: "light" | "white" | "dark";
  variant?: "contained" | "outlined" | "texted";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "square" | "rounded" | "circle";
  hover?: boolean;
  href: string;
  label: string;
  tooltip?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const SocialLink = ({
  children,
  className,
  href,
  label,
  color,
  variant,
  size,
  shape,
  hover,
  tooltip,
  onClick,
}: TProps) => {
  // texted variant
  const textedWhite =
    color === "white" && hover && "text-white/50 hover:text-white";
  const textedLight =
    color === "light" && hover && "text-body/50 hover:text-primary";
  const textedDark =
    color === "dark" && hover && "text-body hover:text-primary";
  const textedXl = size === "xl" && "text-2xl";
  const textedLg = size === "lg" && "text-lg";

  // Toopltip
  const tooltipBeforeClass =
    "before:absolute before:content-[''] before:border-[7px] before:border-transparent before:border-t-primary before:bottom-full before:left-[calc(50%_-_7px) before:transition-all before:duration-300 before:ease-[cubic-bezier(.71,1.7,.77,1.24)] before:pointer-events-none before:z-20 before:mb-[-13px] before:invisible before:opacity-0";
  const tooltipAfterClass =
    "after:absolute after:content-[attr(aria-label)] after:bg-primary after:text-white after:py-2 after:px-2.5 after:leading-none after:whitespace-nowrap after:rounded after:shadow-xs after:shadow-black/30 after:bottom-full after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-[cubic-bezier(.71,1.7,.77,1.24)] after:pointer-events-none after:z-10 after:invisible after:opacity-0";
  const tooltipHoverClass =
    "hover:before:visible hover:before:opacity-100 hover:before:delay-100 hover:before:-translate-y-2 hover:after:visible hover:after:opacity-100 hover:after:delay-100 hover:after:-translate-y-2";

  return (
    <a
      className={clsx(
        "social-link relative leading-none",
        variant === "texted" && [
          textedWhite,
          textedLight,
          textedDark,
          textedXl,
          textedLg,
        ],
        variant !== "texted" && [
          "text-center",
          size === "md" && "w-10 h-10 leading-10",
          color === "light" &&
            "border-gray-550 hover:border-primary hover:bg-primary hover:text-white",
        ],
        variant === "outlined" && "bg-transparent border",
        shape === "rounded" && "rounded",
        shape === "circle" && "rounded-full",
        tooltip && [tooltipBeforeClass, tooltipAfterClass, tooltipHoverClass],
        className
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

SocialLink.displayName = "SocialLink";

export default SocialLink;
