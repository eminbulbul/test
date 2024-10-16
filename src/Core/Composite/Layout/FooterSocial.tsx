import { CiFacebook, CiTwitter, CiLinkedin, CiInstagram } from "react-icons/ci";
import Link from "next/link";
const FooterSocial = ({ collapsed = false }) => {
  return (
    <>
      <div className="absolute w-full h-24 bottom-0 overflow-hidden bg-gray-50 dark:bg-dark pt-2 text-gray-500 ">
        <div className="text-xs flex-col flex justify-center text-center">
          <div className="">
            <Link href="#abou" className="inline-block ml-1">
              Hakkımızda
            </Link>
            <Link href="#soz" className="inline-block ml-2">
              Sözleşmeler
            </Link>
          </div>
          <div className=" border-b mb-1 pb-1 dark:border-gray-500 ">
            <a href="#">
              <CiFacebook size={15} />
            </a>
            <a href="#">
              <CiTwitter size={15} />
            </a>
            <a href="#">
              <CiLinkedin size={15} />
            </a>
            <a href="#">
              <CiInstagram size={15} />
            </a>
          </div>
          2024© ElitSoft
        </div>
      </div>
    </>
  );
};
export default FooterSocial;
