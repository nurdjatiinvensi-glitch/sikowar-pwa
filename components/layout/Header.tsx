"use client";

import NotificationButton from "@/features/notification/components/NotificationButton";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <div
      className="px-4 pb-8"
      style={{
        paddingTop: "30px",
      }}
    >
      {/* Top Bar */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-white
            shadow-md
          "
        >
          <span className="text-lg font-bold text-green-700">SK</span>
        </div>

        {/* Search */}
        <button
          className="
            flex
            h-12
            flex-1
            items-center
            gap-3
            rounded-2xl
            bg-white
            px-4
            text-gray-400
            shadow-md
          "
        >
          <Search size={18} />

          <span className="text-sm">Cari menu, info, warga...</span>
        </button>

        {/* Notification */}
        <NotificationButton />
      </div>
    </div>
  );
}
