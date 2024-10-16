import React from "react";
import type { CollapseProps } from "antd";
import { Collapse, Space } from "antd";
import PackageNumInfos from "./PackageNumInfos";

interface Props {
  datas: any;
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const PackageLessons: React.FC<Props> = ({ datas }) => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "TYT Matematik",
      children: (
        <div>
          <PackageNumInfos section={datas?.section} />
          <div className="my-8 pl-3">
            <p
              dangerouslySetInnerHTML={{
                __html: datas?.descs.slice(0, 350),
              }}
            />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "TYT Geometri",
      children: (
        <div>
          <PackageNumInfos section={datas?.section} />
          <div className="my-8 pl-3">
            <p
              dangerouslySetInnerHTML={{
                __html: datas?.descs.slice(0, 350),
              }}
            />
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "TYT Fizik",
      children: (
        <div>
          <PackageNumInfos section={datas?.section} />
          <div className="my-8 pl-3">
            <p
              dangerouslySetInnerHTML={{
                __html: datas?.descs.slice(0, 350),
              }}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <Collapse
      bordered={false}
      ghost
      defaultActiveKey={["1"]}
      expandIconPosition="end"
      items={items}
    />
  );
};

export default PackageLessons;
