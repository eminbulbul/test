import dynamic from "next/dynamic";
// const Column = dynamic(
//   () => import("@ant-design/plots").then(({ Column }) => Column),
//   {
//     ssr: false,
//   }
// );

const OverallSuccess = () => {
  const data = [
    {
      name: "Doğru",
      Hedef: "Genel Başarı",
      Durum: 18,
    },
    {
      name: "Yanlış",
      Hedef: "Genel Başarı",
      Durum: 2,
    },
    {
      name: "Boş",
      Hedef: "Genel Başarı",
      Durum: 15,
    },
    {
      name: "Başarı",
      Hedef: "Genel Başarı",
      Durum: 10,
    },
  ];

  const config: any = {
    data,
    isGroup: true,
    xField: "Hedef",
    yField: "Durum",
    seriesField: "name",

    /** 设置颜色 */
    color: ["#52A666", "#FF003F", "#f88c24", "#1ca9e6"],

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: "interval-adjust-position",
        }, // 数据标签防遮挡
        {
          type: "interval-hide-overlap",
        }, // 数据标签文颜色自动调整
        {
          type: "adjust-color",
        },
      ],
    },
  };

  return (
    <>
      <div className="mb-2 text-2xl">Genel Başarı</div>
      <div className="h-72 mt-10">
      </div>
    </>
  );
};

export default OverallSuccess;
