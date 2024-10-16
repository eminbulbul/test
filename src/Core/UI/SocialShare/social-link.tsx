import { MouseEvent } from "react";
import clsx from "clsx";

type TProps = {
    children: React.ReactNode;
    href: string;
    label: string;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

const SocialLink = ({ children, href, label, onClick }: TProps) => {
    return (
        <a
            className={clsx(
                "relative inline-block text-base py-2.5 px-3.8 text-gray-400",
                "before:absolute before:content-[''] before:border-[7px] before:border-transparent before:border-t-primary before:bottom-full before:left-[calc(50%_-_7px) before:transition-all before:duration-300 before:ease-[cubic-bezier(.71,1.7,.77,1.24)] before:pointer-events-none before:z-20 before:mb-[-13px] before:invisible before:opacity-0",
                "after:absolute after:content-[attr(aria-label)] after:bg-primary after:text-white after:py-2 after:px-2.5 after:leading-none after:whitespace-nowrap after:rounded after:shadow-xs after:shadow-black/30 after:bottom-full after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-[cubic-bezier(.71,1.7,.77,1.24)] after:pointer-events-none after:z-10 after:invisible after:opacity-0",
                "hover:before:visible hover:before:opacity-100 hover:before:delay-100 hover:before:-translate-y-2 hover:after:visible hover:after:opacity-100 hover:after:delay-100 hover:after:-translate-y-2"
            )}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            onClick={onClick}
        >
            {children}
        </a>
    );
};

SocialLink.displayName = "SocialLink";

export default SocialLink;
