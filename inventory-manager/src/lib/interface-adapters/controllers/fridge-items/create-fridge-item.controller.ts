import { createFridgeItemUseCase } from "@/lib/application/use_cases/create-fridge-item.use-case";
import { InputParseError } from "@/lib/entities/errors/common";
import {
  insertFridgeItemSchema,
  InsertFridgeItem,
  FridgeItem,
} from "@/lib/entities/models/fridge-item";
function presenter(fridgeItem: FridgeItem | undefined) {
  // This is a presenter function
  // It can be used to format the data in a way that the client expects
  return fridgeItem;
}

// Controller is responsible for authorization and data validation before calling the use case function
export async function createFridgeItemController(input: InsertFridgeItem) {
  // Validate the input with zod
  const { data, error: inputParseError } =
    insertFridgeItemSchema.safeParse(input);

  // If there is an error, throw an InputParseError
  if (inputParseError) {
    throw new InputParseError(inputParseError.message);
  }

  // Call the use case function with the validated data
  const fridgeItem = await createFridgeItemUseCase(data);

  return presenter(fridgeItem);
}
