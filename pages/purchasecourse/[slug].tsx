import React, { useEffect, useState } from "react";
import { Button, message, Steps } from "antd";
import PaymentForm from "./PaymentForm";
import { useRouter } from "next/router";
import PackageInfo from "./packageInfo";
import Spinner from "@/UI/Spinner";
import StudentInfo from "./StudentInfo";
import ParentInfo from "./ParentInfo";
import AdressInfo from "./AdressInfo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/reducers";
import PurchaseResult from "pages/purchaseresult";
import useMutateApi from "@/Hooks/useMutateApi";
import { fetchPackageBySlug } from "@/Redux/actions";

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [couponValid, setCouponValid] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [studentInfos, setstudentInfos] = useState<any>([]);
  const [parentInfos, setParentInfos] = useState([]);
  const [adressInfos, setAdressInfos] = useState([]);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);
  const next = () => {
    setCurrent(current + 1);
  };
  // const demoNext = () => {
  //   setCurrent(current + 1);
  // };
  const prev = () => {
    setCurrent(current - 1);
  };
  const { slug } = useRouter().query;
  const dispatch = useDispatch<any>();
  const { data: packageBySlug, loading } = useSelector(
    (state: RootState) => state.package
  );

  useEffect(() => {
    if (slug && !packageBySlug.length) {
      dispatch(fetchPackageBySlug(slug as string));
    }
  }, [slug]);

  useEffect(() => {
    if (packageBySlug.length) {
      setCurrentPrice(packageBySlug[0]?.price);
    }
  }, [packageBySlug]);
  useEffect(() => {
    if (packageBySlug.length) {
      setCurrentPrice(packageBySlug[0]?.price);
    }
  }, [packageBySlug]);
  const [postForm] = useMutateApi({
    apiPath: "https://api.linkkurs.com/api/link-kurs/buying",
    method: "POST",
  });

  const onFinish = async () => {
    const response = await postForm({
      ...studentInfos,
      package_id: packageBySlug[0]?.id,
    });

    if (response?.status === 201) {
      message.success("İstek başarılı!");
      setCurrent(current + 1);
    } else {
      message.error(`${response.error}`);
    }
  };

  const { user } = useSelector((state: RootState) => state.auth);

  const steps = [
    {
      title: "Sipariş Özeti",
      id: 1,
      content: packageBySlug ? (
        <PackageInfo
          title={packageBySlug[0]?.fullname || ""}
          image={packageBySlug[0]?.image_url || ""}
          price={packageBySlug[0]?.price || 0}
          description={packageBySlug[0]?.descs || ""}
          shortDesc={packageBySlug[0]?.short_descs || ""}
          setCouponValid={setCouponValid}
          setCurrent={setCurrent}
          current={current}
        />
      ) : null,
    },
    {
      title: "Sipariş Sonucu",
      id: 6,
      content: packageBySlug ? <PurchaseResult /> : <div>No package data</div>,
    },
  ];
  //20.09.2024 pazartesi sonrası burası düzeltilmeli. Burası giriş yapmış kullanıcı için bug oluşturuyor
  if (user?.type != "parent" || user == null) {
    steps.push({
      title: "Öğrenci Bilgileri",
      id: 2,
      content: (
        <StudentInfo
          current={current}
          couponValid={couponValid}
          currentPrice={currentPrice}
          currentSetter={setCurrent}
          isParrent={false}
          dataSetter={setstudentInfos}
          isFormSubmitted={isFormSubmitted}
          captcha={isCaptchaVerified}
          captchaSetter={setIsCaptchaVerified}
          formchecked={allCheckboxesChecked}
          formcheckedSetter={setAllCheckboxesChecked}
        />
      ),
    });
  }
  if (user == null && currentPrice !== 0 && !couponValid) {
    steps.push({
      title: "Veli Bilgileri",
      id: 3,
      content: (
        <ParentInfo
          current={current}
          currentSetter={setCurrent}
          isParrent={false}
          dataSetter={setParentInfos}
          isFormSubmitted={isFormSubmitted}
        />
      ),
    });
  }

  if (!couponValid) {
    if (currentPrice !== 0) {
      steps.push({
        id: 5,
        title: "Ödeme Bilgileri",
        content: <PaymentForm packageInfo={packageBySlug[0]} />,
      });
    }
  }

  if (currentPrice !== 0 && !couponValid) {
    steps.push({
      title: "Fatura Adres Bilgileri",
      id: 4,
      content: (
        <AdressInfo
          current={current}
          currentSetter={setCurrent}
          isParrent={false}
          isFormSubmitted={isFormSubmitted}
          dataSetter={setAdressInfos}
        />
      ),
    });
  }
  const sortedSteps = steps.sort((a, b) => a.id - b.id);
  const items = sortedSteps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <div className="w-full md:container">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Steps
            style={{ width: "auto", margin: 50 }}
            current={current}
            items={items}
          />
          <div>
            <div className="h-full w-full">{steps[current].content}</div>
            <div style={{ marginBottom: 50 }}>
              {/* {current == 0 && (
                <Button
                  className="ml-[3.2rem] h-14 mt-5 md:w-[25rem] w-full"
                  type="primary"
                  onClick={() => next()}
                >
                  İLERİ
                </Button>
              )} */}
              <div className="w-full md:flex justify-between  md:mx-[3.2rem]">
                {current > 0 && current !== steps.length - 1 && (
                  <Button
                    className="w-full md:block hidden md:w-1/3 h-14"
                    onClick={() => prev()}
                  >
                    GERİ
                  </Button>
                )}
                {current === steps.length - 2 && (
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full md:w-1/3 md:mr-[6rem] py-7"
                    disabled={!isCaptchaVerified || !allCheckboxesChecked}
                    onClick={() => onFinish()}
                  >
                    Tamamla ve Bitir
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
