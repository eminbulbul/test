import { AppProps } from "next/app";
import wrapper from "@/Redux/store";
import { Layout, LocaleProvider } from "@/Core/index";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "atropos/css/min";
import "@/Public/styles/global.css";
import "@/Public/styles/fonts.css";
import "@/Public/styles/font-linea.css";
import "@/Public/styles/font-awesome.min.css";
import "@/Public/styles/swiper.css";

import "react-credit-cards/es/styles-compiled.css";

import axios from "axios";
import { getCookie } from "cookies-next";
import { message } from "antd";

import "dayjs/locale/tr";
import "dayjs/locale/en";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";


axios.defaults.baseURL = process.env.NEXT_APP_API_BASE_URL;
axios.defaults.headers.common = {
  Authorization: `Bearer ${getCookie("access_token")}`,
};

message.config({
  maxCount: 1,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }


  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <LocaleProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LocaleProvider>
    </ThemeProvider>
  );
}
export default wrapper.withRedux(MyApp);
