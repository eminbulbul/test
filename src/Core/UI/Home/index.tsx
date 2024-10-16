import type { NextPage } from "next";
import Layout from "@/Core/Composite/Layout";
import Wrapper from "./Wrapper";
import QuoteArea from "./QuoteArea";
import FunFactArea from "./FunFactArea";
import TestimonialArea from "./TestimonialArea";
import VideoArea from "./VideoArea";
import GridArea from "./GridArea";
import { IBlog, ICourse } from "@/Utils/types";
import Link from "next/link";
import Button from "../Button";
import useFetchApi from "@/Hooks/useFetchApi";
import { useEffect } from "react";
import FetchGridArea from "./FetchGridArea";

interface PageContent {
  section: any;
}
type TProps = {
  data?: {
    page: {
      content: PageContent[];
    };
    courses?: ICourse[];
    popularCourse: ICourse;
    blogs: IBlog[];
  };
  title?: string;
  description?: string;
  titleSize?: any;
  className?: any;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  variants?: any;
  courseData?: any;
  carouselData?: any;
  image_url?: any;
};
type PageProps = NextPage<TProps> & {
  Layout: typeof Layout;
};
const whyLinkKurs = {
  section_title: {
    title: "Neden Link Kurs?",
  },
  motto: {
    text: "Canlı Dersler",
    path: "/canli-kurslarimiz",
    pathText: "İlgili Paketler için Tıklaynız",
  },
  descriptionData: [
    {
      image_url: "/img/anasayfa01.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen01.jpg",
      id: 1,
    },
    {
      image_url: "/img/anasayfa06.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen02.jpg",
      id: 2,
    },
    {
      image_url: "/img/anasayfa07.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen03.jpg",
      id: 3,
    },
    {
      image_url: "/img/anasayfa08.jpg",

      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen04.jpg",
      id: 4,
    },
    {
      image_url: "/img/anasayfa10.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen05.jpg",
      id: 5,
    },
    {
      image_url: "/img/anasayfa14.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen06.jpg",
      id: 6,
    },
    {
      image_url: "/img/anasayfa15.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen07.jpg",
      id: 7,
    },
    {
      image_url: "/img/anasayfa16.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen08.jpg",
      id: 8,
    },
    {
      image_url: "/img/anasayfa17.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen09.jpg",
      id: 9,
    },
  ],
};
const roadToSuccess = {
  section_title: {
    title: "Link Kurs'ta Başarıya Giden Yol!",
  },
  motto: {
    text: "Canlı Dersler",
    path: "/canli-kurslarimiz",
    pathText: "İlgili Paketler için Tıklaynız",
  },
  descriptionData: [
    {
      image_url: "/img/anasayfa02.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen01.jpg",
      id: 1,
    },
    {
      image_url: "/img/anasayfa03.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen02.jpg",
      id: 2,
    },
    {
      image_url: "/img/anasayfa04.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen03.jpg",
      id: 3,
    },
    {
      image_url: "/img/anasayfa05.jpg",

      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen04.jpg",
      id: 4,
    },
    {
      image_url: "/img/anasayfa09.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen05.jpg",
      id: 5,
    },
    {
      image_url: "/img/anasayfa11.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen06.jpg",
      id: 6,
    },
    {
      image_url: "/img/anasayfa12.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen07.jpg",
      id: 7,
    },
    {
      image_url: "/img/anasayfa13.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen08.jpg",
      id: 8,
    },
    {
      image_url: "/img/anasayfa18.jpg",
      parentpackage: "Canlı Dersler",
      currency: "$",
      published_at: "2019-07-01T00:00:00.000Z",
      path: "",
      teacher: "img/ogretmen09.jpg",
      id: 9,
    },
  ],
};
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
          src: "/img/matslider.png",
        },
      ],
    },
    {
      id: 2,
      name: "Luvic Dubble",
      designation: "Yazar",
      description:
        "Derslerin ve konuların düzenlemesinden memnunum. Öğrenciler için etkili yöntemlerin bilimsel bir araştırmasını yansıtıyorlar",
      images: [
        {
          src: "/img/slide-1.png",
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
          src: "/img/slide-3.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Florence Themes",
      designation: "Medya Çalışanı",
      description:
        "Ben çok katı biriyim, bu yüzden her şeyin düzenli ve tertipli olmasını beklerim. Sonra, işleri doğru yapabilir ve parlayabilir hale getirebilirim. NohutAKademi ekibi tam olarak beni anladı.",
      images: [
        {
          src: "/img/slide-2.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "Mina Hollace",
      designation: "Serbest Çalışan",
      description:
        "Ben kendi tempomda öğrenmekten, kendi programımı takip etmekten ve müfredattan istediğim konuyu seçmekten özgürüm. Benim gibi insanlar için harika bir öğrenme portalı.",
      images: [
        {
          src: "/img/slide-4.jpg",
        },
      ],
    },
    {
      id: 6,
      name: "Mina Hollace",
      designation: "Serbest Çalışan",
      description:
        "Ben kendi tempomda öğrenmekten, kendi programımı takip etmekten ve müfredattan istediğim konuyu seçmekten özgürüm. Benim gibi insanlar için harika bir öğrenme portalı.",
      images: [
        {
          src: "/img/slide-5.jpg",
        },
      ],
    },
    {
      id: 7,
      name: "Mina Hollace",
      designation: "Serbest Çalışan",
      description:
        "Ben kendi tempomda öğrenmekten, kendi programımı takip etmekten ve müfredattan istediğim konuyu seçmekten özgürüm. Benim gibi insanlar için harika bir öğrenme portalı.",
      images: [
        {
          src: "/img/slide-6.jpg",
        },
      ],
    },
    {
      id: 8,
      name: "Mina Hollace",
      designation: "Serbest Çalışan",
      description:
        "Ben kendi tempomda öğrenmekten, kendi programımı takip etmekten ve müfredattan istediğim konuyu seçmekten özgürüm. Benim gibi insanlar için harika bir öğrenme portalı.",
      images: [
        {
          src: "/img/slide-10.jpg",
        },
      ],
    },
    {
      id: 9,
      name: "Mina Hollace",
      designation: "Serbest Çalışan",
      description:
        "Ben kendi tempomda öğrenmekten, kendi programımı takip etmekten ve müfredattan istediğim konuyu seçmekten özgürüm. Benim gibi insanlar için harika bir öğrenme portalı.",
      images: [
        {
          src: "/img/slide-7.jpg",
        },
      ],
    },
    {
      id: 10,
      name: "Mina Hollace",
      designation: "Serbest Çalışan",
      description:
        "Ben kendi tempomda öğrenmekten, kendi programımı takip etmekten ve müfredattan istediğim konuyu seçmekten özgürüm. Benim gibi insanlar için harika bir öğrenme portalı.",
      images: [
        {
          src: "/img/slide-8.jpg",
        },
      ],
    },
    {
      id: 11,
      name: "Mina Hollace",
      designation: "Serbest Çalışan",
      description:
        "Ben kendi tempomda öğrenmekten, kendi programımı takip etmekten ve müfredattan istediğim konuyu seçmekten özgürüm. Benim gibi insanlar için harika bir öğrenme portalı.",
      images: [
        {
          src: "/img/slide-9.jpg",
        },
      ],
    },

    {
      id: 12,
      name: "Mina Hollace",
      designation: "Serbest Çalışan",
      description:
        "Ben kendi tempomda öğrenmekten, kendi programımı takip etmekten ve müfredattan istediğim konuyu seçmekten özgürüm. Benim gibi insanlar için harika bir öğrenme portalı.",
      images: [
        {
          src: "/img/slide-11.jpg",
        },
      ],
    },
  ],
  space: "none",
};
const Home: PageProps = () => {
  const [getPackages, packages] = useFetchApi(
    "https://api.linkkurs.com/api/link-kurs/packages"
  );
  useEffect(() => {
    getPackages();
  }, []);
  return (
    <>
      <Wrapper className="pb-5">
        <TestimonialArea
          autoPlay={true}
          slideNumber={1}
          isCarousel={true}
          carouselData={carouselData}
        />
      </Wrapper>
      <FetchGridArea
        GridData={{ packages }}
        GridPerRow={6}
        type="product"
        title="Paketlerimiz"
      />
      <QuoteArea />
      {/* <FetchGridArea
        GridData={{ packages }}
        GridPerRow={3}
        type="mostPreferred"
        title="En Çok Tercih Edilen Kurslarımız"
      /> */}
      <GridArea
        title="Neden Link Kurs?"
        GridData={whyLinkKurs}
        GridPerRow={3}
        type="noDesc"
      />
      <GridArea
        title="Link Kurs'ta Başarıya Giden Yol!"
        GridData={roadToSuccess}
        GridPerRow={3}
        type="noDesc"
      />
      <VideoArea />
      <Wrapper className="pt-[120px] pb-10 ">
        <FunFactArea space="bottom-2" />
      </Wrapper>
    </>
  );
};

Home.Layout = Layout;

export default Home;
