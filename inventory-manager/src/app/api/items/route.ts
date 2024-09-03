import { fridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository";

export async function GET(request: Request) {
  await fridgeItemRepository.createFridgeItemTable();

  const data = await fridgeItemRepository.getFridgeItems();

  return new Response(JSON.stringify(data));
}

export async function POST(request: Request) {
  const res: FridgeItem = await request.json();

  const data = await fridgeItemRepository.addFridgeItem(res);

  return Response.json({ res, msg: "Item added probably", data });
}
