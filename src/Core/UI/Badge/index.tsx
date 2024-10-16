import clsx from "clsx";

type TProps = {
    children: React.ReactNode;
    className?: string;
    color?: "teracotta" | "scooter" | "primary" | "gradient" | "white";
    size?: "xs" | "sm" | "md" | "lg";
    variant?: "contained" | "outlined";
};

const Badge = ({ children, className, color, size, variant }: TProps) => {
    return (
        <span
            className={clsx(
                "inline-flex justify-center items-center leading-none",
                variant === "contained" && [
                    color === "teracotta" &&
                        "text-teracotta bg-teracotta-light",
                    color === "scooter" &&
                        "text-scooter bg-scooter-light",
                    color === "primary" && "text-white bg-primary",
                    color === "gradient" && "text-white bg-strawGradient",
                ],
                variant === "outlined" && [
                    "border",
                    color === "white" && "text-white border-white",
                ],

                size === "xs" &&
                    "pt-1 px-2 pb-[3px] text-[11px] rounded-sm",
                size === "sm" && "p-2 text-xs rounded-[4px]",
                size === "lg" &&
                    "h-7.5 px-3.8 text-sm font-medium rounded",
                className
            )}
        >
            {children}
        </span>
    );
};

Badge.defaultProps = {
    color: "teracotta",
    size: "lg",
    variant: "contained",
};

export default Badge;
