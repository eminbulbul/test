/* eslint-disable react/display-name */
import { forwardRef } from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import Anchor from "@/UI/Anchor";
import { ICourse } from "@/Utils/types";
import Image from "next/image";

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
  > {
  className?: any;
}

const CourseCard = forwardRef<HTMLDivElement, TProps>(({ className }, ref) => {
  const data = {
    thumbnail: {
      src: "/img/course-2.jpg",
      loading: "eager",
    },
    title: "Customer-centric Info-Tech Strategies",
    path: "//canli-kurslarimiz/course-02",
    price: 0,
    currency: "$",
    publisded_at: "2018-01-01T00:00:00.000Z",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };

  const priceConv = data.price === 0 ? "free" : `${data.currency}${data.price}`;
  return (
    <div
      className={clsx(
        "overflow-hidden transition-all bg-gray-100 rounded h-full group hover:bg-white hover:shadow-4xl hover:shadow-black/[0.12]",
        className
      )}
      ref={ref}
    >
      <figure className="relative overflow-hidden">
        {data.thumbnail?.src && (
          <Image
            src={data.thumbnail.src}
            alt={data.title}
            width={370}
            height={229}
            loading={"eager" || "lazy"}
            className="w-full transition-transform duration-1000 ease-out group-hover:scale-110"
          />
        )}

        <Anchor className="link-overlay" path={"#"}>
          {data.title}
        </Anchor>
      </figure>
      <div className="relative px-7.5 pt-7.5 pb-10">
        <span className="capitalize font-extrabold bg-primary text-white leading-none rounded-full flex justify-center items-center absolute right-5 -translate-y-1/2 top-0 w-[60px] h-[60px] text-lg md:w-[70px] md:h-[70px] md:text-2xl">
          {priceConv}
        </span>
        <span className="font-medium block uppercase mb-1 tracking-[2px] text-secondary-light">
          {dayjs("2018-01-01T00:00:00.000Z").format("MMM DD, YYYY")}
        </span>
        <h3 className="leading-normal text-secondary m-0">
          <Anchor path={"#"}>{data.title}</Anchor>
        </h3>
        {data.excerpt && <p className="mt-2.5">{data.excerpt}</p>}
      </div>
    </div>
  );
});

export default CourseCard;
