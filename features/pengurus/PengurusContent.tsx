"use client";

import { useState } from "react";

import { pengurusData } from "./data";
import type { PengurusItem } from "./types";

import PengurusDetailSheet from "./components/PengurusDetailSheet";
import PengurusItemCard from "./components/PengurusItem";

export default function PengurusContent() {
  const [selectedPengurus, setSelectedPengurus] = useState<PengurusItem | null>(
    null,
  );

  return (
    <>
      <div className="space-y-4">
        {pengurusData.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedPengurus(item)}
            className="cursor-pointer"
          >
            <PengurusItemCard item={item} />
          </div>
        ))}
      </div>

      <PengurusDetailSheet
        open={selectedPengurus !== null}
        item={selectedPengurus}
        onClose={() => setSelectedPengurus(null)}
      />
    </>
  );
}
