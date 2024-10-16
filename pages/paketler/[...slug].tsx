import Layout01 from "@/Core/Composite/Layout";
import CourseArea from "@/UI/CourseFull";
import { FC, useEffect } from "react";
import { useRouter } from "next/router";
import useFetchApi from "@/Hooks/useFetchApi";
import Spinner from "@/UI/Spinner";
import Link from "next/link";

type CourseGridProps = {
  courses?: any;
};

type CourseGridComponent = FC<CourseGridProps> & {
  Layout?: any;
};

const Coursegrid01: CourseGridComponent = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [getAllPackages, allPackages, loading] = useFetchApi(
    `https://api.linkkurs.com/api/link-kurs/parent-packages/${slug}`
  );
  const [getPackages, packages] = useFetchApi(
    "https://api.linkkurs.com/api/link-kurs/parent-packages"
  );

  useEffect(() => {
    getAllPackages();
    getPackages();
  }, [slug]);

  const currentTab = packages?.find((tab: any) => tab?.slug == slug);
  return (
    <div className="bg-[#EDEDF5] relative">
      <div className="fixed top-0 right-0">
        <img src="/svgs/VectorUp.svg" alt="vector_up" />
      </div>
      <h2 className="text-center py-5">Kurs Paketlerimiz</h2>
      <div className="md:flex grid grid-cols-2 sm:grid-cols-3 container my-5 justify-evenly gap-5">
        {packages?.map((item: any) => (
          <Link className="w-full z-1" href={item?.slug} key={item?.id}>
            <button
              className={
                currentTab?.slug === item?.slug
                  ? "rounded-3xl bg-cardButtonPrimary text-white hover:bg-white hover:text-cardButtonPrimary transition-all ease-in-out duration-200 py-2 px-1 w-full"
                  : "rounded-3xl text-cardButtonPrimary bg-white hover:bg-cardButtonPrimary hover:text-white transition-all ease-in-out duration-200 py-2 px-1 w-full"
              }
            >
              {item?.fullname}
            </button>
          </Link>
        ))}
      </div>
      <div className="flex justify-start container gap-5 my-7">
        <div className="w-15 h-5 bg-cardButtonSecondary rounded-r-full "></div>
        <button>TÜMÜ</button>
        <button>Sözel Paketler</button>
        <button>Eşit Ağırlık Paketler</button>
        <button>Sayısal Paketler</button>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {allPackages != null && (
            <CourseArea mottoText={true} data={{ courses: allPackages }} />
          )}
        </div>
      )}
      <div className=" left-0 bottom-0">
        <img src="/svgs/VectorDown.svg" alt="vector_down" />
      </div>
    </div>
  );
};

Coursegrid01.Layout = Layout01;

export default Coursegrid01;
