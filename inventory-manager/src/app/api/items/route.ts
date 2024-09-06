import { FridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository";
import { MockFridgeItemRepository } from "@/lib/infrastructure/repositories/fridge-items.repository.mock";
import { IFridgeItemRepository } from "@/lib/application/repositories/fridge-items.repository.interface";
let fridgeItemRepository: IFridgeItemRepository;

if (process.env.NODE_ENV === "development" || process.env.DATABASE_URL === undefined) {
  fridgeItemRepository = new MockFridgeItemRepository();
  console.log("Using mock repository");
} else {
  fridgeItemRepository = new FridgeItemRepository(process.env.DATABASE_URL as string);
  console.log("Using real repository");
}

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
