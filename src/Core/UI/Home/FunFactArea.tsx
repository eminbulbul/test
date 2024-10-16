import Section from "@/UI/Section";
import FunFact from "./Funfact";
import SectionTitle from "@/UI/SectionTitle";
import { motion } from "framer-motion";
import { scrollUpVariants } from "@/Utils/variants";
import useFetchApi from "@/Hooks/useFetchApi";
import { useEffect } from "react";

const AnimatedSectionTitle = motion(SectionTitle);
const AnimatedFunFact = motion(FunFact);

const FunfactArea = () => {
  const [getCounter, counts] = useFetchApi(
    "https://api.linkkurs.com/api/link-kurs/counter"
  );
  useEffect(() => {
    getCounter();
  }, []);
  useEffect(() => {
    console.log(counts);
  }, [counts]);

  const data = {
    section_title: {
      title:
        "Kursiyerlerimiz Gibi Sizlerde <span>Başarının</span> <br/>Sırlarını Öğrenin",
      subtitle: "POTANSİYELİNİZİ VE İMKANLARINIZI EN ÜST SEVİYEYE ÇIKARIN",
    },
    items: [
      {
        id: 1,
        title: "KAYITLI KURSİYER",
        suffix: "+",
        counter: counts?.registered_user,
      },
      {
        id: 2,
        title: "TAMAMLANAN KURS",
        counter: counts?.completed_packages,
      },
      {
        id: 3,
        title: "MEMNUNİYET",
        suffix: "%",
        counter: 100,
      },
    ],
    space: "bottom-2",
  };
  return (
    <Section space="bottom-2" className="funfact-area">
      <div className="container">
        {data.section_title && (
          <AnimatedSectionTitle
            {...data.section_title}
            titleSize="default"
            className="mb-7.5 md:mb-15"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={scrollUpVariants}
          />
        )}

        <div className="grid md:grid-cols-3 lg:w-3/4 mx-auto gap-[30px]">
          {data.items?.map((item) => (
            <AnimatedFunFact
              key={item.id}
              counter={item.counter}
              suffix={item.suffix}
              title={item.title}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
              variants={scrollUpVariants}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
FunfactArea.defaultProps = {
  space: "top-bottom",
};

export default FunfactArea;
