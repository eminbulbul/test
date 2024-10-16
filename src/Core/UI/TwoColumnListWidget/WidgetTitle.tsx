import clsx from "clsx";

type TProps = {
    children: React.ReactNode;
    mode?: "light" | "dark";
};

const WidgetTitle = ({ children, mode }: TProps) => {
    return (
        <h3
            className={clsx(
                "text-lg mb-[17px]",
                mode === "dark" && "text-white"
            )}
        >
            {children}
        </h3>
    );
};

export default WidgetTitle;
