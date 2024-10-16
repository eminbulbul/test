import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/UI/FormElements/Input";

import { hasKey } from "@/Utils/methods";

interface IFormValues {
  email: string;
  reg_username: string;
  reg_password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // eslint-disable-next-line no-console
  };

  return (
    <div className="px-[50px]">
      <h3 className="text-h2 mb-5">Register</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-7.5">
          <label htmlFor="email" className="text-heading text-md">
            Email *
          </label>
          <Input
            id="email"
            placeholder="email"
            bg="light"
            feedbackText={errors?.email?.message}
            state={hasKey(errors, "email") ? "error" : "success"}
            showState={!!hasKey(errors, "email")}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
          />
        </div>
        <div className="mb-7.5">
          <label htmlFor="reg_username" className="text-heading text-md">
            Username *
          </label>
          <Input
            id="reg_username"
            placeholder="Username"
            bg="light"
            feedbackText={errors?.reg_username?.message}
            state={hasKey(errors, "reg_username") ? "error" : "success"}
            showState={!!hasKey(errors, "reg_username")}
            {...register("reg_username", {
              required: "Username is required",
            })}
          />
        </div>
        <div className="mb-7.5">
          <label htmlFor="reg_password" className="text-heading text-md">
            Password *
          </label>
          <Input
            id="reg_password"
            type="password"
            placeholder="Password"
            bg="light"
            autoComplete="true"
            feedbackText={errors?.reg_password?.message}
            state={hasKey(errors, "reg_password") ? "error" : "success"}
            showState={!!hasKey(errors, "reg_password")}
            {...register("reg_password", {
              required: "Password is required",
            })}
          />
        </div>
        <div className="mb-7.5">
          <label htmlFor="confirmPassword" className="text-heading text-md">
            Password *
          </label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            bg="light"
            autoComplete="true"
            feedbackText={errors?.confirmPassword?.message}
            state={hasKey(errors, "confirmPassword") ? "error" : "success"}
            showState={!!hasKey(errors, "confirmPassword")}
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === getValues("reg_password") ||
                "The passwords do not match",
            })}
          />
        </div>

        <button type="submit" className="mt-7.5">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
