import { notFound } from "next/navigation";
import { FridgeItem } from "@/lib/entities/models/fridge-item";
import UpdateForm from "./update-form";

// This is a mock function. Replace it with your actual data fetching logic.
async function getFridgeItem(id: string) {
  // Simulating an API call
  const item: FridgeItem = {
    id,
    name: "Milk",
    quantity: 2,
    suffix: "l",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return item;
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const fridgeItem: FridgeItem = await getFridgeItem(id);

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
