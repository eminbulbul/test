import clsx from "clsx";
type TProps = {
    className?: string;
    onClick: () => void;
    color?: "light" | "dark";
    label?: string;
};

const BurgerButton = ({ className, onClick, color, label }: TProps) => {
    const baseClass = "relative block overflow-hidden w-6 h-0.5";
    const beforeClass =
        "before:absolute before:content-[''] before:top-0 before:left-0 before:flex-100 before:w-full before:h-full before:scale-x-[1px] before:transition-transform before:duration-600 before:ease-in-expo";
    const afterClass =
        "after:absolute after:content-[''] after:top-0 after:left-0 after:flex-100 after:w-full after:h-full after:scale-x-0 after:transition-transform after:duration-600 after:ease-in-expo";
    const hoverBeforeClass =
        "group-hover:before:scale-x-0 group-hover:before:transition-transform group-hover:before:duration-600 group-hover:before:ease-in-expo";
    const hoverAfterClass =
        "group-hover:after:scale-x-[1px] group-hover:after:transition-transform group-hover:after:duration-600 group-hover:after:delay-200 group-hover:after:ease-in-expo";
    const darkColor =
        color === "dark" &&
        "before:bg-dark group-hover:before:bg-primary after:bg-dark group-hover:before:bg-primary";
    const lightColor =
        color === "light" &&
        "before:bg-white group-hover:before:bg-white after:bg-white group-hover:before:bg-white";

    return (
        <button
            aria-label={label}
            type="button"
            onClick={onClick}
            className={clsx("toggle group", className)}
        >
            <i
                className={clsx(
                    "icon-top",
                    baseClass,
                    beforeClass,
                    afterClass,
                    "before:origin-right",
                    "after:origin-left",
                    hoverBeforeClass,
                    hoverAfterClass,
                    darkColor,
                    lightColor
                )}
            />
            <i
                className={clsx(
                    "icon-middle mt-1.5",
                    baseClass,
                    beforeClass,
                    afterClass,
                    "before:origin-left",
                    "after:origin-right",
                    hoverBeforeClass,
                    hoverAfterClass,
                    darkColor,
                    lightColor
                )}
            />
            <i
                className={clsx(
                    "icon-bottom mt-1.5",
                    baseClass,
                    beforeClass,
                    afterClass,
                    "before:origin-right",
                    "after:origin-left",
                    hoverBeforeClass,
                    hoverAfterClass,
                    darkColor,
                    lightColor
                )}
            />
        </button>
    );
};

export default BurgerButton;
