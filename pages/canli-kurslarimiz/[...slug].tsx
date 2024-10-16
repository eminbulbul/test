import type { NextPage } from "next";
import SEO from "@/Composite/Seo";
import Layout01 from "@/Composite/Layout";
import Breadcrumb from "@/UI/Breadcrumb";
import CourseDetails from "@/UI/CourseDetails";
import { useRouter } from "next/router";
import useFetchApi from "@/Hooks/useFetchApi";
import { useEffect, useMemo } from "react";
import Spinner from "@/UI/Spinner";

type TProps = {
  course?: any;
  instructor?: any;
  relatedCourses?: any;
  curriculum?: any;
  currentCourse?: any;
};

type PageProps = NextPage<TProps> & {
  Layout: typeof Layout01;
};

const SingleCourse: PageProps = () => {
  const router = useRouter();
  const { slug } = router.query;
  const formattedSlug = Array.isArray(slug) ? slug.join("/") : slug;

  const [getPackageById, packageById, loading] = useFetchApi(
    formattedSlug
      ? `https://api.linkkurs.com/api/link-kurs/packages/${formattedSlug}`
      : undefined
  );

  useEffect(() => {
    if (formattedSlug) {
      getPackageById();
    }
  }, [slug]);

  const breadcrumbPages = useMemo(() => {
    const pages = [
      { path: "/", label: "Anasayfa" },
      { path: "/canli-kurslarimiz", label: "Kurslar" },
    ];

    const parentFullname = packageById?.[0]?.main_package_fullname;
    const packageParrent = packageById?.[0]?.parent_fullname;
    const parentSlug = packageById?.[0]?.main_package_slug;

    if (parentFullname && packageParrent !== "No Parent") {
      pages.push({
        path: `/canli-kurslarimiz/${parentSlug}`,
        label: parentFullname,
      });
    }

    return pages;
  }, [packageById, slug]);

  return (
    <div className="bg-[#EDEDF5] relative">
      <div className="absolute top-0 right-0">
        <img src="/svgs/VectorUp.svg" alt="vector_up" />
      </div>
      <SEO title="Course Details" />
      {loading ? (
        <Spinner />
      ) : packageById !== null ? (
        <>
          <Breadcrumb
            pages={breadcrumbPages}
            currentPage={packageById[0]?.fullname}
            section={packageById[0]?.section}
          />
          <CourseDetails course={packageById[0]} />
        </>
      ) : (
        <div className="text-center">Kurs bulunamadı.</div>
      )}
      <div className="left-0 bottom-0 absolute">
        <img src="/svgs/VectorDown.svg" alt="vector_down" />
      </div>
    </div>
  );
};

SingleCourse.Layout = Layout01;

export default SingleCourse;
