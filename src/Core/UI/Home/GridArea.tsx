import { motion } from "framer-motion";
import Section from "@/UI/Section";
import SectionTitle from "@/UI/SectionTitle";
import CourseCard from "./CourseCard";
import MottoText from "./MottoText";
import { scrollUpVariants } from "@/Utils/variants";
import Button from "@/UI/Button";
import { useState } from "react";

const AnimatedSectionTitle = motion(SectionTitle);
const AnimatedCourseCard = motion(CourseCard);

interface GridData {
  section_title: {
    title: string;
    subtitle?: string;
  };
  motto: {
    text: string;
    path: string;
    pathText: string;
  };
  descriptionData: {
    title?: string;
    description?: string;

    src?: string;

    parentpackage: string;
    currency: string;
    published_at: string;
    path: string;
    image_url?: any;
  }[];
}
interface DescriptionAreaProps {
  title: string;
  GridData: GridData;
  GridPerRow: number;
  type?: string;
}

const GridArea: React.FC<DescriptionAreaProps> = ({
  GridData,
  GridPerRow,
  type,
}: any) => {
  const [showCourses, setShowCourses] = useState(GridPerRow);
  const [isMore, setIsMore] = useState(false);
  const handleMore = () => {
    setShowCourses(showCourses + GridPerRow);
    setIsMore(true);
  };

  return (
    <Section className="course-area mt-14">
      <div className="container">
        {GridData.section_title && (
          <AnimatedSectionTitle
            {...GridData.section_title}
            titleSize="default"
            className="mb-7.5 md:mb-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={scrollUpVariants}
          />
        )}
        <div
          className={
            GridPerRow == 4
              ? "grid md:grid-cols-2 lg:grid-cols-4 gap-[30px]"
              : "grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
          }
        >
          {GridData?.descriptionData
            ?.slice(0, showCourses)
            .map((course: any) => (
              <AnimatedCourseCard
                cardType={type}
                key={course.id}
                teacher={course?.teacher}
                title={course?.title}
                description={course?.description}
                path={course?.path}
                price={course?.price}
                published_at={course?.published_at}
                thumbnail={course?.image_url}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.4 }}
                variants={scrollUpVariants}
              />
            ))}
        </div>
        {GridData.descriptionData?.length > showCourses && (
          <div className="flex w-full justify-center mt-10">
            <Button onClick={handleMore}>Daha Fazla Göster</Button>
          </div>
        )}
        {GridPerRow == 4 && (
          <div className="lg:w-7/12 mx-auto text-center mt-[70px]">
            <MottoText {...GridData.motto} />
          </div>
        )}
      </div>
    </Section>
  );
};

export default GridArea;
