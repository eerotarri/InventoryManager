"use client";

// import { ArticleForm } from "@/components/ui/article-form";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { unstable_noStore as noStore } from "next/cache";
import { getFridgeItemsController } from "@/lib/interface-adapters/controllers/fridge-items/get-fridge-items.controller";
import Form from "./_components/form";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { FridgeItem } from "@/lib/entities/models/fridge-item";

const client = new QueryClient();

async function getFridgeItems() {
  return fetch("/api/items", { cache: "no-store" }).then((res) => res.json());
}

export default function Inventory() {
  noStore();

  const queryClient = useQueryClient(client);

  const query = useQuery(
    {
      queryKey: ["fridgeItems"],
      queryFn: getFridgeItems,
    },
    queryClient
  );

  console.log("query: ", query?.data);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-start justify-items-center px-3 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Form />
        {query && query.data ? (
          <DataTable columns={columns} data={query.data} />
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}
