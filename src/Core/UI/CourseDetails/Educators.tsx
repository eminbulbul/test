import React from "react";

interface Educator {
  educatorPicture: string;
  name: string;
  educatorTitle: string;
  educatorDescription: string;
}
interface CourseDataProps {
  CourseData: Educator[];
}
const Educators: React.FC<CourseDataProps> = ({ CourseData }) => {
  return (
    <div className="container">
      {CourseData.map((educator: any, index: any) => {
        return (
          <div key={index} className="flex ml-10 items-center my-10">
            <img
              className="rounded-full h-24 w-24"
              src={educator?.image_url}
              alt="ogretmen"
            />
            <div className="ml-5">
              <h6>{educator?.name}</h6>
              <small>{educator?.expertise}</small>
              <div dangerouslySetInnerHTML={{ __html: educator.descs }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Educators;
