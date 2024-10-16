import { useState } from "react";
import clsx from "clsx";
import { TMenu } from "@/Utils/types";
import NavLink from "./NavLink";
import Submenu from "./SubMenu";
import Megamenu from "./MegaMenu";
import { FaChevronDown } from "react-icons/fa";

type TProps = {
  className?: string;
  hoverStyle?: "A" | "B";
  color?: "light" | "dark";
  align?: "left" | "right" | "center";
  menu: TMenu[];
};

const MainMenu = ({ className, hoverStyle, menu, color, align }: TProps) => {
  const [focusId, setFocusId] = useState<string | number>("");
  const [visibleSubmenuId, setVisibleSubmenuId] = useState<string | number>("");

  const handleMouseEnter = (id: string | number) => {
    setVisibleSubmenuId(id);
  };

  const handleMouseLeave = () => {
    setVisibleSubmenuId("");
  };

  const handleOnChange = () => {
    setVisibleSubmenuId("");
  };
  return (
    <nav
      aria-label="Main Menu"
      className={clsx(
        "relative",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto",
        className
      )}
    >
      <ul aria-label="Main Menu" role="menubar">
        {menu.map(({ id, label, path, submenu, megamenu }) => {
          const hasSubmenu = !!submenu || !!megamenu;
          return (
            <li
              key={id}
              className={clsx(
                "inline-block px-2.5 2xl:px-[10px] py-[29px] group",
                submenu && "relative"
              )}
              role="none"
              onMouseEnter={() => handleMouseEnter(id!)}
            >
              <NavLink
                id={`nav-${id}`}
                path={path}
                hoverStyle={hoverStyle}
                color={color}
                aria-haspopup={hasSubmenu ? true : undefined}
                aria-expanded={hasSubmenu ? focusId === `nav-${id}` : undefined}
              >
                {label}
                {hasSubmenu && <FaChevronDown className="ml-2 text-xs" />}
              </NavLink>
              {submenu && (
                <Submenu
                  menu={submenu}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => e.preventDefault}
                  onChange={handleOnChange}
                  className={clsx(
                    visibleSubmenuId &&
                      "group-hover:visible group-hover:opacity-100 group-hover:mt-0 group-hover:pointer-events-auto  group-focus-within:mt-0 group-focus-within:pointer-events-auto"
                  )}
                  role="menu"
                />
              )}
              {megamenu && (
                <Megamenu
                  menu={megamenu}
                  align={align}
                  className="group-hover:visible group-hover:opacity-100 group-hover:mt-0 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:mt-0 group-focus-within:pointer-events-auto"
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

MainMenu.defaultProps = {
  color: "dark",
};

export default MainMenu;
