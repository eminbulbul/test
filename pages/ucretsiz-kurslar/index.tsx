import SEO from "@/Composite/Seo";
import Layout01 from "@/Core/Composite/Layout";
import Breadcrumb from "@/UI/Breadcrumb";
import CourseArea from "@/UI/CourseFull";
import { FC, useEffect } from "react";
import useFetchApi from "@/Hooks/useFetchApi";
import Spinner from "@/UI/Spinner";

type CourseGridProps = {
  courses?: any;
};

type CourseGridComponent = FC<CourseGridProps> & {
  Layout?: any;
};

const Coursegrid01: CourseGridComponent = () => {
  const [getAllFreePackages, allFreePackages, loading] = useFetchApi(
    `https://api.linkkurs.com/api/link-kurs/all-packages`
  );

  useEffect(() => {
    getAllFreePackages();
  }, []);

  return (
    <>
      <SEO title="Ücretsiz Paketlerimiz" />
      <Breadcrumb
        pages={[{ path: "/", label: "Ana Sayfa" }]}
        currentPage="Ücretsiz Paketlerimiz"
      />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="flex w-full justify-center items-center text-center mb-10">
            <p className="w-1/2 text-xl">
              Ücretsiz Kurslarımız üye olan öğrencilerimizin sisteme üyelik
              tarihi itibari ile{" "}
              <span className="font-bold underline">30 gün</span> süreyle
              sınıfına ait paketlerden birinin ücretsiz kullanım hakkıdır.
            </p>
          </div>
          {allFreePackages != null && (
            <CourseArea mottoText={true} data={{ courses: allFreePackages }} />
          )}
        </div>
      )}
    </>
  );
};

Coursegrid01.Layout = Layout01;

export default Coursegrid01;
