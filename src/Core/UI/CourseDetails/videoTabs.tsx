import React, { useEffect, useState } from "react";

interface VideoData {
  tabID?: number;
  name?: string;
  url?: string;
  id?: number;
}
interface Props {
  initialTab: any;
  videoData: {
    datas: VideoData[];
  };
}
const Tabs: React.FC<Props> = ({ videoData, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  // useEffect(() => {
  //   setActiveTab(videoData?.datas[0]?.id);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <div className="p-4">
      <div className="my-4">
        {videoData?.datas?.map(
          (data: VideoData) =>
            activeTab === data?.id && (
              <div key={data?.id}>
                <video width="800" controls>
                  <source src={data?.url} type="video/mp4" />
                </video>
              </div>
            )
        )}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {videoData?.datas?.map((data: VideoData) => (
          <button
            key={data?.id}
            className={`px-4 ${
              activeTab === data?.id
                ? "bg-primary rounded-md text-white"
                : "bg-gray-200 text-black border-[0.5px] border-gray-400 rounded-md"
            }`}
            onClick={() => setActiveTab(data?.id)}
          >
            {data?.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
