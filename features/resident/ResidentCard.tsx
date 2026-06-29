"use client";

import { Home, Phone, User } from "lucide-react";

import { ResidentItem } from "./types";

type Props = {
  item: ResidentItem;
  onClick?: () => void;
};

export default function ResidentCard({ item, onClick }: Props) {
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
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-green-100
        "
      >
        <User size={28} className="text-green-700" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>

        <p className="mt-1 text-sm text-gray-500">{item.nik}</p>

        <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Home size={14} />
            {item.address}
          </span>

          <span className="flex items-center gap-1">
            <Phone size={14} />
            {item.phone}
          </span>
        </div>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          item.houseStatus === "owner"
            ? "bg-green-100 text-green-700"
            : "bg-blue-100 text-blue-700"
        }`}
      >
        {item.houseStatus === "owner" ? "Pemilik" : "Kontrak"}
      </span>
    </button>
  );
}
