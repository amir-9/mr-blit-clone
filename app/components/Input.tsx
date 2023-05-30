"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  classNames?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  id,
  classNames,
  register,
  required,
  errors,
  type = "text",
  disabled,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="
            block 
            text-sm 
            font-medium 
            leading-6 
            text-gray-900
          "
        >
          {label}
        </label>
      )}
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          placeholder={placeholder}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `
            text-end
            form-input
            block 
            w-full 
            h-[48px]
            rounded-md 
            border-0 
            border-none
            outline-none
            px-3
            leading-[32px]
            shadow-sm 
            text-[15px]
            text-black 
            placeholder:text-gray-400 
            placeholder:text-start
            bg-[#f0f3f7]
            `,
            errors[id] && "focus:ring-rose-500",
            disabled && "opacity-50 cursor-default",
            classNames && classNames
          )}
        />
      </div>
    </div>
  );
};

export default Input;
