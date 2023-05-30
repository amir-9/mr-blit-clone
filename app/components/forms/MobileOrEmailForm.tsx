"use client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import Input from "../Input";
import Button from "../Button";
import useMobileOrEmail from "@/app/hooks/useMobileOrEmail";

interface MobileOrEmailFormProps {
  toggleHandler: (arg0: "forward" | "back") => void;
}

const MobileOrEmailForm: React.FC<MobileOrEmailFormProps> = ({
  toggleHandler,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { mobileOrEmail, setMobileOrEmail } = useMobileOrEmail();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      mobileOrEmail: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    setMobileOrEmail(data.mobileOrEmail);
    toggleHandler("forward");

    setIsLoading(false);

    // TODO handle emailOrMobile
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3
        className="
          mt-6
          mb-6
          font-bold
          text-[17px]
          leading-[32px]
          w-full
          text-center
        "
      >
        عضویت یا ورود
      </h3>
      <div
        className="
          px-5
          flex
          flex-col
          gap-4
          
        "
      >
        <p
          className="
          font-normal
          text-[14px]
          leading-[28px]
          text-[#3d464]
          
        "
        >
          لطفاً شماره تلفن همراه یا ایمیل خود را وارد کنید.
        </p>
        <Input
          required
          placeholder="شماره تلفن همراه / ایمیل"
          id="mobileOrEmail"
          register={register}
          errors={errors}
          disabled={isLoading}
          classNames="mb-8"
        />
        <Button fullWidth disabled={isLoading} type="submit">
          ادامه
        </Button>
      </div>
    </form>
  );
};

export default MobileOrEmailForm;
