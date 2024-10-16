import React from "react";

const Index = () => {
  return (
    <div className="container ">
      <div className="my-5 flex items-center justify-start">
        <h3>Kariyer</h3>
        <small className="ml-5">Bize Katılın</small>
      </div>
      <div className="relative my-10">
        <img className="rounded-xl opacity-25" src="/img/blog2.png" alt="blog_image" />
        <div className="absolute z-10 top-10 left-1/3">
          <div className="text-center my-5 flex flex-col items-center justify-center h-[30rem]">
            <h4 className=" font-bold">Geleceğe Dokunmak İçin Bize Katılın</h4>
            <div className="flex items-center justify-evenly mt-3">
              <a
                href="mailto:kariyer@nohutakademi.com"
                className="underline text-blue-700 font-bold"
              >
                info@linkkurs.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
