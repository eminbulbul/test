import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
} from "react";
import clsx from "clsx";
import useClickOutside from "@/Hooks/use-click-outside";
import { FaCheck } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";

interface IOption {
  value: string;
  label: string;
  selected?: boolean;
}
type TProps = {
  className?: string;
  options: IOption[];
  setValue?: any;
  prefix?: string;
  defaultValue?: string;
};
const NiceSelect = ({
  className,
  options,
  setValue,
  prefix,
  defaultValue,
}: TProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<IOption>();

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const containerRef = useClickOutside<HTMLDivElement>(onClose);

  const currentHandler = (item: IOption) => {
    setSelected(item);
    setValue(item.value);
    onClose();
  };

  useEffect(() => {
    let selectedItem: IOption | undefined;

    if (defaultValue) {
      selectedItem = options.find((item) => item.value === defaultValue);
    } else {
      [selectedItem] = options;
    }
    if (selectedItem) setSelected(selectedItem);
  }, [defaultValue]);

  return (
    <div
      className={clsx(
        "nice-select relative transition-all border rounded-md",
        !open && "border-gray-200 bg-gray-200",
        "hover:border-primary hover:bg-transparent",
        className,
        open && "border-primary bg-transparent"
      )}
      ref={containerRef}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center w-full min-h-[52px] py-[3px] pr-10 pl-5 "
      >
        <span className="label flex items-center text-body">
          <FaAlignLeft className=" mr-3.8" />
          {prefix}
          <span className="ml-[3px] font-medium text-heading">
            {selected?.label}
          </span>
        </span>
        <span className="arrow text-lg absolute top-0 right-0 flex items-center justify-center w-10 h-full bg-transparent">
          <FaAngleDown />
        </span>
      </button>
      <ul
        className={clsx(
          "w-full absolute top-full left-0 z-50 font-medium min-w-full py-[5px] rounded-md bg-light-50 shadow-4md shadow-black/20",
          !open && "hidden",
          open && "block"
        )}
        tabIndex={-1}
        role="menubar"
        onClick={(e) => e.stopPropagation()}
      >
        {options?.map((item) => (
          <li
            key={item.value}
            className={clsx(
              "text-heading flex items-center group py-[5px] px-[30px] cursor-pointer transition-colors hover:bg-primary hover:text-white"
            )}
            role="menuitem"
            onClick={() => currentHandler(item)}
            onKeyPress={(e) => e}
          >
            {item.value === selected?.value && (
              <FaCheck className="transition-colors text-primary mr-2.5 group-hover:text-white" />
            )}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

NiceSelect.defaultProps = {
  prefix: "Sort By: ",
};

export default NiceSelect;
