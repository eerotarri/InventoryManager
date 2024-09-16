import { deleteFridgeItemController } from "@/lib/interface-adapters/controllers/fridge-items/delete-fridge-item.controller";
import { getFridgeItemsUseCase } from "@/lib/application/use_cases/get-fridge-items.use-case";

describe("deleteFridgeItemController", () => {
  it("should delete item successfully", async () => {
    const fridgeItems = await getFridgeItemsUseCase();

    if (!fridgeItems) {
      console.debug("No fridge items found");
      return;
    }

    const fridgeItemCount = fridgeItems.length;

    const fridgeItem = fridgeItems[0];
    await deleteFridgeItemController(fridgeItem.id);

    const fridgeItemsAfterDelete = await getFridgeItemsUseCase();

    const fridgeItemCountAfterDelete = fridgeItemsAfterDelete?.length;

    expect(fridgeItemCountAfterDelete).toBe(fridgeItemCount - 1);
  });
});
