import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import useFetchApi from "@/Hooks/useFetchApi";
import Spinner from "@/UI/Spinner";

type TabPosition = "left" | "top";
const App: React.FC = () => {
  const [mode, setMode] = useState<TabPosition>("left");
  const updateTabPosition = () => {
    if (window.innerWidth >= 768) {
      setMode("left");
    } else {
      setMode("top");
    }
  };
  useEffect(() => {
    updateTabPosition();
    window.addEventListener("resize", updateTabPosition);
    return () => {
      window.removeEventListener("resize", updateTabPosition);
    };
  }, []);
  const [getAgreements, agreements, loading] = useFetchApi(
    `https://api.linkkurs.com/api/link-kurs/agreements`
  );

  useEffect(() => {
    getAgreements();
  }, []);
  return (
    <div className="container pb-36">
      {loading ? (
        <Spinner />
      ) : (
        <div className="my-10">
          <Tabs
            defaultActiveKey="0"
            tabPosition={mode}
            className="h-full"
            items={agreements?.map((agreement: any) => ({
              label: agreement.title,
              key: String(agreement.id),
              children: (
                <div>
                  <p className="my-5">
                    <strong>{agreement.title}</strong>
                  </p>
                  <div
                    key={agreement.id}
                    className="mb-2.5 child:text-heading"
                    dangerouslySetInnerHTML={{
                      __html: agreement.body,
                    }}
                  />
                </div>
              ),
            }))}
          />
        </div>
      )}
    </div>
  );
};

export default App;
