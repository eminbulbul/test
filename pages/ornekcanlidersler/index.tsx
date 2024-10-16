import TestimonialArea from "@/UI/Home/TestimonialArea";
import Wrapper from "@/UI/Home/Wrapper";
import React from "react";

const LiveSessionExamples = () => {
  const carouselData = {
    items: [
      {
        id: 1,
        name: "Luvic Dubble",
        designation: "Yazar",
        description:
          "Derslerin ve konuların düzenlemesinden memnunum. Öğrenciler için etkili yöntemlerin bilimsel bir araştırmasını yansıtıyorlar",
        images: [
          {
            src: "/img/slider01-1raw.png",
          },
        ],
      },
      {
        id: 2,
        name: "Florence Themes",
        designation: "Medya Çalışanı",
        description:
          "Ben çok katı biriyim, bu yüzden her şeyin düzenli ve tertipli olmasını beklerim. Sonra, işleri doğru yapabilir ve parlayabilir hale getirebilirim. NohutAKademi ekibi tam olarak beni anladı.",
        images: [
          {
            src: "/img/slider02-1raw.png",
          },
        ],
      },
      {
        id: 3,
        name: "Mina Hollace",
        designation: "Serbest Çalışan",
        description:
          "Ben kendi tempomda öğrenmekten, kendi programımı takip etmekten ve müfredattan istediğim konuyu seçmekten özgürüm. Benim gibi insanlar için harika bir öğrenme portalı.",
        images: [
          {
            src: "/img/slider03.png",
          },
        ],
      },
      {
        id: 4,
        name: "Mina Hollace",
        designation: "Serbest Çalışan",
        description:
          "Ben kendi tempomda öğrenmekten, kendi programımı takip etmekten ve müfredattan istediğim konuyu seçmekten özgürüm. Benim gibi insanlar için harika bir öğrenme portalı.",
        images: [
          {
            src: "/img/slider04-1raw.png",
          },
        ],
      },
    ],
    space: "none",
  };
  return (
    <div>
      <Wrapper className="my-20 pb-5">
        <TestimonialArea
          autoPlay={false}
          slideNumber={1}
          isCarousel={true}
          carouselData={carouselData}
        />
      </Wrapper>
    </div>
  );
};

export default LiveSessionExamples;
