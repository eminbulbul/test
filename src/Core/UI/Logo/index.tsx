import Link from "next/link";
import clsx from "clsx";
import LogoImgLight from "./light-logo.png";
import Image from "next/image";

type TProps = {
  variant?: "dark" | "light";
  className?: string;
};

const Logo = ({ variant, className }: TProps) => {
  return (
    <Link href="/" className={clsx("inline-block", className)}>
      <Image src={LogoImgLight} alt="Logo" width={158} height={26} />
    </Link>
  );
};

export default Logo;
