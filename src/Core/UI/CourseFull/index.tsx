import { motion } from "framer-motion";
import Section from "@/UI/Section";
import FetchCourseCard from "../Home/FetchCourseCard";
import Button from "@/UI/Button";
import { ICourse } from "@/Utils/types";
import { courseSorting } from "@/Utils/methods";
import { useSort, useLoadMore } from "@/Hooks/index";
import { scrollUpVariants } from "@/Utils/variants";

const AnimatedCourseCard = motion(FetchCourseCard);

type TProps = {
  data: {
    courses: any;
  };
  mottoText: boolean;
  areaTitle?: any;
};

const CourseArea = ({ mottoText, data: { courses }, areaTitle }: TProps) => {
  let sortedItems = courses;
  let itemsToShow = courses;
  let setSortValue, sortValue, hasMore, handlerLoadMore;

  if (areaTitle !== "mostPreffered") {
    ({ sortedItems, setSortValue, sortValue } = useSort<ICourse>(
      courses,
      courseSorting
    ));
    ({ hasMore, itemsToShow, handlerLoadMore } = useLoadMore<ICourse>(
      sortedItems,
      9,
      3
    ));
  }

  return (
    <Section className="course-area" space="bottom">
      <h2 className="sr-only">Course Section</h2>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {itemsToShow?.map((course: any) => (
            <AnimatedCourseCard
              key={course.id}
              title={course?.fullname}
              withoutDiscountPrice={course?.without_discount_price}
              installmentPaymentPrice={course?.installment_payment_price}
              pathBuy={`/purchasecourse/${course?.slug}`}
              description={course?.short_descs}
              path={`/canli-kurslarimiz/${course?.slug}`}
              thumbnail={course?.image_url}
              price={course?.price}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              variants={scrollUpVariants}
              section={course?.section}
            />
          ))}
        </div>
        {mottoText && areaTitle !== "mostPreffered" && (
          <div className="text-center mt-[50px]">
            {hasMore && (
              <Button
                variant="outlined"
                className="min-w-[250px] border-gray-500"
                onClick={handlerLoadMore}
              >
                Daha Fazla Yükle
              </Button>
            )}
          </div>
        )}
      </div>
    </Section>
  );
};

export default CourseArea;
