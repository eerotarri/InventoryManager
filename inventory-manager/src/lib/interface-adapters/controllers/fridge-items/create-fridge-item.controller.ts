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
    const error = zodStringToErrorObject(inputParseError.message);
    throw new InputParseError(error);
  }

  // Call the use case function with the validated data
  const fridgeItem = await createFridgeItemUseCase(data);

  return presenter(fridgeItem);
}

// TODO: This is probably the responsibility of the error or at least the controller
// For the sake of readability
function zodStringToErrorObject(message: string) {
  return JSON.stringify(
    JSON.parse(message)
      .map((issue: any) => {
        return { [issue.path]: issue.message };
      })
      .reduce((acc: any, curr: any) => {
        return { ...acc, ...curr };
      }, {})
  );
}
