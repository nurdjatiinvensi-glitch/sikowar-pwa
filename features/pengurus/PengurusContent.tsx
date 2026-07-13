"use client";

import { pengurusData } from "./data";
import type { PengurusItem } from "./types";

import PengurusItemCard from "./components/PengurusItem";

type Props = {
  onItemClick?: (item: PengurusItem) => void;
};

export default function PengurusContent({ onItemClick }: Props) {
  return (
    <div className="space-y-4">
      {pengurusData.map((item) => (
        <div
          key={item.id}
          onClick={() => onItemClick?.(item)}
          className="cursor-pointer"
        >
          <PengurusItemCard item={item} />
        </div>
      ))}
    </div>
  );
}
