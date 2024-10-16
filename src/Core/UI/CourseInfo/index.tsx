/* eslint-disable react/jsx-no-useless-fragment */
import Button from "@/UI/Button";
import SocialShare from "@/UI/SocialShare";
import CourseInfoItem from "./item";
import Link from "next/link";
import { useEffect } from "react";

type TProps = {
  lessonLink?: string;
  slug?: string;
  price?: number;
  currency?: string;
  instructor?: string;
  duration?: string;
  lectures?: number;
  students?: number;
  language?: string;
  published_at?: string;
  course?: any;
};

const CourseInfo = ({
  instructor,
  duration,
  language,
  slug,
  course,
  price,
}: TProps) => {
  return (
    <>
      {course?.parent_id != 0 && (
        <div className="course-info-widget pt-7.5 px-7.5 pb-[33px] bg-white shadow-2sm shadow-heading/10 rounded w-full">
          <div className="course-meta mb-10">
            {/* <CourseInfoItem label="Eğitmen" value={instructor} />
            <CourseInfoItem label="Süre" value={duration} />
            <CourseInfoItem label="Dil" value={language} />
             */}
            <CourseInfoItem
              label="Fiyatı"
              value={price !== 0 ? `${price}₺` : "Ücretsiz"}
            />
          </div>
          <Link href={`/purchasecourse/${course?.slug}`}>
            {course.price !== 0 ? (
              <Button fullwidth>Kursa Abone Ol</Button>
            ) : (
              <Button fullwidth>Ücretsiz Satın Al</Button>
            )}
          </Link>
          {/* <div className="mt-5 text-center">
            <SocialShare title="Kursu Paylaş" />
          </div> */}
        </div>
      )}
    </>
  );
};

export default CourseInfo;
