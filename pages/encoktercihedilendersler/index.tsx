import SEO from "@/Composite/Seo";
import Layout01 from "@/Core/Composite/Layout";
import Breadcrumb from "@/UI/Breadcrumb";
import CourseArea from "@/UI/CourseFull";
import { FC, useEffect } from "react";
import useFetchApi from "@/Hooks/useFetchApi";
import Spinner from "@/UI/Spinner";

type CourseGridProps = {
  courses?: any;
  areaTitle?: any;
};

type CourseGridComponent = FC<CourseGridProps> & {
  Layout?: any;
};

const Coursegrid01: CourseGridComponent = () => {
  const [getPackages, packages, loading] = useFetchApi(
    "https://api.linkkurs.com/api/link-kurs/packages"
  );
  useEffect(() => {
    getPackages();
  }, []);

  return (
    <>
      <SEO title="En Çok Tercih Edilen Paketlerimiz" />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Breadcrumb
            pages={[{ path: "/", label: "Ana Sayfa" }]}
            currentPage="En Çok Tercih Edilen Paketlerimiz"
          />
          <CourseArea
            mottoText={false}
            areaTitle="mostPreffered"
            data={{ courses: packages }}
          />
        </>
      )}
    </>
  );
};

Coursegrid01.Layout = Layout01;

export default Coursegrid01;
