import { forwardRef, useEffect, useState } from "react";
import clsx from "clsx";
import Anchor from "@/UI/Anchor";
import { ICourse } from "@/Utils/types";
import { Rate, Avatar } from "antd";
import dayjs from "dayjs";

interface TProps
  extends Pick<
    ICourse,
    | "thumbnail"
    | "title"
    | "path"
    | "currency"
    | "price"
    | "published_at"
    | "excerpt"
    | "description"
  > {
  teacher?: any;
  className?: string;
  total_lectures?: any;
  total_students?: any;
  cardType?: any;
}

// eslint-disable-next-line react/display-name
const CourseCard = forwardRef<HTMLDivElement, TProps>(
  (
    {
      className,
      thumbnail,
      title,
      path,
      description,
      currency,
      published_at,
      excerpt,
      teacher,
      price,
      cardType,
    },
    ref
  ) => {
    //!antd rate den alındı.
    const desc = ["çok kötü", "kötü", "orta", "iyi", "çok iyi"];
    const [value, setValue] = useState(5);
    //!antd rate den alındı.

    return (
      <div
        className={clsx(
          "overflow-hidden transition-all bg-gray-100 rounded h-full group hover:bg-white hover:shadow-4xl hover:shadow-black/[0.12]",
          className
        )}
        ref={ref}
      >
        <figure className="relative overflow-hidden">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={thumbnail?.alt || title}
              width={thumbnail?.width || 370}
              height={thumbnail?.height || 229}
              loading={thumbnail || "lazy"}
              className="w-full transition-transform duration-1000 ease-out group-hover:scale-110"
            />
          ) : (
            <img
              src="https://picsum.photos/370/229"
              alt={thumbnail?.alt || title}
              width={thumbnail?.width || 370}
              height={thumbnail?.height || 229}
              loading={thumbnail || "lazy"}
              className="w-full transition-transform duration-1000 ease-out group-hover:scale-110"
            />
          )}

          <Anchor className="link-overlay" path={path}>
            {title}
          </Anchor>
        </figure>
        {cardType == "mostPreferred" ? (
          <div className="relative px-7.5 pt-7.5 pb-10">
            <h3 className="leading-normal text-secondary m-0">
              <Anchor path={path}>{title}</Anchor>
            </h3>
            {excerpt && <p className="mt-2.5">{excerpt}</p>}
          </div>
        ) : cardType == "noDesc" ? (
          <div className=""></div>
        ) : (
          <div className="relative px-7.5 pt-7.5 pb-10">
            <h3 className="leading-normal text-secondary m-0">
              <Anchor path={path}>{title}</Anchor>
            </h3>
            <p>{description}</p>
          </div>
        )}
      </div>
    );
  }
);

export default CourseCard;
