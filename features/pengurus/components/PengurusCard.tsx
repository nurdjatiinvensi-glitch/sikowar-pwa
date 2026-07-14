"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { pengurusData } from "../data";
import PengurusItem from "./PengurusItem";

export default function PengurusCard() {
  return (
    <div
      className="
        mt-5
        rounded-3xl
        bg-white
        p-5
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800">Pengurus RT</h3>

        <Link
          href="/pengurus"
          className="flex items-center gap-1 text-sm text-green-600"
        >
          Lihat Semua
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* Horizontal List */}
      <div
        className="
          flex
          gap-5
          overflow-x-auto
          pb-2
          scrollbar-hide
        "
      >
        {pengurusData.map((item) => (
          <PengurusItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
