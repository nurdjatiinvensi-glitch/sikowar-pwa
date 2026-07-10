"use client";

import { menuData } from "@/features/menu";
import MenuItem from "@/features/menu/components/MenuItem";
import { Search, X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AllMenuSheet({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-40
          bg-black/40
        "
      />

      <div
        className="
    fixed
    inset-x-0
    bottom-0
    z-55

    mx-auto
    h-[92vh]
    w-full
    max-w-md

    rounded-t-4xl
    bg-white

    shadow-2xl
  "
      >
        <div className="flex h-full flex-col">
          {/* Handle */}
          <div className="pt-3">
            <div className="mx-auto h-1.5 w-14 rounded-full bg-gray-300" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
            <h2 className="text-2xl font-bold">Semua Menu</h2>

            <button
              onClick={onClose}
              className="
    flex
    h-9
    w-9
    items-center
    justify-center
    rounded-full
    bg-gray-100
    hover:bg-gray-200
    transition-all
    duration-200
    hover:scale-90
  "
            >
              <X size={20} />
            </button>
          </div>

          {/* Search */}
          <div className="px-6 py-4">
            <div
              className="
      flex
      items-center
      rounded-2xl
      bg-gray-100
      px-4
      py-3

      transition-all
      duration-200
      focus-within:ring-2
      focus-within:ring-green-500
    "
            >
              <Search size={20} className="mr-3 text-gray-400" />

              <input
                placeholder="Cari menu..."
                className="
        flex-1
        bg-transparent
        outline-none
        placeholder:text-gray-400
      "
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 pb-8">
            <div className="grid grid-cols-4 gap-y-7">
              {menuData.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
