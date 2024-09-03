import { fridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  console.log(`ID in route handler: ${id}`);

  fridgeItemRepository.deleteFridgeItem(id);

  return new Response("Item deleted");
}
