import clsx from "clsx";
import Anchor from "@/UI/Anchor";
import { TSubMenu } from "@/Utils/types";
import { useRouter } from "next/router";

type TProps = React.HTMLAttributes<HTMLElement> & {
  className?: string;
  menu: TSubMenu[];
};

const Submenu = ({ menu, className, onFocus, ...rest }: TProps) => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <ul
      className={clsx(
        "absolute z-20 top-full left-0 w-60 mt-5 py-4 transition-all duration-400 bg-white border-b-4 border-b-primary shadow-2md shadow-black/5 visible opacity-0 pointer-events-none",
        className
      )}
      {...rest}
    >
      {menu.map(({ id, label, path }) => {
        return (
          <li key={id} role="none" className="relative">
            <Anchor
              path={path}
              role="menuitem"
              className={clsx(
                "flex items-center px-7.5 py-2",
                currentPath === path ? "text-primary font-bold" : "text-secondary"
              )}
            >
              {label}
            </Anchor>
          </li>
        );
      })}
    </ul>
  );
};

export default Submenu;
