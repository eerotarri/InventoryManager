import { IFridgeItemRepository } from "@/lib/application/repositories/fridge-items.repository.interface";
import { MockFridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository.mock";
import { FridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository";

let fridgeItemRepository: IFridgeItemRepository;

if (process.env.NODE_ENV === "development" || process.env.DATABASE_URL === undefined) {
  fridgeItemRepository = new MockFridgeItemRepository();
} else {
  fridgeItemRepository = new FridgeItemRepository(process.env.DATABASE_URL as string);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  console.log(`ID in route handler: ${id}`);

  fridgeItemRepository.deleteFridgeItem(id);

  return new Response("Item deleted");
}
