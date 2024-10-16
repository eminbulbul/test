import clsx from "clsx";

type TProps = {
  className?: string;
};

const BottomShape = ({ className }: TProps) => {
  return (
    <div
      className={clsx(
        "bottom-shape absolute -bottom-px left-0 w-full h-[70px] z-1",
        className
      )}
    >
      <img
        className="fill-putty w-full h-full"
        src="/svgs/bottom-shape-2.svg"
        alt="Bottom Shape"
      />
    </div>
  );
};

export default BottomShape;
