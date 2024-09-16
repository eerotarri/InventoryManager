import { createFridgeItemUseCase } from "@/lib/application/use_cases/create-fridge-item.use-case";
import { getFridgeItemsUseCase } from "@/lib/application/use_cases/get-fridge-items.use-case";
import { InputParseError } from "@/lib/entities/errors/common";
import { InsertFridgeItem } from "@/lib/entities/models/fridge-item";

describe("createFridgeItemUseCase", () => {
  it("should create item successfully", async () => {
    const insertFridgeItem = {
      name: "test",
      quantity: 1,
      suffix: "kpl",
    } satisfies InsertFridgeItem;

    const fridgeItems = await getFridgeItemsUseCase();
    if (!fridgeItems) {
      console.debug("No fridge items found");
      return;
    }

    const fridgeItemCount = fridgeItems.length;

    const newFridgeItem = await createFridgeItemUseCase(insertFridgeItem);
    expect(newFridgeItem).toBeDefined();

    const fridgeItemsAfterCreate = await getFridgeItemsUseCase();
    const fridgeItemCountAfterCreate = fridgeItemsAfterCreate?.length;

    expect(fridgeItemCountAfterCreate).toBe(fridgeItemCount + 1);
  });
});
