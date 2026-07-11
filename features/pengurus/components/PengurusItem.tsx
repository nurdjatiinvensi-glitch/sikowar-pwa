"use client";

import type { PengurusItem as PengurusType } from "../types";

type Props = {
  item: PengurusType;
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

export default function PengurusItem({ item }: Props) {
  const colors = colorMap[item.color];

  const initial = item.name.charAt(0).toUpperCase();

  const handleWhatsapp = () => {
    window.open(`https://wa.me/${item.whatsapp}`, "_blank");
  };

  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-gray-100
        bg-white
        p-4
        shadow-sm
      "
    >
      <div className="flex items-center gap-4">
        <div
          className={`
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            text-xl
            font-bold
            ${colors.bg}
            ${colors.text}
          `}
        >
          {initial}
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">{item.name}</h3>

          <p className="text-sm text-gray-500">{item.position}</p>
        </div>
      </div>

      <button
        className="
          rounded-full
          bg-green-600
          px-4
          py-2
          text-sm
          font-medium
          text-white
          transition
          hover:bg-green-700
          active:scale-95
        "
        onClick={handleWhatsapp}
      >
        WA
      </button>
    </div>
  );
}
