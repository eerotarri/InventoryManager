import { getFridgeItemsController } from "@/lib/interface-adapters/controllers/fridge-items/get-fridge-items.controller";

describe("getFridgeItemsController", () => {
  it("should return a list of fridge items", async () => {
    const fridgeItems = await getFridgeItemsController();
    expect(fridgeItems).toBeDefined();
  });
});
