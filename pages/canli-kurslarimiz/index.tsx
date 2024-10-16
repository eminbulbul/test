import SEO from "@/Composite/Seo";
import Layout01 from "@/Core/Composite/Layout";
import Breadcrumb from "@/UI/Breadcrumb";
import CourseArea from "@/UI/CourseFull";
import { FC, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { upperCase } from "lodash";
import useFetchApi from "@/Hooks/useFetchApi";
import Spinner from "@/UI/Spinner";

type CourseGridProps = {
  courses?: any;
};

type CourseGridComponent = FC<CourseGridProps> & {
  Layout?: any;
};

const Coursegrid01: CourseGridComponent = () => {
  const router = useRouter();
  const { category } = router.query;
  const currentPageTitle = useMemo(() => {
    if (typeof category === "string") {
      return `${upperCase(category)} PAKETLERİMİZ`;
    }
    return "Tüm Paketlerimiz";
  }, [category]);
  const [getAllPackages, allPackages, loading] = useFetchApi(
    `https://api.linkkurs.com/api/link-kurs/all-packages`
  );

  useEffect(() => {
    getAllPackages();
  }, []);

  return (
    <>
      <SEO title="Tüm Paketlerimiz" />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Breadcrumb
            pages={[{ path: "/", label: "Ana Sayfa" }]}
            currentPage={currentPageTitle}
          />
          {allPackages != null && (
            <CourseArea mottoText={true} data={{ courses: allPackages }} />
          )}
        </div>
      )}
    </>
  );
};

Coursegrid01.Layout = Layout01;

export default Coursegrid01;
