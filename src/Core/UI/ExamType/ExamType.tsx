import { Select } from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";

const OverallSuccess = () => {
  const [chart, setChart] = useState<string>("Tümü");
  const data = [
    {
      name: "Doğru",
      Hedef: chart,
      Durum: 18,
    },
    {
      name: "Yanlış",
      Hedef: chart,
      Durum: 2,
    },
    {
      name: "Boş",
      Hedef: chart,
      Durum: 5,
    },
    {
      name: "Başarı",
      Hedef: chart,
      Durum: 50,
    },
  ];

  const config: any = {
    data,
    isGroup: true,
    xField: "Hedef",
    yField: "Durum",
    seriesField: "name",

    color: ["#52A666", "#FF003F", "#f88c24", "#1ca9e6"],

    label: {
      position: "middle",
      layout: [
        {
          type: "interval-adjust-position",
        },
        {
          type: "interval-hide-overlap",
        },
        {
          type: "adjust-color",
        },
      ],
    },
  };

  const handleChange = (value: string, label: any) => {
    if (value == "1") {
      setChart("Tümü");
    } else if (value == "2") {
      setChart("Soru Bankası");
    } else if (value == "3") {
      setChart("Yaprak Test");
    } else if (value == "4") {
      setChart("Deneme Sınavı");
    } else if (value == "5") {
      setChart("Föy Testleri");
    }
  };

  return (
    <>
      <div className="mt-5 text-2xl">Sınav Türü</div>
      <div className="h-72 mt-10">
        <Select
          defaultValue="1"
          className="w-full h-10"
          onChange={handleChange}
          options={[
            { value: "1", label: "Tümü" },
            { value: "2", label: "Soru Bankası" },
            { value: "3", label: "Yaprak Test" },
            { value: "4", label: "Deneme Sınavı" },
            { value: "5", label: "Föy Testleri" },
          ]}
        />
        {/* <Column {...config} /> */}
      </div>
    </>
  );
};

export default OverallSuccess;
