import { getFridgeItemsUseCase } from "@/lib/application/use_cases/get-fridge-items.use-case";

describe("getFridgeItemsUseCase", () => {
  it("should return a list of fridge items", async () => {
    const fridgeItems = await getFridgeItemsUseCase();
    expect(fridgeItems).toBeDefined();
  });
});
