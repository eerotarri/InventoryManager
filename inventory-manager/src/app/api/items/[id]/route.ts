import { deleteItem } from "@/lib/dbutils";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  console.log(`ID in route handler: ${id}`);

  deleteItem(id as string);

  return new Response("Item deleted");
}
