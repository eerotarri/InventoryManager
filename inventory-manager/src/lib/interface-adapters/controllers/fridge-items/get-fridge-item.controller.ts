import { getFridgeItemUseCase } from "@/lib/application/use_cases/get-fridge-item.use-case";
import { FridgeItem } from "@/lib/entities/models/fridge-item";

function presenter(fridgeItem: FridgeItem) {
  // This is a presenter  function
  // It can be used to format the data in a way that the client expects
  // In this case we omit the id field from the response
  return {
    id: fridgeItem.id,
    name: fridgeItem.name,
    quantity: fridgeItem.quantity,
    suffix: fridgeItem.suffix,
    createdAt: fridgeItem.createdAt,
    updatedAt: fridgeItem.updatedAt,
  };
}

// Controller is responsible for authorization and data validation before calling the use case function
export async function getFridgeItemController(id: string) {
  const fridgeItems = await getFridgeItemUseCase(id);

  return presenter(fridgeItems as FridgeItem);
}
