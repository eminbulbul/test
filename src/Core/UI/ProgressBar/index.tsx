import { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export interface ProgressProps {
    /**
     * Current value of progress
     */
    now: number;
    /**
     * Minimum value progress can begin from
     */
    min?: number;
    /**
     * Maximum value progress can reach
     */
    max?: number;
    /**
     * Show label that represents visual percentage. EG. 60%
     */
    isLabel?: boolean;
    /**
     * Optional. Default is `primary`.
     */
    color?: "primary" | "success" | "danger";
    /**
     * Optional. Default is `md`.
     */
    size?: "xxs" | "xs" | "sm" | "md" | "lg";
    /**
     * Optional. Disable Animation. Default is `false`
     */
    disableAnimation?: boolean;
    /**
     * Extra Class Name
     */
    className?: string;
}

const ProgressBar: FC<ProgressProps> = ({
    className,
    now,
    min,
    max,
    isLabel,
    color,
    size,
    disableAnimation,
    ...restProps
}) => {
    const colorClass = [
        color === "primary" && "bg-primary",
        color === "success" && "bg-success",
        color === "danger" && "bg-danger",
    ];
    const sizeClass = [
        size === "xxs" && "h-0.5",
        size === "xs" && "h-1.5",
        size === "sm" && "h-2.5",
        size === "md" && "h-3.8",
        size === "lg" && "h-5",
    ];
    return (
        <div
            className={clsx("progress bg-gray-500 rounded-sm", className)}
            {...restProps}
        >
            <motion.div
                role="progressbar"
                aria-valuenow={now}
                aria-valuemin={min}
                aria-valuemax={max}
                initial={{
                    width: disableAnimation ? `${now}%` : 0,
                }}
                whileInView={{ width: `${now}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                    duration: 1,
                    type: "tween",
                    delay: 0.5,
                }}
                className={clsx(
                    "progress-bar flex items-center justify-center rounded-l-sm",
                    color && colorClass,
                    size && sizeClass
                )}
            >
                <span
                    className={
                        !isLabel ? "sr-only" : "text-white text-[11px]"
                    }
                >
                    {now}%
                </span>
            </motion.div>
        </div>
    );
};

ProgressBar.defaultProps = {
    now: 40,
    min: 0,
    max: 100,
    color: "primary",
    size: "xs",
    disableAnimation: false,
};

ProgressBar.displayName = "ProgressBar";

export default ProgressBar;
