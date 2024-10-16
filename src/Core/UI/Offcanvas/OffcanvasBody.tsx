import clsx from "clsx";

type TProps = {
    children: React.ReactNode;
    className?: string;
};

const OffcanvasBody = ({ children, className }: TProps) => (
    <div
        className={clsx(
            "overflow-y-auto h-[calc(100%_-_80px)] pt-5 pb-[100px] px-7.5",
            className
        )}
    >
        {children}
    </div>
);

export default OffcanvasBody;
