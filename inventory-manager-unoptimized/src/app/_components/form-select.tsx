import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // Adjust the import according to your library
import { ErrorMessage } from "../actions";
import clsx from "clsx";

interface FormSelectProps {
  name: string;
  defaultValue?: string;
  error?: ErrorMessage;
}

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  defaultValue,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <Select name={name} defaultValue={defaultValue}>
        <SelectTrigger
          className={clsx("w-full p-2 border rounded-md", {
            "border-red-600": error,
          })}
        >
          <SelectValue placeholder="Kappale" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="kpl">Kappale</SelectItem>
          <SelectItem value="kg">Kilogramma</SelectItem>
          <SelectItem value="l">Litra</SelectItem>
        </SelectContent>
      </Select>
      {error && (
        <span className="text-left text-sm text-red-600">
          {error._errors.join("\n")}
        </span>
      )}
    </div>
  );
};

export default FormSelect;
