"use client";

import { ColumnDef } from "@tanstack/react-table";

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
  // {
  //   accessorKey: "expirationdate",
  //   header: () => <div className={`${HEADER_TEXT_COLOR}`}>Viim. käyttöpäivä</div>,
  // },
];
