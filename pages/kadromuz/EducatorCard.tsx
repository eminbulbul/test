import React from "react";

type EducatorCardProps = {
  educator?: string;
  title?: string;
  image?: any;
};

const EducatorCard: React.FC<EducatorCardProps> = ({
  educator,
  title,
  image,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {image == null ? (
        <img src="/img/user.png" className="rounded-full w-32 h-32" alt="" />
      ) : (
        <img src={image} className="rounded-full w-32 h-32" alt="" />
      )}
      <p>{educator}</p>
      <small>{title}</small>
    </div>
  );
};

export default EducatorCard;
