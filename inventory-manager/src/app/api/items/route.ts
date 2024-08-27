import {
  createTableIfNotExists,
  deleteItem,
  getItems,
  insertItem,
} from "@/lib/dbutils";

export async function GET(request: Request) {
  await createTableIfNotExists();

  const data = await getItems();

  console.log("Data from DB:", data);

  return new Response(JSON.stringify(data));
}

export async function POST(request: Request) {
  const res: FridgeItem = await request.json();

  insertItem(res);

  return Response.json({ res, msg: "Item added" });
}
