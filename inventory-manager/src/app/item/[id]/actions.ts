"use server";

import { revalidatePath } from "next/cache";
import { InsertFridgeItem } from "@/lib/entities/models/fridge-item"; // Adjust the import path as needed
import { FormState } from "@/app/actions";

export async function updateFridgeItemAction(
  id: string,
  prevState: FormState,
  formData: FormData
) {
  const newItem = {
    name: formData.get("name") as string,
    quantity: parseFloat(formData.get("quantity") as string),
    suffix: formData.get("suffix") as InsertFridgeItem["suffix"],
  };

  // Simulating an API call or database update
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Revalidate the product page to reflect the changes
  revalidatePath(`/product/${id}`);
  console.log("Update might have been successful ID: " + id);

  return {
    message: "Update MIGHT have been successful",
    errors: undefined,
    fieldValues: {
      name: "",
      quantity: "",
      suffix: "",
    },
  };
}
