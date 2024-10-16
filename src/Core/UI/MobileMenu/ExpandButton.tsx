import { FaChevronDown } from "react-icons/fa";

const ExpandButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="absolute z-10 top-[11px] right-0 flex justify-center items-center w-10 h-10 text-white rounded-full transition-colors hover:bg-white/20"
    >
      <FaChevronDown className="text-xs" />
    </button>
  );
};

export default ExpandButton;
