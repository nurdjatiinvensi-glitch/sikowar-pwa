"use client";

import BottomSheet from "@/components/sheets/BottomSheet";
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
  if (!item) return null;

  const colors = colorMap[item.color];
  const initial = item.name.charAt(0).toUpperCase();

  return (
    <BottomSheet open={open} onClose={onClose} title="Detail Pengurus">
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

          <p className="mt-1 font-medium text-green-700">{item.position}</p>

          <div className="mt-5 space-y-2">
            <p className="text-sm text-gray-500">📱 {item.whatsapp}</p>

            <p className="text-sm text-gray-500">
              Status :{item.isActive ? " Aktif" : " Tidak Aktif"}
            </p>
          </div>
        </div>
      </div>
    </BottomSheet>
  );
}
