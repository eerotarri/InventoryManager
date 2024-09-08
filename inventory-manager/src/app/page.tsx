// import { ArticleForm } from "@/components/ui/article-form";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { unstable_noStore } from "next/cache";
import { getFridgeItemsController } from "@/lib/interface-adapters/controllers/fridge-items/get-fridge-items.controller";
import Form from "./_components/form";

async function getFridgeItems() {
  return await getFridgeItemsController();
}

export default async function Home() {
  // Prevent the page from being cached
  unstable_noStore();

  // Fetch the fridge items
  const items = await getFridgeItems();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-center py-3 px-3 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Form />
        <DataTable columns={columns} data={items} />
      </main>
    </div>
  );
}
