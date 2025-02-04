import { updateFridgeItemUseCase } from "../../../application/use_cases/update-fridge-item.use-case";
import { InputParseError } from "../../../entities/errors/common";
import {
  insertFridgeItemSchema,
  InsertFridgeItem,
  FridgeItem,
} from "../../../entities/models/fridge-item";

function presenter(fridgeItem: FridgeItem | undefined) {
  // This is a presenter function
  // It can be used to format the data in a way that the client expects
  return fridgeItem;
}

/**
 * Controller is responsible for authorization and data validation before calling the use case function
 * @param { InsertFridgeItem } input - The input data for creating a fridge item without auto-generated fields
 * @throws { InputParseError } - If the input is invalid
 * @returns { Promise<FridgeItem | undefined> } - The created fridge item or undefined if the operation failed
 */
export async function updateFridgeItemController(
  id: string,
  input: InsertFridgeItem
): Promise<FridgeItem | undefined> {
  // Validate the input with zod
  const { data, error: inputParseError } =
    insertFridgeItemSchema.safeParse(input);

  // If there is an error, throw an InputParseError
  if (inputParseError) {
    console.error(inputParseError.format());
    throw new InputParseError(JSON.stringify(inputParseError.format()));
  }

  // Call the use case function with the validated data
  const fridgeItem = await updateFridgeItemUseCase(id, data);

  return presenter(fridgeItem);
}
