import React from "react";
import type { NextPage } from "next";
// import { useSelector } from "react-redux";
// import { RootState } from "@/Redux/reducers";
import { Home } from "@/Core/index";
// export async function getServerSideProps() {
//   return {
//     redirect: {
//       destination:
//         "/canli-kurslarimiz/tyt-matematik-canli-kurs-paketi/tyt-matematik-canli-kurs-paket/tyt-matematik-temel-seviye-canli-kurs-paketi",
//       permanent: false,
//     },
//   };
// }
const Index: NextPage = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default Index;
