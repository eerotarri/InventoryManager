"use client";

import { createFridgeItemAction } from "../actions";
import { useActionState } from "react";
import { FormSubmitButton } from "./form-submit-button";
import { FormInput } from "./form-input";
import FormSelect from "./form-select";
import React from "react";

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
        <FormInput
          defaultValue={formState.fieldValues?.name}
          name="name"
          placeholder="Artikkelin nimi"
          error={formState.errors?.name}
        />
        <FormInput
          defaultValue={formState.fieldValues?.quantity}
          name="quantity"
          placeholder="Määrä"
          error={formState.errors?.quantity}
        />
        <FormSelect
          name="suffix"
          defaultValue={formState.fieldValues?.suffix}
          error={formState.errors?.suffix}
        />
        <FormSubmitButton
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        />
      </form>
    </>
  );
}
