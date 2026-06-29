"use client";

import { UserRound } from "lucide-react";

import { VisitorItem } from "./types";

type Props = {
  item: VisitorItem;
  onClick?: () => void;
};

export default function VisitorCard({ item, onClick }: Props) {
  const statusColor = {
    waiting: "bg-orange-100 text-orange-700",
    "checked-in": "bg-green-100 text-green-700",
    "checked-out": "bg-gray-100 text-gray-700",
  };

  const statusLabel = {
    waiting: "Menunggu",
    "checked-in": "Masuk",
    "checked-out": "Keluar",
  };

  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-3xl bg-white p-5 text-left shadow-sm transition hover:shadow-md"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
        <UserRound size={28} className="text-green-700" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold">{item.visitorName}</h3>

        <p className="text-sm text-gray-500">{item.destination}</p>

        <p className="mt-1 text-xs text-gray-400">{item.visitDate}</p>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor[item.status]}`}
      >
        {statusLabel[item.status]}
      </span>
    </button>
  );
}
