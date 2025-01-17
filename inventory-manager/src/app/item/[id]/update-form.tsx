"use client";

import { updateFridgeItemAction } from "./actions";
import { useActionState } from "react";
import { FormSubmitButton } from "../../_components/form-submit-button";
import { FormInput } from "../../_components/form-input";
import FormSelect from "../../_components/form-select";
import React from "react";

type UpdateFormProps = {
  initialData: {
    name: string;
    quantity: number;
    suffix: "kpl" | "l" | "kg";
    id: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

export default function UpdateForm({ initialData }: UpdateFormProps) {
  const { id } = initialData;
  const [formState, formAction] = useActionState(
    updateFridgeItemAction.bind(null, id),
    {
      message: "",
      errors: undefined,
      fieldValues: {
        name: "",
        quantity: "",
        suffix: "",
      },
    }
  );

  return (
    <>
      <form
        action={formAction}
        className="z-0 space-y-4 p-4 bg-primary shadow-md rounded-md w-full"
      >
        <FormInput
          defaultValue={initialData?.name || formState.fieldValues?.name}
          name="name"
          placeholder="Artikkelin nimi"
          // error={formState.errors?.name}
        />
        <FormInput
          defaultValue={
            initialData?.quantity.toString() || formState.fieldValues?.quantity
          }
          name="quantity"
          placeholder="Määrä"
          // error={formState.errors?.quantity}
        />
        <FormSelect
          name="suffix"
          defaultValue={initialData?.suffix || formState.fieldValues?.suffix}
          // error={formState.errors?.suffix}
        />
        <FormSubmitButton
          type="submit"
          className="w-full p-2 text-white rounded-md"
        />
      </form>
    </>
  );
}
