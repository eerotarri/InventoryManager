import { getFridgeItemsUseCase } from "@/lib/application/use_cases/get-fridge-items-use-case";
import { FridgeItem } from "@/lib/entities/models/fridge-item";

function presenter(fridgeItems: FridgeItem[]) {
  // This is a presenter function
  // It can be used to format the data in a way that the client expects
  return fridgeItems;
}

// Controller is responsible for authorization and data validation before calling the use case function
export async function getFridgeItemsController() {
  // Call the use case function with the validated data
  const fridgeItems = await getFridgeItemsUseCase();

  return presenter(fridgeItems as FridgeItem[]);
}
