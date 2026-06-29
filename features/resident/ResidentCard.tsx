"use client";

import { User } from "lucide-react";

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
        <h3 className="font-semibold">{item.fullName}</h3>

        <p className="text-sm text-gray-500">{item.nik}</p>

        <p className="mt-2 text-xs text-gray-500">{item.phone}</p>
      </div>

      <div className="text-right">
        <span
          className="
      rounded-full
      bg-green-100
      px-3
      py-1
      text-xs
      text-green-700
    "
        >
          {item.houseRole}
        </span>

        <p className="mt-2 text-xs text-gray-500">{item.relationship}</p>
      </div>
    </button>
  );
}
