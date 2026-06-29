"use client";

import { Home, Users } from "lucide-react";

import { HouseItem } from "./types";

type Props = {
  item: HouseItem;
  onClick?: () => void;
};

export default function HouseCard({ item, onClick }: Props) {
  const status = {
    owner: {
      label: "Owner",
      color: "bg-green-100 text-green-700",
    },

    tenant: {
      label: "Sewa",
      color: "bg-blue-100 text-blue-700",
    },

    vacant: {
      label: "Kosong",
      color: "bg-gray-100 text-gray-700",
    },
  };

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
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
        <Home size={28} className="text-green-700" />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold">{item.houseCode}</h3>

        <p className="text-sm text-gray-500">{item.address}</p>

        <p className="mt-2 text-xs text-gray-500">Owner : {item.ownerName}</p>

        <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
          <Users size={14} />
          {item.residentCount} Penghuni
        </div>
      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${status[item.occupancyStatus].color}`}
      >
        {status[item.occupancyStatus].label}
      </span>
    </button>
  );
}
