import { InsertFridgeItem } from "@/lib/entities/models/fridge-item";
import { useQueryClient } from "@tanstack/react-query";

export async function createFridgeItemAction(newItem: InsertFridgeItem) {
  const queryClient = useQueryClient();
  try {
    // Pass the data to the controller
    // await createFridgeItemController(newItem);
    // TODO: Call fetch API to create a new fridge item
    newItem;

    // Revalidate the home page to show the new item
    queryClient.invalidateQueries({ queryKey: ["fridgeItems"] });
  } catch (error) {
    console.error(error);
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
