import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import PackageNumInfos from "./PackageNumInfos";

interface Props {
  datas: any;
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const AboutPackage: React.FC<Props> = ({ datas }) => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Canlı Dersler",
      children: (
        <div>
          <div className="my-8">
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
      label: "Temel Konular",
      children: (
        <div>
          <div className="my-8">
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
      label: "Hedef Belirle",
      children: (
        <div>
          <div className="my-8">
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
    <>
      <div className="my-8 pl-4">
        <p
          dangerouslySetInnerHTML={{
            __html: datas?.descs.slice(0, 350),
          }}
        />
      </div>
      <Collapse
        bordered={false}
        ghost
        defaultActiveKey={["1"]}
        expandIconPosition="end"
        items={items}
      />
    </>
  );
};

export default AboutPackage;
