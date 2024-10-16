import { forwardRef, useEffect, useState } from "react";
import clsx from "clsx";
import { ICourse } from "@/Utils/types";
import Link from "next/link";
interface TProps
  extends Pick<
    ICourse,
    | "thumbnail"
    | "title"
    | "path"
    | "currency"
    | "price"
    | "pathBuy"
    | "published_at"
    | "excerpt"
    | "description"
    | "withoutDiscountPrice"
    | "installmentPaymentPrice"
    | "section"
  > {
  teacher?: any;
  className?: string;
  total_lectures?: any;
  total_students?: any;
  cardType?: any;
}
// eslint-disable-next-line react/display-name
const FetchCourseCard = forwardRef<HTMLDivElement, TProps>(
  (
    {
      className,
      thumbnail,
      title,
      path,
      description,
      price,
      pathBuy,
      withoutDiscountPrice,
      installmentPaymentPrice,
      section,
    },
    ref
  ) => {
    return (
      <div
        className={clsx(
          "overflow-hidden transition-all bg-white rounded h-full group hover:shadow-lg hover:shadow-black/[0.2] font-body px-6 pt-6 pb-4",
          className
        )}
        ref={ref}
      >
        <figure className="relative transition-transform duration-1000 ease-out group-hover:scale-105">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              loading={thumbnail?.loading || "lazy"}
              className="md:w-[335px] md:h-[230px] object-cover	rounded-lg w-full"
            />
          ) : (
            <img
              className="md:w-[335px] md:h-[230px] object-cover	rounded-lg w-full"
              src="/img/nocontentimage.png"
              alt="no_content_image"
            />
          )}
          <img
            className="absolute top-5 right-5"
            src="/img/canlikurslogo.png"
            alt="canli_kurs_logo"
          />
          <div
            className={clsx(
              "w-15 h-5 absolute -bottom-2 rounded-r-full",
              section === 0
                ? "bg-cardPrimaryColor"
                : section === 1
                ? "bg-cardSecondaryColor"
                : section === 2
                ? "bg-cardThirdColor"
                : ""
            )}
          ></div>
        </figure>

        <div className="mt-5 ">
          <h3
            className={clsx(
              "mt-7 font-semibold leading-7 mb-4",
              section === 0
                ? "text-cardPrimaryColor"
                : section === 1
                ? "text-cardSecondaryColor"
                : section === 2
                ? "text-cardThirdColor"
                : ""
            )}
          >
            {title}
          </h3>
          {description != null ? (
            <p
              className=" text-[1rem] leading-6 text-[#393939] card-desc ml-4 mb-7"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <div className="h-[270px] w-[272px]"></div>
          )}

          <div>
            <img
              className="mb-4"
              src="/img/canliderslogo.png"
              alt="canliders_logo"
            />
          </div>
          {price != 0 ? (
            <div className="flex h-14">
              <p className="text-cardButtonSecondary text-[25px] xl:text-[35px]">
                <span className="font-bold">
                  {price?.toString().slice(0, 2) + `,`}
                </span>
                <span className="font-light">{price?.toString().slice(2)}</span>{" "}
                ₺
              </p>
              <p className="text-cardButtonPrimary text-[20px] xl:text-[25px] line-through mt-[10px] ml-5">
                <span className="font-bold">
                  {withoutDiscountPrice?.toString().slice(0, 2) + `,`}
                </span>
                <span className="font-light">
                  {withoutDiscountPrice?.toString().slice(2)}
                </span>{" "}
                ₺
              </p>
            </div>
          ) : (
            <p className="text-cardButtonSecondary text-[35px] h-full flex items-center mt-9">
              Ücretsiz Paket
            </p>
          )}
          {price != 0 && (
            <p className="text-cardButtonSecondary text-[15px]">
              Ayda {installmentPaymentPrice}₺ den başlayan fiyatlar
            </p>
          )}
          <div className="flex justify-between w-full mt-7">
            <Link className="w-1/2 mr-1" href={path!}>
              <button className="rounded-3xl outline outline-1 outline-cardButtonSecondary text-cardButtonSecondary hover:bg-cardButtonSecondary hover:text-white  py-2 w-full">
                Detaylı Gör
              </button>
            </Link>
            <Link className="w-1/2 ml-1" href={pathBuy!}>
              <button className="rounded-3xl bg-gradient-to-r from-cardButtonThird to-cardButtonPrimary hover:bg-cardButtonPrimary hover:from-cardButtonPrimary hover:to-cardButtonPrimary text-white  py-2 w-full">
                Hemen Satın Al
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

export default FetchCourseCard;
