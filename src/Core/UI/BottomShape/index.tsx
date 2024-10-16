import clsx from "clsx";

type TProps = {
  className?: any;
  color?: any;
};

const BottomShape = ({ className }: TProps) => {
  return (
    <div
      className={clsx(
        "bottom-shape absolute -bottom-px left-0 w-full h-[70px] z-1 rotate-180",
        className
      )}
    >
      <img
        className=" w-full h-full"
        src="svgs/bottom-shape.svg"
        alt="Bottom Shape"
      />
    </div>
  );
};

BottomShape.defaultProps = {
  color: "fill-white",
};

export default BottomShape;
