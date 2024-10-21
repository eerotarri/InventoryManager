import { deleteFridgeItemUseCase } from "@/lib/application/use_cases/delete-fridge-item.use-case";
import { getFridgeItemsUseCase } from "@/lib/application/use_cases/get-fridge-items.use-case";
import exp from "constants";

describe("deleteFridgeItemUseCase", () => {
  it("should delete item successfully", async () => {
    const fridgeItems = await getFridgeItemsUseCase();

    if (!fridgeItems) {
      console.debug("No fridge items found");
      return;
    }

    const fridgeItemCount = fridgeItems.length;

    const fridgeItem = fridgeItems[0];
    await deleteFridgeItemUseCase(fridgeItem.id);

    const fridgeItemsAfterDelete = await getFridgeItemsUseCase();

    const fridgeItemCountAfterDelete = fridgeItemsAfterDelete?.length;

    expect(fridgeItemCountAfterDelete).toBe(fridgeItemCount - 1);
  });
});
