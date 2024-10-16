import Section from "@/UI/Section";
import SectionTitle from "@/UI/SectionTitle";
import { motion } from "framer-motion";
import { scrollUpVariants } from "@/Utils/variants";
const QuoteArea = () => {
  const data = {
    section_title: {
      title: "Canlı  <span>Kurslar</span>",
    },
    texts: [
      {
        id: 1,
        content:
          "Canlı kurslarda, öğretmen ve öğrenciler eş zamanlı olarak platformun yönlendirmesiyle dijital sınıflarda buluşur. Alanında uzman öğretmenlerimiz, konu anlatımlarında ilgili konu başlığı ile bağlantılı püf noktalarını, pratik ve hızlı kavrama yöntemlerini öğrenciye verir. Etkileşimli olarak işlenen canlı kurslarda öğrenci ve öğretmen konu anlatımlarında sağlam bir temel oluşturur; öğrenci dilediğinde sorular sorabilir, katkı sağlayabilir ve yorumlama becerisini geliştirir.",
      },
      {
        id: 2,
        content: "30<sub>yıl</sub>",
      },
      {
        id: 3,
        content: "EĞİTİM BİRİKİMİ",
      },
    ],
    images: [
      {
        id: 1,
        src: "/img/30years.jpg",
      },
    ],
    space: "top-bottom",
  };
  return (
    <Section space="top-bottom" className="about-area ">
      <div className="container py-12">
        <div className="lg:pb-[50px] lg:pl-[135px] xl:pl-[200px]">
          <motion.div
            className="flex bg-gray-100"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={scrollUpVariants}
          >
            <figure className="relative flex-auto0 w-[270px] -ml-[135px] translate-y-[50px] hidden lg:block">
              {data.images?.[0]?.src && (
                <img
                  src={data.images[0].src}
                  alt="About"
                  width={270}
                  height={362}
                  loading="lazy"
                />
              )}
            </figure>
            <div className="px-4 pb-10 lg:py-[70px]">
              {data.section_title && (
                <SectionTitle
                  {...data.section_title}
                  align="left"
                  titleSize="large"
                  className="mb-[25px]"
                />
              )}

              <div className="flex flex-col md:flex-row gap-[10px]">
                <div className="md:w-full">
                  {data.texts?.[0]?.content && (
                    <p className="text-xl xl:text-2xl font-medium leading-normal">
                      {data.texts[0].content}
                    </p>
                  )}
                </div>
                <div className="md:w-[25.406%]">
                  {data.texts?.[1]?.content && (
                    <p
                      className="mb-0 text-5xl font-extrabold leading-tight text-primary child:text-2xl child:bottom-0 child:ml-1.3"
                      dangerouslySetInnerHTML={{
                        __html: data.texts[1].content,
                      }}
                    />
                  )}
                  {data.texts?.[2]?.content && (
                    <p className="text-base leading-loose mb-2.5 -tracking-tightest uppercase font-bold text-secondary">
                      {data.texts[2].content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default QuoteArea;
