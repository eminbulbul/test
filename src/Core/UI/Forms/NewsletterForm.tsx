/* eslint-disable react/display-name */
import { forwardRef, useState } from "react";
import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/UI/FormElements/Input";
import Feedback from "@/UI/FormElements/Feedback";
import { hasKey } from "@/Utils/methods";

type TProps = {
  className?: string;
};

interface IFormValues {
  newsletter_email: string;
}

const NewsletterForm = forwardRef<HTMLFormElement, TProps>(
  ({ className }, ref) => {
    const [message, setMessage] = useState("");
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
      // eslint-disable-next-line no-console
      setMessage("Thank you for your message!");
    };
    return (
      <form
        className={clsx("relative max-w-[570px] flex flex-wrap", className)}
        onSubmit={handleSubmit(onSubmit)}
        ref={ref}
      >
        <div className="flex-100 md:flex-auto0">
          <label htmlFor="newsletter_email" className="sr-only">
            Newsletter
          </label>
          <Input
            id="newsletter_email"
            type="email"
            placeholder="Your E-mail"
            className="max-h-[52px] md:rounded-br-none md:rounded-tr-none md:border-r-0"
            feedbackText={errors?.newsletter_email?.message}
            state={hasKey(errors, "newsletter_email") ? "error" : "success"}
            showState={!!hasKey(errors, "newsletter_email")}
            {...register("newsletter_email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
          />
        </div>
        <button
          type="submit"
          className="mt-3.8 md:mt-0 md:rounded-bl-none md:rounded-tl-none"
        >
          Subscribe
        </button>
        {message && <Feedback state="success">{message}</Feedback>}
      </form>
    );
  }
);

export default NewsletterForm;
