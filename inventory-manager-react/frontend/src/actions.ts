"use server";

import { InputParseError } from "@/lib/entities/errors/common";
import { InsertFridgeItem } from "@/lib/entities/models/fridge-item";
import { useQueryClient } from "@tanstack/react-query";

// TODO: Lines below arre invoked with backend in React version
// import { createFridgeItemController } from "@/lib/interface-adapters/controllers/fridge-items/create-fridge-item.controller";
// import { deleteFridgeItemController } from "@/lib/interface-adapters/controllers/fridge-items/delete-fridge-item.controller";

export type ErrorMessage = {
  _errors: string[]; // Dictated by the zod error format
};

export type FormState = {
  message: string;
  errors?: {
    // Dictated by the zod error format
    name?: ErrorMessage;
    quantity?: ErrorMessage;
    suffix?: ErrorMessage;
    _errors?: string[];
  };
  fieldValues: {
    name: string;
    quantity: string;
    suffix: string;
  };
};

export async function createFridgeItemAction(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const queryClient = useQueryClient();
  try {
    // Construct the new item from formData
    const newItem = {
      name: formData.get("name") as string,
      quantity: parseFloat(formData.get("quantity") as string),
      suffix: formData.get("suffix") as InsertFridgeItem["suffix"],
    };

    // Pass the data to the controller
    // await createFridgeItemController(newItem);
    // TODO: Call fetch API to create a new fridge item
    newItem;

    // Revalidate the home page to show the new item
    queryClient.invalidateQueries({ queryKey: ["fridgeItems"] });

    return {
      message: "success",
      errors: undefined,
      fieldValues: { name: "", quantity: "", suffix: "" },
    };
  } catch (error) {
    // Catch zod parse errors and return them to the client
    if (error instanceof InputParseError) {
      return {
        message: "error",
        errors: JSON.parse(error.message),
        fieldValues: {
          name: formData.get("name") as string,
          quantity: formData.get("quantity") as string,
          suffix: formData.get("suffix") as string,
        },
      };
    }
    // Catch any other errors and return a generic error message
    return {
      message: "error",
      errors: { _errors: ["An error occurred."] },
      fieldValues: {
        name: formData.get("name") as string,
        quantity: formData.get("quantity") as string,
        suffix: formData.get("suffix") as string,
      },
    };
  }
}

export async function deleteFridgeItemAction(_id: string) {
  const queryClient = useQueryClient();
  // Call the controller with the id
  // await deleteFridgeItemController(id);
  // Call fetch API to delete the fridge item

  // Revalidate the home page to show the updated list
  queryClient.invalidateQueries({ queryKey: ["fridgeItems"] });
}
