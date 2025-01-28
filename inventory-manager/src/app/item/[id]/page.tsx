import { notFound } from "next/navigation";
import { FridgeItem } from "@/lib/entities/models/fridge-item";
import UpdateForm from "./update-form";
import { getFridgeItemController } from "@/lib/interface-adapters/controllers/fridge-items/get-fridge-item.controller";

// This is a mock function. Replace it with your actual data fetching logic.
async function getFridgeItem(id: string): Promise<FridgeItem | null> {
  return getFridgeItemController(id);
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const fridgeItem = await getFridgeItem(id);

  if (!fridgeItem) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <UpdateForm initialData={fridgeItem} />
    </div>
  );
}
