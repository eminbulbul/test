import clsx from "clsx";
import { ImageType } from "@/Utils/types";

type TProps = {
  name: string;
  designation: string;
  review: string;
  image?: any;
  className?: string;
};

const Testimonial = ({
  name,
  designation,
  review,
  image,
  className,
}: TProps) => {
  return (
    <div
      className={clsx(
        "testimonial flex flex-wrap h-96 py-8 px-7 md:py-10 rounded bg-white shadow-md shadow-dark/10",
        className
      )}
    >
      {image?.src && (
        <figure className="image flex-auto0 w-[70px] ">
          <img
            src={image.src}
            alt={image?.alt || name}
            width={image?.width || 70}
            height={image?.height || 70}
            loading={image?.loading || "lazy"}
            className="rounded-full"
          />
        </figure>
      )}

      <div className="content flex-auto0 w-full pt-5 md:pt-0 md:pl-[30px] md:w-[calc(100%_-_70px)]">
        <p className="text-lg font-medium leading-relaxed mb-6 md:mb-[34px]">
          {review}
        </p>
        <h3 className="mb-0 tracking-wider uppercase text-h6">{name}</h3>
        <span className="text-md block mt-2 md:mt-[11px] text-gray-300">
          {designation}
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
