import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Section from "@/UI/Section";
import SectionTitle from "@/UI/SectionTitle";
import ServiceCard from "@/UI/IconBox";
import { scrollUpVariants } from "@/Utils/variants";
import { SectionTitleType, ItemType, TSection } from "@/Utils/types";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const AnimatedSectionTitle = motion(SectionTitle);
const AnimatedServiceCard = motion(ServiceCard);

type TProps = TSection & {
  data: {
    section_title?: SectionTitleType;
    items?: ItemType[];
  };
};

const Courses = ({ isHome, courses }: any) => {
  const data = {
    section_title: {
      title: "Çevrimiçi <span>Eğitim</span> Hizmetlerimiz.",
      subtitle: "EĞİTİMLERİMİZ",
    },
    space: "none",
  };
  return (
    <Section space="none" className={isHome ? "service-area" : "my-10"}>
      <div className="container relative z-1">
        {data.section_title && (
          <AnimatedSectionTitle
            {...data.section_title}
            className="mb-7.5 xl:mb-15"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={scrollUpVariants}
          />
        )}

        <div className="grid sm:grid-cols-2 xl:grid-cols-4">
          {courses?.map((item: any) => (
            <ScrollLink
              key={item.id}
              to={item.path}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <AnimatedServiceCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                path={item.path}
                pathText={item.pathText}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.4 }}
                variants={scrollUpVariants}
              />
            </ScrollLink>
          ))}
        </div>
        {isHome && (
          <div className="font-bold leading-none relative my-4 text-center">
            Tüm Çevrimiçi Eğitimleri
            <span className="font-bold leading-none relative py-[3px] text-primary before:absolute before:content-[''] before:w-full before:scale-x-100 before:origin-right before:bg-gray-350 before:transition-transform before:duration-600 before:delay-300 before:ease-in-expo before:bottom-0 before:left-0 before:h-px after:absolute after:content-[''] after:w-full after:scale-x-0 after:origin-left after:bg-primary after:transition-transform after:duration-600 after:delay-75 after:ease-in-expo after:bottom-0 after:left-0 after:h-px hover:before:scale-x-0 hover:after:scale-x-100 hover:after:delay-300 hover:before:delay-75 ml-3">
              <Link href="/allcourses">
                Gör
                <FaArrowRight className="inline-flex ml-1" />
              </Link>
            </span>
          </div>
        )}
      </div>
    </Section>
  );
};

Courses.defaultProps = {
  space: "top-bottom",
};

export default Courses;
