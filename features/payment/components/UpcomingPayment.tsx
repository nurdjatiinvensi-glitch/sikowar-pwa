"use client";

import { ChevronDown } from "lucide-react";

const upcoming = [
  {
    month: "September 2026",
    total: 200000,
  },
  {
    month: "Oktober 2026",
    total: 200000,
  },
  {
    month: "November 2026",
    total: 200000,
  },
];

export default function UpcomingPayment() {
  return (
    <div className="mt-8">
      <h2 className="mb-4 text-lg font-bold text-gray-800">
        Tagihan Mendatang
      </h2>

      <div className="space-y-3">
        {upcoming.map((item) => (
          <button
            key={item.month}
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              bg-white
              p-4
              shadow-sm
            "
          >
            <div>
              <p className="font-semibold">{item.month}</p>

              <p className="mt-1 text-sm text-gray-500">
                Rp {item.total.toLocaleString("id-ID")}
              </p>
            </div>

            <ChevronDown size={20} className="text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
}
