"use client";

import { X } from "lucide-react";
import type { PengurusItem } from "../types";

type Props = {
  open: boolean;
  item: PengurusItem | null;
  onClose: () => void;
};

const colorMap = {
  green: {
    bg: "bg-green-100",
    text: "text-green-700",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-700",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-700",
  },
} as const;

export default function PengurusDetailSheet({ open, item, onClose }: Props) {
  if (!open || !item) return null;

  const colors = colorMap[item.color];

  const initial = item.name.charAt(0).toUpperCase();

  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} className="fixed inset-0 z-40 bg-black/40" />

      {/* Sheet */}
      <div
        className="
          fixed
          inset-x-0
          bottom-0
          z-50
          mx-auto
          w-full
          max-w-md
          rounded-t-4xl
          bg-white
          shadow-2xl
        "
      >
        {/* Handle */}
        <div className="pt-3">
          <div className="mx-auto h-1.5 w-14 rounded-full bg-gray-300" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-end px-6 pt-3">
          <button onClick={onClose} className="rounded-full bg-gray-100 p-2">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-8">
          <div className="flex gap-5">
            {/* Avatar */}
            <div
              className={`
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                text-4xl
                font-bold
                ${colors.bg}
                ${colors.text}
              `}
            >
              {initial}
            </div>

            {/* Detail */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{item.name}</h2>

              <p className="mt-1 text-green-700 font-medium">{item.position}</p>

              <div className="mt-5 space-y-2">
                <p className="text-sm text-gray-500">📱 {item.whatsapp}</p>

                <p className="text-sm text-gray-500">
                  Status :{item.isActive ? " Aktif" : " Tidak Aktif"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
