import clsx from "clsx";
import Social, { SocialLink } from "@/UI/Social";
import WidgetTitle from "./WidgetTitle";
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";
import { useEffect } from "react";

type TProps = {
  className?: string;
  mode?: "light" | "dark";
};

const TextWidget = ({ className, mode }: TProps) => {
  return (
    <div className={clsx(className)}>
      <WidgetTitle mode={mode}>Adres</WidgetTitle>
      <div className={clsx("content ", mode === "dark" && "text-gray-400")}>
        <p className="mb-[11px]">
          Kültür Mah. Kartal Sk. C-2 Daire: 1 BESIKTAS/ ISTANBUL
        </p>
        <p className="mb-[11px]">+90 541 167 58 53 (Pazartesi - Cuma) </p>
        <p className="mb-[11px]">
          <a
            href="mailto:info@linkkurs.com"
            className={clsx(
              "hover:text-primary",
              mode === "dark" && "text-gray-400"
            )}
          >
            info@linkkurs.com
          </a>
        </p>
      </div>
      <Social
        color={mode === "dark" ? "white" : "light"}
        className="gap-6.1 mt-6.1"
      >
        <SocialLink href="https://facebook.com" label="Facebook lnik">
          <FaFacebookSquare />
        </SocialLink>
        <SocialLink href="https://twitter.com" label="twitter lnik">
          <FaTwitter />
        </SocialLink>

        <SocialLink href="https://linkedin.com" label="linkedin lnik">
          <FaLinkedin />
        </SocialLink>
      </Social>
    </div>
  );
};

export default TextWidget;
