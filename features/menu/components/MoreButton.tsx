"use client";

import { Grid2x2 } from "lucide-react";
import { useState } from "react";

import AllMenuSheet from "@/components/sheets/AllMenuSheet";

export default function MoreButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex flex-col items-center"
      >
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-gray-100
          "
        >
          <Grid2x2 size={24} className="text-gray-700" />
        </div>

        <p className="mt-2 text-sm font-medium">Lainnya</p>
      </button>

      <AllMenuSheet open={open} onClose={() => setOpen(false)} />
    </>
  );
}
