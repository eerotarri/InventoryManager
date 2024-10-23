import { deleteFridgeItemUseCase } from "@/lib/application/use_cases/delete-fridge-item.use-case";

// Controller is responsible for authorization and data validation before calling the use case function
export async function deleteFridgeItemController(id: string) {
  await deleteFridgeItemUseCase(id);
}
