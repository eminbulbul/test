import { useState } from "react";
import { motion } from "framer-motion";
import { Logo, OffcanvasBody, OffcanvasHeader, Offcanvas } from "@/Core/index";
import NavLink from "./NavLink";
import Submenu from "./Submenu";
import Megamenu from "./Megamenu";
import ExpandButton from "./ExpandButton";

type TProps = {
  menu: any;
  onClose: () => void;
  isOpen: boolean;
};

const MobileMenu = ({ menu, onClose, isOpen }: TProps) => {
  if (!Array.isArray(menu)) {
    menu = [];
  }
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <Offcanvas isOpen={isOpen} onClose={onClose}>
      <OffcanvasHeader onClose={onClose}>
        <Logo variant="dark" />
      </OffcanvasHeader>
      <OffcanvasBody className="no-scroll">
        <ul>
          {menu.map(({ id, label, path, submenu, megamenu }: any) => {
            const isExpand = id === expanded;
            return (
              <li
                key={id}
                className="relative group border-b border-b-white/[.15] last:border-b-0"
              >
                <NavLink path={path}>{label}</NavLink>
                {(submenu || megamenu) && (
                  <ExpandButton
                    onClick={() => setExpanded(isExpand ? false : id)}
                  />
                )}
                {submenu && (
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{
                      height: isExpand ? "100%" : "0",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.645, 0.045, 0.355, 1],
                    }}
                    aria-expanded={isExpand}
                  >
                    <Submenu menu={submenu} isExpand={isExpand} />
                  </motion.div>
                )}
                {megamenu && (
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{
                      height: isExpand ? "100%" : "0",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.645, 0.045, 0.355, 1],
                    }}
                    aria-expanded={isExpand}
                  >
                    <Megamenu menu={megamenu} isExpand={isExpand} />
                  </motion.div>
                )}
              </li>
            );
          })}
        </ul>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default MobileMenu;
