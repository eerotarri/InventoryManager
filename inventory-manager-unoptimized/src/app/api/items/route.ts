import { getFridgeItemsController } from "@/lib/interface-adapters/controllers/fridge-items/get-fridge-items.controller";

export async function GET() {
  const response = await getFridgeItemsController();
  console.log("response: ", response);

  return new Response(JSON.stringify(response));
}
