import clsx from "clsx";
import { ContainerProps } from "./types";

const TabList = ({ children, variant, className }: ContainerProps) => {
    return (
        <div
            className={clsx(
                "tab-list flex flex-wrap",
                variant === "underline" &&
                    "border-b-2 border-b-gray-500 pb-0.5",
                className
            )}
            role="tablist"
        >
            {children}
            <div className="h-[2px] bg-[#8A8C8C] w-full mb-2"></div>

        </div>
    );
};

TabList.displayName = "TabList";

export default TabList;
