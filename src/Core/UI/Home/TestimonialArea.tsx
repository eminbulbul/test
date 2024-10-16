import { useMemo } from "react";
import Swiper, { SwiperSlide } from "@/UI/Swiper";
import Testimonial from "./Testimonial";
import CarouselImage from "./CarouselImage";
import Link from "next/link";

const AnimatedSwiper = Swiper;

const TestimonialArea = ({
  autoPlay,
  slideNumber,
  isCarousel,
  carouselData,
}: any) => {
  const options = useMemo(() => {
    return {
      slidesPerView: 1,
      autoplay: autoPlay,
      autoHeight: false,
      navigation: true,
      pagination: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: slideNumber,
          spaceBetween: 30,
        },
      },
    };
  }, []);

  return (
    <div className={isCarousel ? "w-full h-full" : "w-full h-full container"}>
      <AnimatedSwiper options={options} shadowSize="small">
        {carouselData.items?.map((item: any) => (
          <SwiperSlide key={item.id}>
            {isCarousel ? (
              <Link href="/purchasecourse/tyt-matematik-temel-seviye-canli-kurs-paketi">
                <CarouselImage image={item.images?.[0]} />
              </Link>
            ) : (
              <Testimonial
                name={item.name}
                designation={item.designation}
                review={item.description}
                image={item.images?.[0]}
              />
            )}
          </SwiperSlide>
        ))}
      </AnimatedSwiper>
    </div>
  );
};

TestimonialArea.defaultProps = {
  space: "top-bottom",
};

export default TestimonialArea;
