import { InsertFridgeItem } from "@/lib/entities/models/fridge-item";
import { useQueryClient } from "@tanstack/react-query";

export async function createFridgeItemAction(newItem: InsertFridgeItem) {
  const queryClient = useQueryClient();
  try {
    // Pass the data to the controller
    // await createFridgeItemsController(newItem);
    // TODO: Call fetch API to create a new fridge item
    newItem;

    // Revalidate the home page to show the new item
    queryClient.invalidateQueries({ queryKey: ["fridgeItems"] });
  } catch (error) {
    console.error(error);
  }
}

export async function updateFridgeItemAction(updateItem: InsertFridgeItem) {
  // Simulating an API call or database update
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Revalidate the product page to reflect the changes
  // revalidatePath(`/product/${id}`);
  // TODO: use
  // queryClient.invalidateQueries({ queryKey: ["fridgeItems"] });

  console.log("Update might have been successful name: " + updateItem.name);
}

export async function deleteFridgeItemAction(_id: string) {
  const queryClient = useQueryClient();
  // Call the controller with the id
  // await deleteFridgeItemController(id);
  // Call fetch API to delete the fridge item

  // Revalidate the home page to show the updated list
  queryClient.invalidateQueries({ queryKey: ["fridgeItems"] });
}
