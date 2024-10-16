import type { NextPage } from "next";
import SEO from "@/Composite/Seo";
import Layout from "@/Composite/Layout";
import Breadcrumb from "@/UI/Breadcrumb";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

interface PageContent {
  section: string;
}

type TProps = {
  data: {
    page: {
      content: any;
    };
  };
};

type PageProps = NextPage<TProps> & {
  Layout: typeof Layout;
};

const ContactMe: PageProps = () => {
  return (
    <>
      <SEO title="İletişim" />
      <Breadcrumb
        pages={[{ path: "/", label: "Ana Sayfa" }]}
        currentPage="İletişim"
        showTitle={false}
      />
      <div className="mb-40">
        <ContactInfo />
      </div>
      <div className="mt-72">{/* <ContactForm /> */}</div>
    </>
  );
};

ContactMe.Layout = Layout;

export default ContactMe;
