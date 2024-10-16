import { TabContainer, TabNav, TabPane, TabList, TabContent } from "@/UI/Tab";
import PackageDescription from "./PackageDescription";
import PackageDetailCard from "./PackageDetailCard";
// import Educators from "./Educators";
import { useEffect } from "react";
import PackageNumInfos from "./PackageNumInfos";
import PackageLessons from "./PackageLessons";
import AboutPackage from "./AboutPackage";
type TProps = {
  course?: any;
  courseFull?: any;
};
const CourseDetails = ({ course }: TProps) => {
  return (
    <section className="course-details pb-20">
      <div className="container grid lg:grid-cols-3 gap-12">
        <div className="lg:col-[1/3]">
          <div className="md:flex gap-9">
            <video
              className="rounded-lg w-full md:mb-0 mb-10 md:w-[370px]"
              controls
            >
              <source src={course?.trailers[0]?.url} type="video/mp4" />
            </video>
            <div>
              <p
                className="text-lg"
                dangerouslySetInnerHTML={{
                  __html: course?.descs.slice(0, 350),
                }}
              />
            </div>
          </div>
          <TabContainer variant="underline" className="mt-20">
            <TabList>
              <TabNav section={course?.section}>Paketin İçindekiler </TabNav>
              <TabNav section={course?.section}>Paket Dersleri</TabNav>
              <TabNav section={course?.section}>Paket Hakkında</TabNav>
            </TabList>
            <TabContent>
              <TabPane>
                <div className="course-overview prose prose-h2:text-xl sm:prose-h2:text-3xl max-w-none">
                  <div className="mt-12">
                    <PackageNumInfos section={course?.section} />
                  </div>
                  <h3 className="pl-5 font-medium">
                    {course?.fullname} Özellikleri
                  </h3>
                  <PackageDetailCard />
                </div>
              </TabPane>
              <TabPane>
                <div className="mt-10">
                  <PackageLessons datas={course} />
                </div>
              </TabPane>
              <TabPane>
                <AboutPackage datas={course} />
              </TabPane>
            </TabContent>
          </TabContainer>
        </div>
        <div className="lg:col-[3/-1]">
          <PackageDescription datas={course} />
          <div className="grid grid-cols-2 gap-4 bg-white mt-8 p-6 rounded-md">
            <img className="w-full" src="/img/pagedesc1.png" alt="pagedesc" />
            <img className="w-full" src="/img/pagedesc2.png" alt="pagedesc" />
            <img className="w-full" src="/img/pagedesc3.png" alt="pagedesc" />
            <img className="w-full" src="/img/pagedesc4.png" alt="pagedesc" />
            <img className="w-full" src="/img/pagedesc5.png" alt="pagedesc" />
            <img className="w-full" src="/img/pagedesc6.png" alt="pagedesc" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
