"use client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import Input from "../Input";
import Button from "../Button";

const TrackTicketForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      trackNumber: "",
      mobile: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);

    setIsLoading(false);

    // TODO handle ticket tracking
  };

  return (
    <div className="w-[320px] p-4 rounded-[20px] bg-white">
      <div className="flex flex-col w-full items-center rtl">
        <h3
          className="
          text-[20px]
          leading-8
          text-[#3d464f]
          w-max
          mb-4
        "
        >
          پیگیری و کنسلی بلیط
        </h3>
        <p
          className="
            text-sm
            leading-7
            text-black
            w-full
            text-right
            my-[14px]
          "
        >
          شماره صورتحساب و تلفن همراه خود را وارد کنید.
        </p>
      </div>
      <form className="rtl">
        <Input
          classNames="mb-5"
          errors={errors}
          register={register}
          id="ticketNumber"
          placeholder="شماره صورت حساب"
        />
        <Input
          classNames="mb-7"
          errors={errors}
          register={register}
          id="ticketNumber"
          placeholder="تلفن همراه"
        />
        <Button fullWidth>مشاهده بلیط</Button>
      </form>
    </div>
  );
};

export default TrackTicketForm;
