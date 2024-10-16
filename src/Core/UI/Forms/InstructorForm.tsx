import { useState } from "react";
import clsx from "clsx";
import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "@/UI/Alert";
import Anchor from "@/UI/Anchor";
import Input from "@/UI/FormElements/Input";
import Textarea from "@/UI/FormElements/Textarea";
import Feedback from "@/UI/FormElements/Feedback";
import { hasKey } from "@/Utils/methods";
import { FaExclamationCircle } from "react-icons/fa";

type TProps = {
  className?: string;
};

interface IFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const InstructorForm = ({ className }: TProps) => {
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
    <div
      className={clsx(
        "bg-white rounded py-7.5 px-3.8 sm:pt-14 sm:pb-15 sm:px-[50px] shadow-2md shadow-black/10",
        className
      )}
    >
      <h4 className="text-[28px] mb-5 sm:text-[34px] sm:mb-9 leading-snug text-center">
        Register to become an Intructor
      </h4>
      <form className="become-teacher-form" onSubmit={handleSubmit(onSubmit)}>
        <Alert className="mb-5">
          <FaExclamationCircle />
          Please <Anchor path="/login-register">login</Anchor> to send your
          request!
        </Alert>
        <div className="grid md:grid-cols-2 md:gap-7.5">
          <div className="mb-3.8">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <Input
              id="name"
              placeholder="Your Name *"
              feedbackText={errors?.name?.message}
              state={hasKey(errors, "name") ? "error" : "success"}
              showState={!!hasKey(errors, "name")}
              {...register("name", {
                required: "Name is required",
              })}
            />
          </div>
          <div className="mb-3.8">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Email *"
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
        <div className="mb-3.8">
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <Input
            id="phone"
            placeholder="Your phone number"
            feedbackText={errors?.phone?.message}
            state={hasKey(errors, "phone") ? "error" : "success"}
            showState={!!hasKey(errors, "phone")}
            {...register("phone", {
              required: "Phone is required",
            })}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Your Message"
            feedbackText={errors?.message?.message}
            state={hasKey(errors, "message") ? "error" : "success"}
            showState={!!hasKey(errors, "message")}
            {...register("message", {
              required: "Message is required",
            })}
          />
        </div>

        <div className="text-center">
          <button type="submit">Get the learning program</button>
          {message && <Feedback state="success">{message}</Feedback>}
        </div>
      </form>
    </div>
  );
};

export default InstructorForm;
