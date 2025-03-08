// import { ArticleForm } from "@/components/ui/article-form";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { getFridgeItemsController } from "@/lib/interface-adapters/controllers/fridge-items/get-fridge-items.controller";
import { connection } from "next/server";
import CollapsibleForm from "./_components/collapsible-form";

async function getFridgeItems() {
  return await getFridgeItemsController();
}

export default async function Home() {
  // Ensure dynamic rendering to handle incoming user requests.
  // This prevents the page from being statically rendered by default.
  await connection();

  const items = await getFridgeItems();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-center px-3 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CollapsibleForm />
        <DataTable columns={columns} data={items} />
      </main>
    </div>
  );
}
