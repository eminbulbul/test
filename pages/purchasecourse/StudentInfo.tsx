import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import useFetchApi from "@/Hooks/useFetchApi";
import Link from "next/link";
import FormCheckbox from "@/UI/FormElements/FormCheckbox";
import ModalComponent from "@/UI/Modal";
import ReCAPTCHA from "react-google-recaptcha";
import useScrollTop from "@/Hooks/useScrollTop";

const { Option } = Select;

interface Props {
  current: number;
  isParrent: boolean;
  isFormSubmitted: boolean;
  dataSetter: any;
  currentSetter: any;
  currentPrice: any;
  couponValid: Boolean;
  captcha?: any;
  captchaSetter?: any;
  formchecked?: any;
  formcheckedSetter?: any;
}
type FieldType = {
  name?: string;
  phone?: string;
  password?: string;
  password_confirmation?: string;
  city_id?: number;
  county_id?: number;
  studentEmail?: string;
  studentTCNo?: string;
};
const StudentInfo: React.FC<Props> = ({
  current,
  isParrent,
  dataSetter,
  isFormSubmitted,
  currentSetter,
  currentPrice,
  couponValid,
  captcha,
  captchaSetter,
  formchecked,
  formcheckedSetter,
}) => {
  const [form] = Form.useForm();
  const [counties, setCounties] = useState<any[]>([]);
  const [validmail, setValidmail] = useState("");
  const [emailExistsError, setEmailExistsError] = useState(false);
  const { onClickHandler } = useScrollTop();

  useEffect(() => {
    onClickHandler();
  }, []);
  const onInputChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (name === "studentTCNo" || (name === "phone" && value.length > 11)) {
        form.setFieldsValue({ [name]: value.slice(0, 11) });
      } else {
        form.setFieldsValue({ [name]: value });
      }
    };

  const [getEmail, takenMail] = useFetchApi(
    `https://api.linkkurs.com/api/link-kurs/check-mail?email=${validmail}`
  );
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

  const checkEmail = async () => {
    const email = form.getFieldValue("email");
    setValidmail(email);
    setEmailExistsError(false);
  };

  useEffect(() => {
    formcheckedSetter(
      agreements?.length > 0 && agreements.length === checkedItems.length
    );
  }, [checkedItems, agreements]);

  const onCaptchaChange = (value: string | null) => {
    if (value) {
      captchaSetter(true);
    } else {
      captchaSetter(false);
    }
  };

  useEffect(() => {
    if (validmail) {
      getEmail();
    }
  }, [validmail]);

  useEffect(() => {
    if (takenMail?.exists) {
      setEmailExistsError(true);
      form.setFields([
        {
          name: "email",
          errors: ["E-posta adresi zaten var!"],
        },
      ]);
    } else {
      setEmailExistsError(false);
      form.setFields([
        {
          name: "email",
          errors: [],
        },
      ]);
    }
  }, [takenMail]);

  useEffect(() => {
    getCities();
    form.resetFields();
  }, []);

  const handleCityChange = (cityName: any) => {
    const selectedCity = cities.find((city: any) => city.id === cityName);
    if (selectedCity) {
      setCounties(selectedCity.counties || []);
      form.setFieldsValue({ studentCounty: undefined });
    }
  };

  const onFinish = (values: any) => {
    dataSetter(values);
    currentSetter(current + 1);
  };

  const handleValuesChange = (changedValues: any, allValues: any) => {
    dataSetter(allValues); // Her değişiklikte tüm form değerlerini gönder
  };

  const [getCities, cities] = useFetchApi(
    "https://api.linkkurs.com/api/link-kurs/cities"
  );

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
      return Promise.reject("Geçersiz TC Kimlik No!");
    }
    return Promise.resolve();
  };

  return (
    <div className="container px-[3.2rem]">
      <h3 className="mb-5">Öğrenci Bilgileri</h3>
      <Form
        form={form}
        layout="vertical"
        name="studentInfoForm"
        className="font-bold"
        onFinish={onFinish}
        onValuesChange={handleValuesChange}
        initialValues={{
          studentName: "",
          studentCity: "",
          studentCounty: "",
          studentPhone: "",
          studentEmail: "",
          studentTCNo: "",
          studentPasswordConfirmation: "",
          studentPassword: "",
        }}
      >
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
            className="py-3 border-1 border-gray-900 "
          />
        </Form.Item>
        {!isParrent && (
          <Form.Item name="city_id" label="Şehir" rules={[{ required: true }]}>
            <Select
              placeholder="Şehir Seçiniz"
              getPopupContainer={() => document.body}
              className="h-[3rem] rounded-md border-gray-900"
              allowClear
              virtual={false}
              onChange={handleCityChange}
            >
              {cities !== null &&
                cities.map((city: any) => (
                  <Option key={city.fullname} value={city.id}>
                    {city.fullname}
                  </Option>
                ))}
            </Select>
          </Form.Item>
        )}

        {counties.length > 0 && (
          <Form.Item<FieldType>
            name="county_id"
            label="İlçe"
            rules={[{ required: true, message: "Lütfen ilçe seçiniz!" }]}
          >
            <Select
              className="h-[3rem]  rounded-md border-gray-900"
              placeholder="İlçe Seçiniz"
              virtual={false}
              getPopupContainer={() => document.body}
              allowClear
            >
              {counties.map((county: any) => (
                <Option key={county.id} value={county.id}>
                  {county.fullname}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}

        <Form.Item<FieldType>
          label="Cep Telefonu Numarası"
          name="phone"
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
            className="py-3 border-1 border-gray-900"
            onChange={onInputChange("phone")}
            inputMode="numeric"
            maxLength={11}
          />
        </Form.Item>

        <Form.Item
          name="email"
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
          <Input
            onBlur={checkEmail}
            placeholder="E-mail Adresinizi Yazınız"
            className="py-3 border-1 border-gray-900 "
            onChange={() => setEmailExistsError(false)}
          />
        </Form.Item>

        {emailExistsError && (
          <Button className="my-5" type="primary">
            <Link href="/giris">Giriş Yap</Link>
          </Button>
        )}

        {currentPrice !== 0 && !couponValid && (
          <Form.Item<FieldType>
            label="T.C. Kimlik No"
            name="studentTCNo"
            rules={[{ validator: validateTCNo }]}
          >
            <Input
              placeholder="T.C. Kimlik Numaranızı Yazınız"
              className="py-3 border-1 border-gray-900 "
              onChange={onInputChange("studentTCNo")}
            />
          </Form.Item>
        )}

        <Form.Item<FieldType>
          label="Şifre"
          name="password"
          rules={[
            { required: true, message: "Lütfen Şifre Oluşturunuz!" },
            {
              pattern: /^.{8,}$/,
              message: "Şifre en az 8 karakter uzunluğunda olmalıdır!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="Şifre Oluşturunuz"
            className="py-3 border-1 border-gray-900 "
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="Şifre Tekrar"
          name="password_confirmation"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Lütfen Şifrenizi Tekrar Yazınız!" },
            {
              pattern: /^.{8,}$/,
              message: "Şifre en az 8 karakter uzunluğunda olmalıdır!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
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
            className="py-3 border-1 border-gray-900 "
          />
        </Form.Item>
        <div className="sm:flex sm:justify-between">
          <Form.Item>
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
            className="mb-10 sm:mb-0 h-44"
            onChange={onCaptchaChange}
          />
        </div>
        {currentPrice !== 0 && !couponValid && (
          <Form.Item>
            <Button
              className="h-14 mt-5 md:w-[25rem] w-full"
              type="primary"
              htmlType="submit"
              disabled={isFormSubmitted}
            >
              Tamamla ve Devam Et
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default StudentInfo;
