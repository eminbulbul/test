import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface Props {
  datas: any;
}

const PackageDescription: React.FC<Props> = ({ datas }) => {
  return (
    <div className="sticky top-24">
      <div className="bg-white rounded-md shadow-md  shadow-black/[0.3]">
        <div className="relative">
          <img
            className="px-5 pt-5 rounded-lg h-60 w-full object-cover"
            src={datas?.image_url}
            alt={datas?.fullname}
          />
          <div
            className={clsx(
              "w-15 h-5  absolute ml-5 -bottom-2 rounded-r-full",
              datas?.section === 0
                ? "bg-cardPrimaryColor"
                : datas?.section === 1
                ? "bg-cardSecondaryColor"
                : datas?.section === 2
                ? "bg-cardThirdColor"
                : ""
            )}
          ></div>
        </div>
        {datas?.price != 0 ? (
          <div className="flex h-16 px-5 pt-5">
            <p className="text-cardButtonSecondary text-[35px]">
              <span className="font-semibold">
                {datas?.price?.toString().slice(0, 2) + `,`}
              </span>
              <span className="font-light">
                {datas?.price?.toString().slice(2)}
              </span>{" "}
              ₺
            </p>
            <p className="text-cardButtonPrimary text-[25px] line-through mt-[10px] ml-5">
              <span className="font-semibold">
                {datas?.without_discount_price?.toString().slice(0, 2) + `,`}
              </span>
              <span className="font-light">
                {datas?.without_discount_price?.toString().slice(2)}
              </span>
              ₺
            </p>
          </div>
        ) : (
          <p className="text-cardButtonSecondary text-[35px] mt-6 p-5">
            Ücretsiz Paket
          </p>
        )}
        {datas?.price != 0 && (
          <p className="text-cardButtonSecondary text-[15px] p-5">
            Ayda {datas?.installment_payment_price} ₺ den başlayan fiyatlar
          </p>
        )}
        <div className="w-full pb-8 px-6">
          <Link className="w-full" href={`/purchasecourse/${datas?.slug}`}>
            <button className="rounded-3xl bg-gradient-to-r from-cardButtonThird to-cardButtonPrimary hover:bg-cardButtonPrimary hover:from-cardButtonPrimary hover:to-cardButtonPrimary text-xl text-white py-3 w-full">
              Hemen Satın Al
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageDescription;
