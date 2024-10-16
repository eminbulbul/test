import React, { useState } from "react";
import CouponData from "@/Core/couponcode.json";
import { Button, message } from "antd";

const PackageInfo = ({
  title,
  image,
  price,
  description,
  shortDesc,
  setCouponValid,
  setCurrent,
  current,
}: any) => {
  const [couponCode, setCouponCode] = useState("");
  const next = () => {
    setCurrent(current + 1);
  };
  const handleApplyCoupon = () => {
    const isValidCoupon = CouponData.codes.some(
      (coupon) => coupon.code === couponCode
    );

    if (isValidCoupon) {
      setCouponValid(true);
      setCurrent(current + 1);
      message.success("Kupon Kodu Geçerli");
    } else {
      setCouponValid(false);
      message.error("Geçersiz Kupon Kodu");
    }
  };
  return (
    <div className="flex md:flex-row flex-col px-[3.2rem]">
      <div className="bg-slate-100 rounded-lg w-full md:w-2/3 md:mr-5">
        <div className="p-5">
          <h4>Siparişim</h4>
          <div className="flex md:flex-row flex-col md:justify-center border-black border-b-2 p-2">
            <img
              className="object-cover w-full"
              src={image}
              alt="package_image"
            />
          </div>
          <div className="flex md:flex-row flex-col md:justify-between md:p-2">
            <p>Açıklama</p>
            <p className="md:ml-5 font-semibold">{shortDesc}</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 rounded-lg md:w-1/3 md:ml-5">
        <div className="p-10">
          <h5>Toplam Tutar</h5>
          <div className="flex border-black border-b-2 justify-between p-2">
            <p>Toplam</p>
            {price !== 0 ? (
              <p>{price + parseInt(price) * 0.2}</p>
            ) : (
              <p className="text-red-600 font-semibold">Ücretsiz</p>
            )}
          </div>
        </div>
        {price !== 0 && (
          <span className="w-full inline-flex justify-center text-center">
            veya
          </span>
        )}
        {price !== 0 && (
          <div className="p-10">
            <input
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              type="text"
              placeholder="Kupon Kodunuzu Giriniz"
              className="rounded-md p-3 w-full"
            />
            <Button onClick={handleApplyCoupon} className="w-full h-14 mt-5">
              KUPONU UYGULA
            </Button>
          </div>
        )}
        {current == 0 && (
          <div className="px-10 pb-3">
            <Button
              style={{ backgroundColor: "#d72027" }}
              className="h-14  w-full uppercase"
              type="primary"
              onClick={() => next()}
            >
              ÜCRETSİZ DERS AL
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageInfo;
