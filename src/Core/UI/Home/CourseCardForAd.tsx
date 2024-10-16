import { forwardRef, useState } from "react";
import clsx from "clsx";
import Anchor from "@/UI/Anchor";
import { ICourse } from "@/Utils/types";
import { Button } from "antd";
import Link from "next/link";

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
const CourseCardForAd = forwardRef<HTMLDivElement, TProps>(
  ({ className, thumbnail, title, path }, ref) => {
    return (
      <div
        className={clsx(
          "overflow-hidden transition-all bg-white rounded-2xl h-full group hover:bg-white hover:shadow-4xl hover:shadow-black/[0.12] border border-1 p-5 border-gray-350 border-dashed border-spacing-10",
          className
        )}
        ref={ref}
      >
        <figure className="relative overflow-hidden">
          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              width={thumbnail?.width || 370}
              loading={thumbnail?.loading || "lazy"}
              className="w-full object-fill transition-transform duration-1000 ease-out group-hover:scale-105 rounded-xl h-[25rem] object-cover"
            />
          )}

          <Anchor className="link-overlay" path={path}>
            {title}
          </Anchor>
        </figure>

        <div className="relative px-7.5 pt-7.5 pb-10">
          <h3 className="leading-normal text-secondary m-0">
            <Anchor path={path}>{title}</Anchor>
          </h3>
          <Link href={path!}>
            <div className="bg-[#f1e9e9] rounded-full w-full text-center py-5 px-3 mt-2 text-third font-bold text-2xl">
              Ücretsiz
            </div>
          </Link>
          <div className="mt-2">
            <div className="flex w-full justify-between">
              <p>Kredi Kartına</p>
              <p>12 Taksit</p>
            </div>
            <div className="bg-gray-350 w-full h-[1px] mb-2"></div>
            <div className="flex w-full justify-between">
              <p>Banka Kredisi</p>
              <p>18 Taksit</p>
            </div>
            <div className="bg-gray-350 w-full h-[1px] mb-2"></div>
            <div className="flex w-full justify-between">
              <p>Vakıf Pay</p>
              <p>3-9 Taksit</p>
            </div>
            <div className="bg-gray-350 w-full h-[1px] mb-2"></div>
            <div className="flex w-full justify-between">
              <p>İş Pay</p>
              <p>3-9 Taksit</p>
            </div>
            <div className="bg-gray-350 w-full h-[1px] mb-2"></div>
          </div>
          <div className="w-full flex justify-center mt-4">
            <Button
              style={{ backgroundColor: "#d72027" }}
              color="default"
              variant="solid"
              className=" py-5 text-white"
            >
              <Link className="py-5 text-xl px-1 uppercase" href={path!}>
                ÜCRETSİZ DERS AL
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

export default CourseCardForAd;
