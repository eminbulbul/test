import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, message } from "antd";
import useFetchApi from "@/Hooks/useFetchApi";
import useMutateApi from "@/Hooks/useMutateApi";

const { Option } = Select;

type FieldType = {
  studentName?: string;
  studentPhone?: string;
  studentPassword?: string;
  studentPasswordConfirmation?: string;
  parentName?: string;
  parentPhone?: string;
  parentPassword?: string;
  parentPasswordConfirmation?: string;
  studentCity?: string;
  studentCounty?: string;
  studentEmail?: string;
  parentEmail?: string;
};

const Infotab = ({
  isParrent,
  current,
  packageId,
  onFormSubmit,
  isFormSubmitted,
}: any) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [counties, setCounties] = useState<any[]>([]);

  const [postForm] = useMutateApi({
    apiPath: "https://api.linkkurs.com/api/link-kurs/buying",
    method: "POST",
  });

  const onFinish = async (values: any) => {
    const formattedValues = {
      student: {
        name: values.studentName,
        phone: values.studentPhone,
        email: values.studentEmail,
        password: values.studentPassword,
        password_confirmation: values.studentPasswordConfirmation,
        package_id: packageId,
      },
      parent: {
        name: values.parentName,
        phone: values.parentPhone,
        email: values.parentEmail,
        password: values.parentPassword,
        password_confirmation: values.parentPasswordConfirmation,
      },
    };
    setLoading(true);
    try {
      await postForm(formattedValues);
      message.success("Bilgileriniz Başarı ile Oluşturuldu");
      onFormSubmit();
    } finally {
      setLoading(false);
    }
  };

  const [getCities, cities] = useFetchApi(
    "https://api.linkkurs.com/api/link-kurs/cities"
  );

  useEffect(() => {
    getCities();
  }, []);

  const handleCityChange = (cityName: string) => {
    const selectedCity = cities.find((city: any) => city.fullname === cityName);
    if (selectedCity) {
      setCounties(selectedCity.counties || []);
      form.setFieldsValue({ studentCounty: undefined });
    }
  };

  useEffect(() => {
    form.resetFields();
  }, [current]);
  return (
    <Form
      name="combinedForm"
      layout="vertical"
      style={{ width: "100%" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      form={form}
    >
      <div className="w-full flex flex-col md:flex-row md:justify-between container">
        <div className="w-full md:w-1/2 p-10">
          <h3 className="mb-5">Öğrenci Bilgileri</h3>
          <Form.Item<FieldType>
            label="Ad / Soyad"
            name="studentName"
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
          {!isParrent && (
            <Form.Item
              name="studentCity"
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
              name="studentCounty"
              label="İlçe"
              rules={[{ required: true, message: "Lütfen ilçe seçiniz!" }]}
            >
              <Select
                className="h-[3rem]"
                placeholder="İlçe Seçiniz"
                allowClear
              >
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
            name="studentPhone"
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
            />
          </Form.Item>
          <Form.Item
            name="studentEmail"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "Lütfen geçerli bir e-mail adresi giriniz!",
              },
              {
                required: true,
                message: "Lütfen e-mail adresinizi giriniz!",
              },
            ]}
          >
            <Input placeholder="E-mail Adresinizi Yazınız" className="py-3" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Şifre"
            name="studentPassword"
            rules={[
              { required: true, message: "Lütfen Şifre Oluşturunuz!" },
              {
                pattern: /^.{8,}$/,
                message: "Şifre en az 8 karakter uzunluğunda olmalıdır!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Şifre Oluşturunuz" className="py-3" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Şifre Tekrar"
            name="studentPasswordConfirmation"
            dependencies={["studentPassword"]}
            hasFeedback
            rules={[
              { required: true, message: "Lütfen Şifrenizi Tekrar Yazınız!" },
              {
                pattern: /^.{8,}$/,
                message: "Şifre en az 8 karakter uzunluğunda olmalıdır!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("studentPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Şifreler birbiri ile aynı olmalıdır!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Oluşturulan Şifreyi Tekrar Yazınız"
              className="py-3"
            />
          </Form.Item>
        </div>
        <div className="w-full md:w-1/2 p-10">
          <h3 className="mb-5">Veli Bilgileri</h3>
          <Form.Item<FieldType>
            label="Ad / Soyad"
            name="parentName"
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
            <Input className="py-3" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Cep Telefonu Numarası"
            name="parentPhone"
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
            <Input className="py-3" />
          </Form.Item>
          <Form.Item
            name="parentEmail"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "Lütfen geçerli bir e-mail adresi giriniz!",
              },
              {
                required: true,
                message: "Lütfen e-mail adresinizi giriniz!",
              },
            ]}
          >
            <Input className="py-3" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Şifre"
            name="parentPassword"
            rules={[
              { required: true, message: "Lütfen Şifre Oluşturunuz!" },
              {
                pattern: /^.{8,}$/,
                message: "Şifre en az 8 karakter uzunluğunda olmalıdır!",
              },
            ]}
            hasFeedback
          >
            <Input.Password className="py-3" />
          </Form.Item>
          <Form.Item<FieldType>
            label="Şifre Tekrar"
            name="parentPasswordConfirmation"
            dependencies={["parentPassword"]}
            hasFeedback
            rules={[
              { required: true, message: "Lütfen Şifrenizi Tekrar Yazınız!" },
              {
                pattern: /^.{8,}$/,
                message: "Şifre en az 8 karakter uzunluğunda olmalıdır!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("parentPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Şifreler birbiri ile aynı olmalıdır!")
                  );
                },
              }),
            ]}
          >
            <Input.Password className="py-3" />
          </Form.Item>
        </div>
      </div>
      <Form.Item>
        <Button
          className="h-12 mt-5"
          type="primary"
          htmlType="submit"
          disabled={isFormSubmitted}
        >
          Tamamla ve Devam Et
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Infotab;
