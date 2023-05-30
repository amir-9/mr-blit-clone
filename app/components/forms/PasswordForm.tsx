"use client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import Input from "../Input";
import Button from "../Button";
import useMobileOrEmail from "@/app/hooks/useMobileOrEmail";
import LoginModalIcons from "../icons/LoginModalIcons";
import Link from "next/link";

interface PasswordFormProps {
  toggleHandler: (arg0: "forward" | "back") => void;
}

const PasswordForm: React.FC<PasswordFormProps> = ({ toggleHandler }) => {
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
        رمزعبور را وارد کنید.
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
          text-[#75828]
          
        "
        >
          شماره {mobileOrEmail}
        </p>
        <Input
          required
          placeholder="رمز ورود"
          id="mobileOrEmail"
          register={register}
          errors={errors}
          disabled={isLoading}
          classNames="mb-8"
        />
        <div className="flex justify-between">
          <Button disabled={isLoading} secondary>
            <Link href={"#"} className="flex gap-2 items-center">
              <span>ورود با رمز یکبار مصرف</span>
              <LoginModalIcons name="angleLeft" classNames="w-2 " />
            </Link>
          </Button>
          <Button disabled={isLoading} secondary>
            <Link href={"#"} className="flex gap-2 items-center">
              <span>فراموشی رمزعبور</span>
              <LoginModalIcons name="angleLeft" classNames="w-2" />
            </Link>
          </Button>
        </div>
        <Button fullWidth disabled={isLoading} type="submit">
          ورود
        </Button>
      </div>
    </form>
  );
};

export default PasswordForm;
