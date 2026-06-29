"use client";

import { MessageSquareWarning } from "lucide-react";

import { ComplaintItem } from "./types";

type Props = {
  item: ComplaintItem;
  onClick?: () => void;
};

export default function ComplaintCard({ item, onClick }: Props) {
  const color = {
    new: "bg-red-100 text-red-700",
    process: "bg-orange-100 text-orange-700",
    done: "bg-green-100 text-green-700",
  };

  const label = {
    new: "Baru",
    process: "Diproses",
    done: "Selesai",
  };

  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-3xl bg-white p-5 text-left shadow-sm transition hover:shadow-md"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
        <MessageSquareWarning size={28} className="text-red-600" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold">{item.title}</h3>

        <p className="text-sm text-gray-500">{item.category}</p>

        <p className="mt-1 text-xs text-gray-400">{item.date}</p>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${color[item.status]}`}
      >
        {label[item.status]}
      </span>
    </button>
  );
}
