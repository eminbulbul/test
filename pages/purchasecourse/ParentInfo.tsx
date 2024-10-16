import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, message } from "antd";
import useFetchApi from "@/Hooks/useFetchApi";
import Link from "next/link";

interface Props {
  current: number;
  isParrent: boolean;
  isFormSubmitted: boolean;
  dataSetter: any;
  currentSetter: any;
}
type FieldType = {
  parentName?: string;
  parentPhone?: string;
  parentPassword?: string;
  parentPasswordConfirmation?: string;
  parentEmail?: string;
  parentTCNo?: string;
};

const ParentInfo: React.FC<Props> = ({
  current,
  currentSetter,
  dataSetter,
  isFormSubmitted,
}) => {
  const [form] = Form.useForm();
  const onInputChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if (
        name === "parentTCNo" ||
        (name === "parentPhone" && value.length > 11)
      ) {
        form.setFieldsValue({ [name]: value.slice(0, 11) });
      } else {
        form.setFieldsValue({ [name]: value });
      }
    };
  const onFinish = (values: any) => {
    dataSetter(values);
    currentSetter(current + 1);
  };

  useEffect(() => {
    form.resetFields();
  }, []);

  const [validmail, setValidmail] = useState("");
  const [emailExistsError, setEmailExistsError] = useState(false);

  const [getEmail, takenMail] = useFetchApi(
    `https://api.linkkurs.com/api/link-kurs/check-mail?email=${validmail}`
  );
  const checkEmail = async () => {
    const email = form.getFieldValue("parentEmail");
    setValidmail(email);
    setEmailExistsError(false);
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
          name: "parentEmail",
          errors: ["E-posta adresi zaten var!"],
        },
      ]);
    } else {
      setEmailExistsError(false);
      form.setFields([
        {
          name: "parentEmail",
          errors: [],
        },
      ]);
    }
  }, [takenMail]);
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
      <Form
        name="combinedForm"
        layout="vertical"
        style={{ width: "100%" }}
        initialValues={{
          parentName: "",
          parentPhone: "",
          parentTCNo: "",
          parentEmail: "",
          parentPassword: "",
          parentPasswordConfirmation: "",
        }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
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
          <Input placeholder="Adınızı ve Soyadınızı Yazınız" className="py-3" />
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
          <Input
            placeholder="Cep Telefonu Numaranızı Yazınız"
            className="py-3"
            onChange={onInputChange("parentPhone")}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label="T.C. Kimlik No"
          name="parentTCNo"
          rules={[{ validator: validateTCNo }]}
        >
          <Input
            placeholder="T.C. Kimlik Numaranızı Yazınız"
            className="py-3"
            onChange={onInputChange("parentTCNo")}
          />
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
          <Input
            onBlur={checkEmail}
            placeholder="E-mail Adresinizi Yazınız"
            className="py-3"
            onChange={() => setEmailExistsError(false)}
          />
        </Form.Item>
        {emailExistsError && (
          <Button className="my-5" type="primary">
            <Link href="/giris">Giriş Yap</Link>
          </Button>
        )}
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
          <Input.Password placeholder="Şifre Oluşturunuz" className="py-3" />
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
          <Input.Password
            placeholder="Oluşturulan Şifreyi Tekrar Yazınız"
            className="py-3"
          />
        </Form.Item>
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
      </Form>
    </div>
  );
};

export default ParentInfo;
