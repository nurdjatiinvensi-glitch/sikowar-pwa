"use client";

import { userData } from "@/data/mockData";
import { ChevronDown, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function ProfileCard() {
  const [showAddress, setShowAddress] = useState(true);

  return (
    <div className="relative z-0 mx-0 mb-0 -mt-4 rounded-b-2xl bg-white shadow-lg px-4 pt-7 pb-3">
      <div className="mt-0 flex items-center gap-4">
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

          <div className="mt-1">
            <div className="flex items-center gap-2">
              <button
                className="
    flex
    min-w-0
    flex-1
    items-center
    justify-start
    gap-1
    text-sm
    text-gray-500
  "
              >
                <span className="min-w-0 flex-1  text-left truncate">
                  {showAddress
                    ? `${userData.rt}/${userData.rw} • ${userData.address} ${userData.blok}${userData.no}`
                    : `${userData.rt}/${userData.rw} • ***************`}
                </span>

                <ChevronDown size={15} />
              </button>

              <button
                onClick={() => setShowAddress(!showAddress)}
                className="
    shrink-0
    rounded-full
    p-2
    text-gray-500
    hover:bg-gray-100
  "
              >
                {showAddress ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
