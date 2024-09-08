"use client";

import { Button } from "@/components/ui/button";
import { FridgeItem } from "@/lib/entities/models/fridge-item";
import { deleteFridgeItemController } from "@/lib/interface-adapters/controllers/fridge-items/delete-fridge-item.controller";
import { ColumnDef } from "@tanstack/react-table";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { deleteFridgeItemAction } from "../actions";

const HEADER_TEXT_COLOR = "text-slate-700";

export const columns: ColumnDef<FridgeItem>[] = [
  {
    accessorKey: "name",
    header: () => <div className={`${HEADER_TEXT_COLOR}`}>Nimi</div>,
  },
  {
    accessorKey: "quantity",
    header: () => (
      <div className={`text-right ${HEADER_TEXT_COLOR}`}>Määrä</div>
    ),
    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue("quantity"));
      return <div className="text-right font-medium">{quantity}</div>;
    },
  },
  {
    accessorKey: "suffix",
    header: () => <div className={`${HEADER_TEXT_COLOR}`}>Yksikkö</div>,
  },
  {
    accessorKey: "delete",
    cell: ({ row }) => {
      return (
        <form action={deleteFridgeItemAction}>
          {/* This is a hidden input field to send the id to the server */}
          <input type="hidden" name="id" value={row.original.id} />
          <Button variant="destructive">DEL</Button>
        </form>
      );
    },
  },
];
