import { createFridgeItemUseCase } from "@/lib/application/use_cases/create-fridge-item-use-case";
import { insertFridgeItemSchema, InsertFridgeItem, FridgeItem } from "@/lib/entities/models/fridge-item"; 

function presenter(fridgeItem: FridgeItem) {
    // This is a presenter function
    // It can be used to format the data in a way that the client expects
    return fridgeItem;
}

export async function createFridgeItemController(input: InsertFridgeItem) {
    // Validate the input
    const { data, error: inputParseError} = insertFridgeItemSchema.safeParse(input);    
    
    if (inputParseError) {
        throw new Error(inputParseError.message);
    }

    const fridgeItem = await createFridgeItemUseCase(data) as FridgeItem;

    return presenter(fridgeItem);
}