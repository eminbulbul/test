import { ConfigProvider, theme } from "antd";
import { useTheme } from "next-themes";
import trTR from "antd/locale/tr_TR";
import "dayjs/locale/tr";
import { useEffect, useState } from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

const LocaleProvider: React.FC<LayoutProps> = ({ children }) => {
  const { systemTheme, theme: getTheme, setTheme } = useTheme();
  const currentTheme = getTheme === "system" ? systemTheme : getTheme;
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey(key + 1);
  }, []);
  return (
    <ConfigProvider
      locale={trTR}
      key={key}
      theme={{
        algorithm:
          currentTheme !== "light"
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#20ad96",
          colorBorder: "#111827",
        },
        components: {
          Button: {
            defaultColor: "#d72027",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default LocaleProvider;
