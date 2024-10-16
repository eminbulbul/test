import clsx from "clsx";

type TProps = {
  children: React.ReactNode;
  className?: string;
  color?: string;
};

const Wrapper = ({ children, className, color }: TProps) => {
  return (
    <div
      className={clsx("wrapper overflow-hidden", className, color)}
      style={{
        backgroundImage: `url("/img/background-pattern-grid-line.png")`,
      }}
    >
      {children}
    </div>
  );
};

Wrapper.defaultProps = {
  color: "bg-spring",
};

export default Wrapper;
