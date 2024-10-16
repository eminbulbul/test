import clsx from "clsx";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

type TProps = {
  rating?: any;
  className?: any;
  align?: "left" | "center" | "right";
  size?: "sm" | "md";
  space?: "xs" | "sm";
};

const BASE_RATING = 5;

const StarRating = ({ rating, className, align, size, space }: TProps) => {
  const unrated = Array.from(
    new Array(Math.floor(BASE_RATING - rating)),
    (_x, i) => i
  );
  const rated = Array.from(new Array(Math.floor(rating)), (_x, i) => i + 1);
  const remainder = rating - parseInt(`${rating}`, 10);

  return (
    <div
      title={`${rating} out of ${BASE_RATING}`}
      className={clsx(
        size === "md" && "text-md",
        size === "sm" && "text-sm",
        align === "center" && "text-center",
        align === "left" && "text-left",
        align === "right" && "text-right",
        className
      )}
    >
      {rated.map((item) => (
        <FaStar
          key={item}
          className={clsx(
            "fas fa-star text-yellow first:ml-0",
            space === "xs" && "mx-px",
            space === "sm" && "mx-0.5"
          )}
        />
      ))}
      {remainder > 0 && (
        <FaStarHalf
          className={clsx(
            "fas fa-star-half-alt text-yellow first:ml-0",
            space === "xs" && "mx-px",
            space === "sm" && "mx-0.5"
          )}
        />
      )}
      {unrated.map((item) => (
        <FaStar
          key={item}
          className={clsx(
            "far fa-star text-gray-400 first:ml-0",
            space === "xs" && "mx-px",
            space === "sm" && "mx-0.5"
          )}
        />
      ))}
    </div>
  );
};

StarRating.defaultProps = {
  align: "center",
  size: "md",
  space: "sm",
};

export default StarRating;
