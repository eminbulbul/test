import clsx from "clsx";
import Anchor from "@/UI/Anchor";
import WidgetTitle from "./WidgetTitle";

type TProps = {
  className?: string;
  mode?: "light" | "dark";
};

const ListWidget = ({ className, mode }: TProps) => {
  return (
    <div className={clsx(className)}>
      <WidgetTitle mode={mode}>Information</WidgetTitle>
      <ul
        className={clsx(
          "text-md font-medium",
          mode === "dark" && "text-gray-400"
        )}
      >
        <li className="pr-5 mb-[11px]">
          <Anchor path="/membership-levels">Membership</Anchor>
        </li>
        <li className="pr-5 mb-[11px]">
          <Anchor path="/purchase-guide">Purchase guide</Anchor>
        </li>
        <li className="pr-5 mb-[11px]">
          <Anchor path="/privacy-policy">Privacy policy</Anchor>
        </li>
        <li className="pr-5 mb-[11px]">
          <Anchor path="/terms-of-service">Terms of service</Anchor>
        </li>
      </ul>
    </div>
  );
};

export default ListWidget;
