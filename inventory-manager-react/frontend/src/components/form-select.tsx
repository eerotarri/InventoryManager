import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import clsx from "clsx";

interface FormSelectProps {
  name: string;
  defaultValue?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({ name, defaultValue }) => {
  return (
    <div className="flex flex-col">
      <Select name={name} defaultValue={defaultValue}>
        <SelectTrigger className={clsx("w-full p-2 border rounded-md")}>
          <SelectValue placeholder="Kappale" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="kpl">Kappale</SelectItem>
          <SelectItem value="kg">Kilogramma</SelectItem>
          <SelectItem value="l">Litra</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
