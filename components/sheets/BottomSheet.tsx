"use client";

import { X } from "lucide-react";

type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function BottomSheet({
  open,
  onClose,
  title,
  children,
}: BottomSheetProps) {
  if (!open) return null;

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
          animate-in
          slide-in-from-bottom
          duration-300
        "
      >
        {/* Handle */}
        <div className="pt-3">
          <div className="mx-auto h-1.5 w-14 rounded-full bg-gray-300" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-bold">{title}</h2>

          <button
            onClick={onClose}
            className="
              rounded-full
              bg-gray-100
              p-2
              hover:bg-gray-200
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div
          className="
            max-h-[80dvh]
            overflow-y-auto
            p-6
          "
        >
          {children}
        </div>
      </div>
    </>
  );
}
