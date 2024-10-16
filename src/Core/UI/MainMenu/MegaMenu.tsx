import { TMegaMenu } from "@/Utils/types";
import clsx from "clsx";
import Anchor from "@/UI/Anchor";
import Badge from "@/UI/Badge";

type TProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  align?: "left" | "right" | "center";
  menu: TMegaMenu[];
};

const Megamenu = ({ className, align, menu, ...rest }: TProps) => {
  return (
    <div
      className={clsx(
        "w-[1170px] flex flex-wrap absolute z-20 top-full mt-5 invisible opacity-0 pt-7.5 pb-[34px] px-3.8 shadow-2md shadow-black/5 bg-white border-b-4 border-b-primary transition-all duration-300",
        align === "left" && "left-0",
        align === "center" && "left-1/2 -translate-x-1/2",
        className
      )}
      {...rest}
    >
      {menu.map(({ id, title, submenu, banner }) => (
        <div
          key={id}
          className={clsx(
            "px-3.8 shrink-0 grow-0",
            submenu && "w-1/4 basis-1/4",
            banner && "w-1/2 basis-1/2"
          )}
        >
          <h2 className="sr-only">{title}</h2>
          {submenu && (
            <ul>
              {submenu?.map((nav) => (
                <li key={nav.id} className="relative">
                  <Anchor
                    path={nav.path}
                    className={clsx(
                      "leading-relaxed block font-medium py-2 hover:text-heading",
                      nav.status === "coming soon" && "pointer-events-none"
                    )}
                  >
                    {nav.label}
                    {nav.status && (
                      <Badge
                        color={nav.status === "hot" ? "gradient" : "primary"}
                        size="xs"
                        className="ml-2.5 font-bold tracking-wide uppercase"
                      >
                        {nav.status}
                      </Badge>
                    )}
                  </Anchor>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Megamenu;
