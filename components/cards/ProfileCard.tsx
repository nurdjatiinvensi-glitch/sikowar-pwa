"use client";

import { userData } from "@/data/mockData";
import { ChevronDown } from "lucide-react";

export default function ProfileCard() {
  return (
    <div
      className="relative z-0 mx-4 mb-5 -mt-10 rounded-b-[40px] bg-white shadow-lg p-4"
      style={{
        transform: "translateY(-35px)",
      }}
    >
      <div className="mt-6 flex items-center gap-2">
        {/* Avatar */}
        <div
          className="
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-green-100
            text-2xl
            font-bold
            text-green-700
          "
        >
          {userData.name.charAt(0)}
        </div>

        {/* User */}
        <div className="min-w-0 flex-1">
          <p className="text-base text-gray-500">Selamat Pagi,</p>

          <h2 className="truncate text-2xl font-bold text-gray-900">
            {userData.name}
          </h2>

          <button
            className="
              mt-1
              flex
              items-center
              gap-1
              text-sm
              text-gray-500
            "
          >
            <span className="truncate">
              {userData.rt}/{userData.rw} • {userData.address} {userData.blok}
              {userData.no}
            </span>

            <ChevronDown size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
