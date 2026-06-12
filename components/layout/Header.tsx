"use client";

import { userData } from "@/data/mockData";
import { Bell, Eye, EyeOff, House, Search } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [showAddress, setShowAddress] = useState(true);

  return (
    <div className=" relative overflow-hidden px-6 pt-6 pb-24">
      {/* Background Decoration */}
      <House
        size={240}
        className="absolute -bottom-10 -right-1 opacity-5 text-green-700"
      />

      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-green-800">SiKoWar</h1>

        <div className="flex gap-3">
          <button
            className="
              flex h-12 w-12 items-center justify-center
              rounded-2xl bg-white shadow-md
            "
          >
            <Search size={20} />
          </button>

          <button
            className="
              relative
              flex h-12 w-12 items-center justify-center
              rounded-2xl bg-white shadow-md
            "
          >
            <Bell size={20} />

            {/* Badge */}
            <span
              className="
                absolute
                right-3
                top-3
                h-2 w-2
                rounded-full
                bg-red-500
              "
            />
          </button>
        </div>
      </div>

      {/* Greeting */}
      <div className="mt-6 flex items-start gap-4">
        <div
          className="
            flex h-12 w-12 items-center justify-center
            rounded-full bg-white shadow-md
            text-2xl
          "
        >
          👤
        </div>

        <div>
          <p className="text-xl font-bold text-gray-900">
            Halo, {userData.name}
          </p>

          <button
            onClick={() => setShowAddress(!showAddress)}
            className="
              mt-1 flex items-center gap-1
              text-xs text-gray-500 hover:text-blue-700
          "
          >
            {showAddress ? <EyeOff size={16} /> : <Eye size={16} />}
            {showAddress ? "Sembunyikan Alamat" : "Tampilkan Alamat"}
          </button>

          {showAddress && (
            <div className="text-gray-500">
              <p>
                {userData.address} {userData.blok}
                {userData.no},
              </p>
              <p>
                {userData.jalan}, {userData.rt}/{userData.rw},
              </p>
              <p>
                {userData.kelurahan}, {userData.kecamatan},{userData.city},{" "}
                {userData.province}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
