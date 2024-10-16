import clsx from "clsx";
import { motion } from "framer-motion";
import Section from "@/UI/Section";
// import GoogleMap from "@/UI/GoogleMap";
import { ItemType, SectionTitleType, TSection } from "@/Utils/types";
import { scrollUpVariants } from "@/Utils/variants";

type TProps = TSection & {
  data: {
    section_title?: SectionTitleType;
    items?: ItemType[];
    location?: {
      latitude: number;
      longitude: number;
    };
  };
};

const ContactInfo = () => {
  const infodata = {
    section_title: {
      title: "Daha fazla bilgi almak için lütfen bize ulaşın",
    },
    items: [
      {
        id: 1,
        title: "Adres",
        texts: [
          {
            id: 1,
            content: "Adres: Kültür Mah. Kartal Sk. C-2 Daire: 1 ",
          },
          {
            id: 2,
            content: "BESIKTAS/ ISTANBUL",
          },
        ],
      },
      {
        id: 2,
        title: "İletişim",
        texts: [
          {
            id: 1,
            content:
              "Mobil: <a href='tel:+90 541 167 58 53'>+90 541 167 58 53</a>",
          },
          {
            id: 3,
            content:
              "Mail: <a href='mailto:info@linkkurs.com'>info@linkkurs.com</a>",
          },
        ],
      },
      {
        id: 3,
        title: "Çalışma Saatlerimiz",
        texts: [
          {
            id: 1,
            content: "Pazartesi – Cuma : 09:00 – 20:00",
          },
          {
            id: 2,
            content: "Cuma & Cumartesi: 10:30 – 22:00",
          },
        ],
      },
    ],
  };
  return (
    <Section className="contact-info-area" space="none">
      <div className="container">
        {infodata.section_title && (
          <motion.h2
            className="max-w-[770px] mx-auto text-center leading-none mb-10 md:mb-15"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={scrollUpVariants}
          >
            {infodata.section_title.title}
          </motion.h2>
        )}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-x-7.5 gap-y-10 mb-10 md:mb-15"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={scrollUpVariants}
        >
          {infodata.items?.map((item) => (
            <div key={item.id} className="relative pl-12">
              <h3 className="text-lg mb-3.8">{item.title}</h3>
              {item.texts?.map((text) => (
                <p
                  key={text.id}
                  className="mb-2.5 child:text-heading"
                  dangerouslySetInnerHTML={{
                    __html: text.content,
                  }}
                />
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="h-[300px] lg:h-[400px]"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={scrollUpVariants}
        >
          <div className="bg-gray-400 w-full h-full mb-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d96389.14403220051!2d29.057552554845564!3d40.97796071777379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sK%C3%BClt%C3%BCr%20Mah.%20Kartal%20Sk.%20%20C-2%20Daire%3A%201%20BESIKTAS%20%2F%20ISTANBUL!5e0!3m2!1str!2str!4v1717491141471!5m2!1str!2str"
              width="400"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactInfo;
