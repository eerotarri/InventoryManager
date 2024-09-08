import { deleteFridgeItemUseCase } from "@/lib/application/use_cases/delete-fridge-item.use-case";

// Controller is responsible for authorization and data validation before calling the use case function
export async function deleteFridgeItemController(id: string) {
  // Call the use case function with the validated data
  await deleteFridgeItemUseCase(id);
}
