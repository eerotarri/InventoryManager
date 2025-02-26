import { notFound } from "next/navigation";
import { FridgeItem } from "@/lib/entities/models/fridge-item";
import UpdateForm from "./update-form";
import { getFridgeItemController } from "@/lib/interface-adapters/controllers/fridge-items/get-fridge-item.controller";
import { getFridgeItemsController } from "@/lib/interface-adapters/controllers/fridge-items/get-fridge-items.controller";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 minutes.
export const revalidate = 3600; // 1 hour

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true;

// Pre-generate all known paths for the fridge items.
export async function generateStaticParams() {
  const items: FridgeItem[] = await getFridgeItemsController();
  return items.map((item) => ({ params: { id: item.id } }));
}
 
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
