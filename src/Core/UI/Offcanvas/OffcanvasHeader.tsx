import clsx from "clsx";
import { Button } from "antd";
import { ImCross } from "react-icons/im";

type TProps = {
  className?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const OffcanvasHeader = ({ children, onClose, className }: TProps) => (
  <div
    className={clsx(
      "flex items-center justify-between h-20 pl-7.5 pr-3.8 bg-white",
      className
    )}
  >
    {children}

    <button onClick={onClose}>
      <ImCross className="hover:text-primary" />
    </button>
    {/* <Button onClick={} /> */}
  </div>
);

export default OffcanvasHeader;
