/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useRouter } from "next/router";
import { Form, Input, Button, Checkbox, message } from "antd";
import Link from "next/link";
import useMutateApi from "@/Hooks/useMutateApi";
import useAuth from "@/Hooks/useAuth";

interface IFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [postForm] = useMutateApi({
    apiPath: "https://api.linkkurs.com/api/login",
    method: "POST",
  });

  const onFinish = async (values: IFormValues) => {
    login(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    message.error("Bir hata oluştu, lütfen tekrar deneyin:", errorInfo);
  };

  return (
    <div className="bg-white md:shadow-2xs container md:my-28 md:shadow-heading/10 w-full md:max-w-[470px] pt-8 pb-[50px] px-[50px]">
      <h3 className="text-h2 mb-5">Giriş yap</h3>
      <Form
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        noValidate
      >
        <div className="mb-7.5">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Lütfen mail adresinizi girin!" },
              {
                type: "email",
                message: "Lütfen geçerli bir mail adresi girin!",
              },
            ]}
          >
            <Input
              id="email"
              placeholder="Mail Adresiniz"
              className="bg-light py-4"
            />
          </Form.Item>
        </div>
        <div className="mb-7.5">
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Lütfen şifrenizi girin!" }]}
          >
            <Input.Password
              id="password"
              placeholder="Şifre"
              className="bg-light py-4"
            />
          </Form.Item>
        </div>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Beni Hatırla</Checkbox>
        </Form.Item>
        <Link href={"/"}>Üye ol</Link>
        <Button type="primary" htmlType="submit" className="mt-7.5 w-full py-8">
          Giriş Yap
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
