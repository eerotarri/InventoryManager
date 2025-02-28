"use server";

import { revalidatePath, unstable_expirePath as expirePath } from "next/cache";
import { redirect } from "next/navigation";
import { InsertFridgeItem } from "@/lib/entities/models/fridge-item"; // Adjust the import path as needed
import { FormState } from "@/app/actions";
import { udpateFridgeItemController } from "@/lib/interface-adapters/controllers/fridge-items/update-fridge-item.controller";
import { InputParseError } from "@/lib/entities/errors/common";

export async function updateFridgeItemAction(
  id: string,
  prevState: FormState,
  formData: FormData
) {
  try {
    const newItem = {
      id,
      name: formData.get("name") as string,
      quantity: parseFloat(formData.get("quantity") as string),
      suffix: formData.get("suffix") as InsertFridgeItem["suffix"],
    };

    // Make the API request to update the item
    const response = await udpateFridgeItemController(id, newItem);

    // Revalidate the product page to reflect the changes and redirect to the product page
    expirePath("/");
    expirePath(`/item/${id}`);
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

    // Return a generic error message if the error is not a zod parse error
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

  // Redirect does not work in producton for some reason so we are opting out of it for now
  // Form submission will stay on the same page
  // TODO: Investigate why redirect does not work in production
  redirect("/");
}
