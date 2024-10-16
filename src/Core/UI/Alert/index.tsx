import clsx from "clsx";

type TProps = {
    className?: string;
    children: React.ReactNode;
    color?: "light" | "warning" | "secondary";
};

const Alert = ({ className, children, color }: TProps) => {
    return (
        <div
            className={clsx(
                "alert py-2.5 pr-3 pl-3 rounded nextIcon:mr-2",
                color === "light" && "bg-gray-200 nextIcon:text-azure",
                color === "warning" && "bg-warning-100 text-heading",
                color === "secondary" && "bg-secondary text-white",
                className
            )}
        >
            {children}
        </div>
    );
};

Alert.defaultProps = {
    color: "light",
};

export default Alert;
