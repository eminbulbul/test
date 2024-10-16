import { Button } from "antd/lib";
import Link from "next/link";
import React from "react";

const PurchaseResult = () => {
  return (
    <div className="h-full md:h-[36rem] flex w-full justify-center items-center">
      <div className="md:p-5 p-3 bg-slate-200 flex flex-col justify-center md:w-1/2 md:h-1/2 w-full h-full rounded-lg items-center text-center">
        <h4 className="m-10">
          Paket Üyelik İşleminizi{" "}
          <span className="text-cardButtonSecondary"> Başarı </span> İle
          Gerçekleştirdiniz. Giriş yapabilir yada anasayfaya dönebilirsiniz.
        </h4>
        <div className="md:flex-row flex-col flex w-full justify-center">
          <Link className="m-5" href="/">
            <Button
              style={{ backgroundColor: "#638661" }}
              variant="solid"
              className="py-5 text-white"
            >
              Ana Sayfaya Dön
            </Button>
          </Link>

          <Link className="m-5" href="https://app.linkkurs.com/">
            <Button
              style={{ backgroundColor: "#d72027" }}
              color="default"
              variant="solid"
              className="py-5 text-white"
            >
              Öğrenci Girişi
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PurchaseResult;
