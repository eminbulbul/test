import { useEffect, useState, MouseEvent } from "react";
import clsx from "clsx";
import SocialLink from "./social-link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

interface SocialProps {
  title?: string;
}
const SocialShare: React.FC<SocialProps> = ({ title }) => {
  const [href, setHref] = useState("");
  useEffect(() => {
    setHref(window.location.href);
  }, []);

  const clickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = e.currentTarget.href;
    window.open(
      url,
      "Twitter",
      "toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,width=800,height=600,resizable=1"
    );
  };

  return (
    <div className="inline-flex items-center relative cursor-pointer transition-colors text-body group hover:text-primary">
      <h6 className="text-md mb-0 mr-3.8 text-current">{title}</h6>
      <div
        className={clsx(
          "absolute top-full left-1/2 -translate-x-1/2 translate-y-2.5 w-auto whitespace-nowrap px-1 bg-white rounded shadow-3sm shadow-black/[.06]",
          "drop-shadow-[0_2px_20px_rgba(0,0,0,0.06)] z-10 select-none transition-all duration-300 ease-[cubic-bezier(.71,1.7,.77,1.24)] invisible opacity-0",
          "before:absolute before:content-[''] before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-b-8 before:border-b-white before:border-x-[9px] before:border-x-transparent before:invisible before:opacity-0",
          "after:absolute after:content-[''] after:left-0 after:-top-6 after:w-full after:h-7",
          "group-hover:visible group-hover:opacity-100 group-hover:-translate-x-1/2 group-hover:translate-y-5 group-hover:before:visible group-hover:before:opacity-100"
        )}
      >
        <SocialLink
          label="Facebook"
          href={`https://www.facebook.com/sharer/sharer.php?u=${href}`}
          onClick={clickHandler}
        >
          <FaFacebookF />
        </SocialLink>
        <SocialLink
          label="Twitter"
          href={`https://twitter.com/intent/tweet?url=${href}`}
          onClick={clickHandler}
        >
          <FaXTwitter />
        </SocialLink>
        <SocialLink
          label="Linkedin"
          href={`https://www.linkedin.com/shareArticle?url=${href}`}
          onClick={clickHandler}
        >
          <FaLinkedin />
        </SocialLink>
      </div>
    </div>
  );
};

export default SocialShare;
