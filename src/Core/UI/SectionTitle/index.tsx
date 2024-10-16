import { forwardRef } from "react";
import clsx from "clsx";
import Link from "next/link";

type TProps = {
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "right" | "center";
  color?: "A" | "B" | "C";
  titleSize?: "default" | "large";
  subtitleClass?: string;
  titleClass?: string;
  descClass?: string;
};

// eslint-disable-next-line react/display-name
const SectionTitle = forwardRef<HTMLDivElement, TProps>(
  (
    {
      className,
      title = "",
      subtitle,
      description,
      align,
      color,
      titleSize,
      subtitleClass,
      titleClass,
      descClass,
    },
    ref
  ) => {
    return (
      <div
        className={clsx(
          "section-title relative z-20",
          align === "center" && "text-center",
          className
        )}
        ref={ref}
      >
        {subtitle && (
          <span
            className={clsx(
              "font-medium text-base leading-none -tracking-tightest block mb-2.5 uppercase",
              color === "A" && "text-secondary-light",
              color === "B" && "text-secondary",
              subtitleClass
            )}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}

        <h2
          className={clsx(
            "title m-0 child:text-primary child:font-normal",
            color === "A" && "text-secondary",
            color === "C" && "text-white",
            titleSize === "large" &&
              "text-4xl lg:text-5xl leading-heading lg:leading-heading",
            titleClass
          )}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && (
          <Link
            className="font-bold text-lg md:text-2xl bg-[#20ad96] w-fit text-center inline-flex justify-center px-3 rounded-full text-white mt-3"
            href="/purchasecourse/tyt-matematik-temel-seviye-canli-kurs-paketi"
          >
            14 Ekim Pazartesi Ücretsiz Canlı Kursumuza Başlıyoruz. Hemen Kayıt
            Ol!
          </Link>
        )}
        {description && (
          <p
            className={clsx(
              "mb-0 mt-[25px] font-bold text-lg",
              descClass,
              color === "C" && "text-white"
            )}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    );
  }
);

SectionTitle.defaultProps = {
  align: "center" as const,
  color: "A" as const,
};

export default SectionTitle;
