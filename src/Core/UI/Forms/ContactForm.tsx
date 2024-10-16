import { forwardRef, useState } from "react";
import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/UI/FormElements/Input";
import Textarea from "@/UI/FormElements/Textarea";
import Feedback from "@/UI/FormElements/Feedback";
import { hasKey } from "@/Utils/methods";
import Button from "@/UI/Button";

type TProps = {
  className?: string;
};

interface IFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// eslint-disable-next-line react/display-name
const ContactForm = forwardRef<HTMLFormElement, TProps>(
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
        className={clsx(className)}
        ref={ref}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2 md:gap-7.5 md:mb-7.5">
          <div>
            <label htmlFor="name" className="sr-only">
              İsim
            </label>
            <Input
              id="name"
              placeholder="İsim *"
              bg="light"
              feedbackText={errors?.name?.message}
              state={hasKey(errors, "name") ? "error" : "success"}
              showState={!!hasKey(errors, "name")}
              {...register("name", {
                required: "Name is required",
              })}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              email
            </label>
            <Input
              type="email *"
              id="email"
              placeholder="Email Adresiniz *"
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
        </div>
        <div className="mb-5 md:mb-7.5">
          <label htmlFor="subject" className="sr-only">
            Konu
          </label>
          <Input
            id="subject"
            placeholder="Konu *"
            bg="light"
            feedbackText={errors?.subject?.message}
            state={hasKey(errors, "subject") ? "error" : "success"}
            showState={!!hasKey(errors, "subject")}
            {...register("subject", {
              required: "Subject is required",
            })}
          />
        </div>
        <div className="mb-5 md:mb-7.5">
          <label htmlFor="message" className="sr-only">
            Mesaj
          </label>
          <Textarea
            id="message"
            placeholder="Mesaj *"
            bg="light"
            feedbackText={errors?.message?.message}
            state={hasKey(errors, "message") ? "error" : "success"}
            showState={!!hasKey(errors, "message")}
            {...register("message", {
              required: "Message is required",
            })}
          />
        </div>
        <Button type="submit" className="tw-w-[180px]">
          Gönder
        </Button>
        {message && <Feedback state="success">{message}</Feedback>}
      </form>
    );
  }
);

export default ContactForm;
