"use client";

import DashboardItem from "@/features/dashboard/components/DashboardItem";
import { dashboardItems } from "@/features/dashboard/dashboardData";
import { ChevronRight } from "lucide-react";

export default function DashboardCard() {
  return (
    <div
      className="
        mt-2
        w-full
        rounded-4xl
        border-2
        border-green-600
        bg-white
        px-2
        py-4
        shadow-lg
      "
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between px-2">
        <h2 className="text-xl font-bold text-gray-900">Ringkasan Anda</h2>

        <button className="flex items-center gap-1 text-sm font-medium text-green-700">
          Lihat Semua
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-2">
        {dashboardItems.map((item) => (
          <DashboardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
