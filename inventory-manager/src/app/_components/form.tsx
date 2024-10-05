"use client";

import { Input } from "@/components/ui/input";
import { createFridgeItemAction } from "../actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useActionState } from "react";
import { FormSubmitButton } from "./form-submit-button";

export default function Form() {
  const [formState, formAction] = useActionState(createFridgeItemAction, {
    message: "",
    errors: undefined,
    fieldValues: {
      name: "",
      quantity: "",
      suffix: "",
    },
  });

  return (
    <>
      <form
        action={formAction}
        className="space-y-4 p-4 bg-white shadow-md rounded-md"
      >
        <div className="flex flex-col">
          <Input
            defaultValue={formState.fieldValues?.name}
            name="name"
            placeholder="Artikkelin nimi"
            className={
              "w-full p-2 border rounded-md" +
              (formState.errors?.name ? " border-red-600" : "")
            }
          />
          <span className="text-left text-sm text-red-600">
            {formState.errors?.name?._errors.join("\n")}
          </span>
        </div>
        <div className="flex flex-col">
          <Input
            defaultValue={formState.fieldValues?.quantity}
            name="quantity"
            placeholder="Määrä"
            className={
              "w-full p-2 border rounded-md" +
              (formState.errors?.quantity ? " border-red-600" : "")
            }
          />
          <span className="text-left text-sm text-red-600">
            {formState.errors?.quantity?._errors.join("\n")}
          </span>
        </div>
        <div className="flex flex-col">
          <Select name="suffix" defaultValue={formState.fieldValues.suffix}>
            <SelectTrigger
              className={
                "w-full p-2 border rounded-md" +
                (formState.errors?.suffix ? " border-red-600" : "")
              }
            >
              <SelectValue placeholder="Kappale" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kpl">Kappale</SelectItem>
              <SelectItem value="kg">Kilogramma</SelectItem>
              <SelectItem value="l">Litra</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-left text-sm text-red-600">
            {formState.errors?.suffix?._errors.join("\n")}
          </span>
        </div>
        <FormSubmitButton
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        />
      </form>
    </>
  );
}
