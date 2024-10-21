import { Input } from "@/components/ui/input";
import React from "react";
import { ErrorMessage } from "@/app/actions";
import clsx from "clsx";

interface FormInputProps {
  defaultValue?: string;
  name: string;
  placeholder: string;
  error?: ErrorMessage;
}

export const FormInput: React.FC<FormInputProps> = ({
  defaultValue,
  name,
  placeholder,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <Input
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        className={clsx("w-full p-2 border rounded-md", {
          "border-red-600": error,
        })}
        {...props}
      />
      {error && (
        <span className="text-left text-sm text-red-600">
          {error._errors.join("\n")}
        </span>
      )}
    </div>
  );
};
