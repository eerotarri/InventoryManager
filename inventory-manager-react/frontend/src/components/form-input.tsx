import { Input } from "@/components/ui/input";
import React from "react";
import clsx from "clsx";
import { ErrorMessage } from "@/actions";

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
        {(error._errors as string[]).join("\n")}
      </span>
    )}
  </div>
  );
};
