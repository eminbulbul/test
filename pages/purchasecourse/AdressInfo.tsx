import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, Radio } from "antd";
import useFetchApi from "@/Hooks/useFetchApi";

const { Option } = Select;
const { TextArea } = Input;

interface Props {
  current: number;
  isParrent: boolean;
  isFormSubmitted: boolean;
  dataSetter: any;
  currentSetter: any;
}

type FieldType = {
  addressName?: string;
  addressPhone?: string;
  addressCity?: string;
  addressCounty?: string;
  addressTCNo?: string;
  postalCode?: string;
  invoiceType?: string;
  address?: string;
  taxNo?: string;
  taxOffice?: string;
  name?: string;
};

const AdressInfo: React.FC<Props> = ({
  current,
  currentSetter,
  isParrent,
  dataSetter,
  isFormSubmitted,
}) => {
  const [form] = Form.useForm();
  const [counties, setCounties] = useState<any[]>([]);
  const [billType, setBillType] = useState<any>("0");
  const onFinish = (values: any) => {
    dataSetter(values);
    currentSetter(current + 1);
  };
  const [getCities, cities] = useFetchApi(
    "https://api.linkkurs.com/api/link-kurs/cities"
  );
  const onInputChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (
        name === "addressTCNo" ||
        (name === "addressPhone" && value.length > 11)
      ) {
        form.setFieldsValue({ [name]: value.slice(0, 11) });
      } else {
        form.setFieldsValue({ [name]: value });
      }
    };

  useEffect(() => {
    getCities();
  }, []);
  useEffect(() => {
    form.resetFields();
  }, [current]);

  const handleCityChange = (cityName: string) => {
    const selectedCity = cities.find((city: any) => city.fullname === cityName);
    if (selectedCity) {
      setCounties(selectedCity.counties || []);
      form.setFieldsValue({ addressCounty: undefined });
    }
  };

  const validateTCNo = (_: any, value: string) => {
    if (!value) {
      return Promise.reject("Lütfen TC Kimlik Numaranızı giriniz!");
    }
    if (value.length !== 11 || !/^\d+$/.test(value)) {
      return Promise.reject("TC Kimlik No 11 haneli bir sayı olmalıdır!");
    }
    const digits = value.split("").map(Number);
    const lastDigit = digits[10];
    const sumOfFirstTen = digits
      .slice(0, 10)
      .reduce((acc, curr) => acc + curr, 0);
    if (lastDigit !== sumOfFirstTen % 10 || lastDigit % 2 !== 0) {
      return Promise.reject("Geçersiz TC Kimlik No !");
    }
    return Promise.resolve();
  };

  return (
    <div className="container px-[3.2rem]">
      <h3 className="mb-5">Fatura Adres Bilgileri</h3>
      <Form
        form={form}
        layout="vertical"
        name="addressInfoForm"
        onFinish={onFinish}
        initialValues={{ remember: false }}
      >
        <Form.Item<FieldType>
          label="Fatura Türü"
          name="invoiceType"
          rules={[{ required: true, message: "Lütfen fatura türünü seçiniz!" }]}
        >
          <Radio.Group onChange={(e) => setBillType(e.target)}>
            <Radio defaultChecked value="0">Bireysel</Radio>
            <Radio value="1">Kurumsal</Radio>
          </Radio.Group>
        </Form.Item>
        {billType.value == "0" && (
          <Form.Item<FieldType>
            label="Ad / Soyad"
            name="name"
            rules={[
              {
                required: true,
                message: "Lütfen Ad / Soyad bilgilerinizi giriniz!",
              },
              {
                pattern: /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]*$/,
                message: "Ad / Soyad alanına sayı giremezsiniz!",
              },
            ]}
          >
            <Input
              placeholder="Adınızı ve Soyadınızı Yazınız"
              className="py-3"
            />
          </Form.Item>
        )}
        {billType.value == "1" && (
          <Form.Item<FieldType> label="Firma Adı" name="name">
            <Input placeholder="Şirket İsminizi Yazınız" className="py-3" />
          </Form.Item>
        )}
        {!isParrent && (
          <Form.Item
            name="addressCity"
            label="Şehir"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Şehir Seçiniz"
              className="h-[3rem]"
              allowClear
              onChange={handleCityChange}
            >
              {cities !== null &&
                cities.map((city: any) => (
                  <Option key={city.fullname} value={city.fullname}>
                    {city.fullname}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        )}
        {counties.length > 0 && (
          <Form.Item<FieldType>
            name="addressCounty"
            label="İlçe"
            rules={[{ required: true, message: "Lütfen ilçe seçiniz!" }]}
          >
            <Select className="h-[3rem]" placeholder="İlçe Seçiniz" allowClear>
              {counties.map((county: any) => (
                <Option key={county.id} value={county.fullname}>
                  {county.fullname}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}
        <Form.Item<FieldType>
          label="Cep Telefonu Numarası"
          name="addressPhone"
          rules={[
            {
              required: true,
              message: "Lütfen telefon numarası bilgilerinizi giriniz!",
            },
            {
              pattern: /^0\d{10}$/,
              message:
                "Telefon numarası 0 ile başlamalı ve 11 haneli olmalıdır!",
            },
          ]}
        >
          <Input
            placeholder="Cep Telefonu Numaranızı Yazınız"
            className="py-3"
            onChange={onInputChange("addressPhone")}
          />
        </Form.Item>
        {billType.value == "0" && (
          <Form.Item<FieldType>
            label="T.C. Kimlik No"
            name="addressTCNo"
            rules={[{ validator: validateTCNo }]}
          >
            <Input
              placeholder="T.C. Kimlik Numaranızı Yazınız"
              className="py-3"
              onChange={onInputChange("addressTCNo")}
            />
          </Form.Item>
        )}

        {billType.value == "1" && (
          <Form.Item<FieldType> label="Vergi Numarası" name="taxNo">
            <Input placeholder="Vergi Numaranızı Yazınız" className="py-3" />
          </Form.Item>
        )}
        {billType.value == "1" && (
          <Form.Item<FieldType> label="Vergi Dairesi" name="taxOffice">
            <Input placeholder="Vergi Dairenizi Yazınız" className="py-3" />
          </Form.Item>
        )}
        {/* Adres */}
        <Form.Item<FieldType>
          label="Adres"
          name="address"
          rules={[
            {
              required: true,
              message: "Lütfen adresinizi giriniz!",
            },
            {
              max: 250,
              message: "Adres en fazla 250 karakter olmalıdır!",
            },
          ]}
        >
          <TextArea
            placeholder="Adresinizi Yazınız"
            className="py-3"
            maxLength={250}
            autoSize={{ minRows: 4, maxRows: 6 }}
          />
        </Form.Item>

        <Form.Item>
          <Button
            className="h-14 mt-5 md:w-[25rem] w-full"
            type="primary"
            htmlType="submit"
            disabled={isFormSubmitted}
          >
            Kaydet ve Devam Et
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdressInfo;
