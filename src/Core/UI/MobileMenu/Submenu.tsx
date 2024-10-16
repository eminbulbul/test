import clsx from "clsx";
import { Anchor } from "@/Core/index";

type TProps = {
  className?: string;
  menu?: any;
  isExpand: boolean;
};

const Submenu = ({ menu, isExpand, className }: TProps) => {
  return (
    <ul
      className={clsx(
        "py-[14px] border-t border-t-white/[.15]",
        className
      )}
    >
      {menu?.map(({ id, label, path }: any) => (
        <li key={id} className="relative">
          <Anchor
            path={path}
            className={clsx(
              "inline-block text-base font-medium leading-normal py-2.5 text-white/[0.7] hover:text-white",
              className
            )}
            tabIndex={isExpand ? 0 : -1}
          >
            {label}
          </Anchor>
        </li>
      ))}
    </ul>
  );
};

export default Submenu;
