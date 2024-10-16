import clsx from "clsx";
import { ImageType } from "@/Utils/types";

type TProps = {
  image?: ImageType;
  className?: string;
};

const CarouselImage = ({ image, className }: TProps) => {
  return (
    <div
      className={clsx(
        "carousel-image flex flex-wrap shadow-md shadow-dark/10",
        className
      )}
    >
      {image?.src && (
        <img src={image.src} alt="carousel-image" className="w-full h-full" />
      )}
    </div>
  );
};

export default CarouselImage;
