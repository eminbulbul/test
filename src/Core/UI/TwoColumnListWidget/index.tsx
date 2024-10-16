import clsx from "clsx";
import Anchor from "@/UI/Anchor";
import WidgetTitle from "./WidgetTitle";

type TProps = {
  className?: string;
  mode?: "light" | "dark";
};

const TwoColumnListWidget = ({ className, mode }: TProps) => {
  return (
    <div className={clsx(className)}>
      <WidgetTitle mode={mode}>Keşfet</WidgetTitle>
      <ul
        className={clsx(
          "flex flex-wrap text-md font-medium",
          mode === "dark" && "text-gray-400"
        )}
      >
        <li className="w-1/2 pr-5 mb-[11px]">
          <Anchor path="/">Ana Sayfa</Anchor>
        </li>
        <li className="w-1/2 pr-5 mb-[11px]">
          <Anchor path="/canli-kurslarimiz">Eğitim Paketleri</Anchor>
        </li>
        {/* <li className="w-1/2 pr-5 mb-[11px]">
          <Anchor path="/blog">Bloglar</Anchor>
        </li> */}
        <li className="w-1/2 pr-5 mb-[11px]">
          <Anchor path="/iletisim">İletişim</Anchor>
        </li>
        <li className="w-1/2 pr-5 mb-[11px]">
          <Anchor path="/sozlesme">Sözleşmeler</Anchor>
        </li>
      </ul>
    </div>
  );
};

export default TwoColumnListWidget;
