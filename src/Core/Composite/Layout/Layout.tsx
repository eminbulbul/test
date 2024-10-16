"use strict";
import React, { useEffect } from "react";
import { Header, Footer } from "@/Core/index";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setMousePositionRedux } from "@/Redux/actions/CursorMove";
import ScrollToTop from "@/UI/ScrollToTop";
import { useTheme } from "next-themes";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import FacebookPixel from "../FacebookPixel/FacebookPixel";
import * as fbq from "@/Public/fpixel";

export type LayoutProps = {
  children: React.ReactNode;
};
const LayoutPage: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const currentRoute = router.pathname.split("/")[1];
  const dispatch = useDispatch();
  const { systemTheme, theme: getTheme, setTheme } = useTheme();
  const onMouseMove = (e: MouseEvent) => {
    dispatch(
      setMousePositionRedux({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      })
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    setTheme("light");
  }, []);

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  const LayoutSwitch = (route: string) => {
    switch (route) {
      default:
        return (
          <>
            <Header />
            {children}
            <Footer />
            <FacebookPixel />
            <Script
              id="fb-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
              }}
            />
            <ScrollToTop />
          </>
        );
    }
  };

  return (
    <>
      {LayoutSwitch(currentRoute)}
      <GoogleAnalytics gaId="G-4BB7TN8V18" />
    </>
  );
};
export default LayoutPage;
