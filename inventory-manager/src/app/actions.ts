"use server";

import { InputParseError } from "@/lib/entities/errors/common";
import { InsertFridgeItem } from "@/lib/entities/models/fridge-item";
import { createFridgeItemController } from "@/lib/interface-adapters/controllers/fridge-items/create-fridge-item.controller";
import { deleteFridgeItemController } from "@/lib/interface-adapters/controllers/fridge-items/delete-fridge-item.controller";
import { revalidatePath } from "next/cache";

export async function createFridgeItemAction(formData: FormData) {
  try {
    // Construct the new item from formData
    const newItem = {
      name: formData.get("name") as string,
      quantity: parseFloat(formData.get("quantity") as string),
      suffix: formData.get("suffix") as InsertFridgeItem["suffix"],
    };

    // Pass the data to the controller
    await createFridgeItemController(newItem);
  } catch (error) {
    // Catch zod parse errors and return them to the client
    if (error instanceof InputParseError) {
      return { success: false, error: error.message };
    }
    // Catch any other errors and return a generic error message
    return { success: false, error: "Unexpected error occured." };
  }

  // Revalidate the home page to show the new item
  revalidatePath("/");
  return { success: true };
}

export async function deleteFridgeItemAction(formData: FormData) {
  // Call the controller with the id
  await deleteFridgeItemController(formData.get("id") as string);

  // Revalidate the home page to show the updated list
  revalidatePath("/");
}
