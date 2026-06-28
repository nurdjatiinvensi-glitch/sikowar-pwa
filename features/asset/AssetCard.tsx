"use client";

import { Armchair, Presentation, Table2, Tent, Volume2 } from "lucide-react";

import { AssetItem } from "./types";

type Props = {
  item: AssetItem;
  onClick?: () => void;
};

function getIcon(name: string) {
  switch (name) {
    case "Tenda":
      return <Tent size={24} className="text-green-700" />;

    case "Kursi":
      return <Armchair size={24} className="text-blue-600" />;

    case "Meja":
      return <Table2 size={24} className="text-orange-600" />;

    case "Sound System":
      return <Volume2 size={24} className="text-purple-600" />;

    case "Proyektor":
      return <Presentation size={24} className="text-red-600" />;

    default:
      return null;
  }
}

export default function AssetCard({ item, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
        flex
        w-full
        items-center
        gap-4
        rounded-3xl
        bg-white
        p-5
        text-left
        shadow-sm
        transition
        hover:shadow-md
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-gray-100
        "
      >
        {getIcon(item.name)}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>

        <p className="text-sm text-gray-500">{item.category}</p>

        <p className="mt-2 text-xs text-gray-500">
          {item.available} / {item.total} tersedia
        </p>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          item.status === "available"
            ? "bg-green-100 text-green-700"
            : item.status === "borrowed"
              ? "bg-orange-100 text-orange-700"
              : "bg-gray-100 text-gray-700"
        }`}
      >
        {item.status === "available"
          ? "Tersedia"
          : item.status === "borrowed"
            ? "Dipinjam"
            : "Maintenance"}
      </span>
    </button>
  );
}
