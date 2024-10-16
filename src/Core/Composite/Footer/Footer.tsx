import clsx from "clsx";
import TwoColumnListWidget from "@/UI/TwoColumnListWidget";
import TextWidget from "@/UI/TwoColumnListWidget/TextWidget";

type TProps = {
  mode?: "light" | "dark";
};

const Footer01 = ({ mode }: TProps) => {
  return (
    <footer
      className={clsx(
        "pt-[70px] pb-[50px]",
        mode === "dark" && "bg-dark-100",
        mode === "light" && "bg-light-100"
      )}
    >
      <h2 className="sr-only">Footer</h2>
      <div className="container">
        <div className="grid grid-cols-12">
          <TextWidget
            mode={mode}
            className="col-span-12 lg:col-span-5 xl:col-span-6 mb-[43px]"
          />
          <TwoColumnListWidget
            mode={mode}
            className="col-span-12 md:col-span-7 lg:col-span-4 xl:col-span-3 mb-[25px]"
          />
        </div>
        <div className="flex justify-center w-full">
          <img src="img/logo_band.png" alt="payment_methods" />
        </div>
        <p className="copyright text-center text-md text-gray-400 mt-5">
          &copy; {new Date().getFullYear()} Link Kurs.{" "}
          <span>Tüm hakları saklıdır.</span>
        </p>
      </div>
    </footer>
  );
};

Footer01.defaultProps = {
  mode: "dark",
};

export default Footer01;
