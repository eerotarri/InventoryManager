"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<FridgeItem>[] = [
  {
    accessorKey: "name",
    header: "Nimi",
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-right">Määrä</div>,
    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue("quantity"));
      return <div className="text-right font-medium">{quantity}</div>;
    },
  },
  {
    accessorKey: "suffix",
    header: "Yksikkö",
  },
  {
    accessorKey: "expirationdate",
    header: "Viimeinen käyttöpäivä",
  },
];
