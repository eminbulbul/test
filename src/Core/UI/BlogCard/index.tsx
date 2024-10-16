import React from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import Anchor from "@/UI/Anchor";
import Image from "next/image";

interface BlogData {
  image: {
    src: string;
  };
  title: string;
  date?: string;
  path?: string;
}

const BlogCard: React.FC<{ blogData: BlogData }> = ({ blogData }) => {
  return (
    <div
      className={clsx(
        "overflow-hidden transition-all bg-gray-100 rounded h-full group hover:bg-white hover:shadow-4xl hover:shadow-black/[0.12]"
      )}
    >
      <figure className="relative overflow-hidden">
        <Image
          src={blogData?.image?.src}
          alt={blogData?.title}
          width={370}
          height={229}
          loading={"eager" || "lazy"}
          className="w-full transition-transform duration-1000 ease-out group-hover:scale-110"
        />

        <Anchor className="link-overlay" path={blogData?.path}></Anchor>
      </figure>
      <div className="relative px-7.5 pt-7.5 pb-10">
        <span className="font-medium block uppercase mb-1 tracking-[2px] text-secondary-light">
          {dayjs(blogData.date).format("MMM DD, YYYY")}
        </span>
        <h3 className="leading-normal text-secondary m-0">
          <Anchor path={blogData?.path}>{blogData.title}</Anchor>
        </h3>
        <p className="mt-2.5"></p>
      </div>
    </div>
  );
};

export default BlogCard;
