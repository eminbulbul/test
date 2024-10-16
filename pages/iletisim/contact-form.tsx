import { motion } from "framer-motion";
import Section from "@/UI/Section";
import ContactForm from "@/UI/Forms/ContactForm";
import { SectionTitleType, TSection } from "@/Utils/types";
import { scrollUpVariants } from "@/Utils/variants";

const AnimatedContactForm = motion(ContactForm);

type TProps = TSection & {
  data: {
    section_title?: SectionTitleType;
  };
};
const ContactFormArea = () => {
  const formdata = {
    section_title: {
      title: "Aşağıdaki Formu Doldurarak Bize Ulaşın",
    },
  };
  return (
    <Section className="contact-form-area">
      <div className="container">
        {formdata.section_title && (
          <motion.h2
            className="max-w-[600px] mx-auto text-center leading-none mb-10 md:mb-15"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={scrollUpVariants}
          >
            {formdata.section_title.title}
          </motion.h2>
        )}
        <AnimatedContactForm
          className="max-w-[770px] mx-auto"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={scrollUpVariants}
        />
      </div>
    </Section>
  );
};

export default ContactFormArea;
