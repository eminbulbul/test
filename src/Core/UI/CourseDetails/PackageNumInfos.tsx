import clsx from "clsx";
import React from "react";

interface Props {
  section?: any;
}

const PackageNumInfos: React.FC<Props> = ({ section }) => {
  return (
    <div className="flex pl-4 pr-5 mt-5">
      <div className="flex items-center">
        <img className="m-0" src="/svgs/packcount.svg" alt="pack_count" />
        <div className="ml-3">
          <p
            className={clsx(
              "font-semibold m-0 leading-4",
              section === 0
                ? "text-cardPrimaryColor"
                : section === 1
                ? "text-cardSecondaryColor"
                : section === 2
                ? "text-cardThirdColor"
                : ""
            )}
          >
            53 adet
          </p>
          <p className="m-0 leading-4">Dersler</p>
        </div>
      </div>
      <div className="h-6 w-[1px] bg-[#8A8C8C] ml-12"></div>
      <div className="flex items-center ml-12">
        <img className="m-0" src="/svgs/packtime.svg" alt="pack_time" />
        <div className="ml-3">
          <p
            className={clsx(
              "font-semibold m-0 leading-4",
              section === 0
                ? "text-cardPrimaryColor"
                : section === 1
                ? "text-cardSecondaryColor"
                : section === 2
                ? "text-cardThirdColor"
                : ""
            )}
          >
            1200 dk
          </p>
          <p className="m-0 leading-4">Ders Süresi</p>
        </div>
      </div>
      <div className="h-6 w-[1px] bg-[#8A8C8C] ml-12"></div>
      <div className="flex items-center ml-12">
        <img className="m-0" src="/svgs/packtime.svg" alt="pack_time" />
        <div className="ml-3">
          <p
            className={clsx(
              "font-semibold m-0 leading-4",
              section === 0
                ? "text-cardPrimaryColor"
                : section === 1
                ? "text-cardSecondaryColor"
                : section === 2
                ? "text-cardThirdColor"
                : ""
            )}
          >
            1320
          </p>
          <p className="m-0 leading-4">Çözümlü Sorular</p>
        </div>
      </div>
    </div>
  );
};

export default PackageNumInfos;
