import useFetchApi from "@/Hooks/useFetchApi";
import FormCheckbox from "@/UI/FormElements/FormCheckbox";
import ModalComponent from "@/UI/Modal";
import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import Card from "react-credit-cards";
import ReCAPTCHA from "react-google-recaptcha";
interface props {
  packageInfo?: any;
}

const PaymentForm: React.FC<props> = ({ packageInfo }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [formatedDate, setformatedDate] = useState("");
  const [cvc, setCVC] = useState("");

  const handleDate = (e: any) => {
    const value = e.target.value;
    setExpiry(value);
    const [year, month] = value.split("-");
    const formattedDate = `${month}${year.slice(-2)}`;
    setformatedDate(formattedDate);
  };

  const [getAgreements, agreements, loading] = useFetchApi(
    `https://api.linkkurs.com/api/link-kurs/agreements`
  );
  useEffect(() => {
    getAgreements();
  }, []);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const handleCheckboxChange = (checked: boolean, id: number) => {
    if (checked) {
      setCheckedItems((prev) => [...prev, id]);
    } else {
      setCheckedItems((prev) => prev.filter((itemId) => itemId !== id));
    }
  };

  return (
    <div className="md:flex items-center justify-center mb-20  px-[3.2rem]">
      <div className="w-full">
        <h3 className="mb-12">Kart Bilgilerini Giriniz</h3>
        <div className="w-full md:flex items-center">
          <div className="md:w-1/2 w-full">
            <Form layout="vertical">
              <Form.Item
                label="Kart Numarası"
                name="number"
                rules={[
                  {
                    required: true,
                    message: "Kart numarasını giriniz",
                  },
                  {
                    pattern: /^[0-9]{16}$/,
                    message: "Kart numarası 16 haneli olmalıdır",
                  },
                ]}
              >
                <Input
                  placeholder="Kart Numarası"
                  className="py-3"
                  maxLength={16}
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                />
              </Form.Item>

              <Form.Item
                label="Kart Üzerindeki İsim"
                name="name"
                rules={[
                  { required: true, message: "Kart üzerindeki ismi giriniz" },
                ]}
              >
                <Input
                  placeholder="Kart Üzerindeki İsim"
                  className="py-3"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Form.Item>

              <div className="md:flex w-full justify-between">
                <Form.Item
                  label="Son Kullanma Tarihi"
                  className=""
                  name="expiry"
                  rules={[
                    {
                      required: true,
                      message: "Son kullanma tarihini seçiniz",
                    },
                  ]}
                >
                  <Input
                    type="month"
                    className="py-3"
                    placeholder="Son Kullanma Tarihi"
                    onChange={handleDate}
                    value={expiry}
                  />
                </Form.Item>

                <Form.Item
                  label="CVC"
                  name="cvc"
                  rules={[
                    { required: true, message: "CVC kodunu giriniz" },
                    {
                      pattern: /^[0-9]{3}$/,
                      message: "CVC kodu 3 haneli olmalıdır",
                    },
                  ]}
                >
                  <Input
                    placeholder="CVC"
                    maxLength={3}
                    className="py-3"
                    onChange={(e) => setCVC(e.target.value)}
                    value={cvc}
                  />
                </Form.Item>
              </div>
            </Form>
          </div>
          <div className="w-full md:w-1/2 md:scale-100 scale-125 md:my-0 my-24">
            <Card
              number={number}
              name={name}
              expiry={formatedDate}
              cvc={cvc}
              focused={undefined}
            />
          </div>
        </div>
      </div>
      <div className="md:mt-0 mt-10">
        <h3 className="mb-5">Özet</h3>
        <div className="flex-col items-center justify-between w-full h-full">
          <div className="flex h-24 border-b-2 pb-4">
            <img
              className="h-24 pb-2 rounded-lg"
              src={packageInfo?.image_url || ""}
              alt=""
            />
            <div className="h-full flex-col justify-between ml-3">
              <p className="text-end">{packageInfo?.fullname || ""}</p>
              <p className="text-end">{packageInfo?.price || ""} TL</p>
            </div>
          </div>
          <div className="w-full md:mt-2 mt-10">
            <h4>Ödenecek Tutar</h4>
            <div className="w-full flex justify-between">
              <p className="font-bold">Toplam:</p>
              <p>{packageInfo?.price || ""} TL</p>
            </div>
          </div>
        </div>

        {loading ? (
          <div>Yükleniyor</div>
        ) : (
          <div className="my-10">
            <Form.Item className="flex">
              {agreements?.map((item: any) => (
                <FormCheckbox
                  key={item.id}
                  checked={checkedItems.includes(item.id)}
                  onChange={(e) =>
                    handleCheckboxChange(e.target.checked, item.id)
                  }
                >
                  <ModalComponent title={item.title} content={item.body} />
                </FormCheckbox>
              ))}
            </Form.Item>
            <ReCAPTCHA
              sitekey="6Lfob0UqAAAAALGZ0sQh3f9QkXNVKNIpgAHEB6Ez"
              className="mt-5"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
