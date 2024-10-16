import StarRating from "@/UI/StarRating";
import { ImageType } from "@/Utils/types";

type TProps = {
  user?: any;
  rating?: any;
  title?: any;
  review?: any;
};

const Review = ({ user, rating, title, review }: TProps) => {
  return (
    <div className="review flex flex-wrap">
      {user?.avatar?.src && (
        <figure className="w-[80px] h-[80px] child:rounded-full">
          <img src={user.avatar.src} alt={user.avatar?.alt || user.name} />
        </figure>
      )}

      <div className="w-full pl-0 pt-7.5 sm:pt-0 sm:w-[calc(100%_-_80px)] sm:pl-8 md:pl-[45px]">
        <div className="flex items-center justify-between">
          <h4 className="text-base uppercase tracking-wider mb-0">
            {user.name}
          </h4>
          <StarRating rating={rating} space="xs" />
        </div>
        <h5 className="text-base mt-3.8 mb-[5px]">{title}</h5>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Review;
