import React, { useEffect } from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

type TProps = {
  course?: any;
};

const CoursesAccordion = ({ course }: TProps) => {
  const router = useRouter();
  const currentPath = router.asPath;

  const sections =
    course?.for_acordion?.length > 0
      ? course.for_acordion
      : course?.sub_packages?.datas;

  if (!sections) {
    return <p>No sub-packages available</p>;
  }

  const items: CollapseProps["items"] = sections.map(
    (section: any, index: any) => ({
      key: `${index + 1}`,
      label: section?.fullname,
      children: (
        <ul className="list-disc pl-4 ">
          {(section?.sub_packages || section?.sub2_packages?.datas)?.map(
            (subPackage: any, idx: any) => (
              <li key={idx}>
                <Link
                  href={`/canli-kurslarimiz/${
                    subPackage?.main_package_slug +
                    "/" +
                    subPackage?.parent_slug +
                    "/" +
                    subPackage?.slug
                  }`}
                >
                  <p
                    className={`${
                      currentPath ===
                      `/canli-kurslarimiz/${
                        subPackage?.main_package_slug +
                        "/" +
                        subPackage?.parent_slug +
                        "/" +
                        subPackage?.slug
                      }`
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {subPackage?.fullname}
                  </p>
                </Link>
              </li>
            )
          )}
        </ul>
      ),
    })
  );

  return (
    <div>
      <h3>{course?.fullname}</h3>
      <Collapse items={items} defaultActiveKey={["1"]} />
    </div>
  );
};

export default CoursesAccordion;
