import clsx from "clsx";
import { motion } from "framer-motion";
import CourseCard from "@/UI/CourseCard";
import BottomShape from "@/UI/BottomShape";
import { scrollUpVariants } from "@/Utils/variants";
import { HeadingType, TextType, ButtonType } from "@/Utils/types";
import Image from "next/image";
import IntroImage from "@/Public/img/intro-popular-course.png";
import ShapeImage from "@/Public/img/shape-1.png";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/reducers";
import Button from "@/UI/Button";
type TProps = {
  data?: {
    headings?: HeadingType[];
    texts?: TextType[];
    buttons?: ButtonType[];
    images?: any;
    popularCourse?: any;
  };
};

const Hero = ({
  data: {
    headings = [
      {
        id: 1,
        content: "MaxCoach is the lifebuoy",
      },
      {
        id: 2,
        content: "In Mentoring <br>2B a Better You.",
      },
    ],
    texts = [
      {
        id: 1,
        content:
          "The right mentoring relationship can be a powerful tool for professional growth. Bark up the right tree.",
      },
    ],
    buttons = [
      {
        id: 1,
        path: "/start-here",
        content: "Download free guide",
        icon: "far fa-download",
      },
    ],
    images = [
      {
        id: 1,
        src: "/img/bg-1.jpg",
      },
    ],
    popularCourse = {
      popularCourse: {
        title: "Customer-centric Info-Tech Strategies",
        published_at: "2018-01-01T00:00:00.000Z",
        thumbnail: {
          src: "/img/course-2.jpg",
        },
        price: 0,
        currency: "$",
        excerpt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isPopular: true,
        path: "#",
      },
    },
  } = {},
}: TProps) => {
  const mousePosition = useSelector(
    (state: RootState) => state.cursorMove.mousePosition
  );

  return (
    <div className="h-full md:min-h-[750px] xl:min-h-[820px] py-[50px] relative flex items-center isolate bg-pearl overflow-hidden">
      <h1 className="sr-only">Home Page</h1>
      <div className="bgimg absolute inset-0 -z-10 hidden md:block">
        {images?.[0]?.src && (
          <img
            src={images[0].src}
            alt={images[0]?.alt || "bg"}
            loading="eager"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="container 3xl:max-w-full 3xl:px-37">
        <div className="grid md:gap-7.5 md:grid-cols-2">
          <motion.div
            className="content text-center mb-7.5 md:text-left md:self-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={scrollUpVariants}
          >
            {headings?.[0]?.content && (
              <span className="text-sm mb-2.5 -tracking-tightest font-bold leading-loose uppercase text-secondary block md:mb-[18px] md:tracking-[4px]">
                {headings[0].content}
              </span>
            )}
            {headings?.[1]?.content && (
              <h2
                className="text-3xl sm:text-[40px] lg:text-[54px] xl:text-[63px] leading-[1.13] text-secondary"
                dangerouslySetInnerHTML={{
                  __html: headings[1].content,
                }}
              />
            )}
            {texts?.map((text) => (
              <p
                key={text.id}
                className="text-md sm:text-[16px] font-medium leading-relaxed mt-3 sm:mx-auto max-w-[540px] md:ml-0 md:text-lg"
              >
                {text.content}
              </p>
            ))}
            {buttons?.map(({ id, content, icon, ...rest }) => (
              <Button key={id} {...rest}>
                {content}
                {icon && <i className={clsx(icon, "ml-4")} />}
              </Button>
            ))}
          </motion.div>
          <motion.div
            className="course flex space-between justify-center xl:justify-end relative z-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={scrollUpVariants}
          >
            <Image
              className="absolute left-0 -top-7.5 max-w-[100px] z-1 sm:relative sm:left-auto sm:top-auto sm:z-20 sm:self-end sm:flex-auto sm:ml-auto mr-5 sm:mb-[100px] sm:max-w-[120px] md:-mr-7.5 md:-ml-[60px] lg:max-w-[186px]"
              src={IntroImage}
              alt="popular"
              width={186}
              height={157}
            />
            <CourseCard
              className="max-w-[370px]"
              title={popularCourse.title}
              path={popularCourse.path}
              published_at={popularCourse.published_at}
              price={popularCourse.price}
              currency={popularCourse.currency}
              excerpt={popularCourse.excerpt}
              thumbnail={{
                ...popularCourse.thumbnail,
                loading: "eager",
              }}
            />
            <motion.div
              className="intro1-scene absolute -z-1 -right-11 -bottom-11 w-[136px]"
              animate={{
                x: (mousePosition.x / 15) * -1,
                y: (mousePosition.y / 15) * -1,
              }}
            >
              <Image
                src={ShapeImage}
                alt="shape image"
                width={136}
                height={136}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <BottomShape />
    </div>
  );
};

export default Hero;
