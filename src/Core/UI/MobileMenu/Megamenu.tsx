import clsx from "clsx";
import Anchor from "@/UI/Anchor";
import Badge from "@/UI/Badge";
import { TMegaMenu } from "@/Utils/types";

type TProps = {
    className?: string;
    menu: TMegaMenu[];
    isExpand: boolean;
};

const Megamenu = ({ menu, isExpand, className }: TProps) => {
    return (
        <div
            className={clsx(
                "py-[14px] border-t border-t-white/[.15]",
                className
            )}
        >
            {menu.map(({ id, title, submenu, banner }) => (
                <div key={id}>
                    <h2 className="sr-only">{title}</h2>
                    {submenu && (
                        <ul>
                            {submenu?.map((nav) => (
                                <li key={nav.id} className="relative">
                                    <Anchor
                                        path={nav.path}
                                        className={clsx(
                                            "inline-block text-base font-medium leading-normal py-2.5 text-white/[0.7] hover:text-white",
                                            nav.status === "coming soon" &&
                                                "pointer-events-none",
                                            className
                                        )}
                                        tabIndex={isExpand ? 0 : -1}
                                    >
                                        {nav.label}
                                        {nav.status && (
                                            <Badge
                                                color={
                                                    nav.status === "hot"
                                                        ? "gradient"
                                                        : "primary"
                                                }
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
                    {banner && (
                        <Anchor path={banner.path} tabIndex={isExpand ? 0 : -1}>
                            {banner.image?.src && (
                                <img
                                    src={banner.image.src}
                                    alt={banner.image?.alt || "Banner"}
                                />
                            )}
                        </Anchor>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Megamenu;
