import { motion } from "framer-motion";
import Section from "@/UI/Section";
import SectionTitle from "@/UI/SectionTitle";
import FetchCourseCard from "./FetchCourseCard";
import { scrollUpVariants } from "@/Utils/variants";
import PackageDetailCard from "../CourseDetails/PackageDetailCard";
import CourseCardForAd from "./CourseCardForAd";

const AnimatedSectionTitle = motion(SectionTitle);
const AnimatedCourseCard = motion(FetchCourseCard);
interface GridData {
  section_title?: {
    title: string;
    subtitle?: string;
  };
  motto?: {
    text: string;
    path: string;
    pathText: string;
  };
  packages?: any;
  descriptionData?: {
    title: string;
    description: string;
    thumbnail?: any;
    parentpackage: string;
    currency: string;
    published_at: string;
    path: string;
  }[];
}
interface DescriptionAreaProps {
  title: string;
  GridData: GridData;
  GridPerRow: number;
  type?: string;
}
const FetchGridArea: React.FC<DescriptionAreaProps> = ({
  GridData,
  GridPerRow,
  type,
  title,
}: any) => {
  return (
    <Section className="course-area">
      <div className="container">
        <AnimatedSectionTitle
          title={title}
          titleSize="default"
          className="mb-7.5 md:mb-20"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={scrollUpVariants}
          description="Uzman öğretmen kadromuz, sınırları zorlayan ve geliştiren çeşitli sorularımız, yapay zeka destekli dijital koçumuz ve daha bir çok fark yaratan içeriklerimiz ile TYT Matematik sınavına eksiksiz bir hazırlık deneyimi sizi bekliyor."
        />
        <div
          className={
            GridPerRow == 4
              ? "grid md:grid-cols-2 lg:grid-cols-4 gap-[30px] gap-y-[90px]"
              : "grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] gap-y-[90px]"
          }
        >
          {type === "mostPreferred"
            ? GridData?.packages
                ?.slice(0, 3)
                .map((course: any) => (
                  <AnimatedCourseCard
                    key={course.id}
                    withoutDiscountPrice={course?.without_discount_price}
                    installmentPaymentPrice={course?.installment_payment_price}
                    title={course?.fullname}
                    pathBuy={`/purchasecourse/${course?.slug}`}
                    description={course?.short_descs}
                    path={`/canli-kurslarimiz/${course?.slug}`}
                    thumbnail={course?.image_url}
                    price={course?.price}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={scrollUpVariants}
                    cardType={type}
                    section={course?.section}
                  />
                ))
            : GridData?.packages?.map((course: any) => (
                <AnimatedCourseCard
                  key={course.id}
                  title={course?.fullname}
                  description={course?.short_descs}
                  withoutDiscountPrice={course?.without_discount_price}
                  installmentPaymentPrice={course?.installment_payment_price}
                  path={`/canli-kurslarimiz/${course?.slug}`}
                  thumbnail={course?.image_url}
                  initial="offscreen"
                  price={course?.price}
                  pathBuy={`/purchasecourse/${course?.slug}`}
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={scrollUpVariants}
                  cardType={type}
                />
              ))}
        </div>
      </div>
    </Section>
  );
};

export default FetchGridArea;
