import { getFridgeItemsUseCase } from "@/lib/application/use_cases/get-fridge-items.use-case";
import { InsertFridgeItem } from "@/lib/entities/models/fridge-item";
import { createFridgeItemsController } from "@/lib/interface-adapters/controllers/fridge-items/create-fridge-item.controller";

describe("createFridgeItemsController", () => {
  it("should create a new fridge item", async () => {
    const fridgeItems = await getFridgeItemsUseCase();

    if (!fridgeItems) {
      console.debug("No fridge items found");
      return;
    }

    const fridgeItemCount = fridgeItems?.length;

    const insertFridgeItem = {
      name: "test",
      quantity: 1,
      suffix: "kpl",
    } satisfies InsertFridgeItem;

    await createFridgeItemsController(insertFridgeItem);

    const fridgeItemsAfterCreate = await getFridgeItemsUseCase();
    const fridgeItemCountAfterCreate = fridgeItemsAfterCreate?.length;

    expect(fridgeItemCountAfterCreate).toBe(fridgeItemCount + 1);
  });
});
